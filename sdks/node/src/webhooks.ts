import type { components } from "./openapi-types.js";

/**
 * Discriminated Union of all supported Webhook Events.
 * This type is derived from the OpenAPI specification.
 */
export type PaystackWebhookEvent = components["schemas"]["WebhookEvent"];
export type PaymentNotificationWebhookEvent = Extract<
  PaystackWebhookEvent,
  { event: "invoice.create" | "invoice.update" | "invoice.failed" }
>;

/**
 * Utilities for handling Paystack Webhooks
 */
export const Webhooks = {
  /**
   * Verified that a webhook request truly originated from Paystack.
   * Uses HMAC SHA-512 with your Secret Key.
   *
   * @param body The raw request body string (important: use the raw body, not the parsed JSON)
   * @param signature The value of the 'x-paystack-signature' header
   * @param secretKey Your Paystack Secret Key
   */
  async verifySignature(body: string, signature: string, secretKey: string): Promise<boolean> {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secretKey);
    const data = encoder.encode(body);

    const key = await globalThis.crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-512" },
      false,
      ["sign"],
    );

    const signatureBuffer = await globalThis.crypto.subtle.sign("HMAC", key, data);

    const hash = Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return hash === signature;
  },

  /**
   * A helper to parse and validate a webhook event from a raw body string.
   * @param body Raw request body
   */
  parseEvent(body: string): PaystackWebhookEvent {
    return JSON.parse(body) as PaystackWebhookEvent;
  },
};
