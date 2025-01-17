import axios, { AxiosError } from 'axios';
// import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';
import { getTokenName } from '../helpers';

export const serverAPI = axios.create({
  baseURL: "https://api-photoslide.vercel.app",
});

const isServer = () => {
  return typeof window === 'undefined';
};

serverAPI.interceptors.request.use((config) => {
  
  if (isServer()) {
    // const token = cookies().get(getTokenName())?.value;
    const token = getCookie(getTokenName());
    // const tokenAnonymous = cookies().get('AnonymousToken')?.value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
