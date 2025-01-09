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

export const getEvent = () => {
  return new Promise((resolve, reject) => {
    clientAPI
      .get(api.event.listEvent)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const getDetailEvent = (slug: any) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .get(`${api.event.detailEvent}/${slug.lastSegment}`)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};
