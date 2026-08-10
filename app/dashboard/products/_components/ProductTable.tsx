"use client";

import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import { ColumnDef, DataTable } from "@/components/shared/table/DataTable";

export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

export interface ProductItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stockStatus: StockStatus;
  imageSrc: string;
}

interface ProductTableProps {
  products: ProductItem[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  const stockBadgeStyles: Record<StockStatus, string> = {
    "In Stock": "bg-emerald-50 text-emerald-600 border-emerald-100",
    "Low Stock": "bg-amber-50 text-amber-600 border-amber-100",
    "Out of Stock": "bg-rose-50 text-rose-600 border-rose-100",
  };

  const columns: ColumnDef<ProductItem>[] = [
    {
      header: "Preview",
      className: "w-24",
      render: (product) => (
        <div className="relative w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden">
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
      ),
    },
    {
      header: "Product Name",
      render: (product) => (
        <div className="flex flex-col">
          <span className="text-slate-900 font-semibold text-sm">{product.name}</span>
          <span className="text-[11px] text-slate-400 font-medium mt-0.5 tracking-wider uppercase">
            SKU: {product.sku}
          </span>
        </div>
      ),
    },
    {
      header: "Category",
      className: "text-slate-500 font-normal",
      render: (product) => product.category,
    },
    {
      header: "Price",
      className: "font-bold text-slate-900",
      render: (product) =>
        `$${product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    },
    {
      header: "Stock Status",
      render: (product) => (
        <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wide uppercase ${stockBadgeStyles[product.stockStatus]}`}>
          {product.stockStatus}
        </span>
      ),
    },
    {
      header: "Actions",
      className: "text-right w-28",
      render: (product) => (
        <div className="flex items-center justify-end gap-3 text-slate-400">
          <button
            onClick={() => onEdit?.(product.id)}
            className="hover:text-slate-900 transition-colors p-1"
            aria-label="Edit product"
          >
            <Edit2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete?.(product.id)}
            className="hover:text-rose-600 transition-colors p-1"
            aria-label="Delete product"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      data={products}
      columns={columns}
      rowKey={(product) => product.id}
      pagination={{
        currentStart: 1,
        currentEnd: 4,
        totalEntries: 124,
        entryLabel: "results",
        borderClass: "border-slate-100 bg-slate-50/40",
      }}
    />
  );
}