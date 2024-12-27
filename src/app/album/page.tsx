import HeaderDashboardComponent from "@/components/Dashboard/header";
import MenuDashboardComponent from "@/components/Dashboard/menu";
import AlbumDashboardComponent from '@/components/Dashboard/Album';

export default function Dashboard() {
  return (
    <>
      <HeaderDashboardComponent />
      <div className="sm:flex">
        <MenuDashboardComponent />
        <div className="sm:w-10/12 bg-[#f8fafd]">
          <div className="p-4 sm:p-8">
            <AlbumDashboardComponent />
          </div>
        </div>
      </div>
    </>
  );
}
