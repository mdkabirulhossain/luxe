"use client";

import React from "react";
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Grid, 
  User, 
  Menu,
  LogOut,
  Settings
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  onOpenSidebar: () => void;
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ onOpenSidebar, isUserMenuOpen, setIsUserMenuOpen }: NavbarProps) {
  return (
    <header className="h-16 border-b border-slate-200 bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-20 gap-4">
      <div className="flex items-center gap-3">
        {/* Hamburger Menu Toggle Button */}
        <button 
          onClick={onOpenSidebar}
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
  );
}
