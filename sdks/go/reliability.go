package paystack

import (
	"bytes"
	"context"
	"crypto/rand"
	"encoding/hex"
	"errors"
	"io"
	"math"
	"net"
	"net/http"
	"strconv"
	"strings"
	"time"
)

var DefaultRequestIDHeaders = []string{"x-paystack-request-id", "x-request-id"}

func GetPaystackRequestID(headers http.Header) string {
	for _, name := range DefaultRequestIDHeaders {
		if v := strings.TrimSpace(headers.Get(name)); v != "" {
			return v
		}
	}
	return ""
}

type PaystackApiError struct {
	StatusCode int
	Status     string
	URL        string
	RequestID  string
	Body       []byte
	Err        error
}

func (e *PaystackApiError) Error() string {
	if e == nil {
		return "<nil>"
	}

	parts := []string{"Paystack API request failed"}
	if e.StatusCode != 0 {
		parts = append(parts, "status "+strconv.Itoa(e.StatusCode))
	} else if e.Status != "" {
		parts = append(parts, e.Status)
	}
	if e.RequestID != "" {
		parts = append(parts, "requestId: "+e.RequestID)
	}
	if e.URL != "" {
		parts = append(parts, "url: "+e.URL)
	}
	if e.Err != nil {
		parts = append(parts, "error: "+e.Err.Error())
	}

	return strings.Join(parts, " (") + strings.Repeat(")", len(parts)-1)
}

func (e *PaystackApiError) Unwrap() error { return e.Err }

func ToPaystackApiError(resp *http.Response, err error) *PaystackApiError {
	if err == nil {
		return nil
	}

	out := &PaystackApiError{Err: err}

	if resp != nil {
		out.StatusCode = resp.StatusCode
		out.Status = resp.Status
		out.RequestID = GetPaystackRequestID(resp.Header)
		if resp.Request != nil && resp.Request.URL != nil {
			out.URL = resp.Request.URL.String()
		}
	}

	var generic *GenericOpenAPIError
	if errors.As(err, &generic) {
		body := generic.Body()
		if len(body) > 0 {
			out.Body = append([]byte(nil), body...)
		}
		if out.Status == "" {
			out.Status = generic.Error()
		}
	}

	return out
}

type RetryOptions struct {
	Retries         int
	MinDelay        time.Duration
	MaxDelay        time.Duration
	RetryOnStatuses []int
	RetryOnMethods  []string
}

func DefaultRetryOptions() RetryOptions {
	return RetryOptions{
		Retries:         2,
		MinDelay:        250 * time.Millisecond,
		MaxDelay:        2 * time.Second,
		RetryOnStatuses: []int{408, 429, 500, 502, 503, 504},
		RetryOnMethods:  []string{"GET", "HEAD", "OPTIONS"},
	}
}

type IdempotencyOptions struct {
	Enabled bool
	Header  string
	KeyFunc func() string
}

func DefaultIdempotencyOptions() IdempotencyOptions {
	return IdempotencyOptions{
		Enabled: false,
		Header:  "Idempotency-Key",
		KeyFunc: CreateIdempotencyKey,
	}
}

func CreateIdempotencyKey() string {
	b := make([]byte, 16)
	if _, err := rand.Read(b); err == nil {
		return hex.EncodeToString(b)
	}
	// fallback
	return strconv.FormatInt(time.Now().UnixNano(), 10)
}

type ReliabilityOptions struct {
	Timeout     time.Duration
	Retry       RetryOptions
	Idempotency IdempotencyOptions
}

func DefaultReliabilityOptions() ReliabilityOptions {
	return ReliabilityOptions{
		Timeout:     0,
		Retry:       DefaultRetryOptions(),
		Idempotency: DefaultIdempotencyOptions(),
	}
}

// NewAPIClientWithReliability constructs an APIClient and a context containing the access token.
// It also configures timeouts, safe retries, and optional idempotency-key injection for POST requests.
func NewAPIClientWithReliability(secretKey string, opts ReliabilityOptions) (*APIClient, context.Context) {
	cfg := NewConfiguration()

	baseTransport := http.DefaultTransport
	cfg.HTTPClient = &http.Client{
		Timeout:   opts.Timeout,
		Transport: NewRetryTransport(baseTransport, opts),
	}

	client := NewAPIClient(cfg)
	ctx := context.WithValue(context.Background(), ContextAccessToken, secretKey)
	return client, ctx
}

type retryTransport struct {
	base http.RoundTripper
	opts ReliabilityOptions

	retryOnStatus map[int]struct{}
	retryOnMethod map[string]struct{}
}

func NewRetryTransport(base http.RoundTripper, opts ReliabilityOptions) http.RoundTripper {
	if base == nil {
		base = http.DefaultTransport
	}

	ro := opts.Retry
	statusSet := make(map[int]struct{}, len(ro.RetryOnStatuses))
	for _, s := range ro.RetryOnStatuses {
		statusSet[s] = struct{}{}
	}

	methodSet := make(map[string]struct{}, len(ro.RetryOnMethods))
	for _, m := range ro.RetryOnMethods {
		methodSet[strings.ToUpper(m)] = struct{}{}
	}

	return &retryTransport{
		base:          base,
		opts:          opts,
		retryOnStatus: statusSet,
		retryOnMethod: methodSet,
	}
}

