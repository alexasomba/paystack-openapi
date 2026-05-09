---
name: api-operations
description: Use when calling Paystack API operations with @alexasomba/paystack-axios, including request body, path params, query params, and pagination.
---

# Paystack Axios API Operations

The Axios SDK exposes the same grouped operation helpers as the generated OpenAPI surface while using Axios under the hood.

## Request shape

- JSON request bodies go in `body`.
- Path parameters go in `params.path`.
- Query parameters go in `params.query`.

```ts
const initialized = await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 5000,
  },
});
```

```ts
const verified = await paystack.transaction_verify({
  params: { path: { reference: "ref_123" } },
});
```

```ts
const banks = await paystack.bank_list({
  params: { query: { country: "nigeria", perPage: 100 } },
});
```

## Operation naming

Use generated helpers such as `transaction_initialize`, `customer_create`, `paymentRequest_create`, `transferrecipient_create`, and `refund_create`. Do not infer nested resource names that are not exported by the SDK.

## Pagination

Keep pagination in `params.query`. Inspect the returned envelope `meta` and response headers when building a pager.

## Best practices

- Keep mutation references unique in your application.
- Use typed request bodies instead of manually building JSON strings.
- Treat `status: false` in the Paystack envelope as a failed operation.
