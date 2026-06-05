// components/ExploreOurProducts.tsx
"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import ProductCard, { ProductCardData } from '@/components/ProductCard';

const exploreProductsData: ProductCardData[] = [
  { id: 'ep1', title: 'Breed Dry Dog Food', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc109?auto=format&fit=crop&w=400&q=80', currentPrice: 100, rating: 3, reviewsCount: 35 },
  { id: 'ep2', title: 'CANON EOS DSLR Camera', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80', currentPrice: 360, rating: 4, reviewsCount: 95 },
  { id: 'ep3', title: 'ASUS FHD Gaming Laptop', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80', currentPrice: 700, rating: 5, reviewsCount: 325 },
  { id: 'ep4', title: 'Curology Product Set', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80', currentPrice: 500, rating: 4, reviewsCount: 145 },
  { id: 'ep5', title: 'Kids Electric Car', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80', currentPrice: 960, rating: 5, reviewsCount: 65, isNew: true, colors: ['bg-red-600', 'bg-red-500'] },
  { id: 'ep6', title: 'Jr. Zoom Soccer Cleats', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', currentPrice: 1160, rating: 5, reviewsCount: 35, colors: ['bg-yellow-300', 'bg-red-500'] },
  { id: 'ep7', title: 'GP11 Shooter USB Gamepad', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80', currentPrice: 660, rating: 4.5, reviewsCount: 55, isNew: true, colors: ['bg-black', 'bg-red-500'] },
  { id: 'ep8', title: 'Quilted Satin Jacket', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80', currentPrice: 660, rating: 4.5, reviewsCount: 55, colors: ['bg-emerald-800', 'bg-red-500'] },
];

const ExploreOurProducts: React.FC = () => {
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: number }>({
    ep5: 0, ep6: 0, ep7: 0, ep8: 0 // Tracks chosen swatch index per product item
  });

  // Horizontal scroll fallback function for phone-sized interfaces
  const scroll = (direction: 'left' | 'right') => {
    if (gridContainerRef.current) {
      const container = gridContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75;
      container.scrollTo({
        left: direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full pt-16 pb-16 bg-white">
      {/* Upper Category Accent Sub-Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold text-sm tracking-wide">Our Products</span>
      </div>

      {/* Primary Section Action Line */}
      <div className="flex items-center justify-between gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-black">
          Explore Our Products
        </h2>

        {/* Carousel Shift Switches */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => scroll('left')}
            className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 text-black transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 text-black transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Grid/Flex View Wrapper */}
      <div 
        ref={gridContainerRef}
        className="flex gap-7 overflow-x-auto pb-4 scrollbar-none snap-x sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 sm:gap-y-10"
      >
        {exploreProductsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="explore"
            selectedColorIndex={selectedColors[product.id]}
            onColorSelect={(productId, colorIndex) =>
              setSelectedColors((prev) => ({ ...prev, [productId]: colorIndex }))
            }
          />
        ))}
      </div>

      {/* Under-Grid Center View Actions Button */}
      <div className="w-full flex justify-center mt-16">
        <Link href="/products" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-sm text-base font-medium transition-colors inline-block text-center select-none cursor-pointer">
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ExploreOurProducts;