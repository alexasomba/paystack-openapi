export * from './client.js';
export * from './operations.js';
export * from './idempotency.js';
export * from './errors.js';

import { createPaystackClient, type PaystackBrowserClientOptions } from './client.js';
import { bindOperations } from './operations.js';

export function createPaystack(options: PaystackBrowserClientOptions) {
  const client = createPaystackClient(options);
  return { client, ...bindOperations(client) };
}
