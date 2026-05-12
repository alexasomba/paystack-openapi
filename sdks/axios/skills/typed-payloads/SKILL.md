---
name: typed-payloads
description: Use when choosing TypeScript request, query, response, or grouped client types from @alexasomba/paystack-axios.
license: MIT
compatibility: "Node.js >=22.0.0; ESM-only package; backend/server runtime; import @alexasomba/paystack-axios."
---

# Paystack Axios Typed Payloads

## License and compatibility

- License: MIT, same as `@alexasomba/paystack-axios`.
- Runtime compatibility: Node.js >=22.0.0; ESM-only package with `type: "module"`.
- Supported import path: `@alexasomba/paystack-axios`.
- Intended environment: backend/server runtimes. Do not expose Paystack secret keys through frontend code.

Prefer exported aliases and grouped client slice types for application services. Use generated OpenAPI types only for advanced cases.

## Client slices

```ts
import type {
  Paystack,
  PaystackTransactionClient,
  PaystackCustomerClient,
} from "@alexasomba/paystack-axios";
```

Pass the smallest client slice into a service when possible.

```ts
async function verifyPayment(transaction: PaystackTransactionClient, reference: string) {
  return transaction.transaction_verify({
    params: { path: { reference } },
  });
}
```

## Payload aliases

```ts
import type {
  TransactionInitializePayload,
  CustomerCreatePayload,
  RefundCreatePayload,
} from "@alexasomba/paystack-axios";
```

```ts
const customer: CustomerCreatePayload = {
  email: "customer@example.com",
};
```

## Best practices

- Avoid rebuilding payload types from `ReturnType<typeof createPaystack>`.
- Keep user-input validation separate from Paystack SDK payload types.
- Reach for `paths`, `operations`, or `components` only when a curated alias is not exported.
