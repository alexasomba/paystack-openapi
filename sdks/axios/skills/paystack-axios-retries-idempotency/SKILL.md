---
name: paystack-axios-retries-idempotency
description: Use when configuring Paystack Axios SDK retries, Retry-After behavior, idempotency keys, timeouts, and safe retry semantics for transactions or other API calls.
license: MIT
compatibility: "Node.js >=22.0.0; ESM-only package; backend/server runtime; import @alexasomba/paystack-axios."
---

# Paystack Axios Retries and Idempotency

Configure retries for transient failures and idempotency for safe POST retries.

```ts
const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  retry: {
    retries: 3,
    retryOnStatuses: [408, 429, 500, 502, 503, 504],
  },
  idempotencyKey: "auto",
});
```

The SDK respects `Retry-After` for `429` responses when present.

## Manual idempotency

Use a stable key for the same business operation when retries may span requests or workers.

```ts
const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  idempotencyKey: () => paymentAttempt.idempotencyKey,
});
```

## Helper exports

The SDK exports low-level idempotency helpers for tests and transport utilities:

- `DEFAULT_IDEMPOTENCY_HEADER`
- `createIdempotencyKey()`
- `resolveIdempotencyKey(input)`
- `hasHeader(headers, name)`
- `setHeader(headers, name, value)`

Most application code should configure `idempotencyKey` on `createPaystack` instead of calling these helpers directly.

## Best practices

- Retry POST only when an idempotency key exists.
- Do not reuse a static idempotency key across unrelated payments or refunds.
- Combine SDK retries with application-level reconciliation for payment state.
- Keep Axios interceptor retries from duplicating SDK retries.
