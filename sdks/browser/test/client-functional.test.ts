import { describe, it, expect, vi, beforeEach } from 'vitest';

import { createPaystack } from '../src/index.js';

describe('Client Functional Tests', () => {
	const apiKey = 'pk_test_123';

	beforeEach(() => {
		vi.clearAllMocks();
	});

	async function getRequestInfo(mockCall: any[]) {
		const [input, init] = mockCall;
		if (input instanceof Request) {
			return {
				url: input.url,
				method: input.method,
				body: await input.clone().text(),
				headers: input.headers,
			};
		}
		return {
			url: typeof input === 'string' ? input : input.toString(),
			method: init?.method ?? 'GET',
			body: (init?.body !== undefined && init?.body !== null) ? String(init.body) : undefined,
			headers: new Headers(init?.headers),
		};
	}

	describe('Retry Logic', () => {
		it('should retry on 503 and eventually succeed', async () => {
			const mockFetch = vi.fn()
				.mockResolvedValueOnce(new Response(null, { status: 503 }))
				.mockResolvedValueOnce(new Response(JSON.stringify({ status: true, data: { ok: true } }), { 
					status: 200,
					headers: { 'Content-Type': 'application/json' }
				}));

			const paystack = createPaystack({ 
				apiKey, 
				fetch: mockFetch,
				retry: { minDelayMs: 1, maxDelayMs: 2 } 
			});

			const { data } = await paystack.transaction_list();
      
			expect(mockFetch).toHaveBeenCalledTimes(2);
			expect(data).toEqual({ status: true, data: { ok: true } });
		});

		it('should fail after max retries', async () => {
			const mockFetch = vi.fn().mockResolvedValue(new Response(null, { status: 503 }));

			const paystack = createPaystack({ 
				apiKey, 
				fetch: mockFetch,
				retry: { retries: 2, minDelayMs: 1, maxDelayMs: 2 } 
			});

			const { response } = await paystack.transaction_list();
			expect(mockFetch).toHaveBeenCalledTimes(3); 
			expect(response.status).toBe(503);
		});
	});

	describe('Timeout', () => {
		it('should abort request if it exceeds timeoutMs', async () => {
			const mockFetch = vi.fn().mockImplementation((input, init) => new Promise((resolve, reject) => {
				const timer = setTimeout(() => resolve(new Response()), 100);
				if (init?.signal !== undefined && init?.signal !== null) {
					init.signal.addEventListener('abort', () => {
						clearTimeout(timer);
						reject(new Error('Aborted'));
					});
				}
			}));

			const paystack = createPaystack({ 
				apiKey, 
				fetch: mockFetch,
				timeoutMs: 10 
			});

			await expect(paystack.transaction_list()).rejects.toThrow();
		});
	});

	describe('Transactions Module', () => {
		it('should correctly format transaction_initialize request', async () => {
			const mockFetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ status: true }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}));

			const paystack = createPaystack({ apiKey, fetch: mockFetch });

			await paystack.transaction_initialize({
				body: {
					email: 'test@example.com',
					amount: 10000,
				}
			});

			const info = await getRequestInfo(mockFetch.mock.calls[0]);
			expect(info.url).toContain('/transaction/initialize');
			expect(info.method).toBe('POST');
			expect(JSON.parse(info.body!)).toEqual({
				email: 'test@example.com',
				amount: 10000,
			});
		});

		it('should correctly format transaction_verify request', async () => {
			const mockFetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ status: true }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}));

			const paystack = createPaystack({ apiKey, fetch: mockFetch });

			await paystack.transaction_verify({
				params: {
					path: { reference: 'REF_123' }
				}
			});

			const info = await getRequestInfo(mockFetch.mock.calls[0]);
			expect(info.url).toContain('/transaction/verify/REF_123');
			expect(info.method).toBe('GET');
		});
	});
});
