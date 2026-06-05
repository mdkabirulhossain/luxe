/* eslint-disable react-hooks/set-state-in-effect */
// components/sidebar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export interface SidebarCategory {
  name: string;
  subOptions?: string[];
}

export const sidebarCategories: SidebarCategory[] = [
  {
    name: "Woman's Fashion",
    subOptions: ["Dresses", "Tops & Tees", "Jackets & Coats", "Handbags"],
  },
  {
    name: "Men's Fashion",
    subOptions: ["Shirts & Polos", "Pants & Jeans", "Jackets & Coats", "Watches"],
  },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

interface SidebarProps {
  activeCategory?: string;
  activeSubcategory?: string;
  onSelect?: (category: string, subcategory?: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeCategory = "",
  activeSubcategory = "",
  onSelect,
}) => {
  const router = useRouter();

  // State to track expanded category menus
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
    "Woman's Fashion": false,
    "Men's Fashion": false,
  });

  // Automatically expand active category when activeCategory changes
  useEffect(() => {
    if (activeCategory === "Woman's Fashion" || activeCategory === "Men's Fashion") {
      setExpandedCategories((prev) => ({
        ...prev,
        [activeCategory]: true,
      }));
    }
  }, [activeCategory]);

  const handleToggleExpand = (catName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  const handleSelect = (category: string, subcategory?: string) => {
    if (onSelect) {
      onSelect(category, subcategory);
    } else {
      // If no callback, route to products page with search parameters
      let url = `/products?category=${encodeURIComponent(category)}`;
      if (subcategory) {
        url += `&sub=${encodeURIComponent(subcategory)}`;
      }
      router.push(url);
    }
  };

  const selectedCategoryData = sidebarCategories.find(
    (cat) => cat.name === activeCategory
  );
  const mobileSubOptions = selectedCategoryData?.subOptions;

  return (
    <div className="w-full lg:w-64 lg:border-r lg:border-gray-200 lg:pt-10 lg:pr-8 shrink-0 flex flex-col">
      {/* ── MOBILE & TABLET CATEGORIES: Horizontal scroll chips ── */}
      <div className="w-full lg:hidden py-4 border-b border-gray-100 bg-white sticky top-20 z-20 overflow-visible">
        <div className="flex gap-3 overflow-x-auto scrollbar-none px-1 whitespace-nowrap pb-1">
          {sidebarCategories.map((cat, idx) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(cat.name)}
                className={`text-sm px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? "bg-[#DB4444] text-white"
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

        {/* Mobile secondary subcategory row */}
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

      {/* ── DESKTOP SIDEBAR: Standard vertical menu ── */}
      <aside className="hidden lg:block w-full">
        <ul className="space-y-4">
          {sidebarCategories.map((cat, idx) => {
            const isActive = activeCategory === cat.name;
            const isExpanded = expandedCategories[cat.name];
            return (
              <li key={idx} className="flex flex-col select-none">
                {/* Category Header Link / Toggler Row */}
                <div
                  onClick={(e) => {
                    if (cat.subOptions) {
                      handleToggleExpand(cat.name, e);
                    } else {
                      handleSelect(cat.name);
                    }
                  }}
                  className={`flex justify-between items-center text-base cursor-pointer py-1 transition-colors ${
                    isActive ? "text-[#DB4444] font-semibold" : "text-black hover:text-[#DB4444]"
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.subOptions && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-90 text-[#DB4444]" : "text-black"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>

                {/* Subcategory collapsible dropdown list inline under parent */}
                {cat.subOptions && isExpanded && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-150 ml-1">
                    {cat.subOptions.map((sub) => {
                      const isSubActive = activeCategory === cat.name && activeSubcategory === sub;
                      return (
                        <li
                          key={sub}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelect(cat.name, sub);
                          }}
                          className={`text-sm cursor-pointer py-0.5 transition-colors ${
                            isSubActive
                              ? "text-[#DB4444] font-semibold"
                              : "text-gray-500 hover:text-[#DB4444]"
                          }`}
                        >
                          {sub}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;