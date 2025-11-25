"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  User,
  Menu,
  X,
  Home,
  WalletCards,
  BadgeSwissFranc,
  Goal,
  User2,
  ChartNoAxesCombined,
  Search,
  Sun,
} from "lucide-react";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile); // open by default on desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <TooltipProvider>
      <div className="flex h-screen">
        {/* ---------------- MAIN SECTION ---------------- */}
        <div className="flex-1 md:ml-5 pt-16 min-h-screen bg-white text-black transition-colors duration-300">
          {/* ---------- TOPBAR ---------- */}
          <div className="fixed top-0 left-0 md:left-5 right-0 h-16 shadow-md z-30 px-4 flex items-center justify-between bg-white text-black">
            {/* Left side */}
            {/* Left side */}
            <div className="flex items-center gap-3">
              {isMobile && (
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="w-7 h-7 flex items-center justify-center"
                  aria-label="Toggle sidebar"
                >
                  {sidebarOpen ? (
                    <X className="w-7 h-7" />
                  ) : (
                    <Menu className="w-7 h-7" />
                  )}
                </button>
              )}

              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shadow-md bg-green-600 text-white">
                M
              </div>

              {/* Search bar */}
              <div className="relative hidden md:block">
                <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  placeholder="Search..."
                  className="pl-8 pr-4 py-2 w-64 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:ring-green-300"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 cursor-pointer" />
              <User className="w-6 h-6 cursor-pointer" />

              {/* Toggle button */}
              <button className="p-2 rounded-full bg-white text-black shadow-md flex items-center justify-center">
                <Sun className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ---------------- SIDEBAR ---------------- */}
          <aside
            className={`
              fixed md:static
              top-16 md:top-16
              left-0 z-40
              h-[calc(100%-4rem)] w-20
              flex flex-col p-4 rounded-r-3xl md:rounded-3xl ml-0 md:ml-2
              shadow-xl
              bg-green-600 text-white
              transition-transform duration-300
              ${
                sidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full md:translate-x-0"
              }
            `}
          >

            <div className="flex flex-col gap-6 mt-4">
              <SidebarItem icon={<Home />} label="Home" />
              <SidebarItem icon={<WalletCards />} label="Wallet" />
              <SidebarItem icon={<BadgeSwissFranc />} label="Transactions" />
              <SidebarItem icon={<Goal />} label="Goals" />
              <SidebarItem icon={<User2 />} label="Users" />
              <SidebarItem icon={<ChartNoAxesCombined />} label="Analytics" />
            </div>
          </aside>

          {/* Children content */}
          <div className="p-4 mt-2">{/* your page content goes here */}</div>
        </div>
      </div>
    </TooltipProvider>
  );
}

/* ---------------- SIDEBAR ITEM ---------------- */
function SidebarItem({ icon, label }: any) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a className="hover:bg-green-700 p-3 rounded-xl flex items-center justify-center transition">
          {icon}
        </a>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
