---
name: responses-errors
description: Use when handling @alexasomba/paystack-axios responses, PaystackResponse, unwrap, PaystackError, request IDs, and Paystack API envelopes.
license: MIT
compatibility: "Node.js >=22.0.0; ESM-only package; backend/server runtime; import @alexasomba/paystack-axios."
---

# Paystack Axios Responses and Errors

Operation helpers return `PaystackResponse<T>`. Use `.unwrap()` to get `data` or throw a structured `PaystackError`.

```ts
const result = await paystack.transaction_initialize({
  body: { email: "customer@example.com", amount: 5000 },
});

const data = result.unwrap();
```

## Error handling

```ts
import { PaystackError } from "@alexasomba/paystack-axios";

try {
  result.unwrap();
} catch (error) {
  if (error instanceof PaystackError) {
    console.error(error.status, error.message, error.requestId);
  }
}
```

`PaystackError` exposes `status`, `requestId`, `code`, `type`, and `meta`. Use `isProcessorError()` and `isValidationError()` when branching on Paystack error categories.

## Envelope behavior

Paystack responses commonly include `status`, `message`, `data`, and optional `meta`. A response with HTTP 2xx can still have `status: false`; handle that as failure.

## Helper exports

Use `getPaystackRequestId(headers)` when extracting diagnostics from raw Axios-backed responses or test fixtures. Request IDs are commonly returned in `x-paystack-request-id` or `x-request-id`.

## Best practices

- Log `requestId` for support and reconciliation.
- Redact authorization headers and sensitive metadata from logs.
- Use `.raw` when you need `message` or `meta`; use `.response` for transport headers.