func (t *retryTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	if req == nil {
		return nil, errors.New("nil request")
	}

	method := strings.ToUpper(req.Method)
	canRetryByMethod := t.opts.Retry.Retries > 0
	_, methodAllowed := t.retryOnMethod[method]
	canRetryByMethod = canRetryByMethod && methodAllowed

	idempotencyHeader := t.opts.Idempotency.Header
	if idempotencyHeader == "" {
		idempotencyHeader = "Idempotency-Key"
	}

	// Buffer body once so we can resend on retries.
	var bodyBytes []byte
	if req.Body != nil {
		b, err := io.ReadAll(req.Body)
		_ = req.Body.Close()
		if err != nil {
			return nil, err
		}
		bodyBytes = b
	}

	ensureBody := func(r *http.Request) {
		if bodyBytes == nil {
			r.Body = nil
			return
		}
		r.Body = io.NopCloser(bytes.NewReader(bodyBytes))
		r.ContentLength = int64(len(bodyBytes))
		// Let redirects / replays reconstruct the body too.
		r.GetBody = func() (io.ReadCloser, error) {
			return io.NopCloser(bytes.NewReader(bodyBytes)), nil
		}
	}

	applyIdempotency := func(r *http.Request) (key string) {
		if !t.opts.Idempotency.Enabled {
			return ""
		}
		if strings.ToUpper(r.Method) != "POST" {
			return ""
		}
		if r.Header.Get(idempotencyHeader) != "" {
			return r.Header.Get(idempotencyHeader)
		}
		kf := t.opts.Idempotency.KeyFunc
		if kf == nil {
			kf = CreateIdempotencyKey
		}
		key = kf()
		if key != "" {
			r.Header.Set(idempotencyHeader, key)
		}
		return key
	}

	// Allow POST retries only when idempotency key exists (or will be injected).
	canRetryByIdempotency := false
	if t.opts.Retry.Retries > 0 && method == "POST" {
		// We'll inject key on each attempt if enabled.
		canRetryByIdempotency = t.opts.Idempotency.Enabled || req.Header.Get(idempotencyHeader) != ""
	}

	canRetry := canRetryByMethod || canRetryByIdempotency

	var lastErr error
	for attempt := 0; attempt <= (func() int {
		if canRetry {
			return t.opts.Retry.Retries
		}
		return 0
	}()); attempt++ {
		attemptReq := req.Clone(req.Context())
		attemptReq.Header = req.Header.Clone()
		ensureBody(attemptReq)
		applyIdempotency(attemptReq)

		resp, err := t.base.RoundTrip(attemptReq)
		if err != nil {
			lastErr = err
			if !canRetry || attempt >= t.opts.Retry.Retries || !isRetryableNetworkError(err) {
				return nil, err
			}
			t.sleepBackoff(attempt, 0)
			continue
		}

		if resp == nil {
			if !canRetry || attempt >= t.opts.Retry.Retries {
				return nil, err
			}
			t.sleepBackoff(attempt, 0)
			continue
		}

		if !canRetry {
			return resp, nil
		}

		_, retryStatus := t.retryOnStatus[resp.StatusCode]
		if !retryStatus {
			return resp, nil
		}

		if attempt >= t.opts.Retry.Retries {
			return resp, nil
		}

		retryAfterMs := parseRetryAfterMs(resp)
		// Drain response body before retry.
		_, _ = io.Copy(io.Discard, resp.Body)
		_ = resp.Body.Close()

		t.sleepBackoff(attempt, retryAfterMs)
	}

	if lastErr != nil {
		return nil, lastErr
	}
	return nil, errors.New("request failed")
}

func isRetryableNetworkError(err error) bool {
	var netErr net.Error
	if errors.As(err, &netErr) {
		return true
	}
	// Cover common transient cases.
	msg := strings.ToLower(err.Error())
	if strings.Contains(msg, "timeout") || strings.Contains(msg, "tempor") || strings.Contains(msg, "reset") {
		return true
	}
	return false
}

func parseRetryAfterMs(resp *http.Response) int64 {
	if resp == nil {
		return 0
	}
	v := strings.TrimSpace(resp.Header.Get("retry-after"))
	if v == "" {
		return 0
	}
	if seconds, err := strconv.ParseInt(v, 10, 64); err == nil && seconds >= 0 {
		return seconds * 1000
	}
	if when, err := http.ParseTime(v); err == nil {
		d := time.Until(when)
		if d < 0 {
			return 0
		}
		return d.Milliseconds()
	}
	return 0
}

func (t *retryTransport) sleepBackoff(attempt int, retryAfterMs int64) {
	minDelay := t.opts.Retry.MinDelay
	maxDelay := t.opts.Retry.MaxDelay
	if minDelay <= 0 {
		minDelay = 250 * time.Millisecond
	}
	if maxDelay <= 0 {
		maxDelay = 2 * time.Second
	}

	base := float64(minDelay) * math.Pow(2, float64(attempt))
	base = math.Min(base, float64(maxDelay))
	jitter := 0.5 + randomFloat64()
	delay := time.Duration(base * jitter)

	if retryAfterMs > 0 {
		ra := time.Duration(retryAfterMs) * time.Millisecond
		if ra > delay {
			delay = ra
		}
	}
	if delay > maxDelay {
		delay = maxDelay
	}

	time.Sleep(delay)
}

func randomFloat64() float64 {
	b := make([]byte, 8)
	if _, err := rand.Read(b); err != nil {
		return 0.5
	}
	// Convert to [0,1)
	n := uint64(0)
	for _, v := range b {
		n = (n << 8) | uint64(v)
	}
	return float64(n) / float64(^uint64(0))
}
