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

export const updateSlideShow = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .put(api.event.updateSlideshow, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const updateModeration = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .put(api.event.updateModeration, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const updateAppearance = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .put(api.event.updateAppearance, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const updateWelcomeScreen = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .put(api.event.updateWelcomeScreen, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const updateGeneralEvent = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .put(api.event.updateGeneral, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const uploadImage = ({ formData }: { formData: any }) => {
  return new Promise((resolve, reject) => {
    fetch(api.upload.image, {
      method: 'post',
      body: formData,
    })
    .then((res: any) => {
      resolve(res.json());
    })
    .catch((err: AxiosError) => {
      reject(err);
    });
  });
};
