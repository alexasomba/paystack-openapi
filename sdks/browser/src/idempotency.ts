export const DEFAULT_IDEMPOTENCY_HEADER = 'Idempotency-Key';

export type IdempotencyKeyInput =
  | { mode: 'none' }
  | { mode: 'static'; key: string }
  | { mode: 'auto' }
  | { mode: 'custom'; generate: () => string };

function fallbackRandomHex(bytes: number): string {
  const chars = '0123456789abcdef';
  let out = '';
  for (let i = 0; i < bytes * 2; i += 1) out += chars[Math.floor(Math.random() * 16)];
  return out;
}

export function createIdempotencyKey(): string {
  const cryptoObj = (globalThis as any).crypto as Crypto | undefined;
  if (cryptoObj && typeof (cryptoObj as any).randomUUID === 'function') return (cryptoObj as any).randomUUID();

  if (cryptoObj && typeof cryptoObj.getRandomValues === 'function') {
    const buf = new Uint8Array(16);
    cryptoObj.getRandomValues(buf);
    return Array.from(buf)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  return fallbackRandomHex(16);
}

export function hasHeader(headers: HeadersInit | undefined, name: string): boolean {
  if (!headers) return false;
  const target = name.toLowerCase();

  if (headers instanceof Headers) return headers.has(name);

  if (Array.isArray(headers)) {
    return headers.some(([k]) => String(k).toLowerCase() === target);
  }

  for (const k of Object.keys(headers)) {
    if (k.toLowerCase() === target) return true;
  }
  return false;
}

export function setHeader(headers: HeadersInit | undefined, name: string, value: string): Headers {
  const out = new Headers(headers ?? undefined);
  out.set(name, value);
  return out;
}

export function resolveIdempotencyKey(input: IdempotencyKeyInput): string | undefined {
  switch (input.mode) {
    case 'none':
      return undefined;
    case 'static':
      return input.key;
    case 'auto':
      return createIdempotencyKey();
    case 'custom':
      return input.generate();
  }
}
