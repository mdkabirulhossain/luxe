/* eslint-disable react-hooks/set-state-in-effect */
// app/(main)/products/page.tsx
"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/components/shared/product/ProductCard";
import { ProductFilterSidebar, FilterState } from "@/components/products/ProductFilterSidebar";
import { dummyProducts } from "@/lib/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal, LayoutGrid, Grid3X3, List } from "lucide-react";

function AllProductsPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialCategory = searchParams?.get("category") || "All";
  const initialSubcategory = searchParams?.get("sub") || "";

  // View as state (dense 4-column, standard 3-column, list view)
  const [viewMode, setViewMode] = useState<"grid-4" | "grid-3" | "list">("grid-4");

  // Mobile filters drawer toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sorting & Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("best-selling");

  // Catalog min/max prices
  const catalogPrices = useMemo(() => dummyProducts.map((p) => p.price), []);
  const minCatalogPrice = useMemo(() => Math.min(...catalogPrices, 0), [catalogPrices]);
  const maxCatalogPrice = useMemo(() => Math.max(...catalogPrices, 7600), [catalogPrices]);

  // Main Filter State (Price and Categories only)
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [minCatalogPrice, maxCatalogPrice],
    category: initialCategory,
    subcategory: initialSubcategory,
  });

  // Sync category and subcategory from URL parameters
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: initialCategory || "All",
      subcategory: initialSubcategory || "",
    }));
  }, [initialCategory, initialSubcategory]);

  // Normalize products with comprehensive category and subcategory tagging
  const normalizedProducts = useMemo(() => {
    return dummyProducts.map((p) => {
      let category = "Electronics";
      let subcategory = "Laptops";

      if (p.id === "b1") {
        category = "Men's Fashion";
        subcategory = "Shirts";
      } else if (p.id === "b2" || p.id === "w1") {
        category = "Women's Fashion";
        subcategory = "Bags";
      } else if (p.id === "ep8" || p.id === "w4") {
        category = "Women's Fashion";
        subcategory = "Dresses";
      } else if (p.id === "ep6") {
        category = "Men's Fashion";
        subcategory = "Pants";
      } else if (p.id === "1" || p.id === "j3" || p.id === "w3" || p.id === "ep7") {
        category = "Electronics";
        subcategory = "Headphones";
      } else if (p.id === "2" || p.id === "j4") {
        category = "Electronics";
        subcategory = "Laptops";
      } else if (p.id === "3" || p.id === "j2") {
        category = "Electronics";
        subcategory = "Smart Watches";
      } else if (p.id === "5") {
        category = "Electronics";
        subcategory = "Accessories";
      } else if (p.id === "6") {
        category = "Electronics";
        subcategory = "Headphones";
      } else if (p.id === "b3" || p.id === "b4" || p.id === "w2") {
        category = "Electronics";
        subcategory = "Laptops";
      } else if (p.id === "ep2") {
        category = "Electronics";
        subcategory = "Cameras";
      } else if (p.id === "ep3" || p.id === "j1") {
        category = "Electronics";
        subcategory = "Laptops";
      } else if (p.id === "ep1") {
        category = "Home & Lifestyle";
        subcategory = "Kitchen";
      } else if (p.id === "ep4") {
        category = "Medicine";
        subcategory = "Personal Care";
      } else if (p.id === "ep5") {
        category = "Sports & Outdoor";
        subcategory = "Fitness";
      } else if (p.id === "4") {
        category = "Home & Lifestyle";
        subcategory = "Furniture";
      }

      let discount: number | undefined = undefined;
      if (p.originalPrice && p.originalPrice > p.price) {
        discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
      }

      return {
        id: p.id,
        title: p.title,
        image: p.images[0],
        currentPrice: p.price,
        originalPrice: p.originalPrice,
        discount,
        rating: p.rating ?? 4.5,
        reviewsCount: p.reviewsCount ?? 48,
        colors: p.colors ?? [],
        sizes: p.sizes ?? [],
        category,
        subcategory,
        isBestSeller: p.id === "b1" || p.id === "b2" || p.id === "1" || p.id === "3",
        isHot: p.id === "1" || p.id === "b3" || p.id === "ep8",
      };
    });
  }, []);

  // Compute live category product counts for the sidebar
  const productCounts = useMemo(() => {
    const counts = {
      total: normalizedProducts.length,
      byCategory: {} as Record<string, number>,
      bySubcategory: {} as Record<string, number>,
    };

    normalizedProducts.forEach((p) => {
      counts.byCategory[p.category] = (counts.byCategory[p.category] || 0) + 1;
      if (p.subcategory) {
        counts.bySubcategory[p.subcategory] = (counts.bySubcategory[p.subcategory] || 0) + 1;
      }
    });

    return counts;
  }, [normalizedProducts]);

  // Filtered and Sorted Products List
  const filteredProducts = useMemo(() => {
    let result = [...normalizedProducts];

    // 1. Search Query Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }

    // 2. Category Filter
    if (filters.category !== "All") {
      result = result.filter((p) => p.category === filters.category);
    }

    // 3. Subcategory Filter
    if (filters.subcategory !== "") {
      result = result.filter((p) => p.subcategory === filters.subcategory);
    }

    // 4. Price Range Filter
    result = result.filter(
      (p) => p.currentPrice >= filters.priceRange[0] && p.currentPrice <= filters.priceRange[1]
    );

    // 5. Sorting
    if (sortBy === "best-selling") {
      result.sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0));
    } else if (sortBy === "price-low-to-high") {
      result.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (sortBy === "price-high-to-low") {
      result.sort((a, b) => b.currentPrice - a.currentPrice);
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    } else if (sortBy === "discount") {
      result.sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0));
    }

    return result;
  }, [normalizedProducts, searchQuery, filters, sortBy]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setFilters({
      priceRange: [minCatalogPrice, maxCatalogPrice],
      category: "All",
      subcategory: "",
    });
    setSortBy("best-selling");
  };

  return (
    <div className="bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-12 font-sans select-none text-neutral-900">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ── Breadcrumbs ── */}
        <nav className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
          <button
            onClick={() => router.push("/")}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-black font-semibold">Shop all products</span>
          {filters.category !== "All" && (
            <>
              <span>/</span>
              <span className="text-black font-semibold">{filters.category}</span>
            </>
          )}
          {filters.subcategory && (
            <>
              <span>/</span>
              <span className="text-neutral-600">{filters.subcategory}</span>
            </>
          )}
        </nav>

        {/* ── Large Title ── */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Shop all products
          </h1>
        </div>

        {/* ── Main Layout: Left Sidebar + Right Products ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* ── Desktop Sidebar Filter ── */}
          <div className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-20">
            <ProductFilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              maxCatalogPrice={maxCatalogPrice}
              minCatalogPrice={minCatalogPrice}
              productCounts={productCounts}
            />
          </div>

          {/* ── Right Content Area ── */}
          <div className="flex-1 w-full min-w-0 flex flex-col space-y-6">
            
            {/* ── Top Bar: Product Count + Sort By + View As + Mobile Filter Trigger ── */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-100">
              
              {/* Product Count (Left) */}
              <div className="flex items-center gap-3">
                {/* Mobile Filter Toggle Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-900 transition-colors cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters</span>
                  {(filters.category !== "All" ||
                    filters.subcategory !== "" ||
                    filters.priceRange[0] > minCatalogPrice ||
                    filters.priceRange[1] < maxCatalogPrice) && (
                    <span className="w-2 h-2 rounded-full bg-black" />
                  )}
                </button>

                <p className="text-xs sm:text-sm font-medium text-neutral-600">
                  <span className="font-bold text-neutral-950">{filteredProducts.length}</span> products
                </p>
              </div>

              {/* Controls (Right): Sort By & View As */}
              <div className="flex items-center gap-4 sm:gap-6 ml-auto">
                
                {/* Sort By Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-neutral-500 whitespace-nowrap hidden sm:inline">
                    Sort by
                  </span>
                  <Select value={sortBy} onValueChange={(val) => setSortBy(val)}>
                    <SelectTrigger className="w-36 sm:w-44 bg-white border border-neutral-300 rounded-md text-xs px-3 py-2 h-9 text-neutral-900 cursor-pointer focus:outline-none focus:ring-1 focus:ring-black">
                      <SelectValue placeholder="Best selling" />
                    </SelectTrigger>
                    <SelectContent position="popper" align="end" className="bg-white border border-neutral-200">
                      <SelectItem value="best-selling" className="text-xs cursor-pointer">
                        Best selling
                      </SelectItem>
                      <SelectItem value="price-low-to-high" className="text-xs cursor-pointer">
                        Price, low to high
                      </SelectItem>
                      <SelectItem value="price-high-to-low" className="text-xs cursor-pointer">
                        Price, high to low
                      </SelectItem>
                      <SelectItem value="rating" className="text-xs cursor-pointer">
                        Top rated
                      </SelectItem>
                      <SelectItem value="discount" className="text-xs cursor-pointer">
                        Highest discount
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* View As Toggle Buttons */}
                <div className="flex items-center gap-2.5 pl-2 border-l border-neutral-200">
                  <span className="text-xs font-medium text-neutral-500 whitespace-nowrap hidden md:inline">
                    View as
                  </span>

                  <div className="flex items-center gap-1">
                    {/* Dense 4-Grid Icon (:::) */}
                    <button
                      onClick={() => setViewMode("grid-4")}
                      className={`p-1.5 rounded-md transition-all cursor-pointer ${
                        viewMode === "grid-4"
                          ? "bg-black text-white shadow-sm"
                          : "text-neutral-400 hover:text-black hover:bg-neutral-100"
                      }`}
                      aria-label="4 columns dense grid view"
                      title="4 Columns Grid"
                    >
                      <Grid3X3 className="w-4.5 h-4.5" />
                    </button>

                    {/* Standard 3-Grid Icon (::) */}
                    <button
                      onClick={() => setViewMode("grid-3")}
                      className={`p-1.5 rounded-md transition-all cursor-pointer ${
                        viewMode === "grid-3"
                          ? "bg-black text-white shadow-sm"
                          : "text-neutral-400 hover:text-black hover:bg-neutral-100"
                      }`}
                      aria-label="3 columns standard grid view"
                      title="3 Columns Grid"
                    >
                      <LayoutGrid className="w-4.5 h-4.5" />
                    </button>

                    {/* List View Icon (≡) */}
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1.5 rounded-md transition-all cursor-pointer ${
                        viewMode === "list"
                          ? "bg-black text-white shadow-sm"
                          : "text-neutral-400 hover:text-black hover:bg-neutral-100"
                      }`}
                      aria-label="List view"
                      title="List View"
                    >
                      <List className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Active Filters Bar (Pills) ── */}
            {(filters.category !== "All" ||
              filters.subcategory !== "" ||
              filters.priceRange[0] > minCatalogPrice ||
              filters.priceRange[1] < maxCatalogPrice) && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-neutral-500 font-medium">Active:</span>

                {filters.category !== "All" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 text-xs font-medium border border-neutral-200">
                    <span>{filters.category}</span>
                    <button
                      onClick={() => setFilters({ ...filters, category: "All", subcategory: "" })}
                      className="text-neutral-400 hover:text-black font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}

                {filters.subcategory !== "" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 text-xs font-medium border border-neutral-200">
                    <span>{filters.subcategory}</span>
                    <button
                      onClick={() => setFilters({ ...filters, subcategory: "" })}
                      className="text-neutral-400 hover:text-black font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}

                {(filters.priceRange[0] > minCatalogPrice || filters.priceRange[1] < maxCatalogPrice) && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 text-xs font-medium border border-neutral-200">
                    <span>৳{filters.priceRange[0]} - ৳{filters.priceRange[1]}</span>
                    <button
                      onClick={() =>
                        setFilters({
                          ...filters,
                          priceRange: [minCatalogPrice, maxCatalogPrice],
                        })
                      }
                      className="text-neutral-400 hover:text-black font-bold"
                    >
                      ×
                    </button>
                  </span>
                )}

                <button
                  onClick={handleResetFilters}
                  className="text-xs text-red-600 hover:underline font-semibold ml-2 cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* ── Products Display (Responsive Grid or List) ── */}
            {filteredProducts.length > 0 ? (
              viewMode === "list" ? (
                /* List View */
                <div className="flex flex-col space-y-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => router.push(`/product/${product.id}`)}
                      className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 rounded-2xl border border-neutral-200 bg-white hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="relative w-36 h-36 bg-[#F6F7F9] rounded-xl shrink-0 overflow-hidden flex items-center justify-center p-3">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 150px"
                          className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform p-2"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-center sm:text-left space-y-1">
                        <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                          {product.category} • {product.subcategory}
                        </span>
                        <h3 className="text-base font-semibold text-neutral-900 group-hover:underline">
                          {product.title}
                        </h3>
                        <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                          {product.originalPrice && (
                            <span className="text-sm font-medium text-neutral-400 line-through">
                              ৳{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span className="text-base font-bold text-neutral-950">
                            ৳{product.currentPrice.toLocaleString()}
                          </span>
                          {product.discount && (
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                              {product.discount}% OFF
                            </span>
                          )}
                        </div>
                      </div>
                      <button className="px-5 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold shrink-0 transition-colors">
                        View Product
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                /* Grid View (4-col dense or 3-col standard) */
                <div
                  className={`grid grid-cols-2 sm:grid-cols-2 ${
                    viewMode === "grid-4"
                      ? "md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                      : "md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-8"
                  }`}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )
            ) : (
              /* No Products Found */
              <div className="w-full flex flex-col items-center justify-center py-20 text-center space-y-4 bg-neutral-50/50 rounded-2xl border border-neutral-100">
                <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <SlidersHorizontal className="w-6 h-6" />
                </div>
                <div className="space-y-1 max-w-sm">
                  <h3 className="text-base font-semibold text-neutral-900">
                    No products matched your filters
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Try clearing some of your active filters or expanding the price range.
                  </p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-md bg-black hover:bg-neutral-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* ── Mobile Off-Canvas Filter Drawer ── */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between">
            <ProductFilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              maxCatalogPrice={maxCatalogPrice}
              minCatalogPrice={minCatalogPrice}
              productCounts={productCounts}
              onCloseMobile={() => setIsMobileFilterOpen(false)}
            />

            <div className="pt-6 mt-6 border-t border-neutral-200">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-black text-white text-sm font-semibold rounded-md shadow-sm hover:bg-neutral-800 transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AllProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen bg-white flex items-center justify-center text-black">
          <p className="text-sm font-semibold">Loading Collection...</p>
        </div>
      }
    >
      <AllProductsPageInner />
    </Suspense>
  );
}
