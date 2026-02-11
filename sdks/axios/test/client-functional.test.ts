import { describe, it, expect, vi, beforeEach } from 'vitest';

import { createPaystack } from '../src/index.js';

describe('Client Functional Tests', () => {
	const secretKey = 'sk_test_123';

	beforeEach(() => {
		vi.clearAllMocks();
	});

	async function readBody(data: any): Promise<any> {
		if (typeof data === 'string') {
			return data.startsWith('[object') ? {} : JSON.parse(data);
		}
		if (data instanceof ReadableStream || (data !== null && data !== undefined && typeof (data as { getReader?: unknown }).getReader === 'function')) {
			const reader = (data as ReadableStream).getReader();
			let result = '';
			const decoder = new TextDecoder();
			while (true) {
				const { done, value } = await reader.read();
				if (done === true) break;
				result += decoder.decode(value);
			}
			return JSON.parse(result);
		}
		return data;
	}

	describe('Retry Logic', () => {
		it('should retry on 503 and eventually succeed', async () => {
			const mockRequest = vi.fn()
				.mockResolvedValueOnce({
					status: 503,
					headers: {},
					data: new Uint8Array(),
				})
				.mockResolvedValueOnce({
					status: 200,
					headers: { 'content-type': 'application/json' },
					data: new TextEncoder().encode(JSON.stringify({ status: true, data: { ok: true } })),
				});

			const mockInstance = { request: mockRequest } as any;

			const paystack = createPaystack({ 
				secretKey, 
				axiosInstance: mockInstance,
				retry: { minDelayMs: 1, maxDelayMs: 2 } 
			});

			const { data } = await paystack.transaction_list();
      
			expect(mockRequest).toHaveBeenCalledTimes(2);
			expect(data).toEqual({ status: true, data: { ok: true } });
		});

		it('should fail after max retries', async () => {
			const mockRequest = vi.fn().mockResolvedValue({
				status: 503,
				headers: {},
				data: new Uint8Array(),
			});

			const mockInstance = { request: mockRequest } as any;

			const paystack = createPaystack({ 
				secretKey, 
				axiosInstance: mockInstance,
				retry: { retries: 2, minDelayMs: 1, maxDelayMs: 2 } 
			});

			const { response } = await paystack.transaction_list();
			expect(mockRequest).toHaveBeenCalledTimes(3); 
			expect(response.status).toBe(503);
		});
	});

	describe('Timeout', () => {
		it('should abort request if it exceeds timeoutMs', async () => {
			const mockRequest = vi.fn().mockImplementation(({ signal }) => new Promise((resolve, reject) => {
				const timer = setTimeout(() => resolve({ status: 200, data: new Uint8Array() }), 100);
				if (signal !== undefined && signal !== null) {
					signal.addEventListener('abort', () => {
						clearTimeout(timer);
						reject(new Error('Aborted'));
					});
				}
			}));

			const mockInstance = { request: mockRequest } as any;

			const paystack = createPaystack({ 
				secretKey, 
				axiosInstance: mockInstance,
				timeoutMs: 10 
			});

			await expect(paystack.transaction_list()).rejects.toThrow();
		});
	});

	describe('Customers Module', () => {
		it('should correctly format customer_create request', async () => {
			const mockRequest = vi.fn().mockResolvedValue({
				status: 200,
				headers: { 'content-type': 'application/json' },
				data: new TextEncoder().encode(JSON.stringify({ status: true })),
			});

			const mockInstance = { request: mockRequest } as any;
			const paystack = createPaystack({ secretKey, axiosInstance: mockInstance });

			await paystack.customer_create({
				body: {
					email: 'customer@example.com',
					first_name: 'John',
					last_name: 'Doe'
				}
			});

			const call = mockRequest.mock.calls[0][0];
			expect(call.url).toContain('/customer');
			expect(call.method).toBe('POST');
      
			const body = await readBody(call.data);
			expect(body).toEqual({
				email: 'customer@example.com',
				first_name: 'John',
				last_name: 'Doe'
			});
		});

		it('should correctly format customer_list request with query params', async () => {
			const mockRequest = vi.fn().mockResolvedValue({
				status: 200,
				headers: { 'content-type': 'application/json' },
				data: new TextEncoder().encode(JSON.stringify({ status: true })),
			});

			const mockInstance = { request: mockRequest } as any;
			const paystack = createPaystack({ secretKey, axiosInstance: mockInstance });

			await paystack.customer_list({
				params: {
					query: { perPage: 50, page: 1 }
				} as any
			});

			const call = mockRequest.mock.calls[0][0];
			const url = new URL(call.url, 'https://api.paystack.co');
			expect(url.searchParams.get('perPage')).toBe('50');
			expect(url.searchParams.get('page')).toBe('1');
		});
	});
});
