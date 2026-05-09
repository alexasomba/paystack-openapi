---
name: retries-idempotency
description: Use when configuring @alexasomba/paystack-browser retries, Retry-After behavior, idempotency keys, timeouts, and browser-safe retry semantics.
---

# Paystack Browser Retries and Idempotency

The browser SDK can retry transient failures and add browser-safe idempotency keys for POST requests.

```ts
const paystack = createPaystack({
  apiKey: "pk_test_...",
  timeoutMs: 15_000,
  retry: {
    retries: 2,
    retryOnStatuses: [408, 429, 503],
  },
  idempotencyKey: "auto",
});
```

The SDK respects `Retry-After` for `429` responses when present.

## Best practices

- Keep retry counts lower in the browser to avoid poor UX.
- Use idempotency for browser POST retries.
- Do not retry workflows that should be initialized on the backend instead.
- Surface pending state clearly while a payment request is in flight.
- Store authoritative payment state on the server, not in browser memory.
