---
name: responses-errors
description: Use when handling @alexasomba/paystack-axios responses, PaystackResponse, unwrap, PaystackError, request IDs, and Paystack API envelopes.
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

## Envelope behavior

Paystack responses commonly include `status`, `message`, `data`, and optional `meta`. A response with HTTP 2xx can still have `status: false`; handle that as failure.

## Best practices

- Log `requestId` for support and reconciliation.
- Redact authorization headers and sensitive metadata from logs.
- Use `.raw` when you need `message` or `meta`; use `.response` for transport headers.
