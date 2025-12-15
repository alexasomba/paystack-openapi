import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export type AxiosFetchOptions = {
  axiosInstance?: AxiosInstance;
  axiosConfig?: AxiosRequestConfig;
};

export function createAxiosFetch(options: AxiosFetchOptions = {}): typeof fetch {
  const instance = options.axiosInstance ?? axios.create();
  const baseConfig = options.axiosConfig ?? {};

  return (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;

    const method = (init?.method ?? 'GET').toUpperCase();

    const response = await instance.request({
      ...baseConfig,
      url,
      method,
      data: init?.body as any,
      headers: init?.headers as any,
      signal: init?.signal as any,
      responseType: 'arraybuffer',
      // make axios behave like fetch: don't throw on non-2xx
      validateStatus: () => true,
    });

    // Axios headers can be string | string[]; normalize to a Headers object.
    const headers = new Headers();
    for (const [k, v] of Object.entries(response.headers ?? {})) {
      if (Array.isArray(v)) {
        for (const item of v) headers.append(k, String(item));
      } else if (typeof v !== 'undefined') {
        headers.set(k, String(v));
      }
    }

    return new Response(response.data, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }) as typeof fetch;
}
