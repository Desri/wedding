import { cookies } from 'next/headers';
import DetailAlbumDashboardComponent from "@/components/Dashboard/Album/detail";
import MenuDashboardComponent from "@/components/Dashboard/menu";
import { getTokenName } from '../../../../../lib/helpers';

type Props = {
  params: {
    slug: string; // Pastikan slug adalah string
  };
};

const AlbumDetail = async ({ params }: Props) => {
  const cookiesData = await cookies();
  const { slug } = await params;
  // Fungsi untuk mengambil data album
  const getDataAlbum = async () => {
    const res = await fetch(`https://api-photoslide.vercel.app/api/event/${slug}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cookiesData.get(getTokenName())?.value}`,
        'Content-Type': 'application/json',
      },
    });
    return res.json();
  };

  // Ambil detail album
  const detailEvent = await getDataAlbum();

  return (
    <>
      <div className="sm:flex">
        <MenuDashboardComponent />
        <div className="sm:w-10/12 bg-[#f8fafd] h-screen">
          <div className="p-4 sm:p-8">
            <DetailAlbumDashboardComponent dataDetail={detailEvent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumDetail;