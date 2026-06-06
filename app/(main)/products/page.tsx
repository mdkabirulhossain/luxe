/* eslint-disable react-hooks/set-state-in-effect */
// app/(main)/products/page.tsx
"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/shared/product/ProductCard";
import Sidebar from "@/components/sidebar";
import { dummyProducts } from "@/lib/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AllProductsPageInner() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get("category") || "All";
  const initialSubcategory = searchParams?.get("sub") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Sync category and subcategory from URL parameters
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    setSelectedSubcategory(initialSubcategory || "");
  }, [initialCategory, initialSubcategory]);

  // Map DetailedProduct to ProductCardData format with exact category and subcategory tags
  const normalizedProducts = useMemo(() => {
    return dummyProducts.map((p) => {
      let category = "Electronics";
      let subcategory = "";

      // Precise category and subcategory mappings based on product ID
      if (p.id === "b1") {
        category = "Men's Fashion";
        subcategory = "Jackets & Coats";
      } else if (p.id === "b2" || p.id === "w1") {
        category = "Woman's Fashion";
        subcategory = "Handbags";
      } else if (p.id === "ep8" || p.id === "w4") {
        category = "Woman's Fashion";
        subcategory = "Jackets & Coats";
      } else if (p.id === "ep6") {
        category = "Men's Fashion";
        subcategory = "Pants & Jeans";
      } else if (
        p.id === "1" ||
        p.id === "j3" ||
        p.id === "w3" ||
        p.id === "ep7"
      ) {
        category = "Electronics"; // Gamepads
      } else if (p.id === "2" || p.id === "j4") {
        category = "Electronics"; // Keyboards
      } else if (p.id === "3" || p.id === "j2") {
        category = "Electronics"; // Monitors
      } else if (p.id === "5") {
        category = "Electronics"; // Mice
      } else if (p.id === "6") {
        category = "Electronics"; // Headsets
      } else if (p.id === "b3" || p.id === "b4" || p.id === "w2") {
        category = "Electronics"; // Coolers
      } else if (p.id === "ep2") {
        category = "Electronics"; // Camera
      } else if (p.id === "ep3" || p.id === "j1") {
        category = "Electronics"; // Laptop
      } else if (p.id === "ep1") {
        category = "Groceries & Pets";
      } else if (p.id === "ep4") {
        category = "Health & Beauty";
      } else if (p.id === "ep5") {
        category = "Baby's & Toys";
      } else if (p.id === "4") {
        category = "Home & Lifestyle";
      }

      // Calculate discount percentage if originalPrice exists
      let discount: number | undefined = undefined;
      if (p.originalPrice && p.originalPrice > p.price) {
        discount = Math.round(
          ((p.originalPrice - p.price) / p.originalPrice) * 100,
        );
      }

      return {
        id: p.id,
        title: p.title,
        image: p.images[0],
        currentPrice: p.price,
        originalPrice: p.originalPrice,
        discount,
        rating: p.rating,
        reviewsCount: p.reviewsCount,
        colors: p.colors,
        category,
        subcategory,
      };
    });
  }, []);

  // Filtered & Sorted Products List
  const filteredProducts = useMemo(() => {
    let result = [...normalizedProducts];

    // 1. Search Query Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }

    // 2. Category Filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 3. Subcategory Filter
    if (selectedSubcategory !== "") {
      result = result.filter((p) => p.subcategory === selectedSubcategory);
    }

    // 4. Sorting
    if (sortBy === "price-low-to-high") {
      result.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (sortBy === "price-high-to-low") {
      result.sort((a, b) => b.currentPrice - a.currentPrice);
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    } else if (sortBy === "discount") {
      result.sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0));
    }

    return result;
  }, [
    normalizedProducts,
    searchQuery,
    selectedCategory,
    selectedSubcategory,
    sortBy,
  ]);

  const handleSelectCategory = (category: string, subcategory?: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory || "");
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedSubcategory("");
    setSortBy("default");
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4 md:px-8 lg:px-16 font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Breadcrumbs Header */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 font-medium select-none">
          <span className="hover:text-black transition-colors cursor-pointer">
            Account
          </span>
          <span>/</span>
          <span className="text-black font-semibold">Products</span>
          {selectedCategory !== "All" && (
            <>
              <span>/</span>
              <span className="text-black font-semibold">
                {selectedCategory}
              </span>
            </>
          )}
          {selectedSubcategory && (
            <>
              <span>/</span>
              <span className="text-black font-semibold">
                {selectedSubcategory}
              </span>
            </>
          )}
        </nav>

        {/* Two Column Layout: Sidebar Left, Products Grid Right */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch lg:items-start w-full">
          {/* Left sidebar container */}
          <div className="w-full lg:w-64 shrink-0">
            {/* Left Navbar / Categories Sidebar */}
            <div className="bg-white lg:sticky lg:top-8">
              <h2 className="text-lg font-bold text-black border-b border-gray-100 pb-4 mb-4 hidden lg:block uppercase tracking-wider">
                Categories
              </h2>
              {/* Category selector button for resetting back to All Products */}
              <button
                onClick={() => handleSelectCategory("All")}
                className={`w-full text-left py-2 font-medium text-base transition-colors hover:text-[#DB4444] mb-4 border-b border-gray-50 pb-2 hidden lg:block cursor-pointer ${
                  selectedCategory === "All"
                    ? "text-[#DB4444] font-semibold"
                    : "text-black"
                }`}
              >
                All Categories
              </button>
              <Sidebar
                activeCategory={selectedCategory}
                activeSubcategory={selectedSubcategory}
                onSelect={handleSelectCategory}
              />
            </div>
          </div>

          {/* Right products view area */}
          <div className="w-full lg:flex-1 flex flex-col space-y-6">
            {/* Header: Title, Search, and Sorting */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-black tracking-wide">
                  {selectedCategory === "All"
                    ? "All Products"
                    : selectedCategory}
                  {selectedSubcategory ? ` - ${selectedSubcategory}` : ""}
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Showing {filteredProducts.length} of{" "}
                  {normalizedProducts.length} items
                </p>
              </div>

              {/* Search bar & Sorting selector */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                {/* Search query input */}
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F5F5F5] rounded px-4 py-2.5 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black border border-transparent"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black text-xs font-semibold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Sorting Select */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                    Sort:
                  </span>
                  <Select
                    value={sortBy}
                    onValueChange={(value) => setSortBy(value)}
                  >
                    <SelectTrigger className="w-full sm:w-44 bg-white border border-gray-300 rounded text-xs px-3 py-2.5 h-auto text-black cursor-pointer [&>span]:font-normal [&>span]:text-black focus:outline-none focus:ring-0 focus:border-gray-300 focus-visible:outline-none focus-visible:ring-0 data-[state=open]:ring-0 data-[state=open]:outline-none data-[state=open]:border-gray-300">
                      <SelectValue placeholder="Best Match" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      side="bottom"
                      align="start"
                      sideOffset={4}
                      className="w-(--radix-select-trigger-width)"
                    >
                      <SelectItem
                        value="default"
                        className="text-xs font-normal text-black focus:bg-gray-100 focus:text-black data-[state=checked]:font-normal data-[state=checked]:text-black data-highlighted:bg-gray-100 data-highlighted:font-normal"
                      >
                        Best Match
                      </SelectItem>
                      <SelectItem
                        value="price-low-to-high"
                        className="text-xs font-normal text-black focus:bg-gray-100 focus:text-black data-[state=checked]:font-normal data-[state=checked]:text-black data-highlighted:bg-gray-100 data-highlighted:font-normal"
                      >
                        Price: Low to High
                      </SelectItem>
                      <SelectItem
                        value="price-high-to-low"
                        className="text-xs font-normal text-black focus:bg-gray-100 focus:text-black data-[state=checked]:font-normal data-[state=checked]:text-black data-highlighted:bg-gray-100 data-highlighted:font-normal"
                      >
                        Price: High to Low
                      </SelectItem>
                      <SelectItem
                        value="rating"
                        className="text-xs font-normal text-black focus:bg-gray-100 focus:text-black data-[state=checked]:font-normal data-[state=checked]:text-black data-highlighted:bg-gray-100 data-highlighted:font-normal"
                      >
                        Top Rated
                      </SelectItem>
                      <SelectItem
                        value="discount"
                        className="text-xs font-normal text-black focus:bg-gray-100 focus:text-black data-[state=checked]:font-normal data-[state=checked]:text-black data-highlighted:bg-gray-100 data-highlighted:font-normal"
                      >
                        Biggest Saving
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Selected category reset pill for mobile */}
            {selectedCategory !== "All" && (
              <div className="flex items-center gap-2 lg:hidden">
                <span className="text-xs text-gray-500">Active Filter:</span>
                <span className="inline-flex items-center gap-1 bg-[#F5F5F5] text-black text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
                  {selectedCategory}
                  {selectedSubcategory ? ` > ${selectedSubcategory}` : ""}
                  <button
                    onClick={() => handleSelectCategory("All")}
                    className="text-red-500 font-bold ml-1 hover:text-red-700 text-xs"
                  >
                    ×
                  </button>
                </span>
              </div>
            )}

            {/* Products grid display */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variant="explore"
                  />
                ))}
              </div>
            ) : (
              <div className="w-full flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-black">
                    No Products Found
                  </h3>
                  <p className="text-xs text-gray-500 max-w-xs">
                    We couldn&apos;t find any matches for your query. Try
                    resetting your search or category filters.
                  </p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="bg-[#DB4444] hover:bg-red-600 text-white text-xs font-semibold px-6 py-3 rounded cursor-pointer transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
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
