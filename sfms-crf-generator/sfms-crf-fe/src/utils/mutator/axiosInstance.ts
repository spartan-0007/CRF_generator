import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export const AXIOS_INSTANCE = axios.create({ 
  baseURL: '' // Root-relative paths work for App Router
});

// Define a type for the config that includes signal
type CustomRequestConfig = AxiosRequestConfig & {
  signal?: AbortSignal;
};

export const customInstance = <T>(
  config: CustomRequestConfig
): Promise<T> => {
  return AXIOS_INSTANCE({
    ...config,
    // The signal is passed through directly
  }).then((response: AxiosResponse) => response.data);
};

export default customInstance;