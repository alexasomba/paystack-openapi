import axios from 'axios';
import { createAxiosFetch } from './sdks/axios/src/axios-fetch.js';

const mockInstance = {
  request: (config) => {
    console.log('Axios request config method:', config.method);
    return Promise.resolve({
      status: 200,
      data: new Uint8Array(),
      headers: {},
    });
  }
};

const fetch = createAxiosFetch({ axiosInstance: mockInstance });

console.log('--- Calling with explicitly set POST ---');
await fetch('https://example.com', { method: 'POST' });

console.log('--- Calling with default (should be GET) ---');
await fetch('https://example.com');
