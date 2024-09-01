import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { ScrollArea } from "../ui/scroll-area";
import Sidebar from "../Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="border-b border-border">
        <Header />
      </div>
      <div className="flex min-h-[90vh] border-b border-border">
        <div className="border-r border-border w-[300px] hidden lg:block">
          <ScrollArea className="h-[90vh] w-full">
            <Sidebar />
          </ScrollArea>
        </div>
        <div className="flex-1">
          <ScrollArea className="h-[90vh] w-full p-3">
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
