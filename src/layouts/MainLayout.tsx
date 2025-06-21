import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 h-screen ">
        <Navbar />
        <section className="h-[calc(100vh-80px)]">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
