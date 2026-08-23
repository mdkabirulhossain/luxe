// components/BrowseByCategory.tsx
"use client";

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

interface CategoryItem {
  id: string;
  name: string;
  // SVG paths corresponding to the design icons
  icon: React.ReactNode;
}

const categoriesData: CategoryItem[] = [
  {
    id: 'womans-fashion',
    name: "Woman's Fashion",
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a2 2 0 11-4 0h4zm-4 0a2 2 0 00-2 2v2.586a1 1 0 01-.293.707l-2.414 2.414a1 1 0 00-.293.707V19a2 2 0 002 2h12a2 2 0 002-2v-6.586a1 1 0 00-.293-.707l-2.414-2.414a1 1 0 01-.293-.707V6a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    id: 'mens-fashion',
    name: "Men's Fashion",
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h12l4 4-2 7h-3v5H7v-5H4l-2-7 4-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M9 7l3 3 3-3" />
      </svg>
    ),
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M4 7h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zM9 21v-4m6 4v-4M5 12h14" />
      </svg>
    ),
  },
  {
    id: 'home-lifestyle',
    name: 'Home & Lifestyle',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 'medicine',
    name: 'Medicine',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.5l8-8a4.95 4.95 0 117 7l-8 8a4.95 4.95 0 11-7-7zM9 8l7 7" />
      </svg>
    ),
  },
  {
    id: 'sports-outdoor',
    name: 'Sports & Outdoor',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="1.2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6.2 6.2c2.4 2.4 2.4 6.4 0 8.8M17.8 6.2c-2.4 2.4-2.4 6.4 0 8.8" />
      </svg>
    ),
  },
  {
    id: 'babys-toys',
    name: "Baby's & Toys",
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10V8a3 3 0 016 0v2m-6 0h6m-6 0v10a2 2 0 002 2h2a2 2 0 002-2V10M12 3v2" />
      </svg>
    ),
  },
  {
    id: 'groceries-pets',
    name: 'Groceries & Pets',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M5 9l1.5 11h11L19 9M9 9V6a3 3 0 016 0v3" />
      </svg>
    ),
  },
  {
    id: 'health-beauty',
    name: 'Health & Beauty',
    icon: (
      <svg className="w-8 h-8 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
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
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  // Default selection to 'camera' to precisely replicate design state
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

  const handleCategoryClick = (category: CategoryItem) => {
    setActiveId(category.id);

    // Map specific subcategories to their correct parent categories in the database
    let targetCategory = category.name;
    let subcategory = "";

    if (['Phones', 'Computers', 'SmartWatch', 'Camera', 'HeadPhones', 'Gaming', 'Accessories'].includes(category.name)) {
      targetCategory = 'Electronics';
      if (category.name === 'Camera') {
        subcategory = 'Camera';
      } else if (category.name === 'Computers') {
        subcategory = 'Laptop';
      }
    }

    let url = `/products?category=${encodeURIComponent(targetCategory)}`;
    if (subcategory) {
      url += `&sub=${encodeURIComponent(subcategory)}`;
    }
    router.push(url);
  };

  return (
    <section className="w-full pt-16 border-b border-gray-200 pb-16 bg-transparent">
      {/* Red category header accent block */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold text-sm tracking-wide">Categories</span>
      </div>

      {/* Action header bar row layout */}
      <div className="flex items-center justify-between gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-primary">
          Browse By Category
        </h2>

        {/* Precision Action Arrow Switches */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 text-black transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 text-black transition-colors cursor-pointer"
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
              onClick={() => handleCategoryClick(category)}
              className={`snap-start shrink-0 w-25 h-25 sm:w-42.5 sm:h-36.25 border rounded-sm flex flex-col items-center justify-center gap-2 sm:gap-4 cursor-pointer transition-all duration-200 group select-none ${isActive
                  ? 'bg-accent border-accent text-accent-foreground'
                  : 'bg-white border-gray-200 text-black hover:border-gray-400'
                }`}
            >
              {/* Icon Container with adaptive stroke thickness context */}
              <div className={`transition-transform duration-200 group-hover:scale-105 ${isActive ? 'text-accent-foreground' : 'text-black'
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