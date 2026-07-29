import React from "react";
import { FolderTree, Tags, Layers } from "lucide-react";

interface CategoryMetricsProps {
  totalCategoriesCount: number;
  totalSubcategoriesCount: number;
  activeCount: number;
}

export function CategoryMetrics({
  totalCategoriesCount,
  totalSubcategoriesCount,
  activeCount,
}: CategoryMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Total Categories card */}
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
        <div className="p-2.5 bg-indigo-50/50 rounded-lg text-indigo-600 border border-indigo-50 shrink-0">
          <FolderTree className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Categories</p>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{totalCategoriesCount}</h3>
        </div>
      </div>

      {/* Total Subcategories card */}
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
        <div className="p-2.5 bg-emerald-50/50 rounded-lg text-emerald-600 border border-emerald-50 shrink-0">
          <Tags className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Subcategories</p>
          <h3 className="text-xl font-bold text-slate-900 mt-1">{totalSubcategoriesCount}</h3>
        </div>
      </div>

      {/* Active categories count */}
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
        <div className="p-2.5 bg-amber-50/50 rounded-lg text-amber-600 border border-amber-50 shrink-0">
          <Layers className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Status</p>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            {activeCount} / {totalCategoriesCount} Active
          </h3>
        </div>
      </div>
    </div>
  );
}