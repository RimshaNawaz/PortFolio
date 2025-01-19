import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  // Check if the current route is "/"
  const isMainPage = location.pathname === "/";

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-[#a855f7] via-[#6b21a8] to-[#9333ea] text-white">
      {/* Conditionally render Navbar */}
      {!isMainPage && <Navbar />}
      
      {/* Page content */}
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
}
