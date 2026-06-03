"use client";

import React, { useState } from "react";
import { Link2, Edit3, Trash2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const INITIAL_SEQUENCING_DATA = [
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
  const [items, setItems] = useState(INITIAL_SEQUENCING_DATA);

  const toggleActiveState = (index: number) => {
    setItems(prev => prev.map((item, idx) => 
      idx === index ? { ...item, isActive: !item.isActive } : item
    ));
  };

  return (
    <Card className="bg-white border-slate-100 shadow-xs rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between border-b border-slate-50 px-6 py-4 bg-white">
        <CardTitle className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Active Sequencing
        </CardTitle>
        <span className="text-[11px] text-slate-400 font-medium">
          Drag rows to reorder priorities
        </span>
      </CardHeader>
      
      <CardContent className="p-0 divide-y divide-slate-100">
        {items.map((item, idx) => (
          <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/40 transition-colors">
            
            {/* Left Content Identity Details Block */}
            <div className="flex items-center gap-5 flex-1 min-w-0">
              <span className={`text-xs font-bold w-6 text-center ${item.isActive ? "text-indigo-600" : "text-slate-300"}`}>
                {item.id}
              </span>
              
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

            {/* Right Meta Configurations Controls Layer */}
            <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 shrink-0">
              
              {/* Dynamic Path Query Route Block */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 text-slate-500 font-mono text-[10px] font-bold border border-slate-100 max-w-40 truncate">
                <Link2 className="h-3 w-3 text-slate-400 shrink-0" />
                <span className="truncate">{item.route}</span>
              </div>

              {/* Functional Switch Controller Toggles and Badge Indicators */}
              <div className="flex items-center gap-3 w-24 justify-end">
                <span className={`text-xs font-bold ${item.isActive ? "text-emerald-600" : "text-slate-400"}`}>
                  {item.isActive ? "Active" : "Inactive"}
                </span>
                <Switch 
                  checked={item.isActive} 
                  onCheckedChange={() => toggleActiveState(idx)}
                  className="data-[state=checked]:bg-indigo-600 scale-90"
                />
              </div>

              {/* Core Actions Controls Stack Container */}
              <div className="flex items-center gap-2 pl-2">
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
                  <Edit3 className="h-4 w-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>
        ))}
      </CardContent>
    </Card>
  );
}