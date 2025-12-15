# @alexasomba/paystack-browser

TypeScript-first Paystack API client for browser runtimes, generated from this repo’s OpenAPI spec.

> Note: Paystack API endpoints generally require a secret key. Do not expose secret keys in a real browser app.

## Why this SDK

- Spec-driven: generated from the OpenAPI spec in this repo.
- Typed operations: ergonomic helpers generated from `operationId`.
- Production-friendly networking: built-in `timeoutMs` and safe `retry` defaults.

## Modules

- Transactions
- Charges
- Bulk Charges
- Subaccounts
- Transaction Splits
- Terminal
- Virtual Terminal
- Customers
- Direct Debit
- Dedicated Virtual Accounts
- Apple Pay
- Plans
- Subscriptions
- Transfer Recipients
- Transfers
- Balance
- Payment Requests
- Products
- Storefronts
- Orders
- Payment Pages
- Settlements
- Integration
- Refunds
- Disputes
- Banks
- Miscellaneous

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

