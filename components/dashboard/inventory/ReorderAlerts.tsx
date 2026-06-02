"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

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
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <h2 className="text-base font-semibold text-slate-900">Reorder Alerts</h2>
        </div>
        <span className="bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full">
          8 Items Pending
        </span>
      </div>

      {/* Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
              <th className="py-3 px-6">Item Details</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Current Stock</th>
              <th className="py-3 px-4">Safety Stock</th>
              <th className="py-3 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {alertItems.map((item) => (
              <tr key={item.sku} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-semibold text-slate-900">{item.name}</td>
                <td className="py-4 px-4 text-xs font-medium text-slate-500 font-mono">
                  {item.sku}
                </td>
                <td className="py-4 px-4 font-bold">
                  <span
                    className={
                      item.status === "critical" ? "text-red-500" : "text-amber-500"
                    }
                  >
                    {item.currentStock} units
                  </span>
                </td>
                <td className="py-4 px-4 text-slate-500 italic">{item.safetyStock} units</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                    Reorder Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}