"use client";

import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import { CategoryItem } from "@/types/category/category.types";
import { ColumnDef, DataTable } from "@/components/shared/table/DataTable";

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
  const columns: ColumnDef<CategoryItem>[] = [
    {
      header: "Category Name",
      className: "w-1/4",
      render: (cat) => <span className="text-slate-900 font-bold text-sm leading-normal">{cat.name}</span>,
    },
    {
      header: "Subcategories",
      className: "w-5/12",
      render: (cat) => (
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
      ),
    },
    {
      header: "Products",
      className: "text-center w-32 font-semibold text-slate-800",
      render: (cat) => cat.productCount,
    },
    {
      header: "Status",
      className: "text-center w-28",
      render: (cat) => (
        <span 
          className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold border tracking-wide uppercase ${
            cat.status === "Active" 
              ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
              : "bg-amber-50 text-amber-600 border-amber-100"
          }`}
        >
          {cat.status}
        </span>
      ),
    },
    {
      header: "Actions",
      className: "text-right w-28",
      render: (cat) => (
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
      ),
    },
  ];

  return (
    <DataTable
      data={filteredCategories}
      columns={columns}
      rowKey={(cat) => cat.id}
      emptyMessage="No categories found matching your search."
    />
  );
}