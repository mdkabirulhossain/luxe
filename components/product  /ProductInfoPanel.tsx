/* eslint-disable react-hooks/set-state-in-effect */
// components/product  /ProductInfoPanel.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Heart, Truck, RotateCcw, Star } from "lucide-react";
import { DetailedProduct } from "@/lib/products";

interface ProductInfoPanelProps {
  product: DetailedProduct;
}

export default function ProductInfoPanel({ product }: ProductInfoPanelProps) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(2);

  // Synchronize internal state when product changes
  useEffect(() => {
    setSelectedColor(product.colors?.[0] || "");
    setSelectedSize(product.sizes?.[0] || "M");
    setQuantity(2);
  }, [product]);

  const rating = product.rating ?? 5;
  const reviewsCount = product.reviewsCount ?? 0;

  return (
    <div className="w-full flex flex-col">
      {/* Header and Reviews */}
      <h1 className="text-2xl font-semibold text-black tracking-wide">
        {product.title}
      </h1>
      
      <div className="flex items-center gap-2 mt-2 text-sm">
        <div className="flex items-center text-amber-500">
          {[...Array(5)].map((_, i) => {
            const filled = i < Math.floor(rating);
            return (
              <Star
                key={i}
                className={`w-4 h-4 ${filled ? "fill-current" : "text-gray-300"}`}
              />
            );
          })}
        </div>
        <span className="text-gray-400 font-medium">({reviewsCount} Reviews)</span>
        <span className="text-gray-300">|</span>
        <span className={product.inStock ? "text-emerald-500 font-medium" : "text-red-500 font-medium"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <div className="text-2xl font-medium text-black">${product.price}</div>
        {product.originalPrice !== undefined && (
          <div className="text-xl font-normal text-gray-400 line-through">${product.originalPrice}</div>
        )}
      </div>

      <p className="text-xs text-gray-700 leading-relaxed mt-4 border-b border-gray-200 pb-6">
        {product.description}
      </p>

      {/* Colour Swatch Options */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex items-center gap-4 mt-6">
          <span className="text-sm font-medium text-black">Colours:</span>
          <div className="flex items-center gap-2">
            {product.colors.map((colorClass) => (
              <button
                key={colorClass}
                onClick={() => setSelectedColor(colorClass)}
                className={`w-5 h-5 rounded-full ${colorClass} ring-offset-2 ring-1 transition-all cursor-pointer ${
                  selectedColor === colorClass ? "ring-black" : "ring-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size Layout Options */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="flex items-center gap-4 mt-6">
          <span className="text-sm font-medium text-black w-14">Size:</span>
          <div className="flex items-center gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 h-8 rounded text-xs font-semibold border transition-colors cursor-pointer ${
                  selectedSize === size
                    ? "bg-[#DB4444] text-white border-[#DB4444]"
                    : "bg-white text-black border-gray-300 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Buy Actions Row counter trigger */}
      <div className="flex items-center gap-4 mt-8">
        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-11">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 text-xl font-medium hover:bg-gray-100 h-full border-r border-gray-300 cursor-pointer"
          >
            -
          </button>
          <div className="w-12 text-center font-semibold text-sm">{quantity}</div>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 bg-[#DB4444] text-white text-xl font-medium h-full hover:bg-red-600 cursor-pointer"
          >
            +
          </button>
        </div>

        <button className="flex-1 bg-[#DB4444] hover:bg-red-600 text-white text-sm font-medium h-11 rounded transition-colors cursor-pointer">
          Buy Now
        </button>

        <button className="p-2.5 border border-gray-300 rounded hover:border-black transition-colors h-11 w-11 flex items-center justify-center text-black cursor-pointer">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Delivery / Shipping Feature Cards */}
      <div className="border border-gray-300 rounded-md mt-10 divide-y divide-gray-300">
        <div className="flex items-start gap-4 p-4">
          <Truck className="w-6 h-6 text-black shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-black">Free Delivery</h4>
            <button className="text-[11px] font-medium text-black underline mt-1 block cursor-pointer">
              Enter your postal code for Delivery Availability
            </button>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4">
          <RotateCcw className="w-6 h-6 text-black shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-black">Return Delivery</h4>
            <p className="text-[11px] font-medium text-black mt-1">
              Free 30 Days Delivery Returns. <button className="underline cursor-pointer">Details</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}