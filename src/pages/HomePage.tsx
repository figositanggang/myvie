import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="h-lvh w-full overflow-y-scroll overflow-x-hidden">
        <Navbar />

        <div className="w-full mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
