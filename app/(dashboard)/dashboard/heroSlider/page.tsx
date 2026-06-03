"use client";

import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SliderStatCards } from "@/components/dashboard/heroSlider/stat-cards";
import { SliderSequencingList } from "@/components/dashboard/heroSlider/sequencing-list";



export default function HeroSliderManagementPage() {
  return (
    <div className="space-y-6">
      
      {/* Section View Heading Panel Element */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-left">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Hero Slider Management</h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Manage your website&apos;s primary landing banners and seasonal promotions.
          </p>
        </div>
        <Button className="bg-black text-white hover:bg-zinc-800 font-bold text-xs gap-1.5 h-10 px-4 rounded-lg self-start sm:self-auto cursor-pointer">
          <Plus className="h-4 w-4" />
          New Slider
        </Button>
      </div>

      {/* Aggregate Metric Analytics Cards Grid */}
      <SliderStatCards />

      {/* Master Interactive Management Table Sequencing Workspace Grid Block */}
      <SliderSequencingList />

    </div>
  );
}