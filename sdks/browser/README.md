# @alexasomba/paystack-browser

TypeScript-first Paystack API client for browser runtimes, generated from this repo’s OpenAPI spec.

> Note: Paystack API endpoints generally require a secret key. Do not expose secret keys in a real browser app.

## Why this SDK

- Spec-driven: generated from the OpenAPI spec in this repo.
- Typed operations: ergonomic helpers generated from `operationId`.
- Production-friendly networking: built-in `timeoutMs` and safe `retry` defaults.

## Modules

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

## Install

```bash
pnpm add @alexasomba/paystack-browser
# or: npm i @alexasomba/paystack-browser
# or: yarn add @alexasomba/paystack-browser
```

## Usage

```ts
import { createPaystack } from '@alexasomba/paystack-browser';

const paystack = createPaystack({
  apiKey: 'YOUR_KEY',
  // Optional reliability knobs
  timeoutMs: 30_000,
  retry: { retries: 2 },
});

const { data, error } = await paystack.transaction_initialize({
  body: {
    email: 'customer@example.com',
    amount: 5000,
  },
});

if (error) throw error;
console.log(data);
```

## Coverage

- The Browser SDK currently generates ~119 typed operations from the bundled SDK OpenAPI spec.
- For missing/incorrect endpoints, please open an issue or PR against the spec (`src/assets/sdk/paystack.yaml`).

