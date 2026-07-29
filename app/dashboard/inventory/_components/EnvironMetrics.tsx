"use client";

import React from "react";
import { Thermometer } from "lucide-react";

export default function EnvironMetrics() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-5">
        <Thermometer className="h-5 w-5 text-slate-700" />
        <h2 className="text-base font-semibold text-slate-900">Environ-Metrics</h2>
      </div>

      <div className="space-y-4 text-sm font-medium">
        {/* Temperature metric */}
        <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
          <span className="text-slate-500">Avg. Temperature</span>
          <span className="text-slate-900 font-semibold text-base">18.4°C</span>
        </div>

        {/* Humidity metric */}
        <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
          <span className="text-slate-500">Humidity Level</span>
          <span className="text-slate-900 font-semibold text-base">42%</span>
        </div>

        {/* Status metric */}
        <div className="flex justify-between items-center py-1.5">
          <span className="text-slate-500">Security Status</span>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-600 font-bold text-xs tracking-wider uppercase">
              ARMED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}