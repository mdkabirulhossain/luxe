"use client";

import React, { useState } from "react";
import { Link2, Edit3, Trash2 } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ColumnDef, DataTable } from "@/components/shared/table/DataTable";


interface SequencingItem {
  id: string;
  title: string;
  description: string;
  route: string;
  isActive: boolean;
  image: string;
}

const INITIAL_SEQUENCING_DATA: SequencingItem[] = [
  {
    id: "01",
    title: "Summer Electronics Sale",
    description: "Up to 40% off on all flagship workstations",
    route: "/products?cat=elec",
    isActive: true,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "02",
    title: "New Seasonal Footwear",
    description: "The UltraStride collection has arrived.",
    route: "/collections/new",
    isActive: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "--",
    title: "Holiday Wellness Prep",
    description: "Upcoming Winter campaign for health items.",
    route: "/wellness",
    isActive: false,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=200",
  },
];

export function SliderSequencingList() {
  const [items, setItems] = useState<SequencingItem[]>(INITIAL_SEQUENCING_DATA);

  const toggleActiveState = (id: string, index: number) => {
    setItems(prev => prev.map((item, idx) => 
      // Safely check fallback index alignment or custom string key
      idx === index || (item.id !== "--" && item.id === id) 
        ? { ...item, isActive: !item.isActive } 
        : item
    ));
  };

  const columns: ColumnDef<SequencingItem>[] = [
    {
      header: "Seq",
      className: "w-12 text-center",
      render: (item) => (
        <span className={`text-xs font-bold block text-center ${item.isActive ? "text-indigo-600" : "text-slate-300"}`}>
          {item.id}
        </span>
      ),
    },
    {
      header: "Media Content",
      className: "flex-1 min-w-0",
      render: (item) => (
        <div className="flex items-center gap-5 min-w-0">
          {/* Dynamic Media Thumbnail */}
          <div className="w-20 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-100 shrink-0 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
          {/* Descriptive Content */}
          <div className="text-left min-w-0">
            <h4 className="text-sm font-bold text-slate-900 truncate leading-snug">
              {item.title}
            </h4>
            <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
              {item.description}
            </p>
          </div>
        </div>
      ),
    },
    {
      header: "Route Link",
      className: "w-48",
      render: (item) => (
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 text-slate-500 font-mono text-[10px] font-bold border border-slate-100 max-w-40 truncate">
          <Link2 className="h-3 w-3 text-slate-400 shrink-0" />
          <span className="truncate">{item.route}</span>
        </div>
      ),
    },
    {
      header: "Status Config",
      className: "w-32 text-right",
      // Removed ', idx' to cleanly match the 1-parameter signature expected by ColumnDef
      render: (item) => (
        <div className="flex items-center gap-3 w-24 justify-end ml-auto">
          <span className={`text-xs font-bold ${item.isActive ? "text-emerald-600" : "text-slate-400"}`}>
            {item.isActive ? "Active" : "Inactive"}
          </span>
          <Switch 
            checked={item.isActive} 
            onCheckedChange={() => toggleActiveState(item.id, items.indexOf(item))}
            className="data-[state=checked]:bg-indigo-600 scale-90"
          />
        </div>
      ),
    },
    {
      header: "Actions",
      className: "text-right w-24",
      render: () => (
        <div className="flex items-center justify-end gap-2 pl-2">
          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <Edit3 className="h-4 w-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-0">
      {/* Outer block header configuration preserved */}
      <Card className="bg-white border-b border-slate-50 rounded-b-none shadow-none rounded-t-xl overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between px-6 py-4 bg-white">
          <CardTitle className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Active Sequencing
          </CardTitle>
          <span className="text-[11px] text-slate-400 font-medium">
            Drag rows to reorder priorities
          </span>
        </CardHeader>
      </Card>

      {/* Shared generic datatable subbing out the row maps seamlessly */}
      <DataTable
        data={items}
        columns={columns}
        rowKey={(item) => `${item.id}-${item.title}`}
        containerBorderClass="border-slate-100 rounded-t-none border-t-0"
        headerRowClass="bg-slate-50/70 border-b border-slate-100 text-slate-400"
        bodyRowClass="hover:bg-slate-50/40"
        divideClass="divide-slate-100 text-slate-700"
      />
    </div>
  );
}