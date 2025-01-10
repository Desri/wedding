import { api } from '../../constant/api';
import { serverAPI } from '../../lib/axiosInterceptors/server';

export const revalidate = 3600;

export const getProfile = async () => {
  try {
    console.log(api.auth.profile)
    const res = await serverAPI.get('https://api-photoslide.vercel.app/api/profile');
    return res.data;
  } catch (error) {
    console.error('Error fetching profile:');
    throw error;
  }
}
