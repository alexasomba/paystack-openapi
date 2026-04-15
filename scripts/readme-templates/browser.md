# {{package_name}}

[![npm version](https://img.shields.io/npm/v/{{package_name}}.svg)](https://www.npmjs.com/package/{{package_name}})
[![license](https://img.shields.io/npm/l/{{package_name}}.svg)]({{sdk_repo_url}}/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/{{package_name}})](https://bundlephobia.com/package/{{package_name}})

{{package_description}}

## Features

- **Lightweight & Tree-shakeable**: Only import what you use, optimized for modern frontend bundles.
- **Native Fetch**: Uses standard browser `fetch` and `AbortController`.
- **100% Type-safe**: Full TypeScript support with generated types for every endpoint, request, and response.
- **Smart Retries**: Automatic retries for transient failures with exponential backoff and jitter.
- **Secure Idempotency**: Automatically handles `Idempotency-Key` headers using browser-safe random generation.
- **Detailed Error Handling**: `PaystackApiError` includes `status`, `url`, and Paystack `requestId`.

## Install

```bash
{{package_install}}
```

Use your Paystack public key in browser environments. Do not expose a secret key in frontend code.

```ts
const publicKey = "pk_test_...";
```

## Quick Start

```ts
import { createPaystack, assertOk } from "@alexasomba/paystack-browser";

const paystack = createPaystack({
  secretKey: "pk_test_...",
  idempotencyKey: "auto",
});

const result = await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 5000,
  },
});

const data = assertOk(result);
window.location.href = data.authorization_url;
```

`assertOk` returns the successful Paystack payload and throws a structured `PaystackApiError` for non-2xx responses.

{{api_basics}}

{{authentication}}

## Advanced Configuration

### Custom Fetch Implementation

Provide a custom fetch implementation when you need framework-specific instrumentation, tracing, or polyfills.

```ts
const paystack = createPaystack({
  secretKey: "pk_...",
  fetch: customFetchWrapper,
  timeoutMs: 15_000,
});
```

### Handling Rate Limits

The SDK respects Paystack `Retry-After` headers automatically. Override retry statuses only when you want tighter browser-side behavior.

{{pagination_overview}}

```ts
const paystack = createPaystack({
  secretKey: "pk_...",
  retry: {
    retries: 2,
    retryOnStatuses: [429],
  },
});
```

## Coverage

{{errors_overview}}

This SDK is generated from the SDK spec in this monorepo and currently tracks the full set of generated typed operations for the Paystack-API-aligned contract.

## Modules

For this SDK, these schema families are exposed through generated TypeScript types in `src/openapi-types.ts` and operation helpers in `src/operations.ts`.

{{module_schema_table}}

## Module Examples

These are intentionally short examples. Use them as entry points, then expand the request bodies with the typed fields exposed by your editor and `src/openapi-types.ts`.

{{module_examples}}

## Related SDKs

- [{{related_sdk_1_name}}]({{related_sdk_1_url}}) - {{related_sdk_1_description}}
- [{{related_sdk_2_name}}]({{related_sdk_2_url}}) - {{related_sdk_2_description}}

## Used By

- **[Better Auth Paystack Plugin](https://github.com/alexasomba/better-auth-paystack)**: A comprehensive Paystack plugin for Better Auth.

## Source

- Monorepo source: [alexasomba/paystack-openapi](https://github.com/alexasomba/paystack-openapi)
- Standalone SDK repo: [{{sdk_repo_url}}]({{sdk_repo_url}})

## License

MIT
