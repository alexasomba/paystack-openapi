export * from './axios-fetch.js';
export * from './client.js';
export * from './operations.js';
export * from './webhooks.js';
export * from './idempotency.js';
export * from './errors.js';

import { createPaystackClient, type PaystackAxiosClientOptions } from './client.js';
import { bindOperations } from './operations.js';

export function createPaystack(options: PaystackAxiosClientOptions) {
  const client = createPaystackClient(options);
  return { client, ...bindOperations(client) };
}
