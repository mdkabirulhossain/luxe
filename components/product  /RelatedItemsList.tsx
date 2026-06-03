"use client";

import React from "react";
import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";

interface RelatedProduct {
  id: string;
  title: string;
  image: string;
  discount?: number;
  currentPrice: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  hasAddToCartHover?: boolean;
}

const relatedData: RelatedProduct[] = [
  {
    id: "r1",
    title: "HAVIT HV-G92 Gamepad",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80",
    discount: 40,
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviewsCount: 88,
  },
  {
    id: "r2",
    title: "AK-900 Wired Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
    discount: 35,
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviewsCount: 75,
    hasAddToCartHover: true,
  },
  {
    id: "r3",
    title: "IPS LCD Gaming Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",
    discount: 30,
    currentPrice: 370,
    originalPrice: 400,
    rating: 5,
    reviewsCount: 99,
  },
  {
    id: "r4",
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
      <div className="flex items-center gap-4 mb-8">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-semibold text-sm">Related Item</span>
      </div>

      {/* Grid Content List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
        {relatedData.map((prod) => (
          <div key={prod.id} className="group flex flex-col">
            {/* Asset Image Box Wrap */}
            <div className="w-full aspect-square bg-[#F5F5F5] rounded p-6 relative flex items-center justify-center overflow-hidden">
              {prod.discount && (
                <span className="absolute top-3 left-3 bg-[#DB4444] text-white font-medium text-[10px] px-2 py-1 rounded-sm z-10">
                  -{prod.discount}%
                </span>
              )}

              {/* Top right utility badges */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button className="bg-white p-1.5 rounded-full text-black hover:bg-gray-100 shadow-sm transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="bg-white p-1.5 rounded-full text-black hover:bg-gray-100 shadow-sm transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Next.js Optimized Image Wrapper Fluid Block */}
              <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-contain mix-blend-multiply"
                />
              </div>

              {/* Add To Cart Overlay Footer bar */}
              <button
                className={`absolute bottom-0 left-0 w-full bg-black text-white text-xs font-semibold py-2.5 transition-all duration-200 transform z-10 ${
                  prod.hasAddToCartHover 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                }`}
              >
                Add To Cart
              </button>
            </div>

            {/* Meta Text Blocks */}
            <h3 className="font-semibold text-sm text-black mt-3 truncate">
              {prod.title}
            </h3>
            
            <div className="flex items-center gap-3 mt-1.5 text-xs font-semibold">
              <span className="text-[#DB4444]">${prod.currentPrice}</span>
              {prod.originalPrice && (
                <span className="text-gray-400 line-through">${prod.originalPrice}</span>
              )}
            </div>

            {/* Stars Scoring Bar */}
            <div className="flex items-center gap-1.5 mt-2 text-xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 fill-current ${
                      i < Math.floor(prod.rating) ? "text-amber-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400 font-bold">({prod.reviewsCount})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}