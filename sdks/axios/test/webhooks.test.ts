import { describe, it, expect } from 'vitest';

import { verifyPaystackWebhookSignature } from '../src/webhooks.js';

describe('Webhook Verification', () => {
	const secret = 'sk_test_123';
	const payload = JSON.stringify({ event: 'charge.success', data: { id: 1 } });
  
	// Computed using: crypto.createHmac('sha512', 'sk_test_123').update(payload).digest('hex')
	const validSignature = '2a57b7c3a88ee0635f8dcf86cb7c6f972841e865ba9fb14574828b098e81c09bde7462720c077c7b0745f170df361d50420822619451558d75d7ac4bbffe0b56';

	it('should return true for a valid signature', () => {
		expect(verifyPaystackWebhookSignature({
			secret,
			signature: validSignature,
			rawBody: payload
		})).toBe(true);
	});

	it('should return false for an invalid signature', () => {
		expect(verifyPaystackWebhookSignature({
			secret,
			signature: 'invalid_sig',
			rawBody: payload
		})).toBe(false);
	});

	it('should handle Buffer payload (stringified)', () => {
		const bufferPayload = Buffer.from(payload);
		expect(verifyPaystackWebhookSignature({
			secret,
			signature: validSignature,
			rawBody: bufferPayload
		})).toBe(true);
	});

	it('should return false if signature is missing', () => {
		expect(verifyPaystackWebhookSignature({
			secret,
			signature: '',
			rawBody: payload
		})).toBe(false);
	});
});
