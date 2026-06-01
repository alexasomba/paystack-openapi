---
name: paystack-axios-transport
description: Use when customizing Paystack Axios SDK transport, createAxiosFetch behavior, axiosInstance, axiosConfig, interceptors, cancellation, or Axios-based tests.
license: MIT
compatibility: "Node.js >=22.0.0; ESM-only package; backend/server runtime; import @alexasomba/paystack-axios."
---

# Paystack Axios Transport

The Axios SDK adapts Axios to the Fetch contract expected by `openapi-fetch`. Use this skill when the task is about transport behavior rather than Paystack operation names.

## Custom Axios instance

Pass `axiosInstance` to reuse interceptors, agents, proxies, tracing, or observability defaults.

```ts
import axios from "axios";
import { createPaystack } from "@alexasomba/paystack-axios";

const axiosInstance = axios.create({ timeout: 10_000 });

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  axiosInstance,
});
```

## Axios config

Use `axiosConfig` for base transport defaults. The SDK still owns the Paystack base URL, operation path, authorization header, retries, and idempotency behavior.

```ts
const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  axiosConfig: {
    proxy: false,
  },
});
```

## Fetch parity

The adapter should behave like `fetch`:

- non-2xx responses are returned, not thrown by Axios
- response headers are normalized into `Headers`
- response bodies are returned as `Response` instances
- abort signals are forwarded to Axios

## Testing

Mock Axios at the instance boundary when testing interceptors, or inject a custom instance with a controlled adapter.

```ts
const axiosInstance = axios.create({
  adapter: async (config) => ({
    config,
    data: { status: true, message: "OK", data: { reference: "ref_123" } },
    headers: { "x-paystack-request-id": "req_123" },
    status: 200,
    statusText: "OK",
  }),
});
```

## Best practices

- Keep secret keys on the server; never reuse browser Axios clients.
- Do not log `Authorization` headers in interceptors.
- Preserve SDK retry/idempotency behavior when replacing transport defaults.
- Use operation helpers for request shape; use Axios config only for transport concerns.
