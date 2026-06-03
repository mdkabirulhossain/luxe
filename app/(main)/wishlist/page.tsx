// app/(main)/wishlist/page.tsx
"use client";

import React from 'react';
import ProductCard, { ProductCardData } from '@/components/ProductCard';

const WishlistPage: React.FC = () => {
  const wishlistProducts: ProductCardData[] = [
    {
      id: 'w1',
      title: 'Gucci duffle bag',
      currentPrice: 960,
      originalPrice: 1160,
      discount: 35,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    },
    {
      id: 'w2',
      title: 'RGB liquid CPU Cooler',
      currentPrice: 1960,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80',
    },
    {
      id: 'w3',
      title: 'GP11 Shooter USB Gamepad',
      currentPrice: 550,
      image: 'https://images.unsplash.com/photo-1600080972464-875f0a0e273c?w=500&q=80',
    },
    {
      id: 'w4',
      title: 'Quilted Satin Jacket',
      currentPrice: 750,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    },
  ];

  const justForYouProducts: ProductCardData[] = [
    {
      id: 'j1',
      title: 'ASUS FHD Gaming Laptop',
      currentPrice: 960,
      originalPrice: 1160,
      discount: 35,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
      rating: 5,
      reviewsCount: 65,
    },
    {
      id: 'j2',
      title: 'IPS LCD Gaming Monitor',
      currentPrice: 1160,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
      rating: 5,
      reviewsCount: 65,
    },
    {
      id: 'j3',
      title: 'HAVIT HV-G92 Gamepad',
      currentPrice: 560,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b4d?w=500&q=80',
      rating: 5,
      reviewsCount: 65,
    },
    {
      id: 'j4',
      title: 'AK-900 Wired Keyboard',
      currentPrice: 200,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
      rating: 5,
      reviewsCount: 65,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 md:px-8 lg:px-16 font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* SECTION 1: Wishlist Container */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl md:text-2xl font-normal text-black">
              Wishlist ({wishlistProducts.length})
            </h1>
            <button className="text-sm md:text-base font-medium text-black bg-transparent border border-gray-300 rounded px-6 py-3.5 hover:bg-gray-50 transition-colors">
              Move All To Bag
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="wishlist" />
            ))}
          </div>
        </div>

        {/* SECTION 2: Just For You Recommendations Container */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <span className="w-5 h-10 bg-[#DB4444] rounded-sm block" />
              <h2 className="text-xl md:text-2xl font-normal text-black tracking-wide">
                Just For You
              </h2>
            </div>
            <button className="text-sm md:text-base font-medium text-black bg-transparent border border-gray-300 rounded px-8 py-3.5 hover:bg-gray-50 transition-colors">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {justForYouProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="just-for-you" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WishlistPage;