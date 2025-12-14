# @alexasomba/paystack-node

TypeScript-first Paystack API client for Node.js, generated from this repo’s OpenAPI spec.

## Install

```bash
pnpm add @alexasomba/paystack-node
# or: npm i @alexasomba/paystack-node
```

## Usage

```ts
import { createPaystack } from '@alexasomba/paystack-node';

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
});

// ergonomic operation wrappers (generated from operationId)
const { data, error } = await paystack.transaction_initialize({
  body: {
    email: 'customer@example.com',
    amount: 5000,
  },
});

if (error) throw error;
console.log(data);
```

## Webhooks

```ts
import { verifyPaystackWebhookSignature } from '@alexasomba/paystack-node';

const ok = verifyPaystackWebhookSignature({
  rawBody: req.rawBody,
  signature: req.headers['x-paystack-signature'] as string,
  secret: process.env.PAYSTACK_SECRET_KEY!,
});
```

## Dev

```bash
pnpm -C sdks/node build
```
