---
name: client-setup
description: Use when installing or configuring @alexasomba/paystack-axios, creating an Axios-backed Paystack client, or choosing server-side authentication settings.
license: MIT
compatibility: "Node.js >=22.0.0; ESM-only package; backend/server runtime; import @alexasomba/paystack-axios."
---

# Paystack Axios Client Setup

## License and compatibility

- License: MIT, same as `@alexasomba/paystack-axios`.
- Runtime compatibility: Node.js >=22.0.0; ESM-only package with `type: "module"`.
- Supported import path: `@alexasomba/paystack-axios`.
- Intended environment: backend/server runtimes. Do not expose Paystack secret keys through frontend code.

Use `@alexasomba/paystack-axios` when a server-side application already standardizes on Axios interceptors, proxies, tracing, or transport configuration.

## Install and import

```ts
import { createPaystack } from "@alexasomba/paystack-axios";
```

```ts
const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
});
```

## Custom Axios instance

Pass `axiosInstance` when you need existing interceptors or transport defaults.

```ts
import axios from "axios";

const axiosInstance = axios.create({ timeout: 10_000 });

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  axiosInstance,
});
```

## Authentication

- Use a Paystack secret key: `sk_test_*` or `sk_live_*`.
- Keep this SDK on the server.
- The default base URL is `https://api.paystack.co`.
- Do not send secret keys to browser code or client-side Axios instances.

## Best practices

- Keep Axios interceptors generic; do not log `Authorization` headers.
- Prefer SDK operation helpers over manual Axios calls.
- Use `baseUrl` only for explicit tests, mocks, or controlled proxying.
