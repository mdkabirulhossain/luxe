"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface Warehouse {
  name: string;
  code: string;
  location: string;
  type: "PRIMARY HUB" | "SATELLITE";
  capacity: number;
  statusText: string;
  isCritical: boolean;
}

const warehouses: Warehouse[] = [
  {
    name: "Logistics Hub - North",
    code: "LHN-01",
    location: "Berlin, Germany",
    type: "PRIMARY HUB",
    capacity: 92,
    statusText: "Critical: Space nearing limit.",
    isCritical: true,
  },
  {
    name: "East Distribution",
    code: "ED-04",
    location: "Warsaw, Poland",
    type: "SATELLITE",
    capacity: 64,
    statusText: "Optimal storage conditions maintained.",
    isCritical: false,
  },
];

export default function WarehouseLevels() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-slate-700" />
          <h2 className="text-base font-semibold text-slate-900">Warehouse Levels</h2>
        </div>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
          View Map View
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {warehouses.map((warehouse) => (
          <div
            key={warehouse.code}
            className="border border-slate-200 rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base leading-snug">
                    {warehouse.name} ({warehouse.code})
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{warehouse.location}</p>
                </div>
                <span
                  className={`text-[10px] font-bold tracking-wider px-2 py-1 rounded ${
                    warehouse.type === "PRIMARY HUB"
                      ? "bg-blue-50 text-blue-700 border border-blue-100"
                      : "bg-indigo-50 text-indigo-700 border border-indigo-100"
                  }`}
                >
                  {warehouse.type}
                </span>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-2">
                  <span>Total Capacity</span>
                  <span className={warehouse.isCritical ? "text-red-600" : "text-slate-900"}>
                    {warehouse.capacity}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      warehouse.isCritical ? "bg-red-500" : "bg-indigo-600"
                    }`}
                    style={{ width: `${warehouse.capacity}%` }}
                  />
                </div>
              </div>
            </div>

            <p
              className={`text-xs font-medium mt-4 ${
                warehouse.isCritical ? "text-red-500 flex items-center gap-1" : "text-slate-500"
              }`}
            >
              {warehouse.isCritical && <span>⚠️</span>}
              {warehouse.statusText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}