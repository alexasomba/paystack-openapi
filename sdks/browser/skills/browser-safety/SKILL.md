---
name: browser-safety
description: Use when deciding what Paystack functionality can run in @alexasomba/paystack-browser versus what must move to a backend.
---

# Paystack Browser Safety

## License and compatibility

- License: MIT, same as `@alexasomba/paystack-browser`.
- Runtime compatibility: modern browsers and bundlers; package tooling and SSR builds require Node.js >=22.0.0.
- Supported import path: `@alexasomba/paystack-browser`; the package is ESM with `type: "module"`.
- Intended environment: frontend code using Paystack public keys only. Secret-key operations belong on a backend.

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
- Any operation that would expose business-only credentials or privileged account state.

## Browser constraints

- CORS and Paystack API policy may prevent some direct frontend calls.
- Browser logs and source maps can expose data to users.
- Frontend state is not authoritative for payment fulfillment.

## Best practices

- Initialize payments on a backend and return only frontend-safe values when possible.
- Verify payment status server-side before delivering goods or credits.
- Keep public keys in frontend config and secret keys in backend secret storage.
