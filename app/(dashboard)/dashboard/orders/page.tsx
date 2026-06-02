import React from "react";
import { ShoppingCart, Clock, Package, CreditCard, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrdersPage() {
  const orderStats = [
    { label: "Total Orders", value: "1,284", icon: ShoppingCart, color: "bg-indigo-50 text-indigo-600" },
    { label: "Pending", value: "42", icon: Clock, color: "bg-amber-50 text-amber-600" },
    { label: "Shipped", value: "189", icon: Package, color: "bg-blue-50 text-blue-600" },
    { label: "Revenue", value: "$48,290", icon: CreditCard, color: "bg-emerald-50 text-emerald-600" },
  ];

  const recentOrders = [
    { id: "#ORD-7291", customer: "Sarah Mitchell", date: "Jun 1, 2026", amount: "$245.00", status: "Delivered", statusColor: "bg-emerald-50 text-emerald-700" },
    { id: "#ORD-7290", customer: "James Cooper", date: "Jun 1, 2026", amount: "$189.50", status: "Shipped", statusColor: "bg-blue-50 text-blue-700" },
    { id: "#ORD-7289", customer: "Emma Watson", date: "May 31, 2026", amount: "$532.00", status: "Processing", statusColor: "bg-amber-50 text-amber-700" },
    { id: "#ORD-7288", customer: "David Kim", date: "May 31, 2026", amount: "$78.90", status: "Delivered", statusColor: "bg-emerald-50 text-emerald-700" },
    { id: "#ORD-7287", customer: "Olivia Brown", date: "May 30, 2026", amount: "$1,200.00", status: "Pending", statusColor: "bg-slate-100 text-slate-700" },
    { id: "#ORD-7286", customer: "Michael Lee", date: "May 30, 2026", amount: "$340.75", status: "Shipped", statusColor: "bg-blue-50 text-blue-700" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Orders</h2>
        <p className="text-sm text-slate-500 mt-1">Track and manage all customer orders.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {orderStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border border-slate-200/80 shadow-none rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 tracking-wider">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Orders Table */}
      <Card className="border border-slate-200/80 shadow-none rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between p-6 border-b border-slate-100">
          <CardTitle className="text-base font-bold text-slate-900">Recent Orders</CardTitle>
          <div className="flex items-center gap-1 text-xs font-semibold">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-emerald-600">+12.5%</span>
            <span className="text-slate-400 ml-1">vs last month</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">ORDER ID</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">CUSTOMER</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">DATE</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">AMOUNT</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">{order.id}</td>
                    <td className="px-6 py-4 text-slate-600">{order.customer}</td>
                    <td className="px-6 py-4 text-slate-500">{order.date}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
