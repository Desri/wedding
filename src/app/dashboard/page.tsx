import DashboardComponent from '@/components/Dashboard';
import { getTokenName } from '../../../lib/helpers';
import { cookies } from 'next/headers';

const Dashboard = async () => {
  const cookiesData = await cookies();
  const getProfile = async () => {
    const res = await fetch('https://api-photoslide.vercel.app/api/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cookiesData.get(getTokenName())?.value}`,
        'Content-Type': 'application/json',
      },
    });
    return res.json()
  }
  const getListEvent = async () => {
    const res = await fetch('https://api-photoslide.vercel.app/api/event/list', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cookiesData.get(getTokenName())?.value}`,
        'Content-Type': 'application/json',
      },
    });
    return res.json()
  }
  const data = await getProfile()
  const dataListEvent = await getListEvent()
  return (
    <>
      <DashboardComponent data={data} listEvent={dataListEvent} />
    </>
  );
}

export default Dashboard;
