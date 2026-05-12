---
name: webhooks
description: Use when an agent considers webhook handling while using @alexasomba/paystack-browser; explains why verification belongs on the server.
---

# Paystack Browser Webhook Boundary

## License and compatibility

- License: MIT, same as `@alexasomba/paystack-browser`.
- Runtime compatibility: modern browsers and bundlers; package tooling and SSR builds require Node.js >=22.0.0.
- Supported import path: `@alexasomba/paystack-browser`; the package is ESM with `type: "module"`.
- Intended environment: frontend code using Paystack public keys only. Secret-key operations belong on a backend.

Do not handle or verify Paystack webhooks in browser code. Webhooks are server-to-server events and require your Paystack secret key.

## Correct architecture

- Browser starts or resumes a payment using public-key-safe flows.
- Backend verifies transaction state using a server SDK.
- Backend receives Paystack webhooks on a server route.
- Backend verifies the raw webhook body with the Paystack secret key.

## Do not do this in browser code

- Do not expose `sk_test_*` or `sk_live_*`.
- Do not verify `x-paystack-signature` in frontend JavaScript.
- Do not fulfill orders based only on browser callbacks.
- Do not trust client-submitted webhook payloads.

## Recommended path

Use `@alexasomba/paystack-node` or `@alexasomba/paystack-axios` on the backend for webhook verification, then update durable application state from the verified event.
