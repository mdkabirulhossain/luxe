"use client";

import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50/50 text-slate-900 font-sans">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        <Navbar 
          onOpenSidebar={() => setIsSidebarOpen(true)}
          isUserMenuOpen={isUserMenuOpen}
          setIsUserMenuOpen={setIsUserMenuOpen}
        />

        {/* Dashboard Main Viewport */}
        <main className="p-4 md:p-8 bg-slate-50/60 flex-1">{children}</main>
      </div>
    </div>
  );
}