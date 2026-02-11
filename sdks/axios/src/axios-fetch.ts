import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export interface AxiosFetchOptions {
  axiosInstance?: AxiosInstance;
  axiosConfig?: AxiosRequestConfig;
}

export function createAxiosFetch(options: AxiosFetchOptions = {}): typeof fetch {
	const instance = options.axiosInstance ?? axios.create();
	const baseConfig = options.axiosConfig ?? {};

	return (async (input: RequestInfo | URL, init?: RequestInit) => {
		const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;

		const method = (init?.method ?? (input instanceof Request ? input.method : 'GET')).toUpperCase();
		const inputHeaders = init?.headers ?? (input instanceof Request ? input.headers : undefined);
		const signal = init?.signal ?? (input instanceof Request ? input.signal : undefined);
		const rawData = init?.body ?? (input instanceof Request ? input.body : undefined);
		
		// Axios doesn't natively support ReadableStream for data in all environments without extra config.
		// If it's a ReadableStream (from a Request object), we might need to handle it or cast it.
		// For now, we pass it as-is, but we've fixed the scope of headers and signal.
		const data = rawData;

		const response = await instance.request({
			...baseConfig,
			url,
			method,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			data: data as any,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			headers: inputHeaders as any,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			signal: signal as any,
			responseType: 'arraybuffer',
			// make axios behave like fetch: don't throw on non-2xx
			validateStatus: () => true,
		});

		// Axios headers can be string | string[]; normalize to a Headers object.
		const responseHeaders = new Headers();
		for (const [k, v] of Object.entries(response.headers ?? {})) {
			if (Array.isArray(v)) {
				for (const item of v) responseHeaders.append(k, String(item));
			} else if (typeof v !== 'undefined') {
				responseHeaders.set(k, String(v));
			}
		}

		return new Response(response.data, {
			status: response.status,
			statusText: response.statusText,
			headers: responseHeaders,
		});
	}) as typeof fetch;
}
