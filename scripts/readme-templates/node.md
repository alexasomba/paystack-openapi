# {{package_name}}

[![npm version](https://img.shields.io/npm/v/{{package_name}}.svg)](https://www.npmjs.com/package/{{package_name}})
[![license](https://img.shields.io/npm/l/{{package_name}}.svg)]({{sdk_repo_url}}/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/{{package_name}})](https://bundlephobia.com/package/{{package_name}})

{{package_description}}

## Features

- **Spec-driven Accuracy**: Generated directly from the Paystack OpenAPI specification.
- **100% Type-safe**: Full TypeScript support with generated types for every endpoint, request, and response.
- **Smart Retries**: Automatic retries for transient failures with exponential backoff and jitter.
- **Retry-After Compliance**: Automatically respects Paystack `Retry-After` headers on rate limit responses.
- **Sophisticated Idempotency**: Built-in support for manual, static, or automatic UUID-based idempotency keys on POST requests.
- **Detailed Error Handling**: `PaystackApiError` includes `status`, `url`, and Paystack `requestId`.
- **Webhook Verification**: Timing-safe webhook signature verification helper included.

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
import { createPaystack, assertOk } from "@alexasomba/paystack-node";

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

The `createPaystack` helper accepts `PaystackClientOptions`:

```ts
const paystack = createPaystack({
  secretKey: "sk_...",
  timeoutMs: 30_000,
  retry: {
    retries: 3,
    minDelayMs: 500,
    retryOnStatuses: [429, 500, 503],
  },
  idempotencyKey: "auto",
  headers: {
    "X-My-App": "v1.0.0",
  },
});
```

{{stable_type_exports}}

### Webhooks

Use the webhook helper when validating server-to-server events from Paystack. Pass the raw request body, not a parsed JSON object.

```ts
import { verifyPaystackWebhookSignature } from "@alexasomba/paystack-node/webhooks";

const isValid = verifyPaystackWebhookSignature({
  rawBody: req.body,
  signature: req.headers["x-paystack-signature"],
  secret: process.env.PAYSTACK_SECRET_KEY!,
});
```

### Handling Pagination

List endpoints expose pagination controls through query params like `perPage`, `page`, `next`, and `previous`. Response headers are still available when you need manual pagination control.

{{pagination_overview}}

```ts
const result = await paystack.customer_list({ query: { perPage: 20 } });
const customers = assertOk(result);
const total = result.response.headers.get("x-total-count");
```

## Error Handling

```ts
import { toPaystackApiError } from "@alexasomba/paystack-node";

const result = await paystack.transaction_initialize({
  /* ... */
});
const error = toPaystackApiError(result);

if (error) {
  console.error(`Status ${error.status}: ${error.message}`);
  console.error(`Paystack Request ID: ${error.requestId}`);
}
```

The `requestId` is useful when correlating logs or escalating an issue with Paystack support.

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
