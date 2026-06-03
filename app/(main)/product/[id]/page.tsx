"use client";

import ProductGallery from "@/components/product  /ProductGallery";
import ProductInfoPanel from "@/components/product  /ProductInfoPanel";
import RelatedItemsList from "@/components/product  /RelatedItemsList";
import React from "react";

const controllerImages = [
  "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1592155931584-901ac15763e3?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1580234810907-b40315b76418?auto=format&fit=crop&w=400&q=80",
];

export default function ProductDetailPage() {
  return (
    <main className="w-full min-h-screen bg-white text-black px-4 md:px-12 lg:px-24 py-10 max-w-360 mx-auto">
      {/* Breadcrumbs Navigation Header */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-12">
        <button className="hover:text-black transition-colors cursor-pointer">Account</button>
        <span>/</span>
        <button className="hover:text-black transition-colors cursor-pointer">Gaming</button>
        <span>/</span>
        <span className="text-black font-semibold">Havic HV G-92 Gamepad</span>
      </nav>

      {/* Split Interactive Form Canvas Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Side: Images Viewport columns */}
        <div className="lg:col-span-7">
          <ProductGallery images={controllerImages} />
        </div>

        {/* Right Side: Options Setup Info Columns */}
        <div className="lg:col-span-5">
          <ProductInfoPanel />
        </div>
      </div>

      {/* Lower Secondary Linked Related Modules */}
      <RelatedItemsList />
    </main>
  );
}