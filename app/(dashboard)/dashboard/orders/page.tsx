"use client";

import React from "react";
import { Filter, Plus, TrendingUp, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button"; // shadcn Button
import { MetricCard } from "@/app/(dashboard)/dashboard/orders/_components/MetricCard";
import { OrderItem, OrderTable } from "@/app/(dashboard)/dashboard/orders/_components/OrderTable";

// Import your reusable custom components 


const MOCK_DATA: OrderItem[] = [
  { id: "#ORD-8291", customer: { name: "Sarah Connor", initials: "SC" }, date: "Oct 24, 2023", amount: 2450.00, status: "DELIVERED" },
  { id: "#ORD-8290", customer: { name: "Marcus Aurelius", initials: "MA" }, date: "Oct 24, 2023", amount: 189.50, status: "PROCESSING" },
  { id: "#ORD-8289", customer: { name: "Ellen Ripley", initials: "EL" }, date: "Oct 23, 2023", amount: 5200.00, status: "SHIPPED" },
  { id: "#ORD-8288", customer: { name: "Thomas Ken", initials: "TK" }, date: "Oct 23, 2023", amount: 0.00, status: "CANCELLED" },
  { id: "#ORD-8287", customer: { name: "John Doe", initials: "JD" }, date: "Oct 22, 2023", amount: 1120.45, status: "PROCESSING" }
];

export default function OrdersPage() {
  const handleQuickView = (id: string) => {
    console.log("Opening detail panel for order: ", id);
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Page Section Action Title Header Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Order Management</h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Monitor and fulfill customer requests across all channels.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <Button variant="outline" size="sm" className="font-bold text-xs gap-2">
            <Filter className="h-3.5 w-3.5 text-slate-500" />
            Filter
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-zinc-800 font-bold text-xs gap-1.5">
            <Plus className="h-3.5 w-3.5" />
            Create Order
          </Button>
        </div>
      </div>

      {/* 2. Top Summary KPI Stats Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricCard
          title="Total Orders" 
          value="1,284" 
          footer={
            <span className="flex items-center text-emerald-600 font-bold gap-1 text-[11px]">
              <TrendingUp className="h-3 w-3" /> +12.5% <span className="text-slate-400 font-semibold">vs LW</span>
            </span>
          } 
        />
        <MetricCard 
          title="Pending" 
          value="42" 
          footer={
            <span className="flex items-center text-amber-500 font-bold gap-1 text-[11px]">
              <AlertCircle className="h-3 w-3" /> Requiring action
            </span>
          } 
        />
        <MetricCard 
          title="Shipped Today" 
          value="156" 
          footer={
            <span className="flex items-center text-slate-400 font-semibold gap-1 text-[11px]">
              <Clock className="h-3 w-3" /> Last sync 5m ago
            </span>
          } 
        />
        <MetricCard 
          title="Revenue (24H)" 
          value="$14,290.00" 
          footer={
            <span className="flex items-center text-emerald-600 font-bold gap-1 text-[11px]">
              <TrendingUp className="h-3 w-3" /> +8.2%
            </span>
          } 
        />
      </div>

      {/* 3. Reusable Isolated Table View Layout Component */}
      <OrderTable orders={MOCK_DATA} onQuickView={handleQuickView} />
      
    </div>
  );
}