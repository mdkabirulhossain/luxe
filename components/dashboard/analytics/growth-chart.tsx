"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

const chartData = [
  { day: "Mon", newUsers: 240, returning: 180 },
  { day: "Tue", newUsers: 300, returning: 220 },
  { day: "Wed", newUsers: 210, returning: 290 },
  { day: "Thu", newUsers: 420, returning: 310 },
  { day: "Fri", newUsers: 380, returning: 250 },
  { day: "Sat", newUsers: 490, returning: 340 },
  { day: "Sun", newUsers: 512, returning: 412 },
];

const chartConfig = {
  newUsers: {
    label: "New Users",
    color: "#6366f1",
  },
  returning: {
    label: "Returning",
    color: "#e2e8f0",
  },
} satisfies ChartConfig;

export function GrowthChart() {
  return (
    <Card className="bg-white border-slate-100 shadow-sm flex flex-col justify-between h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 p-6">
        <CardTitle className="text-sm font-bold text-slate-950">User Growth Trajectory</CardTitle>
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
            <span>New Users</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block" />
            <span>Returning</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
                dy={10}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="newUsers" fill={chartConfig.newUsers.color} radius={[4, 4, 0, 0]} maxBarSize={16} />
              <Bar dataKey="returning" fill={chartConfig.returning.color} radius={[4, 4, 0, 0]} maxBarSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}