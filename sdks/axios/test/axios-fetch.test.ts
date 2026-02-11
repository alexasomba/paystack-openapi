import { describe, it, expect, vi } from 'vitest';

import { createAxiosFetch } from '../src/axios-fetch.js';

vi.mock('axios', () => {
	return {
		default: {
			create: vi.fn().mockReturnValue({
				request: vi.fn(),
			}),
		},
	};
});

describe('createAxiosFetch', () => {
	it('should adapt axios to fetch-like interface', async () => {
		const mockInstance = {
			request: vi.fn().mockResolvedValue({
				status: 200,
				statusText: 'OK',
				data: new TextEncoder().encode(JSON.stringify({ ok: true })),
				headers: { 'content-type': 'application/json' },
			}),
		};

		const fetch = createAxiosFetch({ axiosInstance: mockInstance as any });
		const response = await fetch('https://api.example.com/foo', {
			method: 'POST',
			body: JSON.stringify({ data: 1 }),
			headers: { 'X-Custom': 'Value' },
		});

		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({ ok: true });
		expect(mockInstance.request).toHaveBeenCalledWith(expect.objectContaining({
			url: 'https://api.example.com/foo',
			method: 'POST',
			data: JSON.stringify({ data: 1 }),
			headers: expect.objectContaining({ 'X-Custom': 'Value' }),
		}));
	});

	it('should handle multi-value headers', async () => {
		const mockInstance = {
			request: vi.fn().mockResolvedValue({
				status: 200,
				headers: { 'set-cookie': ['a=1', 'b=2'] },
				data: new Uint8Array(),
			}),
		};

		const fetch = createAxiosFetch({ axiosInstance: mockInstance as any });
		const response = await fetch('https://api.example.com');
     
		expect(response.headers.get('set-cookie')).toContain('a=1');
		expect(response.headers.get('set-cookie')).toContain('b=2');
	});
});
