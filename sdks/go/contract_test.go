package paystack

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"testing"
)

type contractFixtures struct {
	SecretKey string `json:"secretKey"`
	RequestID string `json:"requestId"`
	TransactionInitialize struct {
		Request struct {
			Email  string `json:"email"`
			Amount int32  `json:"amount"`
		} `json:"request"`
		Response map[string]interface{} `json:"response"`
	} `json:"transactionInitialize"`
	TransactionList struct {
		Query    map[string]string      `json:"query"`
		Response map[string]interface{} `json:"response"`
	} `json:"transactionList"`
}

func loadContractFixtures(t *testing.T) contractFixtures {
	t.Helper()

	contents, err := os.ReadFile(filepath.Join("..", "contract-fixtures", "paystack.json"))
	if err != nil {
		t.Fatalf("read contract fixtures: %v", err)
	}

	var fixtures contractFixtures
	if err := json.Unmarshal(contents, &fixtures); err != nil {
		t.Fatalf("parse contract fixtures: %v", err)
	}
	return fixtures
}

func TestContractTransactionInitialize(t *testing.T) {
	fixtures := loadContractFixtures(t)

	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/transaction/initialize" {
			t.Fatalf("unexpected path: %s", r.URL.Path)
		}
		if r.Method != http.MethodPost {
			t.Fatalf("unexpected method: %s", r.Method)
		}
		if got := r.Header.Get("Authorization"); got != "Bearer "+fixtures.SecretKey {
			t.Fatalf("unexpected authorization header: %s", got)
		}
		if got := r.Header.Get("Idempotency-Key"); got == "" {
			t.Fatal("missing idempotency key")
		}

		var body map[string]interface{}
		if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
			t.Fatalf("decode request body: %v", err)
		}
		if body["email"] != fixtures.TransactionInitialize.Request.Email {
			t.Fatalf("unexpected email: %v", body["email"])
		}
		if body["amount"] != float64(fixtures.TransactionInitialize.Request.Amount) {
			t.Fatalf("unexpected amount: %v", body["amount"])
		}

		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("X-Paystack-Request-Id", fixtures.RequestID)
		_ = json.NewEncoder(w).Encode(fixtures.TransactionInitialize.Response)
	}))
	defer server.Close()

	opts := DefaultReliabilityOptions()
	opts.Idempotency.Enabled = true
	client, ctx := NewAPIClientWithReliability(fixtures.SecretKey, opts)
	client.cfg.Servers[0].URL = server.URL

	amount := fixtures.TransactionInitialize.Request.Amount
	payload := NewTransactionInitialize(
		fixtures.TransactionInitialize.Request.Email,
		Int32AsTransactionInitializeAmount(&amount),
	)

	resp, httpResp, err := client.TransactionAPI.Initialize(ctx).TransactionInitialize(*payload).Execute()
	if err != nil {
		t.Fatalf("initialize request failed: %v", err)
	}
	if httpResp.StatusCode != http.StatusOK {
		t.Fatalf("unexpected status: %d", httpResp.StatusCode)
	}
	if resp.GetStatus() != true {
		t.Fatal("expected successful Paystack envelope")
	}
}

func TestContractOptionalLiveSmokeSkippedByDefault(t *testing.T) {
	if os.Getenv("PAYSTACK_SECRET_KEY") == "" {
		t.Skip("PAYSTACK_SECRET_KEY is not set; skipping optional live smoke test")
	}

	cfg := NewConfiguration()
	client := NewAPIClient(cfg)
	ctx := context.WithValue(context.Background(), ContextAccessToken, os.Getenv("PAYSTACK_SECRET_KEY"))

	_, httpResp, err := client.TransactionAPI.List(ctx).Execute()
	if err != nil {
		t.Fatalf("live transaction list failed: %v", err)
	}
	if httpResp.StatusCode < 200 || httpResp.StatusCode >= 300 {
		t.Fatalf("unexpected live status: %d", httpResp.StatusCode)
	}
}
