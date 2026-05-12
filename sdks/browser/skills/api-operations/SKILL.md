---
name: api-operations
description: Use when calling Paystack API operations with @alexasomba/paystack-browser, including browser-safe request body, path params, query params, and pagination.
---

# Paystack Browser API Operations

## License and compatibility

- License: MIT, same as `@alexasomba/paystack-browser`.
- Runtime compatibility: modern browsers and bundlers; package tooling and SSR builds require Node.js >=22.0.0.
- Supported import path: `@alexasomba/paystack-browser`; the package is ESM with `type: "module"`.
- Intended environment: frontend code using Paystack public keys only. Secret-key operations belong on a backend.

The browser SDK exposes generated grouped helpers, but not every Paystack operation is appropriate for frontend use. Never call secret-key-only operations from the browser.

## Request shape

```ts
const result = await paystack.transaction_initialize({
  body: {
    email: "customer@example.com",
    amount: 5000,
  },
});
```

- JSON request bodies go in `body`.
- Path parameters go in `params.path`.
- Query parameters go in `params.query`.

```ts
const verified = await paystack.transaction_verify({
  params: { path: { reference: "ref_123" } },
});
```

## Pagination

Use `params.query` for `page`, `perPage`, `next`, and `previous` where supported.

```ts
const pages = await paystack.page_list({
  params: { query: { perPage: 20 } },
});
```

## Best practices

- Do not put secret-key-only workflows in frontend code.
- Verify payments server-side before delivering value.
- Treat `status: false` in the response envelope as a failed operation.
- Avoid logging payment metadata in browser consoles.
