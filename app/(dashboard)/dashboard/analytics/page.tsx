import React from "react";
import { BarChart3, Users, Eye, MousePointerClick } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  const analyticsStats = [
    { label: "Page Views", value: "124.5K", change: "+18.2%", icon: Eye, color: "bg-violet-50 text-violet-600", isPositive: true },
    { label: "Unique Visitors", value: "48,290", change: "+8.7%", icon: Users, color: "bg-blue-50 text-blue-600", isPositive: true },
    { label: "Bounce Rate", value: "32.4%", change: "-3.1%", icon: BarChart3, color: "bg-amber-50 text-amber-600", isPositive: true },
    { label: "Conversion Rate", value: "4.8%", change: "+1.2%", icon: MousePointerClick, color: "bg-emerald-50 text-emerald-600", isPositive: true },
  ];

  const trafficSources = [
    { source: "Organic Search", visitors: "18,420", percentage: 38, color: "bg-indigo-500" },
    { source: "Direct Traffic", visitors: "12,840", percentage: 26, color: "bg-violet-500" },
    { source: "Social Media", visitors: "9,210", percentage: 19, color: "bg-blue-500" },
    { source: "Email Campaigns", visitors: "5,120", percentage: 11, color: "bg-emerald-500" },
    { source: "Referral Links", visitors: "2,700", percentage: 6, color: "bg-amber-500" },
  ];

  const topPages = [
    { page: "/products/wireless-earbuds", views: "12,450", avgTime: "3m 24s" },
    { page: "/products/smart-watch-pro", views: "9,280", avgTime: "2m 58s" },
    { page: "/collections/summer-sale", views: "8,140", avgTime: "4m 12s" },
    { page: "/products/leather-backpack", views: "6,920", avgTime: "2m 45s" },
    { page: "/products/running-shoes", views: "5,310", avgTime: "3m 08s" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Analytics</h2>
        <p className="text-sm text-slate-500 mt-1">Monitor your store performance and customer insights.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {analyticsStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border border-slate-200/80 shadow-none rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 tracking-wider mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-emerald-600 mt-3">{stat.change} from last month</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Traffic Sources */}
        <Card className="border border-slate-200/80 shadow-none rounded-xl">
          <CardHeader className="p-6 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900">Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            {trafficSources.map((item) => (
              <div key={item.source} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{item.source}</span>
                  <span className="text-slate-500">{item.visitors} <span className="text-slate-400">({item.percentage}%)</span></span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card className="border border-slate-200/80 shadow-none rounded-xl">
          <CardHeader className="p-6 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900">Top Pages</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">PAGE</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">VIEWS</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">AVG. TIME</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((item) => (
                  <tr key={item.page} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700 truncate max-w-[200px]">{item.page}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{item.views}</td>
                    <td className="px-6 py-4 text-slate-500">{item.avgTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
