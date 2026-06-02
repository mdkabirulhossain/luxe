"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const REGIONAL_DATA = [
  { region: "North America", percentage: 45, value: "45%" },
  { region: "Europe", percentage: 32, value: "32%" },
  { region: "Asia Pacific", percentage: 18, value: "18%" },
  { region: "Other", percentage: 5, value: "5%" },
];

export function RegionalReach() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Visual Dot Scatter Map Node Block */}
      <Card className="lg:col-span-2 bg-white border-slate-100 shadow-sm overflow-hidden min-h-[300px] relative flex flex-col justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
        
        {/* Scatter Geo Coordinates */}
        <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-indigo-600 rounded-full shadow-[0_0_0_4px_rgba(99,102,241,0.2)]" />
        <div className="absolute top-[55%] left-[50%] w-5 h-5 bg-indigo-600 rounded-full shadow-[0_0_0_6px_rgba(99,102,241,0.15)] animate-pulse" />
        <div className="absolute top-[70%] left-[75%] w-2.5 h-2.5 bg-indigo-600 rounded-full shadow-[0_0_0_4px_rgba(99,102,241,0.2)]" />

        <div className="absolute bottom-5 left-5 bg-white border border-slate-100 shadow-md rounded-xl p-4 max-w-[240px] z-10 text-left">
          <h4 className="text-xs font-bold text-slate-900">Global Reach</h4>
          <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-relaxed">
            Data localized by IP address tracking.
          </p>
        </div>
      </Card>

      {/* Numerical Data Progress Sidebar */}
      <Card className="bg-white border-slate-100 shadow-sm flex flex-col justify-between p-6 space-y-6">
        <div>
          <h3 className="text-sm font-bold text-slate-950 mb-4 text-left">Regional Breakdown</h3>
          <div className="space-y-4">
            {REGIONAL_DATA.map((item, idx) => (
              <div key={idx} className="space-y-1.5 text-left">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="text-slate-500 font-medium">{item.region}</span>
                  <span>{item.value}</span>
                </div>
                
                {/* Fixed Progress targeting shadcn inner indicator element natively via arbitrary variants */}
                <Progress 
                  value={item.percentage} 
                  className={`h-1.5 bg-slate-100 ${
                    idx === REGIONAL_DATA.length - 1 
                      ? "[&>div]:bg-slate-300" 
                      : "[&>div]:bg-indigo-600"
                  }`} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-left">
          <p className="text-[11px] text-slate-500 font-medium italic leading-relaxed">
            &ldquo;Market penetration in <strong className="text-slate-800 font-bold">Europe</strong> has increased by 15% year-over-year following the new regional shipping hubs.&rdquo;
          </p>
        </div>
      </Card>

    </div>
  );
}