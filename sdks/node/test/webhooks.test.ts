import { describe, it, expect } from "vite-plus/test";
import { Webhooks } from "../src/webhooks.js";

describe("Webhook Verification", () => {
  const secret = "sk_test_1234567890abcdef1234567890abcdef12345678";
  const payload = JSON.stringify({
    event: "charge.success",
    data: {
      id: 123,
      domain: "test",
      status: "success",
      amount: 5000,
    },
  });

  const computeSignature = async (p: string, s: string) => {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(s);
    const data = encoder.encode(p);
    const key = await globalThis.crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-512" },
      false,
      ["sign"],
    );
    const signatureBuffer = await globalThis.crypto.subtle.sign("HMAC", key, data);
    return Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  it("should verify a valid signature", async () => {
    const signature = await computeSignature(payload, secret);
    const ok = await Webhooks.verifySignature(payload, signature, secret);
    expect(ok).toBe(true);
  });

  it("should fail for an invalid signature", async () => {
    const ok = await Webhooks.verifySignature(payload, "invalid_signature", secret);
    expect(ok).toBe(false);
  });

  it("should parse typed event", () => {
    const event = Webhooks.parseEvent(payload);
    expect(event.event).toBe("charge.success");
    expect(event.data.id).toBe(123);
  });
});
