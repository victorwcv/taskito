import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
