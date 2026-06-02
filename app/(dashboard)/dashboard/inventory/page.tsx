import React from "react";
import { Package, AlertTriangle, CheckCircle, ArrowDownCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InventoryPage() {
  const inventoryStats = [
    { label: "Total Products", value: "1,842", icon: Package, color: "bg-indigo-50 text-indigo-600" },
    { label: "In Stock", value: "1,520", icon: CheckCircle, color: "bg-emerald-50 text-emerald-600" },
    { label: "Low Stock", value: "218", icon: AlertTriangle, color: "bg-amber-50 text-amber-600" },
    { label: "Out of Stock", value: "104", icon: ArrowDownCircle, color: "bg-rose-50 text-rose-600" },
  ];

  const inventoryItems = [
    { sku: "SKU-001", name: "Wireless Earbuds Pro", category: "Electronics", stock: 342, status: "In Stock", statusColor: "bg-emerald-50 text-emerald-700" },
    { sku: "SKU-002", name: "Leather Crossbody Bag", category: "Accessories", stock: 12, status: "Low Stock", statusColor: "bg-amber-50 text-amber-700" },
    { sku: "SKU-003", name: "Smart Watch Ultra", category: "Electronics", stock: 0, status: "Out of Stock", statusColor: "bg-rose-50 text-rose-700" },
    { sku: "SKU-004", name: "Running Shoes Air Max", category: "Footwear", stock: 89, status: "In Stock", statusColor: "bg-emerald-50 text-emerald-700" },
    { sku: "SKU-005", name: "Organic Cotton T-Shirt", category: "Apparel", stock: 8, status: "Low Stock", statusColor: "bg-amber-50 text-amber-700" },
    { sku: "SKU-006", name: "Stainless Steel Water Bottle", category: "Lifestyle", stock: 456, status: "In Stock", statusColor: "bg-emerald-50 text-emerald-700" },
    { sku: "SKU-007", name: "Bluetooth Speaker Mini", category: "Electronics", stock: 0, status: "Out of Stock", statusColor: "bg-rose-50 text-rose-700" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Inventory</h2>
        <p className="text-sm text-slate-500 mt-1">Monitor stock levels and manage product availability.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {inventoryStats.map((stat) => {
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

      {/* Inventory Table */}
      <Card className="border border-slate-200/80 shadow-none rounded-xl">
        <CardHeader className="p-6 border-b border-slate-100">
          <CardTitle className="text-base font-bold text-slate-900">Inventory Items</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">SKU</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">PRODUCT</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">CATEGORY</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">STOCK</th>
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-400 tracking-wider">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item) => (
                  <tr key={item.sku} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-500">{item.sku}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 text-slate-500">{item.category}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{item.stock}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${item.statusColor}`}>
                        {item.status}
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
