import MenuDashboardComponent from "@/components/Dashboard/menu";
import ListEventComponent from "@/components/Dashboard/Event/list";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <MenuDashboardComponent />
        <div className="w-10/12 bg-[#f8fafd] h-screen">
          <div className="p-8">
            <ListEventComponent />
          </div>
        </div>
      </div>
    </>
  );
}
