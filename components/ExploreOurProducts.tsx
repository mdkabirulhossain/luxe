/* eslint-disable @next/next/no-img-element */
// components/ExploreOurProducts.tsx
"use client";

import React, { useRef, useState } from 'react';

interface ExploreProduct {
  id: string;
  title: string;
  image: string;
  currentPrice: number;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  colors?: string[]; // Hex/Tailwind class colors for the variation circles
}

const exploreProductsData: ExploreProduct[] = [
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

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
          <div key={product.id} className="snap-start shrink-0 w-67.5 sm:w-auto group relative flex flex-col mx-auto">
            
            {/* Top Display Area */}
            <div className="relative w-full h-62.5 bg-gray-100 flex items-center justify-center rounded-sm overflow-hidden">
              
              {/* Conditional "NEW" Tag */}
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-[10px] uppercase font-semibold px-2.5 py-1 rounded-sm z-10">
                  New
                </span>
              )}

              {/* Functional Wishlist & View Layer Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button className="bg-white p-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="bg-white p-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>

              {/* Main Content Product Asset Image */}
              <img 
                src={product.image} 
                alt={product.title} 
                className="object-contain max-h-40 w-auto max-w-[80%] transition-transform duration-300 group-hover:scale-105 mix-blend-multiply" 
              />

              {/* Add To Cart Slide Action Strip */}
              <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2.5 text-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Add To Cart
              </button>
            </div>

            {/* Bottom Content Detail Block */}
            <div className="flex flex-col pt-4 pb-2 space-y-1.5">
              <h3 className="text-base font-medium text-black line-clamp-1">{product.title}</h3>
              
              <div className="flex items-center gap-3">
                <span className="text-red-500 font-medium">${product.currentPrice}</span>
                <div className="flex items-center">{renderStars(product.rating)}</div>
                <span className="text-xs font-semibold text-gray-400">({product.reviewsCount})</span>
              </div>

              {/* Render dynamic color swatches if specified for variable item types */}
              {product.colors && product.colors.length > 0 && (
                <div className="flex items-center gap-2 pt-1">
                  {product.colors.map((colorClass, idx) => {
                    const isSelected = selectedColors[product.id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedColors(prev => ({ ...prev, [product.id]: idx }))}
                        className={`w-4 h-4 rounded-full ${colorClass} relative transition-transform hover:scale-110 ${
                          isSelected ? 'ring-2 ring-offset-2 ring-black' : ''
                        }`}
                        aria-label={`Select color option ${idx + 1}`}
                      />
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Under-Grid Center View Actions Button */}
      <div className="w-full flex justify-center mt-16">
        <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-sm text-base font-medium transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreOurProducts;