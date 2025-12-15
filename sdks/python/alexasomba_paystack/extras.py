from __future__ import annotations

import secrets
import time
from dataclasses import dataclass, field
from typing import Any, Callable, Iterable, Optional, Sequence, Tuple, TypeVar

import urllib3

from alexasomba_paystack.api_client import ApiClient
from alexasomba_paystack.configuration import Configuration
from alexasomba_paystack.exceptions import ApiException

DEFAULT_REQUEST_ID_HEADERS: Tuple[str, ...] = (
    "x-paystack-request-id",
    "x-request-id",
)

DEFAULT_IDEMPOTENCY_HEADER = "Idempotency-Key"


def create_idempotency_key() -> str:
    return secrets.token_hex(16)


def get_paystack_request_id(headers: Any) -> Optional[str]:
    if not headers:
        return None

    # urllib3 uses HTTPHeaderDict, but it behaves like a mapping.
    for name in DEFAULT_REQUEST_ID_HEADERS:
        try:
            value = headers.get(name)  # type: ignore[attr-defined]
        except Exception:
            value = None
        if value:
            v = str(value).strip()
            if v:
                return v
    return None


class PaystackApiError(RuntimeError):
    def __init__(
        self,
        message: str,
        *,
        status: Optional[int] = None,
        url: Optional[str] = None,
        request_id: Optional[str] = None,
        error: Optional[BaseException] = None,
        body: Optional[str] = None,
        data: Any = None,
        headers: Any = None,
    ) -> None:
        super().__init__(message)
        self.status = status
        self.url = url
        self.request_id = request_id
        self.error = error
        self.body = body
        self.data = data
        self.headers = headers


def to_paystack_api_error(exc: BaseException, *, url: Optional[str] = None) -> PaystackApiError:
    if isinstance(exc, PaystackApiError):
        return exc

    status = None
    body = None
    data = None
    headers = None
    request_id = None

    if isinstance(exc, ApiException):
        status = getattr(exc, "status", None)
        body = getattr(exc, "body", None)
        data = getattr(exc, "data", None)
        headers = getattr(exc, "headers", None)
        request_id = get_paystack_request_id(headers)

    suffix = f" (requestId: {request_id})" if request_id else ""
    status_part = f" with status {status}" if status else ""
    return PaystackApiError(
        f"Paystack API request failed{status_part}{suffix}",
        status=status,
        url=url,
        request_id=request_id,
        error=exc,
        body=body,
        data=data,
        headers=headers,
    )


@dataclass
class RetryOptions:
    retries: int = 2
    min_delay_seconds: float = 0.25
    max_delay_seconds: float = 2.0
    retry_on_statuses: Sequence[int] = (408, 429, 500, 502, 503, 504)
    retry_on_methods: Sequence[str] = ("GET", "HEAD", "OPTIONS")


@dataclass
class ReliabilityOptions:
    timeout_seconds: Optional[float] = None
    retry: RetryOptions = field(default_factory=RetryOptions)
    idempotency_enabled: bool = False
    idempotency_header: str = DEFAULT_IDEMPOTENCY_HEADER
    idempotency_key: Optional[str] = None
    idempotency_auto: bool = True


class ReliableApiClient(ApiClient):
    def __init__(
        self,
        configuration: Optional[Configuration] = None,
        *,
        reliability: Optional[ReliabilityOptions] = None,
    ) -> None:
        super().__init__(configuration=configuration)
        self._reliability = reliability or ReliabilityOptions()

    def call_api(
        self,
        method,
        url,
        header_params=None,
        body=None,
        post_params=None,
        _request_timeout=None,
    ):
        reliability = self._reliability
        header_params = header_params or {}

        try:
            m = str(method).upper()
            if reliability.idempotency_enabled and m == "POST":
                header_name = reliability.idempotency_header or DEFAULT_IDEMPOTENCY_HEADER
                if header_name not in header_params and header_name.lower() not in {k.lower() for k in header_params.keys()}:
                    key = reliability.idempotency_key
                    if not key and reliability.idempotency_auto:
                        key = create_idempotency_key()
                    if key:
                        header_params[header_name] = key

            if _request_timeout is None and reliability.timeout_seconds is not None:
                _request_timeout = reliability.timeout_seconds

            return super().call_api(
                method,
                url,
                header_params=header_params,
                body=body,
                post_params=post_params,
                _request_timeout=_request_timeout,
            )
        except ApiException as e:
            raise to_paystack_api_error(e, url=url) from e


def create_retry(
    *,
    retries: int = 2,
    retry_on_statuses: Iterable[int] = (408, 429, 500, 502, 503, 504),
    retry_on_methods: Iterable[str] = ("GET", "HEAD", "OPTIONS"),
    backoff_factor: float = 0.25,
    respect_retry_after_header: bool = True,
) -> urllib3.Retry:
    # urllib3 handles backoff internally; use it for safe defaults.
    return urllib3.Retry(
        total=retries,
        status=retries,
        connect=retries,
        read=retries,
        backoff_factor=backoff_factor,
        status_forcelist=tuple(retry_on_statuses),
        allowed_methods=frozenset({m.upper() for m in retry_on_methods}),
        respect_retry_after_header=respect_retry_after_header,
        raise_on_status=False,
    )


def create_configuration(
    secret_key: str,
    *,
    base_url: str = "https://api.paystack.co",
    timeout_seconds: Optional[float] = None,
    retry: Optional[urllib3.Retry] = None,
) -> Configuration:
    cfg = Configuration(host=base_url, access_token=secret_key)

    # Default timeouts are applied by ReliableApiClient per-request.
    # Retries configure urllib3's pool manager.
    if retry is not None:
        cfg.retries = retry

    # Keep for caller convenience
    _ = timeout_seconds
    return cfg


def create_paystack_client(
    secret_key: str,
    *,
    base_url: str = "https://api.paystack.co",
    timeout_seconds: Optional[float] = None,
    retry: Optional[RetryOptions] = None,
    idempotency: bool = False,
    idempotency_key: Optional[str] = None,
    idempotency_auto: bool = True,
    idempotency_header: str = DEFAULT_IDEMPOTENCY_HEADER,
) -> ReliableApiClient:
    retry_opts = retry or RetryOptions()

    allowed_methods = tuple(m.upper() for m in retry_opts.retry_on_methods)
    if idempotency:
        allowed_methods = tuple(sorted(set(allowed_methods + ("POST",))))

    urllib_retry = create_retry(
        retries=retry_opts.retries,
        retry_on_statuses=retry_opts.retry_on_statuses,
        retry_on_methods=allowed_methods,
        backoff_factor=retry_opts.min_delay_seconds,
    )

    cfg = create_configuration(secret_key, base_url=base_url, retry=urllib_retry, timeout_seconds=timeout_seconds)

    reliability = ReliabilityOptions(
        timeout_seconds=timeout_seconds,
        retry=retry_opts,
        idempotency_enabled=idempotency,
        idempotency_header=idempotency_header,
        idempotency_key=idempotency_key,
        idempotency_auto=idempotency_auto,
    )

    return ReliableApiClient(cfg, reliability=reliability)


T = TypeVar("T")


def sleep_backoff(attempt: int, *, min_delay_seconds: float, max_delay_seconds: float) -> None:
    backoff = min(max_delay_seconds, min_delay_seconds * (2 ** attempt))
    jitter = 0.5 + secrets.randbelow(1000) / 1000.0
    time.sleep(min(max_delay_seconds, backoff * jitter))


def retry_call(
    fn: Callable[[], T],
    *,
    retries: int = 2,
    min_delay_seconds: float = 0.25,
    max_delay_seconds: float = 2.0,
) -> T:
    last: Optional[BaseException] = None
    for attempt in range(0, retries + 1):
        try:
            return fn()
        except PaystackApiError as e:
            last = e
            if attempt >= retries:
                raise
            sleep_backoff(attempt, min_delay_seconds=min_delay_seconds, max_delay_seconds=max_delay_seconds)
        except ApiException as e:
            last = e
            if attempt >= retries:
                raise to_paystack_api_error(e)
            sleep_backoff(attempt, min_delay_seconds=min_delay_seconds, max_delay_seconds=max_delay_seconds)

    assert last is not None
    raise last
