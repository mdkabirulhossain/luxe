/* eslint-disable react-hooks/set-state-in-effect */
// components/sidebar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export interface SubCategory {
  name: string;
  subOptions?: string[];
}

export interface SidebarCategory {
  name: string;
  subOptions?: SubCategory[];
}

export const sidebarCategories: SidebarCategory[] = [
  {
    name: "Groceries & Essentials",
    subOptions: [
      {
        name: "Baking, Cooking",
        subOptions: ["Cooking Ingredients", "Home Baking, Sugar", "Condiment Dressing"],
      },
      { name: "Laundry, Household" },
      { name: "Beverages" },
      { name: "Canned, Dry Packaged Foods" },
      { name: "Snacks" },
      { name: "Breakfast" },
      { name: "Candy Chocolate" },
      { name: "Cigars Cigarettes" },
    ],
  },
  {
    name: "Health & Beauty",
    subOptions: [
      { name: "Skincare" },
      { name: "Haircare" },
      { name: "Makeup" },
      { name: "Fragrances" },
    ],
  },
  {
    name: "Men's Fashion",
    subOptions: [
      { name: "Shirts & Polos" },
      { name: "Pants & Jeans" },
      { name: "Jackets & Coats" },
      { name: "Watches" },
    ],
  },
  {
    name: "Women's Fashion",
    subOptions: [
      { name: "Dresses" },
      { name: "Tops & Tees" },
      { name: "Jackets & Coats" },
      { name: "Handbags" },
    ],
  },
  { name: "Lifestyle & Tools" },
  { name: "Mobiles & Cameras" },
  { name: "TV & Appliances" },
  { name: "Home & Living" },
  { name: "Watches & Bags" },
  { name: "Sports & Outdoors" },
  { name: "Automotives & Motorbikes" },
  { name: "Stationary & Crafts" },
  { name: "Mother & Baby" },
  { name: "Computers & Laptops" },
  { name: "Toys & Games" },
  { name: "Pet Supplies" },
];

