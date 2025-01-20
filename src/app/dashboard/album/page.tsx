import { cookies } from 'next/headers';
import MenuDashboardComponent from "@/components/Dashboard/menu";
import AlbumDashboardComponent from '@/components/Dashboard/Album';
import { getTokenName } from '../../../../lib/helpers';

const AlbumPage = async () => {
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
  console.log('Check List Event From Server', dataListEvent.data[0]._id)
  return (
    <>
      <div className="sm:flex">
        <MenuDashboardComponent />
        <div className="sm:w-10/12 bg-[#f8fafd] h-screen">
          <div className="p-4 sm:p-8">
            <AlbumDashboardComponent />
          </div>
        </div>
      </div>
    </>
  );
}
export default AlbumPage;
