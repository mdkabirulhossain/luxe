"use client";

import React from "react";
import { Download, Plus } from "lucide-react";
import WarehouseLevels from "@/components/dashboard/inventory/WarehouseLevels";
import ReorderAlerts from "@/components/dashboard/inventory/ReorderAlerts";
import SupplierList from "@/components/dashboard/inventory/SupplierList";
import EnvironMetrics from "@/components/dashboard/inventory/EnvironMetrics";


export default function InventoryPage() {
  return (
    <main className="p-4 md:p-8 space-y-6 max-w-400 mx-auto bg-slate-50/50 min-h-screen">
      {/* Top Main Heading Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Inventory Control</h1>
          <p className="text-sm text-slate-500 mt-1">
            Global warehouse management and logistics operations.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm transition-all">
            <Download className="h-4 w-4 text-slate-500" />
            Export Manifest
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-950 hover:bg-slate-900 text-white rounded-lg text-sm font-medium shadow-sm transition-all">
            <Plus className="h-4 w-4" />
            New Purchase Order
          </button>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side Content - Takes up 2 columns out of 3 on large screens */}
        <div className="lg:col-span-2 space-y-6">
          <WarehouseLevels />
          <ReorderAlerts />
        </div>

        {/* Right Side Content Sidebar - Takes up 1 column */}
        <div className="space-y-6">
          <SupplierList />
          <EnvironMetrics />
        </div>
      </div>
    </main>
  );
}