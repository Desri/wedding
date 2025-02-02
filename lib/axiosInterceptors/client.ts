import axios, { AxiosError } from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { getTokenName } from '../helpers';

export const clientAPI = axios.create({
  baseURL: "https://api-photoslide.vercel.app",
});

clientAPI.interceptors.request.use((config) => {
  const token = getCookie(getTokenName());
  const tokenAnonymous = getCookie('AnonymousToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers.Anonymous = tokenAnonymous;
  }
  return config;
});

clientAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // check conditions to refresh token
    if (error.response?.status === 401) {
      deleteCookie(getTokenName());
      localStorage.clear();
      location.reload();
    }
    return Promise.reject(error);
  }
);
