import { cookies } from 'next/headers';
import { getTokenName } from './helpers';

export const isLoggedIn = async () => {
  const cookiesData = await cookies();
  return cookiesData.get(getTokenName())?.value;
};
