import { describe, it, expect } from "vite-plus/test";

import { getPaystackRequestId, PaystackError, isPaystackApiError } from "../src/errors.js";

describe("Error Handling", () => {
  describe("getPaystackRequestId", () => {
    it("should extract request ID from Headers object", () => {
      const h = new Headers({ "x-paystack-request-id": "req_123" });
      expect(getPaystackRequestId(h)).toBe("req_123");
    });

    it("should extract request ID from plain object", () => {
      expect(getPaystackRequestId({ "x-request-id": "req_456" })).toBe("req_456");
    });

    it("should return undefined if no request ID header present", () => {
      expect(getPaystackRequestId({})).toBeUndefined();
    });
  });

  describe("PaystackError", () => {
    it("should capture all relevant fields", () => {
      const err = new PaystackError({
        message: "Failed",
        status: 400,
        requestId: "req_123",
        code: "some_error",
        type: "api_error",
        meta: { detail: "something" },
      });

      expect(err.message).toContain("Failed");
      expect(err.message).toContain("req_123");
      expect(err.status).toBe(400);
      expect(err.requestId).toBe("req_123");
      expect(err.code).toBe("some_error");
      expect(err.type).toBe("api_error");
      expect(err.meta).toEqual({ detail: "something" });
      expect(isPaystackApiError(err)).toBe(true);
    });

    it("should identify processor errors", () => {
      const err = new PaystackError({
        message: "Declined",
        type: "processor_error",
      });
      expect(err.isProcessorError()).toBe(true);
      expect(err.isValidationError()).toBe(false);
    });

    it("should identify validation errors", () => {
      const err = new PaystackError({
        message: "Invalid",
        type: "validation_error",
      });
      expect(err.isValidationError()).toBe(true);
      expect(err.isProcessorError()).toBe(false);
    });
  });
});
