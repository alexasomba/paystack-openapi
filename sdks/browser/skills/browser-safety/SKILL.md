---
name: browser-safety
description: Use when deciding what Paystack functionality can run in @alexasomba/paystack-browser versus what must move to a backend.
license: MIT
compatibility: "Modern browsers and bundlers; package tooling/SSR builds require Node.js >=22.0.0; ESM package; public-key frontend runtime only."
---

# Paystack Browser Safety

The browser SDK is frontend-safe only when used with Paystack public keys and non-sensitive workflows. Anything requiring a secret key must run on a backend.

## Public key only

```ts
const paystack = createPaystack({
  apiKey: "pk_test_...",
});
```

The SDK rejects keys that look like `sk_test_*` or `sk_live_*`.

## Move these to a backend

- Transfers and transfer recipient management.
- Refunds and dispute operations.
- Webhook verification.
- Secret-key transaction verification before fulfillment.
- Settlement, balance, integration, dispute evidence, or account administration workflows.
- Any operation that would expose business-only credentials or privileged account state.

Generated helpers may exist for these operations because the SDK is generated from the full OpenAPI surface. Treat them as type-level visibility, not browser permission.

## Usually safe browser work

- Collecting frontend checkout inputs.
- Starting public-key checkout flows where Paystack permits browser calls.
- Calling frontend-safe read or initialization operations only when they do not require a secret key.
- Passing an `access_code` from your backend to `@alexasomba/paystack-inline`.

## Browser constraints

- CORS and Paystack API policy may prevent some direct frontend calls.
- Browser logs and source maps can expose data to users.
- Frontend state is not authoritative for payment fulfillment.

## Best practices

- Initialize payments on a backend and return only frontend-safe values when possible.
- Verify payment status server-side before delivering goods or credits.
- Keep public keys in frontend config and secret keys in backend secret storage.
