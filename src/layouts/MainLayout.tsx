import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex h-screen" > 
      <Sidebar />
      <div className="flex-1 h-screen">
        <Navbar />
        <div className="p-4 h-[calc(100vh-5rem)] w-[calc(100vw-300px)] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
