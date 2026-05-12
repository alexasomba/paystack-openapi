---
name: client-setup
description: Use when installing or configuring @alexasomba/paystack-browser, creating a browser Paystack client, or choosing frontend-safe authentication settings.
---

# Paystack Browser Client Setup

## License and compatibility

- License: MIT, same as `@alexasomba/paystack-browser`.
- Runtime compatibility: modern browsers and bundlers; package tooling and SSR builds require Node.js >=22.0.0.
- Supported import path: `@alexasomba/paystack-browser`; the package is ESM with `type: "module"`.
- Intended environment: frontend code using Paystack public keys only. Secret-key operations belong on a backend.

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
