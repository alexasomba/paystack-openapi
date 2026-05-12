---
name: responses-errors
description: Use when handling @alexasomba/paystack-browser responses, PaystackResponse, unwrap, PaystackError, request IDs, and Paystack API envelopes.
license: MIT
compatibility: "Modern browsers and bundlers; package tooling/SSR builds require Node.js >=22.0.0; ESM package; public-key frontend runtime only."
---

# Paystack Browser Responses and Errors

Browser SDK operations return `PaystackResponse<T>`. Use `.unwrap()` for typed data or an exception.

```ts
const result = await paystack.transaction_initialize({
  body: { email: "customer@example.com", amount: 5000 },
});

const data = result.unwrap();
```

## Error handling

```ts
import { PaystackError } from "@alexasomba/paystack-browser";

try {
  result.unwrap();
} catch (error) {
  if (error instanceof PaystackError) {
    console.error(error.status, error.message, error.requestId);
  }
}
```

`PaystackError` exposes `status`, `requestId`, `code`, `type`, and `meta`. Use `isProcessorError()` and `isValidationError()` for programmatic branching, but do not show raw diagnostic details directly to users.

## Helper exports

Use `getPaystackRequestId(headers)` in tests or diagnostics when extracting request IDs from raw response headers. Request IDs are commonly returned in `x-paystack-request-id` or `x-request-id`.

## Best practices

- Show user-safe messages in the UI; keep diagnostic details in logs.
- Do not expose secret keys, raw headers, or sensitive metadata in browser logs.
- Treat Paystack envelope `status: false` as failure even with HTTP 2xx.
- Use `response.headers` only for transport details such as pagination headers.
