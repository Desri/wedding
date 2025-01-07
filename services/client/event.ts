import { api } from '../../constant/api';
import { AxiosError } from 'axios';
import { clientAPI } from '../../lib/axiosInterceptors/client';

export const createEvent = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .post(api.event.createEvent, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};
