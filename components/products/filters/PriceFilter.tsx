/* eslint-disable react-hooks/set-state-in-effect */
// components/products/filters/PriceFilter.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface PriceFilterProps {
  priceRange: [number, number];
  minCatalogPrice: number;
  maxCatalogPrice: number;
  onPriceChange: (newRange: [number, number]) => void;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({
  priceRange,
  minCatalogPrice,
  maxCatalogPrice,
  onPriceChange,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [localMinPrice, setLocalMinPrice] = useState<number>(priceRange[0]);
  const [localMaxPrice, setLocalMaxPrice] = useState<number>(priceRange[1]);

  useEffect(() => {
    setLocalMinPrice(priceRange[0]);
    setLocalMaxPrice(priceRange[1]);
  }, [priceRange]);

  const handleApply = () => {
    const validMin = Math.max(minCatalogPrice, Math.min(localMinPrice, localMaxPrice));
    const validMax = Math.min(maxCatalogPrice, Math.max(localMinPrice, localMaxPrice));
    onPriceChange([validMin, validMax]);
  };

  return (
    <div className="py-4.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-semibold text-sm text-neutral-900 hover:text-black transition-colors cursor-pointer"
      >
        <span>Price</span>
        {isOpen ? (
          <ChevronUp className="w-4.5 h-4.5 text-neutral-500" />
        ) : (
          <ChevronDown className="w-4.5 h-4.5 text-neutral-500" />
        )}
      </button>

      {isOpen && (
        <div className="mt-3 space-y-3.5">
          <p className="text-xs text-neutral-500">
            The highest price is ৳{maxCatalogPrice.toLocaleString()}
          </p>

          {/* Price Slider Bar */}
          <div className="relative py-2">
            <input
              type="range"
              min={minCatalogPrice}
              max={maxCatalogPrice}
              value={localMaxPrice}
              onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
          </div>

          {/* Min & Max Price Input Boxes */}
          <div className="flex items-center gap-2.5">
            <div className="flex-1">
              <label className="text-[10px] text-neutral-400 uppercase font-mono block mb-1">
                Min Price (৳)
              </label>
              <input
                type="number"
                value={localMinPrice}
                onChange={(e) => setLocalMinPrice(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs sm:text-sm border border-neutral-300 rounded-md focus:border-black focus:outline-none bg-white text-black"
                placeholder="Min"
              />
            </div>
            <span className="text-neutral-400 self-end mb-2.5">-</span>
            <div className="flex-1">
              <label className="text-[10px] text-neutral-400 uppercase font-mono block mb-1">
                Max Price (৳)
              </label>
              <input
                type="number"
                value={localMaxPrice}
                onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs sm:text-sm border border-neutral-300 rounded-md focus:border-black focus:outline-none bg-white text-black"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Apply Price Button */}
          <button
            onClick={handleApply}
            className="w-full py-2 bg-black hover:bg-neutral-800 text-white rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-sm active:scale-98"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};
