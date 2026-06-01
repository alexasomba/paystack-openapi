import { describe, it, expect } from "vite-plus/test";
import { PaystackResponse, assertOk, toPaystackApiError } from "../src/response.js";
import { PaystackError } from "../src/errors.js";

describe("PaystackResponse", () => {
  it("should provide access to data and meta", () => {
    const data = { status: true, message: "Success", data: { id: 123 } };
    const res = new PaystackResponse(data, undefined, new Response());

    expect(res.status).toBe(true);
    expect(res.message).toBe("Success");
    expect(res.data).toEqual({ id: 123 });
    expect(assertOk(res)).toEqual({ id: 123 });
    expect(toPaystackApiError(res)).toBeUndefined();
  });

  it("should unwrap successful response", () => {
    const data = { status: true, message: "Success", data: { id: 123 } };
    const res = new PaystackResponse(data, undefined, new Response());

    expect(res.unwrap()).toEqual({ id: 123 });
  });

  it("should throw PaystackError on failed status with envelope details", () => {
    const data = {
      status: false,
      message: "Invalid",
      data: null,
      code: "invalid_payload",
      type: "validation_error",
      meta: { field: "amount" },
    };
    const res = new PaystackResponse(
      data,
      undefined,
      new Response(null, {
        status: 200,
        headers: { "x-paystack-request-id": "req_false" },
      }),
    );

    expect(() => res.unwrap()).toThrow(PaystackError);
    try {
      res.unwrap();
    } catch (err) {
      const perr = err as PaystackError;
      expect(perr.message).toContain("Invalid");
      expect(perr.status).toBe(200);
      expect(perr.requestId).toBe("req_false");
      expect(perr.code).toBe("invalid_payload");
      expect(perr.type).toBe("validation_error");
      expect(perr.meta).toEqual({ field: "amount" });
      expect(perr.raw).toBe(data);
      expect(perr.body).toBe(data);
    }
  });

  it("should throw PaystackError on non-2xx Paystack error responses", () => {
    const envelope = {
      status: false,
      message: "Duplicate Transaction Reference",
      code: "duplicate_reference",
      type: "validation_error",
      meta: { nextStep: "Try a new reference" },
    };
    const res = new PaystackResponse(
      undefined,
      envelope,
      new Response(JSON.stringify(envelope), {
        status: 400,
        headers: { "x-paystack-request-id": "req_bad" },
      }),
    );

    expect(() => res.unwrap()).toThrow(PaystackError);
    const error = toPaystackApiError(res);
    expect(error?.message).toContain("Duplicate Transaction Reference");
    expect(error?.status).toBe(400);
    expect(error?.requestId).toBe("req_bad");
    expect(error?.code).toBe("duplicate_reference");
    expect(error?.type).toBe("validation_error");
    expect(error?.meta).toEqual({ nextStep: "Try a new reference" });
    expect(error?.raw).toBe(envelope);
    expect(error?.body).toBe(envelope);
    expect(error?.cause).toBe(envelope);
  });

  it("should preserve transport error causes", () => {
    const cause = new Error("Network Error");
    const res = new PaystackResponse(undefined, cause, new Response(null, { status: 500 }));

    expect(() => res.unwrap()).toThrow(PaystackError);
    const error = toPaystackApiError(res);
    expect(error?.message).toContain("Network Error");
    expect(error?.status).toBe(500);
    expect(error?.cause).toBe(cause);
  });

  it("should use default message when no specific message is found", () => {
    const res = new PaystackResponse(undefined, "Unknown", new Response(null, { status: 404 }));
    expect(() => res.unwrap()).toThrow("Network or HTTP Error");
  });
});
