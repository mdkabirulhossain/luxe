"use client";

import React from "react";

export default function GeneralInfoCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-sm">
      <h2 className="text-base font-bold text-slate-900">General Information</h2>

      <div className="grid grid-cols-1 gap-4">
        {/* Store Name Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-500">Store Name</label>
          <input
            type="text"
            defaultValue="Lumina Digital Enterprise"
            className="w-full text-sm px-3.5 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 bg-white"
          />
        </div>

        {/* Support Email & Currency Row Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-semibold text-slate-500">Support Email</label>
            <input
              type="email"
              defaultValue="support@lumina.io"
              className="w-full text-sm px-3.5 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 bg-white"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-500">Currency</label>
            <select
              defaultValue="USD"
              className="w-full text-sm px-3.5 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-size-[10px_10px] bg-position-[right_14px_center] bg-no-repeat"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>

        {/* Store Description TextArea */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-500">Store Description</label>
          <textarea
            rows={3}
            defaultValue="High-performance digital products and enterprise-grade software solutions for modern businesses."
            className="w-full text-sm px-3.5 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 bg-white resize-none leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
}