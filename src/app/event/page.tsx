import HeaderDashboardComponent from "@/components/Dashboard/header";
import MenuDashboardComponent from "@/components/Dashboard/menu";
import EventDashboardComponent from '@/components/Dashboard/Event';

export default function Dashboard() {
  return (
    <>
      <HeaderDashboardComponent />
      <div className="sm:flex">
        <MenuDashboardComponent />
        <div className="sm:w-10/12 bg-[#f8fafd] h-screen">
          <div className="p-4 sm:p-8">
            <EventDashboardComponent />
          </div>
        </div>
      </div>
    </>
  );
}