interface SidebarProps {
  activeCategory?: string;
  activeSubcategory?: string;
  onSelect?: (category: string, subcategory?: string) => void;
  isDropdown?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeCategory = "",
  activeSubcategory = "",
  onSelect,
  isDropdown = false,
}) => {
  const router = useRouter();

  // Hover states for desktop flyout menu. Default to active selections so they are shown open.
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(activeCategory || null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(activeSubcategory || null);

  // Sync state if active category/subcategory props change from parents
  useEffect(() => {
    setHoveredCategory(activeCategory || null);
    setHoveredSubcategory(activeSubcategory || null);
  }, [activeCategory, activeSubcategory]);

  // Ref to hold a timer to close the flyout after a short delay (debounces mouse transition)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnterCategory = (catName: string) => {
    clearCloseTimeout();
    setHoveredCategory(catName);
    setHoveredSubcategory(null);
  };

  const handleMouseEnterSubcategory = (subName: string) => {
    clearCloseTimeout();
    setHoveredSubcategory(subName);
  };

  const handleMouseEnterFlyout = () => {
    clearCloseTimeout();
  };

  const handleMouseLeaveSidebar = () => {
    // Revert back to displaying the currently active selections instead of closing completely
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(activeCategory || null);
      setHoveredSubcategory(activeSubcategory || null);
    }, 180);
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  const handleSelect = (category: string, subcategory?: string) => {

    if (onSelect) {
      onSelect(category, subcategory);
    } else {
      let url = `/products?category=${encodeURIComponent(category)}`;
      if (subcategory) {
        url += `&sub=${encodeURIComponent(subcategory)}`;
      }
      router.push(url);
    }
  };

  // Derive mobile sub-options
  const selectedCategoryData = sidebarCategories.find(
    (cat) => cat.name === activeCategory
  );
  const mobileSubOptions = selectedCategoryData?.subOptions?.map((sub) => sub.name);

  // Selected details for flyout render
  const activeCatData = sidebarCategories.find((c) => c.name === hoveredCategory);
  const activeSubData = activeCatData?.subOptions?.find((s) => s.name === hoveredSubcategory);

  return (
    <div
      onMouseLeave={handleMouseLeaveSidebar}
      className={`relative w-full lg:w-64 shrink-0 flex flex-col z-30 ${
        isDropdown
          ? "lg:border-none lg:pt-0 lg:pr-0"
          : "lg:border-r lg:border-gray-200 lg:pt-2 lg:pr-4"
      }`}
    >
      {/* ── MOBILE & TABLET CATEGORIES ── */}
      <div className="w-full lg:hidden py-4 border-b border-b-gray-100 bg-white sticky top-20 z-20 overflow-visible">
        <div className="flex gap-3 overflow-x-auto scrollbar-none px-1 whitespace-nowrap pb-1">
          {sidebarCategories.map((cat, idx) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(cat.name)}
                className={`text-sm px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? "bg-[#204E42] text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-black"
                }`}
              >
                <span>{cat.name}</span>
                {cat.subOptions && (
                  <span className={isActive ? "text-white text-[10px]" : "text-gray-500 text-[10px]"}>
                    ▼
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {mobileSubOptions && mobileSubOptions.length > 0 && (
          <div className="flex gap-2 overflow-x-auto scrollbar-none px-1 py-2 mt-2 whitespace-nowrap">
            <button
              onClick={() => handleSelect(activeCategory)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                activeSubcategory === ""
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-black"
              }`}
            >
              All {activeCategory}
            </button>
            {mobileSubOptions.map((sub) => {
              const isSubActive = activeSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => handleSelect(activeCategory, sub)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                    isSubActive
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-black"
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <aside className="hidden lg:block w-full">
        <ul className={`flex flex-col ${isDropdown ? "py-4 px-4" : ""}`}>
          {sidebarCategories.map((cat, idx) => {
            const isActive = activeCategory === cat.name;
            const isHovered = hoveredCategory === cat.name;
            const hasSub = cat.subOptions && cat.subOptions.length > 0;

            return (
              <li
                key={idx}
                onMouseEnter={() => handleMouseEnterCategory(cat.name)}
                onClick={() => handleSelect(cat.name)}
                className="relative flex flex-col select-none group border-b border-gray-100/70 last:border-0"
              >
                <div
                  className={`flex justify-between items-center text-[14px] cursor-pointer py-3.5 pr-2 transition-all font-normal ${
                    isHovered || isActive
                      ? "text-[#204E42]"
                      : "text-gray-800 hover:text-[#204E42]"
                  }`}
                >
                  <span>{cat.name}</span>
                  {hasSub && (
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-200 ${
                        isHovered || isActive
                          ? "text-[#204E42]"
                          : "text-gray-400 group-hover:text-[#204E42]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* ── DESKTOP MULTI-LEVEL HOVER FLYOUT PANEL ── */}
      {hoveredCategory && activeCatData?.subOptions && activeCatData.subOptions.length > 0 && (
        <div
          onMouseEnter={handleMouseEnterFlyout}
          className="absolute left-[calc(100%-1px)] top-0 z-[100] flex shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 bg-white rounded-r-md overflow-hidden animate-fadeIn"
          style={{ minHeight: "380px" }}
        >
          {/* Column 2: Subcategories */}
          <div className="w-56 py-4 px-2 border-r border-gray-100 flex flex-col bg-white shrink-0">
            {activeCatData.subOptions.map((sub) => {
              const hasSubSub = sub.subOptions && sub.subOptions.length > 0;
              const isSubHovered = hoveredSubcategory === sub.name;
              const isSubActive =
                activeCategory === hoveredCategory && activeSubcategory === sub.name;

              return (
                <div
                  key={sub.name}
                  onMouseEnter={() => handleMouseEnterSubcategory(sub.name)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(hoveredCategory, sub.name);
                  }}
                  className={`flex justify-between items-center text-[14px] cursor-pointer py-3.5 px-3 border-b border-gray-50 last:border-0 transition-all font-normal ${
                    isSubHovered || isSubActive
                      ? "text-[#204E42]"
                      : "text-gray-700 hover:text-[#204E42]"
                  }`}
                >
                  <span>{sub.name}</span>
                  {hasSubSub && (
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-200 ${
                        isSubHovered ? "text-[#204E42]" : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 3: Sub-subcategories */}
          {hoveredSubcategory && activeSubData?.subOptions && activeSubData.subOptions.length > 0 && (
            <div className="w-56 py-4 px-2 flex flex-col bg-white shrink-0 animate-fadeIn">
              {activeSubData.subOptions.map((subSub) => {
                const isSubSubActive =
                  activeCategory === hoveredCategory && activeSubcategory === subSub;

                return (
                  <div
                    key={subSub}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(hoveredCategory, subSub);
                    }}
                    className={`text-[14px] cursor-pointer py-3.5 px-3 border-b border-gray-50 last:border-0 transition-all font-normal ${
                      isSubSubActive
                        ? "text-[#204E42]"
                        : "text-gray-600 hover:text-[#204E42]"
                    }`}
                  >
                    {subSub}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;