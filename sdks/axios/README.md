# @alexasomba/paystack-axios

Paystack API client using Axios as the transport, with types generated from this repo’s OpenAPI spec.

This package provides:
- A typed low-level client (`createPaystackClient`) backed by Axios
- Ergonomic operation helpers generated from `operationId` (`transaction_initialize`, `transferrecipient_update`, ...)

## Why this SDK

- Spec-driven: generated from the OpenAPI spec in this repo.
- Production-friendly networking: built-in `timeoutMs` and safe `retry` defaults.
- Axios-native customization: bring your own `axiosInstance` (timeouts, proxies, interceptors, etc.).

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
pnpm add @alexasomba/paystack-axios
# or: npm i @alexasomba/paystack-axios
# or: yarn add @alexasomba/paystack-axios
```

## Usage

```ts
import { createPaystack } from '@alexasomba/paystack-axios';

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  // Optional reliability knobs
  timeoutMs: 30_000,
  retry: { retries: 2 },
});

const { data, error } = await paystack.transaction_initialize({
  body: { email: 'customer@example.com', amount: 5000 },
});

if (error) throw error;
console.log(data);
```

### Usage (CommonJS)

```js
const { createPaystack } = require('@alexasomba/paystack-axios');

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY,
});
```

### Custom Axios instance

```ts
import axios from 'axios';
import { createPaystack } from '@alexasomba/paystack-axios';

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  axiosInstance: axios.create({ timeout: 30_000 }),
});
```

## Webhooks

```ts
import { verifyPaystackWebhookSignature } from '@alexasomba/paystack-axios';

const ok = verifyPaystackWebhookSignature({
  rawBody: req.rawBody,
  signature: req.headers['x-paystack-signature'] as string,
  secret: process.env.PAYSTACK_SECRET_KEY!,
});

```

## Coverage

- The Axios SDK currently generates ~119 typed operations from the bundled SDK OpenAPI spec.
- For missing/incorrect endpoints, please open an issue or PR against the spec (`src/assets/sdk/paystack.yaml`).
```

