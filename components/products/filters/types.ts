// components/products/filters/types.ts

export interface FilterState {
  priceRange: [number, number];
  category: string;
  subcategory: string;
}

export interface ProductCounts {
  total: number;
  byCategory: Record<string, number>;
  bySubcategory: Record<string, number>;
}

export interface ProductFilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  maxCatalogPrice: number;
  minCatalogPrice: number;
  productCounts: ProductCounts;
  onCloseMobile?: () => void;
}
