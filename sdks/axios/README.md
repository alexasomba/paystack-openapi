# @alexasomba/paystack-axios

[![npm version](https://img.shields.io/npm/v/@alexasomba/paystack-axios.svg)](https://www.npmjs.com/package/@alexasomba/paystack-axios)
[![license](https://img.shields.io/npm/l/@alexasomba/paystack-axios.svg)](https://github.com/alexasomba/paystack-axios/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@alexasomba/paystack-axios)](https://bundlephobia.com/package/@alexasomba/paystack-axios)

Paystack API client backed by **Axios**, providing a familiar ecosystem for Axios users while remaining fully typed and spec-compliant.

## Features

- **Axios-powered**: Leverage your existing Axios instance, interceptors, and configurations.
- **Spec-driven Accuracy**: Generated directly from the official Paystack OpenAPI specification.
- **100% Type-safe**: Full TypeScript support with auto-generated types for every endpoint, request, and response.
- **Detailed Error Handling**: `PaystackApiError` provides access to `status`, `url`, and the Paystack `requestId` for easier debugging.
- **Smart Retries & Idempotency**: Built-in support for safe retries on idempotent methods with automatic `Idempotency-Key` handling.

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
pnpm add @alexasomba/paystack-axios axios
```

## Quick Start

```ts
import { createPaystack, assertOk } from "@alexasomba/paystack-axios";

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

### Using a custom Axios instance

You can pass an existing Axios instance to share interceptors or custom configurations:

```ts
import axios from "axios";
import { createPaystack } from "@alexasomba/paystack-axios";

const myAxios = axios.create({
  timeout: 10000,
  // custom interceptors...
});

const paystack = createPaystack({
  secretKey: "sk_...",
  axiosInstance: myAxios,
});
```

### Granular Retry Settings

```ts
const paystack = createPaystack({
  secretKey: "sk_...",
  retry: {
    retries: 3,
    retryOnStatuses: [408, 429, 503],
  }
});
```

## Error Handling

The SDK provides utilities for robust error management:

```ts
import { toPaystackApiError, PaystackApiError } from "@alexasomba/paystack-axios";

const result = await paystack.transaction_initialize({ /* ... */ });
const error = toPaystackApiError(result);

if (error) {
  // Access specific details sent back by Paystack
  console.error(`Paystack Request ID: ${error.requestId}`);
}
```

## Coverage

This SDK currently tracks **~119 typed operations** from the Paystack API. For missing/incorrect endpoints, please open an issue in [this repository](https://github.com/alexasomba/paystack-axios/issues).

## Related SDKs

- [@alexasomba/paystack-node](https://github.com/alexasomba/paystack-node) - Native Node.js fetch implementation.
- [@alexasomba/paystack-browser](https://github.com/alexasomba/paystack-browser) - Optimized for browser fetches.

## Used By

- **[Better Auth Paystack Plugin](https://github.com/alexasomba/better-auth-paystack)**: A comprehensive Paystack plugin for Better Auth.

## License

MIT
