"use client";

import React, { useState } from "react";
import { Plus, Download, ChevronDown, Layers, AlertTriangle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductItem, ProductTable } from "@/app/(dashboard)/dashboard/products/_components/ProductTable";


// Mocking high-quality placeholder data mirroring image_55e7ad.jpg
const MOCK_PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    name: "Aura Edition Watch",
    sku: "WTC-004-WHT",
    category: "Accessories",
    price: 299.00,
    stockStatus: "In Stock",
    imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "prod-2",
    name: "Sonic Pro X1",
    sku: "AUD-992-BLK",
    category: "Electronics",
    price: 450.00,
    stockStatus: "Low Stock",
    imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "prod-3",
    name: "Velocita Runner Red",
    sku: "SHO-551-RED",
    category: "Footwear",
    price: 125.00,
    stockStatus: "Out of Stock",
    imageSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "prod-4",
    name: "Optic Retro M1",
    sku: "CAM-012-SLV",
    category: "Electronics",
    price: 1299.00,
    stockStatus: "In Stock",
    imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>(MOCK_PRODUCTS);

  const handleEditProduct = (id: string) => {
    console.log("Editing product context profile path:", id);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    console.log("Deleted database product instance entry point row matching ref ID:", id);
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Header Row Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Product Management</h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Manage, track, and update your global store inventory with precision.
          </p>
        </div>
        <Button size="sm" className="bg-black text-white hover:bg-zinc-800 font-bold text-xs gap-1.5 self-start sm:self-auto">
          <Plus className="h-3.5 w-3.5" />
          New Product
        </Button>
      </div>

      {/* 2. Secondary Filter Configuration Toolbar Control Rack */}
      <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 font-semibold text-xs gap-3 text-slate-600 border-slate-200">
            <span>All Categories</span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </Button>
          <Button variant="outline" size="sm" className="h-9 font-semibold text-xs gap-3 text-slate-600 border-slate-200">
            <span>Any Status</span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="h-9 font-bold text-xs gap-2 text-slate-600 hover:bg-slate-50 self-end sm:self-auto">
          <Download className="h-3.5 w-3.5 text-slate-500" />
          Export CSV
        </Button>
      </div>

      {/* 3. Render Master Table Layer */}
      <ProductTable 
        products={products} 
        onEdit={handleEditProduct} 
        onDelete={handleDeleteProduct} 
      />

      {/* 4. Inventory Analytical Context Bottom Matrix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Total Value */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-blue-50/50 rounded-lg text-blue-600 border border-blue-50 shrink-0">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Value</p>
            <h3 className="text-xl font-bold text-slate-900 mt-1">$42,850.00</h3>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-rose-50/50 rounded-lg text-rose-600 border border-rose-50 shrink-0">
            <AlertTriangle className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Low Stock Alerts</p>
            <h3 className="text-xl font-bold text-slate-900 mt-1">12 Items</h3>
          </div>
        </div>

        {/* Stock Turnover Metric */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-emerald-50/50 rounded-lg text-emerald-600 border border-emerald-50 shrink-0">
            <BarChart3 className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Stock Turnover</p>
            <h3 className="text-xl font-bold text-slate-900 mt-1">+14.2%</h3>
          </div>
        </div>

      </div>

    </div>
  );
}