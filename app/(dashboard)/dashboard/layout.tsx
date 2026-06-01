"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  ShoppingCart, 
  BarChart3, 
  Layers, 
  Settings, 
  Search, 
  Bell, 
  HelpCircle, 
  Grid, 
  User,
  Menu,
  ChevronLeft,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Products", icon: ShoppingBag, active: false },
    { name: "Orders", icon: ShoppingCart, active: false },
    { name: "Analytics", icon: BarChart3, active: false },
    { name: "Inventory", icon: Layers, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50/50 text-slate-900 font-sans">
      {/* Backdrop overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-35 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 border-r border-slate-200 bg-white flex flex-col justify-between fixed h-full z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div>
          {/* Branding Header */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white p-2 rounded-lg">
                <BarChart3 className="h-5 w-5 transform rotate-45" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight leading-none">Luxe</h1>
                <span className="text-xs text-slate-500 font-medium">Enterprise Suite</span>
              </div>
            </div>
            {/* Close button for mobile */}
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors relative ${
                    item.active
                      ? "text-indigo-600 bg-indigo-50/50"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </div>
                  {item.active && (
                    <div className="absolute right-0 top-1/4 bottom-1/4 w-0.75 bg-indigo-600 rounded-l-md" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile Card Footer */}
        <div className="p-4 border-t border-slate-100">
          {/* Logout Button */}
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50/50 hover:text-rose-700 transition-colors cursor-pointer focus:outline-none">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-200 bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-20 gap-4">
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Toggle Button */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none cursor-pointer"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Global Search Bar */}
            <div className="relative w-40 sm:w-60 md:w-80 lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search orders, products, or customers..."
                className="w-full pl-10 bg-slate-50 border-slate-200 text-sm h-10 rounded-lg focus-visible:ring-indigo-500 focus-visible:bg-white transition-all"
              />
            </div>
          </div>

          {/* Top Right Utilities */}
          <div className="flex items-center gap-3 md:gap-5 text-slate-500">
            <button className="hover:text-slate-900 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="hover:text-slate-900 transition-colors">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="hover:text-slate-900 transition-colors">
              <Grid className="h-5 w-5" />
            </button>
            <div className="h-5 w-px bg-slate-200 mx-1" />
            {/* User Admin Avatar Icon requested instead of plain text name */}
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center justify-center h-8 w-8 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-700 focus:outline-none cursor-pointer"
              >
                <User className="h-4 w-4" />
              </button>

              {isUserMenuOpen && (
                <>
                  {/* Backdrop overlay to close when clicking outside */}
                  <div 
                    className="fixed inset-0 z-40 cursor-default" 
                    onClick={() => setIsUserMenuOpen(false)}
                  />
                  {/* Dropdown Container */}
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center gap-3 p-2 border-b border-slate-100 pb-3">
                      <Avatar className="h-10 w-10 border border-slate-200">
                        <AvatarImage src="/avatar-placeholder.jpg" alt="Alex Sterling" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div className="overflow-hidden text-left">
                        <p className="text-sm font-semibold text-slate-900 truncate">Alex Sterling</p>
                        <p className="text-xs text-slate-500 font-medium truncate">Lead Administrator</p>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-left cursor-pointer">
                        <User className="h-4 w-4" />
                        My Profile
                      </button>
                      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-left cursor-pointer">
                        <Settings className="h-4 w-4" />
                        Account Settings
                      </button>
                      <div className="h-px bg-slate-100 my-2" />
                      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50/50 hover:text-rose-700 transition-colors text-left cursor-pointer">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Main Viewport */}
        <main className="p-4 md:p-8 bg-slate-50/60 flex-1">{children}</main>
      </div>
    </div>
  );
}