import { describe, it, expect } from "vite-plus/test";
import { PaystackResponse } from "../src/response.js";
import { PaystackError } from "../src/errors.js";

describe("PaystackResponse", () => {
  it("should provide access to data and meta", () => {
    const data = { status: true, message: "Success", data: { id: 123 } };
    const res = new PaystackResponse(data, undefined, new Response());

    expect(res.status).toBe(true);
    expect(res.message).toBe("Success");
    expect(res.data).toEqual({ id: 123 });
  });

  it("should unwrap successful response", () => {
    const data = { status: true, message: "Success", data: { id: 123 } };
    const res = new PaystackResponse(data, undefined, new Response());

    expect(res.unwrap()).toEqual({ id: 123 });
  });

  it("should throw PaystackError on failed status even if data exists", () => {
    const data = { status: false, message: "Invalid", data: null };
    const res = new PaystackResponse(data, undefined, new Response(null, { status: 400 }));

    expect(() => res.unwrap()).toThrow(PaystackError);
    try {
      res.unwrap();
    } catch (err) {
      const perr = err as PaystackError;
      expect(perr.message).toContain("Invalid");
      expect(perr.status).toBe(400);
    }
  });

  it("should throw PaystackError on transport error", () => {
    const res = new PaystackResponse(
      undefined,
      { message: "Network Error" } as any,
      new Response(null, { status: 500 }),
    );

    expect(() => res.unwrap()).toThrow(PaystackError);
    try {
      res.unwrap();
    } catch (err) {
      const perr = err as PaystackError;
      expect(perr.message).toContain("Network Error");
      expect(perr.status).toBe(500);
    }
  });

  it("should use default message when no specific message is found", () => {
    const res = new PaystackResponse(undefined, "Unknown", new Response(null, { status: 404 }));
    expect(() => res.unwrap()).toThrow("Network or HTTP Error");
  });
});
