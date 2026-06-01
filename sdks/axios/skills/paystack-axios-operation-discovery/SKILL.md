---
name: paystack-axios-operation-discovery
description: Use when finding the correct generated operation helper in the Paystack Axios SDK @alexasomba/paystack-axios from a Paystack endpoint, OpenAPI operationId, tag, or path.
license: MIT
compatibility: "Node.js >=22.0.0; ESM-only package; backend/server runtime; import @alexasomba/paystack-axios."
---

# Paystack Axios Operation Discovery

The Axios SDK exposes generated OpenAPI operation IDs as flat helpers on the `paystack` object. The transport is Axios-backed, but operation names and request shapes match the other TypeScript API SDKs.

```ts
const paystack = createPaystack({ secretKey: process.env.PAYSTACK_SECRET_KEY! });

await paystack.transaction_initialize({ body: { email, amount } });
await paystack.transaction_verify({ params: { path: { reference } } });
```

## How to find a helper

1. Search `src/operations.ts` or generated declaration output for the resource/action.
2. Prefer the OpenAPI `operationId` when available.
3. Confirm whether values belong in `body`, `params.path`, or `params.query`.
4. Keep using generated helpers unless the task is specifically about Axios transport internals.

## Common examples

- Initialize payment: `transaction_initialize`
- Verify transaction: `transaction_verify`
- Create customer: `customer_create`
- Resolve account number: `bank_resolveAccountNumber`
- Create transfer recipient: `transferrecipient_create`
- Create refund: `refund_create`

## Best practices

- Do not invent nested clients or hand-written convenience method names.
- Use TypeScript autocomplete to inspect the accepted request object.
- Keep pagination in `params.query`.
- Keep Axios interceptors transport-oriented; do not move operation naming or payload shaping into interceptors.
