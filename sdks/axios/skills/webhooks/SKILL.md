---
name: webhooks
description: Use when verifying, parsing, and handling Paystack webhooks with @alexasomba/paystack-axios.
---

# Paystack Axios Webhooks

The Axios SDK exports webhook helpers for server-side webhook routes. Verification must use the raw request body and your Paystack secret key.

```ts
import { Webhooks } from "@alexasomba/paystack-axios";

const valid = Webhooks.verifySignature(
  rawBody,
  request.headers["x-paystack-signature"],
  process.env.PAYSTACK_SECRET_KEY!,
);
```

## Parse after verification

```ts
if (!valid) {
  throw new Error("Invalid Paystack webhook signature");
}

const event = Webhooks.parseEvent(rawBody);
```

## Best practices

- Verify before acting on an event.
- Configure the route to preserve the exact raw body string.
- Make handlers idempotent and safe for retries.
- Reconcile important events by fetching the transaction or subscription from Paystack.
