import React from "react";
import { Download, TrendingUp, TrendingDown, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Industry standard: Cleanly importing separated business data models
import { metricsData } from "./dummyData/metrics";
import { activitiesData } from "./dummyData/activities";

// Rendering decoupled layout subcomponents using Shadcn Charts abstraction
import { SalesChart } from "./charts/sales-chart";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Overview Top Header Row */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard Overview</h2>
          <p className="text-sm text-slate-500 mt-1">Welcome back, Alex. Here&apos;s what&apos;s happening today.</p>
        </div>
        <Button className="bg-black text-white hover:bg-slate-800 flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-semibold">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Grid of 4 Core Metric Summary Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metricsData.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title} className="border border-slate-200/80 shadow-none rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
                <div className={`p-2 rounded-lg ${metric.iconBg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-semibold ${
                  metric.isPositive ? "text-emerald-600" : "text-rose-600"
                }`}>
                  {metric.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {metric.change}
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-2">
                <p className="text-xs font-bold text-slate-400 tracking-wider mb-1">{metric.title}</p>
                <div className="text-2xl font-bold text-slate-900 tracking-tight">{metric.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Analytics Visualization and Activity Split */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Sales Chart Block */}
        <Card className="md:col-span-2 border border-slate-200/80 shadow-none rounded-xl flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between p-6 pb-0">
            <CardTitle className="text-base font-bold text-slate-900">Sales Overview</CardTitle>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold text-slate-600">
              <button className="px-3 py-1.5 rounded-md hover:bg-white hover:text-slate-900 transition-all">7 Days</button>
              <button className="bg-white text-slate-900 px-3 py-1.5 rounded-md shadow-sm">30 Days</button>
              <button className="px-3 py-1.5 rounded-md hover:bg-white hover:text-slate-900 transition-all">Year</button>
            </div>
          </CardHeader>
          <CardContent className="p-6 h-100 w-full relative">
            {/* Context Tooltip representation matching image_fee09c.jpg perfectly */}
            <div className="absolute top-[28%] right-[32%] bg-black text-white text-xs p-3 rounded shadow-xl z-10 font-mono flex flex-col gap-1 pointer-events-none">
              <span className="text-slate-400 text-[10px] font-sans">Aug 24</span>
              <span className="font-bold">$12,450.00</span>
            </div>

            {/* Seamless wrapper context swap */}
            <SalesChart />
          </CardContent>
        </Card>

        {/* Recent Activity Feed Sideblock */}
        <Card className="border border-slate-200/80 shadow-none rounded-xl flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between p-6 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900">Recent Activity</CardTitle>
            <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">View All</button>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
            {activitiesData.map((activity) => (
              <div key={activity.id} className="flex gap-4 items-start">
                {activity.user ? (
                  <Avatar className="h-9 w-9 border border-slate-100 mt-0.5">
                    <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                    <AvatarFallback>{activity.user.fallback}</AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="h-9 w-9 bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center rounded-lg mt-0.5">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                )}
                
                <div className="flex-1 space-y-2">
                  <div className="text-xs leading-relaxed text-slate-600">
                    {activity.user && <strong className="font-bold text-slate-900">{activity.user.name} </strong>}
                    {activity.action} <span className="text-slate-900 font-medium">{activity.target}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={activity.badgeVariant} 
                      className={`text-[10px] px-2 py-0.5 font-semibold rounded-md shadow-none tracking-wide capitalize ${
                        activity.badgeVariant === "secondary" ? "bg-indigo-50 text-indigo-600 border-none" : 
                        activity.badgeVariant === "destructive" ? "bg-orange-50 text-orange-600 hover:bg-orange-50 border-none" : 
                        activity.badgeVariant === "outline" ? "bg-emerald-50 text-emerald-600 border-none" : 
                        "bg-blue-50 text-blue-600 hover:bg-blue-50 border-none"
                      }`}
                    >
                      {activity.badgeText}
                    </Badge>
                    <span className="text-[11px] text-slate-400 font-medium">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}