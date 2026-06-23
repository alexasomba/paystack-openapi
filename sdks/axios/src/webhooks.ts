import { hmac } from "@noble/hashes/hmac.js";
import { sha512 } from "@noble/hashes/sha2.js";
import { bytesToHex } from "@noble/hashes/utils.js";
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
    const encoder = new TextEncoder();
    const secretBytes = encoder.encode(secret);
    const bodyBytes = typeof rawBody === "string" ? encoder.encode(rawBody) : rawBody;
    return bytesToHex(hmac(sha512, secretBytes, bodyBytes));
  }

  /**
   * Verifies that the signature in the request header matches the computed signature.
   */
  public static verifySignature(input: PaystackWebhookSignatureInput): boolean {
    const expected = this.computeSignature(input.rawBody, input.secret);
    const provided = (input.signature ?? "").trim().toLowerCase();

    if (!provided) return false;

    const expectedBuf = new TextEncoder().encode(expected);
    const providedBuf = new TextEncoder().encode(provided);

    if (expectedBuf.length !== providedBuf.length) return false;

    let result = 0;
    for (let i = 0; i < expectedBuf.length; i++) {
      result |= expectedBuf[i] ^ providedBuf[i];
    }
    return result === 0;
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
