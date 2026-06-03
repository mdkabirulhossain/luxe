// components/product  /RelatedItemsList.tsx
"use client";

import React from "react";
import ProductCard, { ProductCardData } from "@/components/ProductCard";

const relatedData: ProductCardData[] = [
  {
    id: "1", // HAVIT Gamepad
    title: "HAVIT HV-G92 Gamepad",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80",
    discount: 40,
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviewsCount: 88,
  },
  {
    id: "2", // AK-900 Wired Keyboard
    title: "AK-900 Wired Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
    discount: 35,
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviewsCount: 75,
  },
  {
    id: "3", // IPS LCD Gaming Monitor
    title: "IPS LCD Gaming Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",
    discount: 30,
    currentPrice: 370,
    originalPrice: 400,
    rating: 5,
    reviewsCount: 99,
  },
  {
    id: "b3", // RGB liquid CPU Cooler
    title: "RGB liquid CPU Cooler",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80",
    currentPrice: 160,
    originalPrice: 170,
    rating: 4.5,
    reviewsCount: 65,
  },
];

export default function RelatedItemsList() {
  return (
    <div className="w-full pt-16">
      {/* Section Decorative Tag */}
      <div className="flex items-center gap-4 mb-8 select-none">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-semibold text-sm">Related Item</span>
      </div>

      {/* Grid Content List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
        {relatedData.map((prod) => (
          <ProductCard key={prod.id} product={prod} variant="best-selling" />
        ))}
      </div>
    </div>
  );
}