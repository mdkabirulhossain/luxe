"use client";

import React from "react";
import { Calendar, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom Sub-component Modules Imports
import { KpiSection } from "@/app/(dashboard)/dashboard/analytics/_components/KpiSection";
import { GrowthChart } from "@/app/(dashboard)/dashboard/analytics/_components/GrowthChart";
import { TopSpenders } from "@/app/(dashboard)/dashboard/analytics/_components/TopSpenders";
import { RegionalReach } from "@/app/(dashboard)/dashboard/analytics/_components/RegionalReach";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      
      {/* 1. Page Section Dynamic Action Layout Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-left">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Customer Analytics</h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Detailed behavioral mapping and performance metrics.
          </p>
        </div>
        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <Button variant="outline" size="sm" className="font-semibold text-xs gap-2 h-9 border-slate-200 cursor-pointer">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            Last 30 Days
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-zinc-800 font-bold text-xs gap-1.5 h-9 cursor-pointer">
            <FileDown className="h-3.5 w-3.5" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* 2. Isolated Summaries Matrices Card Component Grid */}
      <KpiSection />

      {/* 3. Center Complex Visual Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GrowthChart />
        </div>
        <div>
          <TopSpenders />
        </div>
      </div>

      {/* 4. Bottom Geographical Summary Representation */}
      <RegionalReach />

    </div>
  );
}