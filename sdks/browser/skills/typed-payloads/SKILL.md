---
name: typed-payloads
description: Use when choosing TypeScript request, query, response, or grouped client types from @alexasomba/paystack-browser.
license: MIT
compatibility: "Modern browsers and bundlers; package tooling/SSR builds require Node.js >=22.0.0; ESM package; public-key frontend runtime only."
---

# Paystack Browser Typed Payloads

The browser SDK exports the same style of stable aliases as the server SDKs. Use them for frontend payment forms, service wrappers, and tests.

## Client and payload types

```ts
import type {
  Paystack,
  PaystackTransactionClient,
  TransactionInitializePayload,
  TransactionVerifyPathParams,
} from "@alexasomba/paystack-browser";
```

```ts
const payload: TransactionInitializePayload = {
  email: "customer@example.com",
  amount: 5000,
};
```

## Generated OpenAPI types

`paths`, `operations`, and `components` are exported for advanced cases. Prefer stable aliases for application-facing interfaces when available.

## Best practices

- Keep validated form data separate from SDK payload types.
- Use `satisfies` with payload aliases when assembling objects inline.
- Avoid `any` around Paystack response payloads.
- Do not copy generated schema shapes into long-lived local types unless you are creating a deliberate boundary.
