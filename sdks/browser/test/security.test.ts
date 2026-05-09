import { describe, expect, it, vi } from "vite-plus/test";

import { createPaystack, createPaystackClient } from "../src/index.js";

describe("browser key safety", () => {
  it("accepts public keys", () => {
    expect(createPaystackClient({ apiKey: "pk_test_contract" })).toBeDefined();
    expect(createPaystack({ apiKey: "pk_live_contract" })).toBeDefined();
  });

  it("rejects secret keys at runtime", () => {
    expect(() => createPaystackClient({ apiKey: "sk_test_contract" })).toThrow(/public key/i);
    expect(() => createPaystack({ apiKey: "sk_live_contract" })).toThrow(/secret key/i);
  });

  it("preserves base URL and custom headers for valid public keys", async () => {
    const fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ status: true, data: [] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const paystack = createPaystack({
      apiKey: "pk_test_contract",
      baseUrl: "https://mock.paystack.test",
      fetch,
      headers: { "X-Test-Suite": "browser" },
    });

    await paystack.transaction.list();

    const [input, init] = fetch.mock.calls[0];
    const url = input instanceof Request ? input.url : String(input);
    const headers = input instanceof Request ? input.headers : new Headers(init?.headers);

    expect(url).toContain("https://mock.paystack.test/transaction");
    expect(headers.get("Authorization")).toBe("Bearer pk_test_contract");
    expect(headers.get("X-Test-Suite")).toBe("browser");
  });
});
