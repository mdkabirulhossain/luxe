import React from "react";
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
  User 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
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
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col justify-between fixed h-full z-30">
        <div>
          {/* Branding Header */}
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white p-2 rounded-lg">
                <BarChart3 className="h-5 w-5 transform rotate-45" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight leading-none">Luxe</h1>
                <span className="text-xs text-slate-500 font-medium">Enterprise Suite</span>
              </div>
            </div>
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
          <div className="flex items-center gap-3 p-3 bg-indigo-50/40 rounded-xl border border-indigo-100/30">
            <Avatar className="h-10 w-10 border border-slate-200">
              <AvatarImage src="/avatar-placeholder.jpg" alt="Alex Sterling" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-slate-900 truncate">Alex Sterling</p>
              <p className="text-xs text-slate-500 font-medium truncate">Lead Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 pl-64 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-200 bg-white px-8 flex items-center justify-between sticky top-0 z-20">
          {/* Global Search Bar */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search orders, products, or customers..."
              className="w-full pl-10 bg-slate-50 border-slate-200 text-sm h-10 rounded-lg focus-visible:ring-indigo-500 focus-visible:bg-white transition-all"
            />
          </div>

          {/* Top Right Utilities */}
          <div className="flex items-center gap-5 text-slate-500">
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
            <button className="flex items-center justify-center h-8 w-8 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-700">
              <User className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Dashboard Main Viewport */}
        <main className="p-8 bg-slate-50/60 flex-1">{children}</main>
      </div>
    </div>
  );
}