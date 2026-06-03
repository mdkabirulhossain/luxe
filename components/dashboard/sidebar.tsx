"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Sliders,
  ShoppingCart, 
  BarChart3, 
  Layers, 
  Settings, 
  ChevronLeft, 
  LogOut 
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard/overview", icon: LayoutDashboard },
  { name: "Products", href: "/dashboard/products", icon: ShoppingBag },
  { name: "Hero Slider", href: "/dashboard/heroSlider", icon: Sliders },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Inventory", href: "/dashboard/inventory", icon: Layers },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-35 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 border-r border-slate-200 bg-white flex flex-col justify-between fixed h-full z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
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
              onClick={onClose}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50/50"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </div>
                  {isActive && (
                    <div className="absolute right-0 top-1/4 bottom-1/4 w-0.75 bg-indigo-600 rounded-l-md" />
                  )}
                </Link>
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
    </>
  );
}
