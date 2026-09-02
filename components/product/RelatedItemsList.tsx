// components/product  /RelatedItemsList.tsx
"use client";

import React from "react";
import ProductCard, { ProductCardData } from "@/components/shared/product/ProductCard";

const relatedData: ProductCardData[] = [
  {
    id: "1", // HAVIT Gamepad
    title: "HAVIT HV-G92 Gamepad",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80",
    discount: 40,
    currentPrice: 120,
    originalPrice: 160,
    colorVariants: [
      { name: "Crimson Red", colorClass: "bg-red-500", hex: "#ef4444", image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80" },
      { name: "Midnight Black", colorClass: "bg-black", hex: "#000000", image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?auto=format&fit=crop&w=600&q=80" },
      { name: "Electric Blue", colorClass: "bg-blue-600", hex: "#2563eb", image: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "2", // AK-900 Wired Keyboard
    title: "AK-900 Wired Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
    discount: 35,
    currentPrice: 960,
    originalPrice: 1160,
    colorVariants: [
      { name: "Dark Onyx", colorClass: "bg-black", hex: "#18181b", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80" },
      { name: "Cyber Platinum", colorClass: "bg-gray-400", hex: "#9ca3af", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80" },
      { name: "RGB Purple", colorClass: "bg-purple-600", hex: "#9333ea", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: "3", // IPS LCD Gaming Monitor
    title: "IPS LCD Gaming Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",
    discount: 30,
    currentPrice: 370,
    originalPrice: 400,
  },
  {
    id: "b3", // RGB liquid CPU Cooler
    title: "RGB liquid CPU Cooler",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80",
    currentPrice: 160,
    originalPrice: 170,
  },
];

export default function RelatedItemsList() {
  return (
    <div className="w-full pt-16">
      {/* Section Decorative Tag */}
      <div className="flex items-center gap-4 mb-8 select-none">
        <div className="w-5 h-10 bg-primary rounded-sm"></div>
        <span className="text-primary font-semibold text-sm">Related Item</span>
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