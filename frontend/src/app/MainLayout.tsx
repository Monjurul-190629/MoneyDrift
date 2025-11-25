"use client";

import Navbar from "@/components/pages/Shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar + Topbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 md:ml-20 pt-16 overflow-auto p-4 bg-white text-black">
        {children}
      </main>
    </div>
  );
}
