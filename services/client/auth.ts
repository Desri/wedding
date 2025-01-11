import { api } from '../../constant/api';
import { AxiosError } from 'axios';
// import { deleteCookie, hasCookie } from 'cookies-next';
import { clientAPI } from '../../lib/axiosInterceptors/client';
import { deleteCookie } from 'cookies-next';
import { getTokenName } from '../../lib/helpers';

export const login = ({ formData }: { formData: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .post(api.auth.login, formData)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const registration = ({ formData }: { formData: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .post(api.auth.register, formData)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const forgotPassword = ({ formData }: { formData: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .post(api.auth.forgotPassword, formData)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const getProfile = () => {
  return new Promise((resolve, reject) => {
    clientAPI
      .get(api.auth.profile)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const addPlan = ({ payload }: { payload: any }) => {
  return new Promise((resolve, reject) => {
    clientAPI
      .post(api.auth.plan, payload)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export const userLogout = () => {
  deleteCookie(getTokenName());
};

// export const verifyOTP = ({
//   Code,
//   Token,
// }: {
//   Code: string;
//   Token?: string | null;
// }) => {
//   return new Promise((resolve, reject) => {
//     clientAPI
//       .post(
//         api.auth.verifyOtp,
//         {
//           Code,
//         },
//         {
//           headers: {
//             Authorization: 'Bearer ' + Token,
//           },
//         }
//       )
//       .then((res) => {
//         resolve(res?.data?.Data);
//       })
//       .catch((err: AxiosError) => {
//         reject(err.response?.data);
//       });
//   });
// };

// export const collectPoint = ({Anonymous}: {Anonymous: any}) => {
//   return new Promise((resolve, reject) => {
//     clientAPI
//       .post(api.article.collectPoint,
//         {},
//         {
//           headers: {
//             Anonymous: Anonymous,
//           },
//         }
//       )
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err: AxiosError) => {
//         reject(err);
//       });
//   });
// };

// export const resendOTP = ({ Token }: { Token?: string | null }) => {
//   return new Promise((resolve, reject) => {
//     clientAPI
//       .get(api.auth.resendOtp, {
//         headers: {
//           Authorization: 'Bearer ' + Token,
//         },
//       })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err: AxiosError) => {
//         reject(err.response?.data);
//       });
//   });
// };

// export const loginOthers = ({
//   Token,
//   Type,
// }: {
//   Token: string;
//   Type: string;
// }) => {
//   return new Promise((resolve, reject) => {
//     clientAPI
//       .get(api.auth.connect, {
//         params: {
//           Token,
//           Type,
//         },
//       })
//       .then((res) => {
//         resolve(res?.data?.Data);
//       })
//       .catch((err) => {
//         reject(err.response?.data);
//       });
//   });
// };

// export const checkReferralCode = ({ Code }: { Code: string }) => {
//   return new Promise((resolve, reject) => {
//     clientAPI
//       .post(process.env.NEXT_PUBLIC_BASE_API_V3 + api.auth.referralCode, {
//         Code,
//       })
//       .then((res) => {
//         resolve(res?.data?.Data);
//       })
//       .catch((err: AxiosError) => {
//         reject(err.response?.data);
//       });
//   });
// };

// export const isLoggedIn = () => {
//   return hasCookie(getTokenName());
// };

// export const userLogout = () => {
//   deleteCookie(getTokenName());
// };
