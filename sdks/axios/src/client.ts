import createClient, { type Client } from 'openapi-fetch';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { paths } from './openapi-types.js';
import { createAxiosFetch } from './axios-fetch.js';

export type PaystackPaths = paths;
export type PaystackClient = Client<PaystackPaths>;

export type PaystackAxiosClientOptions = {
  secretKey: string;
  baseUrl?: string;
  headers?: Record<string, string>;
  axiosInstance?: AxiosInstance;
  axiosConfig?: AxiosRequestConfig;
};

export function createPaystackClient(options: PaystackAxiosClientOptions): PaystackClient {
  const baseUrl = options.baseUrl ?? 'https://api.paystack.co';

  const axiosFetch = createAxiosFetch({
    axiosInstance: options.axiosInstance,
    axiosConfig: options.axiosConfig,
  });

  return createClient<PaystackPaths>({
    baseUrl,
    fetch: axiosFetch,
    headers: {
      Authorization: `Bearer ${options.secretKey}`,
      ...options.headers,
    },
  });
}
