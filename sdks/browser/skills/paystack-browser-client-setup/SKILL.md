---
name: paystack-browser-client-setup
description: Use when installing or configuring the Paystack Browser SDK @alexasomba/paystack-browser, creating a frontend Paystack client, or choosing browser-safe authentication settings.
license: MIT
compatibility: "Modern browsers and bundlers; package tooling/SSR builds require Node.js >=22.0.0; ESM package; public-key frontend runtime only."
---

# Paystack Browser Client Setup

Use `@alexasomba/paystack-browser` only for browser-safe Paystack flows that can use a public key. Secret-key operations belong on a backend.

## Install and import

```ts
import { createPaystack } from "@alexasomba/paystack-browser";
```

```ts
const paystack = createPaystack({
  apiKey: "pk_test_...",
});
```

The browser SDK accepts `apiKey`, not `secretKey`. It rejects `sk_test_*` and `sk_live_*` keys.

## Options

```ts
const paystack = createPaystack({
  apiKey: "pk_test_...",
  timeoutMs: 15_000,
  fetch: window.fetch.bind(window),
});
```

## Best practices

- Use public keys only.
- Move transfers, refunds, subscription management, and webhook verification to a server SDK.
- Use browser calls for frontend-safe initialization or redirects only when the Paystack API and your security model allow it.
- Prefer a backend transaction initialization flow when in doubt.
