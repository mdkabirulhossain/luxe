// components/products/ProductFilterSidebar.tsx
"use client";

import React from "react";
import { FilterHeader } from "./filters/FilterHeader";
import { PriceFilter } from "./filters/PriceFilter";
import { CategoryFilter } from "./filters/CategoryFilter";
import { ProductFilterSidebarProps, FilterState } from "./filters/types";

export type { FilterState, ProductFilterSidebarProps };

export const ProductFilterSidebar: React.FC<ProductFilterSidebarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  maxCatalogPrice,
  minCatalogPrice,
  productCounts,
  onCloseMobile,
}) => {
  const isAnyFilterActive =
    filters.category !== "All" ||
    filters.subcategory !== "" ||
    filters.priceRange[0] > minCatalogPrice ||
    filters.priceRange[1] < maxCatalogPrice;

  const handlePriceChange = (newRange: [number, number]) => {
    onFilterChange({ ...filters, priceRange: newRange });
  };

  const handleCategorySelect = (catName: string) => {
    if (filters.category === catName && !filters.subcategory) {
      onFilterChange({ ...filters, category: "All", subcategory: "" });
    } else {
      onFilterChange({ ...filters, category: catName, subcategory: "" });
    }
  };

  const handleSubcategorySelect = (catName: string, subName: string) => {
    if (filters.category === catName && filters.subcategory === subName) {
      onFilterChange({ ...filters, subcategory: "" });
    } else {
      onFilterChange({ ...filters, category: catName, subcategory: subName });
    }
  };

  return (
    <aside className="w-full text-neutral-900 select-none flex flex-col max-h-[calc(100vh-6.5rem)] overflow-hidden">
      <FilterHeader
        isAnyFilterActive={isAnyFilterActive}
        onResetFilters={onResetFilters}
        onCloseMobile={onCloseMobile}
      />

      <div className="overflow-y-auto pr-2 divide-y divide-neutral-200/80 scrollbar-thin scrollbar-thumb-neutral-300 hover:scrollbar-thumb-neutral-400">
        <PriceFilter
          priceRange={filters.priceRange}
          minCatalogPrice={minCatalogPrice}
          maxCatalogPrice={maxCatalogPrice}
          onPriceChange={handlePriceChange}
        />

        <CategoryFilter
          selectedCategory={filters.category}
          selectedSubcategory={filters.subcategory}
          onCategorySelect={handleCategorySelect}
          onSubcategorySelect={handleSubcategorySelect}
          byCategoryCounts={productCounts.byCategory}
          bySubcategoryCounts={productCounts.bySubcategory}
        />
      </div>
    </aside>
  );
};

export default ProductFilterSidebar;
