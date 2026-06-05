"use client";

import React from "react";
import { Edit2, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-4 px-6 font-bold w-24">Preview</th>
              <th className="py-4 px-6 font-bold">Product Name</th>
              <th className="py-4 px-6 font-bold">Category</th>
              <th className="py-4 px-6 font-bold">Price</th>
              <th className="py-4 px-6 font-bold">Stock Status</th>
              <th className="py-4 px-6 font-bold text-right w-28">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm font-medium text-slate-700">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50/30 transition-colors">

                {/* Product Thumbnail Asset */}
                <td className="py-4 px-6">
                  {/* Added 'relative' to the container so 'fill' scopes correctly */}
                  <div className="relative w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      sizes="48px" // Optimizes image delivery for a 12x12 (48px) slot
                      className="object-cover"
                    />
                  </div>
                </td>

                {/* Name & Subtext SKU Info */}
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-semibold text-sm">{product.name}</span>
                    <span className="text-[11px] text-slate-400 font-medium mt-0.5 tracking-wider uppercase">
                      SKU: {product.sku}
                    </span>
                  </div>
                </td>

                {/* Category classification */}
                <td className="py-4 px-6 text-slate-500 font-normal">
                  {product.category}
                </td>

                {/* Price Label */}
                <td className="py-4 px-6 font-bold text-slate-900">
                  ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>

                {/* Inventory Status Pill */}
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wide uppercase ${stockBadgeStyles[product.stockStatus]}`}>
                    {product.stockStatus}
                  </span>
                </td>

                {/* Row Controls */}
                <td className="py-4 px-6 text-right">
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
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination View Navigation Footer */}
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/40 flex items-center justify-between text-xs font-semibold text-slate-400">
        <div>
          Showing <span className="text-slate-600">1 to 4</span> of <span className="text-slate-600">124</span> results
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-1.5 rounded-md border border-slate-200 bg-white text-slate-400 hover:text-slate-600 transition shadow-sm">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button className="px-3 py-1.5 rounded-md bg-black text-white font-bold">1</button>
          <button className="px-3 py-1.5 rounded-md border border-transparent text-slate-600 hover:border-slate-200 hover:bg-white transition">2</button>
          <button className="px-3 py-1.5 rounded-md border border-transparent text-slate-600 hover:border-slate-200 hover:bg-white transition">3</button>
          <button className="p-1.5 rounded-md border border-slate-200 bg-white text-slate-400 hover:text-slate-600 transition shadow-sm">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}