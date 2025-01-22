import { api } from '../../constant/api';
import { AxiosError } from 'axios';
import { clientAPI } from '../../lib/axiosInterceptors/client';


export const uploadAlbum = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .post(api.album.uploadImage, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const getListAlbum = (slug: any) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .get(`${api.album.listAlbum}/${slug.lastSegment}`)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const removeAlbum = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .post(api.album.removeAlbum, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};
