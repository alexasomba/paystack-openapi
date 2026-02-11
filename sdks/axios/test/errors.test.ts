import { describe, it, expect } from 'vitest';

import { 
	getPaystackRequestId, 
	PaystackApiError, 
	toPaystackApiError, 
	assertOk, 
	isPaystackApiError 
} from '../src/errors.js';

describe('Error Handling', () => {
	describe('getPaystackRequestId', () => {
		it('should extract request ID from Headers object', () => {
			const h = new Headers({ 'x-paystack-request-id': 'req_123' });
			expect(getPaystackRequestId(h)).toBe('req_123');
		});

		it('should extract request ID from plain object', () => {
			expect(getPaystackRequestId({ 'x-request-id': 'req_456' })).toBe('req_456');
		});

		it('should return undefined if no request ID header present', () => {
			expect(getPaystackRequestId({})).toBeUndefined();
		});
	});

	describe('PaystackApiError', () => {
		it('should capture all relevant fields', () => {
			const err = new PaystackApiError('Failed', {
				status: 400,
				url: 'https://api.paystack.co/foo',
				requestId: 'req_123',
				error: { code: 'some_error' }
			});

			expect(err.message).toBe('Failed');
			expect(err.status).toBe(400);
			expect(err.url).toBe('https://api.paystack.co/foo');
			expect(err.requestId).toBe('req_123');
			expect(err.error).toEqual({ code: 'some_error' });
			expect(isPaystackApiError(err)).toBe(true);
		});
	});

	describe('toPaystackApiError', () => {
		it('should convert error result to PaystackApiError', () => {
			const result = {
				error: { message: 'Invalid' },
				response: new Response(null, { 
					status: 401,
					headers: { 'x-paystack-request-id': 'req_fixme' }
				})
			};

			const err = toPaystackApiError(result);
			expect(err).toBeInstanceOf(PaystackApiError);
			expect(err?.status).toBe(401);
			expect(err?.requestId).toBe('req_fixme');
		});

		it('should return undefined if there is no error', () => {
			const result = {
				data: { ok: true },
				response: new Response()
			};
			expect(toPaystackApiError(result)).toBeUndefined();
		});
	});

	describe('assertOk', () => {
		it('should throw PaystackApiError on error', () => {
			const result = {
				error: { message: 'Bad' },
				response: new Response(null, { status: 500 })
			};
			expect(() => assertOk(result)).toThrow(PaystackApiError);
		});

		it('should return data on success', () => {
			const result = {
				data: { status: true },
				response: new Response()
			};
			expect(assertOk(result)).toEqual({ status: true });
		});
	});
});
