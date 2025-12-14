export * from './client.js';
export * from './operations.js';
export * from './webhooks.js';

import { createPaystackClient, type PaystackClientOptions } from './client.js';
import { bindOperations } from './operations.js';

export function createPaystack(options: PaystackClientOptions) {
  const client = createPaystackClient(options);
  return { client, ...bindOperations(client) };
}
