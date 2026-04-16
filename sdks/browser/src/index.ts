export * from "./client.js";
export * from "./operations.js";
export * from "./idempotency.js";
export * from "./errors.js";
export * from "./response.js";
export * from "./webhooks.js";
export * from "./types.js";
export type { paths, operations, components } from "./openapi-types.js";

import { createPaystackClient, type PaystackBrowserClientOptions } from "./client.js";
import { bindOperations } from "./operations.js";
import type { Paystack } from "./types.js";

export function createPaystack(options: PaystackBrowserClientOptions): Paystack {
  const client = createPaystackClient(options);
  return { client, ...bindOperations(client) };
}
