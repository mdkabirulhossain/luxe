"use client";

import React from "react";
import { UserPlus, DollarSign, History, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KpiCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

function KpiCard({ title, value, trend, isPositive, icon: Icon }: KpiCardProps) {
  return (
    <Card className="bg-white border-slate-100 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-700">
            <Icon className="h-4 w-4 text-indigo-600" />
          </div>
          <span className={`inline-flex items-center gap-0.5 text-xs font-bold ${isPositive ? "text-emerald-600" : "text-rose-600"}`}>
            {trend}
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          </span>
        </div>
        <div className="mt-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1 tracking-tight">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
}

export function KpiSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <KpiCard 
        title="New Customer Growth" 
        value="2,842" 
        trend="+12.5%" 
        isPositive={true} 
        icon={UserPlus} 
      />
      <KpiCard 
        title="Avg. Lifetime Value" 
        value="$1,452.80" 
        trend="+4.2%" 
        isPositive={true} 
        icon={DollarSign} 
      />
      <KpiCard 
        title="Retention Rate" 
        value="94.2%" 
        trend="-0.8%" 
        isPositive={false} 
        icon={History} 
      />
    </div>
  );
}