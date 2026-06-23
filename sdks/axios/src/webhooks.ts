import { timingSafeEqual } from "./crypto.js";
import type { components } from "./openapi-types.js";

/**
 * A discriminated union of all common Paystack Webhook events.
 */
export type PaystackWebhookEvent = components["schemas"]["WebhookEvent"];
export type PaymentNotificationWebhookEvent = Extract<
  PaystackWebhookEvent,
  { event: "invoice.create" | "invoice.update" | "invoice.failed" }
>;

export interface PaystackWebhookSignatureInput {
  rawBody: string | Buffer | Uint8Array;
  signature: string;
  secret: string;
}

export class Webhooks {
  /**
   * Computes the HMAC SHA512 signature of a webhook payload.
   */
  public static async computeSignature(
    rawBody: string | Buffer | Uint8Array,
    secret: string,
  ): Promise<string> {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const data = typeof rawBody === "string" ? encoder.encode(rawBody) : rawBody;

    const key = await globalThis.crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-512" },
      false,
      ["sign"],
    );

    const signatureBuffer = await globalThis.crypto.subtle.sign("HMAC", key, data as BufferSource);

    return Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  /**
   * Verifies that the signature in the request header matches the computed signature.
   */
  public static async verifySignature(input: PaystackWebhookSignatureInput): Promise<boolean> {
    const expected = await this.computeSignature(input.rawBody, input.secret);
    const provided = (input.signature ?? "").trim().toLowerCase();

    if (!provided) return false;

    const encoder = new TextEncoder();
    const expectedBuf = encoder.encode(expected);
    const providedBuf = encoder.encode(provided);

    return timingSafeEqual(expectedBuf, providedBuf);
  }

  /**
   * Parses and types a Paystack webhook event payload.
   *
   * @example
   * const event = Webhooks.parseEvent(req.body);
   * if (event.event === 'charge.success') {
   *   console.log(event.data.amount);
   * }
   */
  public static parseEvent(payload: unknown): PaystackWebhookEvent {
    return payload as PaystackWebhookEvent;
  }
}

/** @deprecated Use Webhooks.computeSignature */
export const computePaystackWebhookSignature = (
  rawBody: string | Buffer | Uint8Array,
  secret: string,
): Promise<string> => Webhooks.computeSignature(rawBody, secret);

/** @deprecated Use Webhooks.verifySignature */
export const verifyPaystackWebhookSignature = (
  input: PaystackWebhookSignatureInput,
): Promise<boolean> => Webhooks.verifySignature(input);
