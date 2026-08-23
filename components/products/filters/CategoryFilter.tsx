// components/products/filters/CategoryFilter.tsx
"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { sidebarCategories } from "@/components/sidebar";

interface CategoryFilterProps {
  selectedCategory: string;
  selectedSubcategory: string;
  onCategorySelect: (category: string) => void;
  onSubcategorySelect: (category: string, subcategory: string) => void;
  byCategoryCounts: Record<string, number>;
  bySubcategoryCounts: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
  byCategoryCounts,
  bySubcategoryCounts,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  // Expanded categories in sidebar
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "Women's Fashion": true,
    "Men's Fashion": true,
    Electronics: true,
    "Home & Lifestyle": false,
    Medicine: false,
    "Sports & Outdoor": false,
  });

  const toggleCategoryExpand = (catName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  return (
    <div className="py-4.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-semibold text-sm text-neutral-900 hover:text-black transition-colors cursor-pointer"
      >
        <span>Categories</span>
        {isOpen ? (
          <ChevronUp className="w-4.5 h-4.5 text-neutral-500" />
        ) : (
          <ChevronDown className="w-4.5 h-4.5 text-neutral-500" />
        )}
      </button>

      {isOpen && (
        <div className="mt-3.5 space-y-3">
          {sidebarCategories.map((cat) => {
            const isCatChecked = selectedCategory === cat.name;
            const isExpanded = !!expandedCategories[cat.name];
            const catCount = byCategoryCounts[cat.name] || 0;

            return (
              <div key={cat.name} className="space-y-1.5">
                {/* Category item row */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-800 hover:text-black">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isCatChecked && !selectedSubcategory}
                      onChange={() => onCategorySelect(cat.name)}
                      className="w-4 h-4 rounded border-neutral-300 text-black accent-black focus:ring-0 cursor-pointer"
                    />
                    <span className={isCatChecked ? "font-semibold text-black" : ""}>
                      {cat.name}
                    </span>
                  </label>
                  <span className="text-xs text-neutral-400 font-mono">
                    {catCount}
                  </span>
                </div>

                {/* Subcategories Expand / Collapse toggle */}
                {cat.subOptions && cat.subOptions.length > 0 && (
                  <div className="pl-6.5">
                    <button
                      type="button"
                      onClick={(e) => toggleCategoryExpand(cat.name, e)}
                      className="text-[11px] text-neutral-500 hover:text-black flex items-center gap-1 font-medium transition-colors mb-1 cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide items" : "Show items"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3" />
                      )}
                    </button>

                    {/* Nested Subcategories */}
                    {isExpanded && (
                      <div className="space-y-1.5 pt-1 pb-1 pl-1">
                        {cat.subOptions.map((sub) => {
                          const isSubChecked =
                            selectedCategory === cat.name &&
                            selectedSubcategory === sub.name;
                          const subCount = bySubcategoryCounts[sub.name] || 0;

                          return (
                            <label
                              key={sub.name}
                              className="flex items-center justify-between text-xs text-neutral-600 hover:text-black cursor-pointer group"
                            >
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={isSubChecked}
                                  onChange={() => onSubcategorySelect(cat.name, sub.name)}
                                  className="w-3.5 h-3.5 rounded border-neutral-300 text-black accent-black focus:ring-0 cursor-pointer"
                                />
                                <span
                                  className={isSubChecked ? "font-medium text-black" : ""}
                                >
                                  {sub.name}
                                </span>
                              </div>
                              <span className="text-[10px] text-neutral-400 font-mono">
                                {subCount}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
