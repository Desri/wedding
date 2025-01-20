import DetailAlbumDashboardComponent from "@/components/Dashboard/Album/detail";
import MenuDashboardComponent from "@/components/Dashboard/menu";

export default function Dashboard() {
  return (
    <>
      <div className="sm:flex">
        <MenuDashboardComponent />
        <div className="sm:w-10/12 bg-[#f8fafd] h-screen">
          <div className="p-4 sm:p-8">
            <DetailAlbumDashboardComponent />
          </div>
        </div>
      </div>
    </>
  );
}
