// components/BrowseByCategory.tsx
"use client";

import React, { useRef, useState } from 'react';

interface CategoryItem {
  id: string;
  name: string;
  // SVG paths corresponding to the design icons
  icon: React.ReactNode;
}

const categoriesData: CategoryItem[] = [
  {
    id: 'phones',
    name: 'Phones',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'computers',
    name: 'Computers',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'smartwatch',
    name: 'SmartWatch',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 7V3M12 21v-4M9 7h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 11h2v2h-2z" />
      </svg>
    ),
  },
  {
    id: 'camera',
    name: 'Camera',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'headphones',
    name: 'HeadPhones',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 18.5a6.5 6.5 0 01-6.5-6.5V11a6.5 6.5 0 0113 0v1a6.5 6.5 0 01-6.5 6.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 19h-.5A2.5 2.5 0 013 16.5v-2A2.5 2.5 0 015.5 12H6v7zm12 0h.5a2.5 2.5 0 002.5-2.5v-2A2.5 2.5 0 0018.5 12H18v7z" />
      </svg>
    ),
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 5H9a5 5 0 00-5 5v4a5 5 0 005 5h6a5 5 0 005-5v-4a5 5 0 00-5-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 12h2m-1-1v2m6-1h.01M16 11h.01" />
      </svg>
    ),
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
  }
];

const BrowseByCategory: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Default selection to 'Camera' to precisely replicate your uploaded design state
  const [activeId, setActiveId] = useState<string>('camera');

  // ONE BY ONE SCROLL CALCULATOR
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.firstElementChild as HTMLElement;

      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        const gapSpacing = window.innerWidth < 640 ? 12 : 30; // Matches Tailwind's gap-7 / gap-[30px]
        const totalDistance = cardWidth + gapSpacing;

        container.scrollTo({
          left: direction === 'left' ? container.scrollLeft - totalDistance : container.scrollLeft + totalDistance,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="w-full pt-16 border-b border-gray-200 pb-16 bg-white">
      {/* Red category header accent block */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold text-sm tracking-wide">Categories</span>
      </div>

      {/* Action header bar row layout */}
      <div className="flex items-center justify-between gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-black">
          Browse By Category
        </h2>

        {/* Precision Action Arrow Switches */}
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

      {/* Swipeable Horizontal Grid Layout System Container */}
      <div 
        ref={scrollRef}
        className="flex gap-3 sm:gap-7 overflow-x-auto pb-4 scrollbar-none snap-x scroll-smooth"
      >
        {categoriesData.map((category) => {
          const isActive = category.id === activeId;
          
          return (
            <div 
              key={category.id} 
              onClick={() => setActiveId(category.id)}
              className={`snap-start shrink-0 w-25 h-25 sm:w-42.5 sm:h-36.25 border rounded-sm flex flex-col items-center justify-center gap-2 sm:gap-4 cursor-pointer transition-all duration-200 group select-none ${
                isActive 
                  ? 'bg-red-500 border-red-500 text-white' 
                  : 'bg-white border-gray-200 text-black hover:border-gray-400'
              }`}
            >
              {/* Icon Container with adaptive stroke thickness context */}
              <div className={`transition-transform duration-200 group-hover:scale-105 ${
                isActive ? 'text-white' : 'text-black'
              }`}>
                {category.icon}
              </div>

              {/* Text node string */}
              <span className="text-[11px] sm:text-sm font-normal tracking-wide text-center">
                {category.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrowseByCategory;