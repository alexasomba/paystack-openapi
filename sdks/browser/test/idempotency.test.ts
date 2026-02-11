import { describe, it, expect } from 'vitest';

import { 
	createIdempotencyKey, 
	resolveIdempotencyKey, 
	hasHeader, 
	setHeader 
} from '../src/idempotency.js';

describe('Idempotency Helpers', () => {
	describe('createIdempotencyKey', () => {
		it('should generate a string key', () => {
			const key = createIdempotencyKey();
			expect(typeof key).toBe('string');
			expect(key.length).toBeGreaterThan(0);
		});

		it('should be unique', () => {
			const k1 = createIdempotencyKey();
			const k2 = createIdempotencyKey();
			expect(k1).not.toBe(k2);
		});
	});

	describe('resolveIdempotencyKey', () => {
		it('should resolve none to undefined', () => {
			expect(resolveIdempotencyKey({ mode: 'none' })).toBeUndefined();
		});

		it('should resolve static key', () => {
			expect(resolveIdempotencyKey({ mode: 'static', key: 'fixed' })).toBe('fixed');
		});

		it('should resolve auto key', () => {
			expect(resolveIdempotencyKey({ mode: 'auto' })).toBeTypeOf('string');
		});

		it('should resolve custom generator', () => {
			expect(resolveIdempotencyKey({ mode: 'custom', generate: () => 'custom_val' })).toBe('custom_val');
		});
	});

	describe('Header Helpers', () => {
		it('should identify header existence case-insensitively', () => {
			const headers = { 'Idempotency-Key': 'key123' };
			expect(hasHeader(headers, 'idempotency-key')).toBe(true);
			expect(hasHeader(headers, 'OTHER')).toBe(false);
		});

		it('should set header correctly', () => {
			const headers = { 'Existing': 'val' };
			const updated = setHeader(headers, 'New-Header', 'new_val');
			expect(updated.get('Existing')).toBe('val');
			expect(updated.get('New-Header')).toBe('new_val');
		});
	});
});
