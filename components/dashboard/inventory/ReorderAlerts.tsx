"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { ColumnDef, DataTable } from "@/components/shared/table/DataTable";

interface AlertItem {
  name: string;
  sku: string;
  currentStock: number;
  safetyStock: number;
  status: "critical" | "warning";
}

const alertItems: AlertItem[] = [
  {
    name: 'Lumina Quartz Monitor 27"',
    sku: "MON-27Q-LU",
    currentStock: 12,
    safetyStock: 50,
    status: "critical",
  },
  {
    name: "Hyper-Flow Cooling Fan",
    sku: "CL-HYP-V2",
    currentStock: 4,
    safetyStock: 25,
    status: "critical",
  },
  {
    name: "Secure-Link SSD 1TB",
    sku: "SSD-SL-1TB",
    currentStock: 18,
    safetyStock: 20,
    status: "warning",
  },
];

export default function ReorderAlerts() {
  const columns: ColumnDef<AlertItem>[] = [
    {
      header: "Item Details",
      className: "px-6", // Preserves specific side padding variations
      render: (item) => <span className="font-semibold text-slate-900">{item.name}</span>,
    },
    {
      header: "SKU",
      className: "px-4 text-xs font-medium text-slate-500 font-mono",
      render: (item) => item.sku,
    },
    {
      header: "Current Stock",
      className: "px-4 font-bold",
      render: (item) => (
        <span className={item.status === "critical" ? "text-red-500" : "text-amber-500"}>
          {item.currentStock} units
        </span>
      ),
    },
    {
      header: "Safety Stock",
      className: "px-4 text-slate-500 italic",
      render: (item) => `${item.safetyStock} units`,
    },
    {
      header: "Action",
      className: "px-6 text-right",
      render: () => (
        <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
          Reorder Now
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Header section explicitly retained */}
      <div className="p-6 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <h2 className="text-base font-semibold text-slate-900">Reorder Alerts</h2>
        </div>
        <span className="bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full">
          8 Items Pending
        </span>
      </div>

      {/* Shared generic datatable integrating custom classes */}
      <DataTable
        data={alertItems}
        columns={columns}
        rowKey={(item) => item.sku}
        containerBorderClass="border-transparent rounded-none border-0 shadow-none" // Bypasses inner card borders
        headerRowClass="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold tracking-wider text-slate-500 uppercase"
        bodyRowClass="hover:bg-slate-50/50"
        divideClass="divide-slate-100"
      />
    </div>
  );
}