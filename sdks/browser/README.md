# @alexasomba/paystack-browser

[![npm version](https://img.shields.io/npm/v/@alexasomba/paystack-browser.svg)](https://www.npmjs.com/package/@alexasomba/paystack-browser)
[![license](https://img.shields.io/npm/l/@alexasomba/paystack-browser.svg)](https://github.com/alexasomba/paystack-browser/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@alexasomba/paystack-browser)](https://bundlephobia.com/package/@alexasomba/paystack-browser)

Paystack API client optimized for **Browser** environments, providing a lightweight, fully typed, and spec-compliant way to interact with the Paystack API via Native Fetch.

## Features

- **Lightweight & Tree-shakeable**: Only import what you use, optimized for modern frontend bundles.
- **Native Fetch**: Uses standard browser `fetch` and `AbortController` (no heavy dependencies).
- **100% Type-safe**: Full TypeScript support with auto-generated types for every endpoint, request, and response.
- **Smart Retries**: Automatic retries for transient failures with exponential backoff and jitter.
- **Secure Idempotency**: Automatically handles `Idempotency-Key` headers using browser-safe random generation.
- **Detailed Error Handling**: `PaystackApiError` provides access to `status`, `url`, and the Paystack `requestId` for debugging.

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
pnpm add @alexasomba/paystack-browser
```

## Quick Start

```ts
import { createPaystack, assertOk } from "@alexasomba/paystack-browser";

const paystack = createPaystack({
  secretKey: "pk_test_...", // Use your PUBLIC key in the browser!
  idempotencyKey: "auto",
});

// Ergonomic operation helpers
const result = await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 5000,
  },
});

const data = assertOk(result); // Throws structured PaystackApiError on failure
window.location.href = data.authorization_url;
```

## Advanced Configuration

### Custom Fetch Implementation

If you need to polyfill or use a wrapper around `fetch`:

```ts
const paystack = createPaystack({
  secretKey: "pk_...",
  fetch: customFetchWrapper,
  timeoutMs: 15_000,
});
```

### Handling Rate Limits

The SDK automatically respects `Retry-After` headers. You can customize which statuses trigger a retry:

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

This SDK currently tracks **~119 typed operations** from the Paystack API. For missing/incorrect endpoints, please open an issue in [this repository](https://github.com/alexasomba/paystack-browser/issues).

## Related SDKs

- [@alexasomba/paystack-node](https://github.com/alexasomba/paystack-node) - Native Node.js SDK with webhook support.
- [@alexasomba/paystack-axios](https://github.com/alexasomba/paystack-axios) - For projects using Axios.

## Used By

- **[Better Auth Paystack Plugin](https://github.com/alexasomba/better-auth-paystack)**: A comprehensive Paystack plugin for Better Auth.

## License

MIT
