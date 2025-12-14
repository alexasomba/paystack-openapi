import createClient, { type Client } from 'openapi-fetch';
import type { paths } from './openapi-types.js';

export type PaystackPaths = paths;
export type PaystackClient = Client<PaystackPaths>;

export type PaystackClientOptions = {
  secretKey: string;
  baseUrl?: string;
  fetch?: typeof fetch;
  headers?: Record<string, string>;
};

export function createPaystackClient(options: PaystackClientOptions): PaystackClient {
  const baseUrl = options.baseUrl ?? 'https://api.paystack.co';

  return createClient<PaystackPaths>({
    baseUrl,
    fetch: options.fetch,
    headers: {
      Authorization: `Bearer ${options.secretKey}`,
      ...options.headers,
    },
  });
}
