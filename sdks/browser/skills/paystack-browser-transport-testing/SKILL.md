---
name: paystack-browser-transport-testing
description: Use when testing or customizing Paystack Browser SDK transport behavior with custom fetch, baseUrl, public-key auth, browser mocks, timeouts, or retries.
license: MIT
compatibility: "Modern browsers and bundlers; package tooling/SSR builds require Node.js >=22.0.0; ESM package; public-key frontend runtime only."
---

# Paystack Browser Transport and Testing

The browser SDK accepts a custom `fetch`, `baseUrl`, headers, timeout, retry, and idempotency options. It rejects keys that look like Paystack secret keys.

## Custom fetch

Use `fetch` injection for browser tests, request tracing, or controlled mock responses.

```ts
const paystack = createPaystack({
  apiKey: "pk_test_123",
  fetch: async () =>
    Response.json({
      status: true,
      message: "OK",
      data: { reference: "ref_123" },
    }),
});
```

## Browser test setup

- Provide `fetch`, `Headers`, `Request`, and `Response` globals if your test runner does not.
- Use public keys in tests; secret-looking keys should throw during client creation.
- Mock Paystack envelopes, not only raw data payloads.

## Local base URL

Use `baseUrl` only for local mocks, a controlled proxy, or integration tests.

```ts
const paystack = createPaystack({
  apiKey: "pk_test_123",
  baseUrl: "http://127.0.0.1:8787",
});
```

## Best practices

- Keep tests honest about browser safety: privileged flows belong on a backend.
- Assert that secret keys are rejected.
- Avoid putting sensitive headers in frontend test fixtures.
- Use low retry counts or fake timers for retry tests.
