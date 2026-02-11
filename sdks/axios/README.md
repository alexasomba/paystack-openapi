# @alexasomba/paystack-axios

[![npm version](https://img.shields.io/npm/v/@alexasomba/paystack-axios.svg)](https://www.npmjs.com/package/@alexasomba/paystack-axios)
[![license](https://img.shields.io/npm/l/@alexasomba/paystack-axios.svg)](https://github.com/alexasomba/paystack-sdks/blob/main/LICENSE)

Paystack API client backed by **Axios**, providing a familiar ecosystem for Axios users while remaining fully typed and spec-compliant.

This package provides:

- A typed low-level client backed by `openapi-fetch` (with an Axios adapter).
- Ergonomic operation helpers generated from `operationId` (`transaction_initialize`, `transferrecipient_update`, ...).

## Why this SDK

- **Axios-powered**: Uses your existing Axios instance or configurations.
- **Spec-driven**: Generated from the OpenAPI spec (keeps surface area aligned with the spec).
- **Safe retries for POST**: Optional `idempotencyKey` support to prevent duplicate operations.
- **Better debugging**: `PaystackApiError` includes `status` and `requestId` when available.

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

## Usage

```ts
import {
  assertOk,
  createPaystack,
  PaystackApiError,
} from "@alexasomba/paystack-axios";

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  // Optional reliability knobs
  timeoutMs: 30_000,
  // Optional: auto-add Idempotency-Key on POST requests
  idempotencyKey: "auto",
});

// ergonomic operation wrappers (generated from operationId)
const result = await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 5000,
  },
});

const data = assertOk(result);
console.log(data);
```

### ESM Requirement

This package is **ESM-only**. Ensure your `package.json` has `"type": "module"`.

### Using a custom Axios instance

```ts
import axios from "axios";
import { createPaystack } from "@alexasomba/paystack-axios";

const myAxios = axios.create({
  // your custom config
});

const paystack = createPaystack({
  secretKey: "sk_...",
  axiosInstance: myAxios,
});
```

## Coverage

The Axios SDK currently generates **~119 typed operations** from the bundled OpenAPI spec. For missing/incorrect endpoints, please open an issue in the [monorepo](https://github.com/alexasomba/paystack-sdks).

## Related

- [@alexasomba/paystack-node](https://github.com/alexasomba/paystack-sdks/tree/main/sdks/paystack-node)
- [@alexasomba/paystack-browser](https://github.com/alexasomba/paystack-sdks/tree/main/sdks/paystack-browser)

## License

MIT
