# @alexasomba/paystack-node

[![npm version](https://img.shields.io/npm/v/@alexasomba/paystack-node.svg)](https://www.npmjs.com/package/@alexasomba/paystack-node)
[![license](https://img.shields.io/npm/l/@alexasomba/paystack-node.svg)](https://github.com/alexasomba/paystack-node/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@alexasomba/paystack-node)](https://bundlephobia.com/package/@alexasomba/paystack-node)

TypeScript-first Paystack API client for Node.js, generated from the official Paystack OpenAPI spec.

## Features

- **Spec-driven Accuracy**: Generated directly from the official Paystack OpenAPI specification.
- **100% Type-safe**: Full TypeScript support with auto-generated types for every endpoint, request, and response.
- **Smart Retries**: Automatic retries for transient failures (408, 429, 5xx) with exponential backoff and jitter.
- **Retry-After Compliance**: Automatically respects the `Retry-After` header Sent by Paystack on 429 Rate Limit responses.
- **Sophisticated Idempotency**: Built-in support for manual, static, or fully automatic UUID-based idempotency keys on POST requests.
- **Detailed Error Handling**: `PaystackApiError` provides access to `status`, `url`, and the Paystack `requestId` for easier debugging.
- **Webhook Verification**: Timing-safe webhook signature verification helper included.

<details>
<summary><b>Supported Modules (31/31)</b></summary>

- [x] Charge
- [x] Customers
- [x] Plans
- [x] Products
- [x] Subscriptions
- [x] Transactions
- [x] Verify Payments (Transaction verification)
- [x] Transfers
- [x] Dedicated Virtual Accounts
- [x] Apple Pay
- [x] Subaccounts
- [x] Transaction Splits
- [x] Settlements
- [x] Transfers Control (OTP settings; under Transfers)
- [x] Transfer Recipients
- [x] Bulk Charges
- [x] Refunds
- [x] Verification (Resolve Account / Validate Account / Resolve Card BIN)
- [x] Miscellaneous
- [x] Disputes
- [x] Control Panel (Payment session timeout)
- [x] Terminal
- [x] Virtual Terminal
- [x] Direct Debit
- [x] Payment Pages
- [x] Payment Requests (Invoices)
- [x] Integration
- [x] Balance
- [x] Banks
- [x] Orders
- [x] Storefronts
</details>

## Install

```bash
pnpm add @alexasomba/paystack-node
```

## Quick Start

```ts
import { createPaystack, assertOk } from "@alexasomba/paystack-node";

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  idempotencyKey: "auto", // Automatically prevent double charges on retries
});

// Ergonomic operation helpers
const result = await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 5000,
  },
});

const data = assertOk(result); // Throws structured PaystackApiError on failure
console.log(data.authorization_url);
```

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

### Webhooks

Securely verify incoming webhooks from Paystack:

```ts
import { verifyPaystackWebhookSignature } from "@alexasomba/paystack-node/webhooks";

const isValid = verifyPaystackWebhookSignature({
  rawBody: req.body, // Use raw string or Buffer
  signature: req.headers["x-paystack-signature"],
  secret: process.env.PAYSTACK_SECRET_KEY!,
});
```

### Handling Pagination

Access pagination metadata from response headers:

```ts
const result = await paystack.customer_list({ query: { perPage: 20 } });
const customers = assertOk(result);

// Access headers for manual pagination control
const total = result.response.headers.get("x-total-count");
```

## Error Handling

The SDK provides utilities for robust error management:

```ts
import { toPaystackApiError, PaystackApiError } from "@alexasomba/paystack-node";

const result = await paystack.transaction_initialize({ /* ... */ });
const error = toPaystackApiError(result);

if (error) {
  console.error(`Status ${error.status}: ${error.message}`);
  console.error(`Paystack Request ID: ${error.requestId}`);
}
```

## Coverage

This SDK currently tracks **~119 typed operations** from the Paystack API. For missing/incorrect endpoints, please open an issue in [this repository](https://github.com/alexasomba/paystack-node/issues).

## Related SDKs

- [@alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser) - Optimized for browser fetches.
- [@alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios) - For projects using Axios.

## Used By

- **[Better Auth Paystack Plugin](https://github.com/alexasomba/better-auth-paystack)**: A comprehensive Paystack plugin for Better Auth.

## License

MIT
