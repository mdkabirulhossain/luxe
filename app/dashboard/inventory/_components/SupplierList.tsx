"use client";

import React from "react";
import { SlidersHorizontal } from "lucide-react";

interface Supplier {
  name: string;
  category: string;
  rating: string;
  ratingColor: string;
  ratingBg: string;
  leadTime: string;
  logoInitials: string;
  logoBg: string;
}

const suppliers: Supplier[] = [
  {
    name: "Nexus Tech Group",
    category: "Electronics & Hardware",
    rating: "A+ Rated",
    ratingColor: "text-emerald-600",
    ratingBg: "bg-emerald-50",
    leadTime: "4d",
    logoInitials: "NT",
    logoBg: "bg-slate-900",
  },
  {
    name: "ErgoSystems Inc.",
    category: "Office Infrastructure",
    rating: "B+ Rated",
    ratingColor: "text-amber-600",
    ratingBg: "bg-amber-50",
    leadTime: "12d",
    logoInitials: "ES",
    logoBg: "bg-slate-800",
  },
  {
    name: "Global Parcel Direct",
    category: "Shipping & Logistics",
    rating: "Premium",
    ratingColor: "text-indigo-600",
    ratingBg: "bg-indigo-50",
    leadTime: "Real-time",
    logoInitials: "GP",
    logoBg: "bg-slate-300",
  },
];

export default function SupplierList() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-slate-900">Supplier List</h2>
          <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all border border-transparent hover:border-slate-200">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          {suppliers.map((supplier) => (
            <div
              key={supplier.name}
              className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-lg ${supplier.logoBg} flex items-center justify-center font-bold text-xs text-white shadow-sm`}
                >
                  {supplier.logoInitials}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{supplier.name}</h3>
                  <p className="text-xs text-slate-400 font-medium">{supplier.category}</p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${supplier.ratingBg} ${supplier.ratingColor}`}
                >
                  {supplier.rating}
                </span>
                <p className="text-[11px] text-slate-400 font-medium mt-1">
                  Lead time: <span className="text-slate-600 font-semibold">{supplier.leadTime}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full mt-6 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-colors">
        View All 124 Suppliers
      </button>
    </div>
  );
}