---
name: retries-idempotency
description: Use when configuring @alexasomba/paystack-browser retries, Retry-After behavior, idempotency keys, timeouts, and browser-safe retry semantics.
license: MIT
compatibility: "Modern browsers and bundlers; package tooling/SSR builds require Node.js >=22.0.0; ESM package; public-key frontend runtime only."
---

# Paystack Browser Retries and Idempotency

## License and compatibility

- License: MIT, same as `@alexasomba/paystack-browser`.
- Runtime compatibility: modern browsers and bundlers; package tooling and SSR builds require Node.js >=22.0.0.
- Supported import path: `@alexasomba/paystack-browser`; the package is ESM with `type: "module"`.
- Intended environment: frontend code using Paystack public keys only. Secret-key operations belong on a backend.

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
