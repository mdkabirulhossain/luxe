"use client";

import React from "react";
import { Eye, MousePointerClick, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SliderStatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      
      {/* Card 01 - Total Active Banners */}
      <Card className="bg-white border-slate-100 shadow-xs rounded-xl">
        <CardContent className="p-5 flex flex-col justify-between h-32">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-indigo-50/50 rounded-lg text-indigo-600">
              <Eye className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50/50 px-2 py-0.5 rounded-full">
              +12% vs LW
            </span>
          </div>
          <div className="text-left mt-2">
            <p className="text-xs font-semibold text-slate-400">Total Active Banners</p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">08</h3>
          </div>
        </CardContent>
      </Card>

      {/* Card 02 - Banner Engagement */}
      <Card className="bg-white border-slate-100 shadow-xs rounded-xl">
        <CardContent className="p-5 flex flex-col justify-between h-32">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-indigo-50/50 rounded-lg text-indigo-600">
              <MousePointerClick className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50/50 px-2 py-0.5 rounded-full">
              4.2% CTR
            </span>
          </div>
          <div className="text-left mt-2">
            <p className="text-xs font-semibold text-slate-400">Banner Engagement</p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">124.5k</h3>
          </div>
        </CardContent>
      </Card>

      {/* Card 03 - Scheduled Promotions */}
      <Card className="bg-white border-slate-100 shadow-xs rounded-xl">
        <CardContent className="p-5 flex flex-col justify-between h-32">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-indigo-50/50 rounded-lg text-indigo-600">
              <Clock className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full">
              Next: 2d
            </span>
          </div>
          <div className="text-left mt-2">
            <p className="text-xs font-semibold text-slate-400">Scheduled Promotions</p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">03</h3>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}