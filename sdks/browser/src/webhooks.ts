import type { components } from "./openapi-types.js";

/**
 * A discriminated union of all common Paystack Webhook events.
 */
export type PaystackWebhookEvent = components["schemas"]["WebhookEvent"];

export class Webhooks {
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
