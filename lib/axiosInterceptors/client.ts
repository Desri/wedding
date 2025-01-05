import axios, { AxiosError } from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { getTokenName } from '../helpers';

export const clientAPI = axios.create({
  baseURL: "http://localhost:5000",
});

clientAPI.interceptors.request.use((config) => {
  config.headers.DeviceType = 'web';
  config.headers.WebVersion = 2;

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
