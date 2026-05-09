import { describe, expect, it, vi } from "vite-plus/test";

import { createPaystack } from "../src/index.js";

describe("browser contract fixtures", () => {
  it("uses the shared transaction initialize request shape", async () => {
    const request = {
      email: "contract@example.com",
      amount: 5000,
    };
    const response = {
      status: true,
      message: "Authorization URL created",
      data: {
        authorization_url: "https://checkout.paystack.com/contract",
        access_code: "access_contract",
        reference: "ref_contract",
      },
    };

    const fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const paystack = createPaystack({
      apiKey: "pk_test_contract",
      baseUrl: "https://mock.paystack.test",
      fetch,
      idempotencyKey: "contract-idempotency",
    });

    await paystack.transaction.initialize({
      body: request,
    });

    const [input, init] = fetch.mock.calls[0];
    const url = input instanceof Request ? input.url : String(input);
    const headers = new Headers(input instanceof Request ? input.headers : undefined);
    new Headers(init?.headers).forEach((value, key) => headers.set(key, value));
    const body = input instanceof Request ? await input.clone().text() : String(init?.body);

    expect(url).toBe("https://mock.paystack.test/transaction/initialize");
    expect(headers.get("Authorization")).toBe("Bearer pk_test_contract");
    expect(headers.get("Idempotency-Key")).toBe("contract-idempotency");
    expect(JSON.parse(body)).toEqual(request);
  });
});
