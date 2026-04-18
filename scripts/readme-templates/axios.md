# {{package_name}}

[![npm version](https://img.shields.io/npm/v/{{package_name}}.svg)](https://www.npmjs.com/package/{{package_name}})
[![license](https://img.shields.io/npm/l/{{package_name}}.svg)]({{sdk_repo_url}}/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/{{package_name}})](https://bundlephobia.com/package/{{package_name}})

{{package_description}}

## Features

- **Axios-powered**: Reuse your Axios instance, interceptors, and configuration patterns.
- **Spec-driven Accuracy**: Generated directly from the Paystack OpenAPI specification.
- **100% Type-safe**: Full TypeScript support with generated types for every endpoint, request, and response.
- **Detailed Error Handling**: `PaystackApiError` includes `status`, `url`, and Paystack `requestId`.
- **Smart Retries & Idempotency**: Built-in support for safe retries on idempotent methods with automatic `Idempotency-Key` handling.

## Install

```bash
{{package_install}}
```

Authenticate requests with your Paystack secret key:

```ts
process.env.PAYSTACK_SECRET_KEY = "sk_test_...";
```

## Quick Start

```ts
import { createPaystack, assertOk } from "@alexasomba/paystack-axios";

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  idempotencyKey: "auto",
});

const result = await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 5000,
  },
});

const data = assertOk(result);
console.log(data.authorization_url);
```

`assertOk` returns the successful Paystack payload and throws a structured `PaystackApiError` for non-2xx responses.

{{api_basics}}

{{authentication}}

## Advanced Configuration

### Using a custom Axios instance

Pass your own Axios instance when you want to reuse interceptors, proxy settings, observability middleware, or organization-wide defaults.

```ts
import axios from "axios";
import { createPaystack } from "@alexasomba/paystack-axios";

const myAxios = axios.create({
  timeout: 10000,
});

const paystack = createPaystack({
  secretKey: "sk_...",
  axiosInstance: myAxios,
});
```

### Granular Retry Settings

Retries are most useful for transient failures such as `408`, `429`, and temporary `5xx` responses. Keep POST idempotency enabled when retrying mutating operations.

{{stable_type_exports}}

{{pagination_overview}}

```ts
const paystack = createPaystack({
  secretKey: "sk_...",
  retry: {
    retries: 3,
    retryOnStatuses: [408, 429, 503],
  },
});
```

## Error Handling

```ts
import { toPaystackApiError } from "@alexasomba/paystack-axios";

const result = await paystack.transaction_initialize({
  /* ... */
});
const error = toPaystackApiError(result);

if (error) {
  console.error(`Paystack Request ID: ${error.requestId}`);
}
```

The error object also carries the HTTP status and request URL, which helps when debugging auth failures or malformed payloads.

{{errors_overview}}

## Coverage

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
