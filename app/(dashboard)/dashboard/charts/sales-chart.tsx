"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip 
} from "@/components/ui/chart";

import {chartData} from "../dummyData/sales-stats";

// 1. Defining the Shadcn Chart Color tokens
const chartConfig = {
  value: {
    label: "Sales Overview",
    color: "currentColor", // Dynamically driven or mapped through standard CSS variables
  },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    // 2. Wrap chart inside ChartContainer to pass theme configs down to components
    <ChartContainer 
      config={chartConfig} 
      className="h-full w-full [&_.recharts-layer]:outline-none text-indigo-600"
    >
      <AreaChart 
        data={chartData} 
        margin={{ top: 20, right: 5, left: -20, bottom: 0 }}
      >
        <defs>
          {/* Main area fill background gradient mapping perfectly to original UI styling */}
          <linearGradient id="colorSalesValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="currentColor" stopOpacity={0.15} />
            <stop offset="95%" stopColor="currentColor" stopOpacity={0.0} />
          </linearGradient>
        </defs>
        
        {/* Layout Grids */}
        <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f1f5f9" />
        
        {/* Axes configurations matching original hidden design requirements */}
        <XAxis dataKey="name" hide />
        <YAxis hide />
        
        {/* Optional accessible accessible tooltip injection matching shadcn styles */}
        <ChartTooltip cursor={false} />
        
        {/* Main Area curve configuration matching layout properties */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="currentColor"
          strokeWidth={2.5}
          fillOpacity={1}
          fill="url(#colorSalesValue)"
        />
      </AreaChart>
    </ChartContainer>
  );
}