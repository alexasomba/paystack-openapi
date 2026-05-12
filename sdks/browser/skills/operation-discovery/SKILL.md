---
name: operation-discovery
description: Use when finding the correct @alexasomba/paystack-browser generated operation helper and deciding whether that operation is safe to call from a browser.
license: MIT
compatibility: "Modern browsers and bundlers; package tooling/SSR builds require Node.js >=22.0.0; ESM package; public-key frontend runtime only."
---

# Paystack Browser Operation Discovery

The browser SDK exposes generated OpenAPI operation helpers, but public exposure does not mean every operation is safe or allowed from frontend code.

## Find the helper

Generated helpers are flat methods on `paystack`, such as:

- `transaction_initialize`
- `transaction_verify`
- `customer_create`
- `bank_resolveAccountNumber`

Use `body`, `params.path`, and `params.query` exactly as inferred by TypeScript.

```ts
await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 500000,
  },
});
```

## Safety check before calling

Before using any helper in browser code, check whether the task needs:

- a Paystack secret key
- privileged account data
- transfer, refund, dispute, or recipient management
- server-side transaction verification before fulfillment
- webhook verification

If yes, move the operation to a backend using `@alexasomba/paystack-node` or `@alexasomba/paystack-axios`.

## Best practices

- Treat frontend operation helpers as public-key-only conveniences.
- Expect CORS or Paystack API policy to block some direct browser calls.
- Prefer backend initialization plus `@alexasomba/paystack-inline` for checkout flows.
- Never downgrade a server-only operation to the browser just because a generated helper exists.
