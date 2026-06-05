"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ColumnDef<T> {
  header: string;
  className?: string;
  render: (item: T) => React.ReactNode;
}

interface PaginationProps {
  currentStart: number;
  currentEnd: number;
  totalEntries: number;
  entryLabel?: "results" | "entries";
  borderClass?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  rowKey: (item: T) => string;
  emptyMessage?: string;
  // Slate vs Gray variations match completely via explicit props
  containerBorderClass?: string;
  headerRowClass?: string;
  bodyRowClass?: string;
  divideClass?: string;
  pagination?: PaginationProps;
}

export function DataTable<T>({
  data,
  columns,
  rowKey,
  emptyMessage = "No data found matching your search.",
  containerBorderClass = "border-slate-100",
  headerRowClass = "bg-slate-50/70 border-b border-slate-100 text-slate-400",
  bodyRowClass = "hover:bg-slate-50/30",
  divideClass = "divide-slate-50 text-slate-700",
  pagination,
}: DataTableProps<T>) {
  return (
    <div className={`bg-white rounded-xl border shadow-sm overflow-hidden ${containerBorderClass}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`text-[11px] font-bold uppercase tracking-wider ${headerRowClass}`}>
              {columns.map((col, idx) => (
                <th key={idx} className={`py-4 px-6 font-bold ${col.className || ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`divide-y text-sm font-medium ${divideClass}`}>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={rowKey(item)} className={`transition-colors ${bodyRowClass}`}>
                  {columns.map((col, idx) => (
                    <td key={idx} className={`py-4 px-6 ${col.className || ""}`}>
                      {col.render(item)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center text-slate-400 text-xs italic font-normal">
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Optional rendering for Pagination Footer modules */}
      {pagination && (
        <div className={`px-6 py-4 border-t flex items-center justify-between text-xs font-semibold text-slate-400 ${pagination.borderClass || "border-slate-100 bg-slate-50/40"}`}>
          <div>
            Showing <span className="text-slate-600">{pagination.currentStart} to {pagination.currentEnd}</span> of{" "}
            <span className="text-slate-600">
              {pagination.totalEntries.toLocaleString("en-US")}
            </span>{" "}
            {pagination.entryLabel || "results"}
          </div>
          <div className="flex items-center space-x-1">
            <button className={`p-1.5 rounded-md border bg-white text-slate-400 hover:text-slate-600 transition shadow-sm ${pagination.borderClass?.includes("gray") ? "border-gray-200" : "border-slate-200"}`}>
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="px-3 py-1.5 rounded-md bg-black text-white font-bold">1</button>
            <button className={`px-3 py-1.5 rounded-md border border-transparent text-slate-600 hover:bg-white transition ${pagination.borderClass?.includes("gray") ? "hover:border-gray-200" : "hover:border-slate-200"}`}>2</button>
            <button className={`px-3 py-1.5 rounded-md border border-transparent text-slate-600 hover:bg-white transition ${pagination.borderClass?.includes("gray") ? "hover:border-gray-200" : "hover:border-slate-200"}`}>3</button>
            <button className={`p-1.5 rounded-md border bg-white text-slate-400 hover:text-slate-600 transition shadow-sm ${pagination.borderClass?.includes("gray") ? "border-gray-200" : "border-slate-200"}`}>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}