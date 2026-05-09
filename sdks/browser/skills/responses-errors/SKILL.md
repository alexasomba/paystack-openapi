---
name: responses-errors
description: Use when handling @alexasomba/paystack-browser responses, PaystackResponse, unwrap, PaystackError, request IDs, and Paystack API envelopes.
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

## Best practices

- Show user-safe messages in the UI; keep diagnostic details in logs.
- Do not expose secret keys, raw headers, or sensitive metadata in browser logs.
- Treat Paystack envelope `status: false` as failure even with HTTP 2xx.
- Use `response.headers` only for transport details such as pagination headers.
