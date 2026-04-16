import crypto from "node:crypto";
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
  public static computeSignature(rawBody: string | Buffer | Uint8Array, secret: string) {
    const body = typeof rawBody === "string" ? Buffer.from(rawBody, "utf8") : Buffer.from(rawBody);
    return crypto.createHmac("sha512", secret).update(body).digest("hex");
  }

  /**
   * Verifies that the signature in the request header matches the computed signature.
   */
  public static verifySignature(input: PaystackWebhookSignatureInput): boolean {
    const expected = this.computeSignature(input.rawBody, input.secret);
    const provided = (input.signature ?? "").trim().toLowerCase();

    if (!provided) return false;

    const expectedBuf = Buffer.from(expected, "utf8");
    const providedBuf = Buffer.from(provided, "utf8");

    if (expectedBuf.length !== providedBuf.length) return false;

    return crypto.timingSafeEqual(expectedBuf, providedBuf);
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
) => Webhooks.computeSignature(rawBody, secret);

/** @deprecated Use Webhooks.verifySignature */
export const verifyPaystackWebhookSignature = (input: PaystackWebhookSignatureInput) =>
  Webhooks.verifySignature(input);
