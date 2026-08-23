// components/products/filters/FilterHeader.tsx
"use client";

import React from "react";
import { X, RotateCcw } from "lucide-react";

interface FilterHeaderProps {
  isAnyFilterActive: boolean;
  onResetFilters: () => void;
  onCloseMobile?: () => void;
}

export const FilterHeader: React.FC<FilterHeaderProps> = ({
  isAnyFilterActive,
  onResetFilters,
  onCloseMobile,
}) => {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-neutral-200 shrink-0">
      <h2 className="text-sm sm:text-base font-bold tracking-wider uppercase text-black">
        FILTERS
      </h2>
      <div className="flex items-center gap-2">
        {isAnyFilterActive && (
          <button
            onClick={onResetFilters}
            className="text-xs text-neutral-500 hover:text-black font-medium flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1 text-neutral-500 hover:text-black rounded cursor-pointer"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
