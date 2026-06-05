import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import { CategoryItem } from "@/types/category/category.types";

interface CategoryTableProps {
  filteredCategories: CategoryItem[];
  onOpenEditModal: (cat: CategoryItem) => void;
  onDeleteCategory: (id: string, name: string) => void;
}

export function CategoryTable({
  filteredCategories,
  onOpenEditModal,
  onDeleteCategory,
}: CategoryTableProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-4 px-6 font-bold w-1/4">Category Name</th>
              <th className="py-4 px-6 font-bold w-5/12">Subcategories</th>
              <th className="py-4 px-6 font-bold text-center w-32">Products</th>
              <th className="py-4 px-6 font-bold text-center w-28">Status</th>
              <th className="py-4 px-6 font-bold text-right w-28">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm font-medium text-slate-700">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-50/30 transition-colors">
                  
                  {/* Category Title */}
                  <td className="py-4 px-6">
                    <span className="text-slate-900 font-bold text-sm leading-normal">{cat.name}</span>
                  </td>

                  {/* Subcategories tags list chips */}
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-1.5 max-w-md py-1">
                      {cat.subcategories.length > 0 ? (
                        cat.subcategories.map((sub, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="inline-flex items-center text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200/40"
                          >
                            {sub}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-450 italic font-normal">No subcategories</span>
                      )}
                    </div>
                  </td>

                  {/* Associated Products Count */}
                  <td className="py-4 px-6 text-center font-semibold text-slate-800">
                    {cat.productCount}
                  </td>

                  {/* Status badge pill */}
                  <td className="py-4 px-6 text-center">
                    <span 
                      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold border tracking-wide uppercase ${
                        cat.status === "Active" 
                          ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                          : "bg-amber-50 text-amber-600 border-amber-100"
                      }`}
                    >
                      {cat.status}
                    </span>
                  </td>

                  {/* Row Controls */}
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-3 text-slate-400">
                      <button
                        onClick={() => onOpenEditModal(cat)}
                        className="hover:text-slate-900 transition-colors p-1 cursor-pointer"
                        aria-label="Edit category"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDeleteCategory(cat.id, cat.name)}
                        className="hover:text-rose-600 transition-colors p-1 cursor-pointer"
                        aria-label="Delete category"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400 text-xs italic font-normal">
                  No categories found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
