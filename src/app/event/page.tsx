import HeaderDashboardComponent from "@/components/Dashboard/header";
import MenuDashboardComponent from "@/components/Dashboard/menu";
import EventDashboardComponent from '@/components/Dashboard/Event';

export default function Dashboard() {
  return (
    <>
      <HeaderDashboardComponent />
      <div className="flex gap-5s">
        <MenuDashboardComponent />
        <div className="w-10/12 bg-[#f8fafd]">
          <div className="p-8">
            <EventDashboardComponent />
          </div>
        </div>
      </div>
    </>
  );
}
