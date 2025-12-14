# @alexasomba/paystack-browser

TypeScript-first Paystack API client for browser runtimes, generated from this repo’s OpenAPI spec.

> Note: Paystack API endpoints generally require a secret key. Do not expose secret keys in a real browser app.

## Install

```bash
pnpm add @alexasomba/paystack-browser
# or: npm i @alexasomba/paystack-browser
```

## Usage

```ts
import { createPaystackClient } from '@alexasomba/paystack-browser';

const paystack = createPaystackClient({
  apiKey: 'BearerTokenHere',
});

const { data, error } = await paystack.POST('/transaction/initialize', {
  body: {
    email: 'customer@example.com',
    amount: 5000,
  },
});

if (error) throw error;
console.log(data);
```
