import { cookies } from 'next/headers';
import MenuDashboardComponent from "@/components/Dashboard/menu";
import EventDashboardComponent from '@/components/Dashboard/Event';
import { getTokenName } from '../../../../lib/helpers';

const DashboardListEvent = async () => {
  const cookiesData = await cookies();
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
  const dataListEvent = await getListEvent()
  return (
    <>
      <div className="sm:flex">
        <MenuDashboardComponent />
        <div className="sm:w-10/12 bg-[#f8fafd] h-screen">
          <div className="p-4 sm:p-8">
            <EventDashboardComponent list={dataListEvent} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardListEvent;
