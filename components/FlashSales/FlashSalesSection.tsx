// components/FlashSales/FlashSalesSection.tsx
"use client";

import React, { useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import ProductCard, { Product } from './ProductCard';

// Mock Data matching dynamic image configurations
const mockProducts: Product[] = [
  { id: '1', title: 'HAVIT HV-G92 Gamepad', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80', discount: 40, currentPrice: 120, originalPrice: 160, rating: 5, reviewsCount: 88 },
  { id: '2', title: 'AK-900 Wired Keyboard', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80', discount: 35, currentPrice: 960, originalPrice: 1160, rating: 4, reviewsCount: 75 },
  { id: '3', title: 'IPS LCD Gaming Monitor', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', discount: 30, currentPrice: 370, originalPrice: 400, rating: 5, reviewsCount: 99 },
  { id: '4', title: 'S-Series Comfort Chair', image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=400&q=80', discount: 25, currentPrice: 375, originalPrice: 400, rating: 4.5, reviewsCount: 99 },
  { id: '5', title: 'Pro Wireless Gaming Mouse', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80', discount: 15, currentPrice: 85, originalPrice: 100, rating: 4.8, reviewsCount: 120 },
  { id: '6', title: 'RGB Premium Headset', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80', discount: 20, currentPrice: 140, originalPrice: 175, rating: 4.3, reviewsCount: 64 },
];

const FlashSalesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // SCROLL ONE BY ONE LOGIC
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      
      // Get the first product card element from the container DOM
      const firstCard = container.firstElementChild as HTMLElement;
      
      if (firstCard) {
        // Card width + the 28px gap specified by Tailwind's "gap-7"
        const cardWidth = firstCard.clientWidth;
        const gapSpacing = 28; 
        const totalScrollDistance = cardWidth + gapSpacing;

        const currentScrollLeft = container.scrollLeft;

        container.scrollTo({
          left: direction === 'left' 
            ? currentScrollLeft - totalScrollDistance 
            : currentScrollLeft + totalScrollDistance,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className="w-full pt-16 border-b border-gray-200 pb-16">
      {/* Decorative tag block */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold text-sm">Today&apos;s</span>
      </div>

      {/* Row Header wrapper */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end gap-8 lg:gap-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide text-black">
            Flash Sales
          </h2>
          <CountdownTimer />
        </div>

        {/* Navigation sliders layout arrows */}
        <div className="flex items-center gap-2 self-end md:self-auto">
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

      {/* Horizontal Flex Scrolling wrapper layout items */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-7 overflow-x-auto pb-4 scrollbar-none snap-x scroll-smooth"
      >
        {mockProducts.map((prod) => (
          // snap-start aligns each item exactly to the left edge when shifting focus
          <div className="snap-start shrink-0 w-67.5" key={prod.id}>
            <ProductCard product={prod} />
          </div>
        ))}
      </div>

      {/* Center structured Action Button view */}
      <div className="w-full flex justify-center mt-14">
        <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-sm text-base font-medium transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSalesSection;