import React from "react";
import { ShoppingBag } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <div className="bg-indigo-50 text-indigo-600 p-4 rounded-full">
        <ShoppingBag className="h-10 w-10" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Products Catalog</h2>
        <p className="text-slate-500 max-w-sm mt-1">
          Manage your products inventory, view pricing details, and update product listings.
        </p>
      </div>
    </div>
  );
}
