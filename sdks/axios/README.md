# @alexasomba/paystack-axios

Paystack API client using Axios as the transport, with types generated from this repo’s OpenAPI spec.

## Install

```bash
pnpm add @alexasomba/paystack-axios
# or: npm i @alexasomba/paystack-axios
```

## Usage

```ts
import { createPaystack } from '@alexasomba/paystack-axios';

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
});

const { data, error } = await paystack.transaction_initialize({
  body: { email: 'customer@example.com', amount: 5000 },
});

if (error) throw error;
console.log(data);
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
