import axios, { AxiosError } from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { getTokenName } from '../helpers';

export const serverAPI = axios.create({
  baseURL: "https://api-photoslide.vercel.app",
});

const isServer = () => {
  return typeof window === 'undefined';
};

serverAPI.interceptors.request.use((config) => {
  if (isServer()) {
    const token = getCookie(getTokenName());
    const tokenAnonymous = getCookie('AnonymousToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Anonymous = tokenAnonymous;
    }
  }
  return config;
});

serverAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // check conditions to refresh token
    if (error.response?.status === 401) {
    }
    return Promise.reject(error);
  }
);
