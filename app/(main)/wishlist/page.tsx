// app/wishlist/page.tsx or components/Wishlist.tsx
"use client";

import React from 'react';
import Image from 'next/image'; // Imported Next.js Image component

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  isNew?: boolean;
  image: string;
  rating?: number;
  reviewsCount?: number;
}

const WishlistPage: React.FC = () => {
  const wishlistProducts: Product[] = [
    {
      id: 'w1',
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      discountBadge: '-35%',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    },
    {
      id: 'w2',
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80',
    },
    {
      id: 'w3',
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      image: 'https://images.unsplash.com/photo-1600080972464-875f0a0e273c?w=500&q=80',
    },
    {
      id: 'w4',
      name: 'Quilted Satin Jacket',
      price: 750,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    },
  ];

  const justForYouProducts: Product[] = [
    {
      id: 'j1',
      name: 'ASUS FHD Gaming Laptop',
      price: 960,
      originalPrice: 1160,
      discountBadge: '-35%',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
      rating: 5,
      reviewsCount: 65,
    },
    {
      id: 'j2',
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
      rating: 5,
      reviewsCount: 65,
    },
    {
      id: 'j3',
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b4d?w=500&q=80',
      rating: 5,
      reviewsCount: 65,
    },
    {
      id: 'j4',
      name: 'AK-900 Wired Keyboard',
      price: 200,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
      rating: 5,
      reviewsCount: 65,
    },
  ];

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-[#FFAD33]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

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
              <div key={product.id} className="group flex flex-col space-y-3 relative">
                
                {/* Product Card Showcase Area */}
                <div className="bg-[#F5F5F5] rounded relative aspect-270/250 flex items-center justify-center overflow-hidden p-6">
                  
                  {product.discountBadge && (
                    <span className="absolute top-3 left-3 bg-[#DB4444] text-white font-normal text-xs px-3 py-1.5 rounded z-10">
                      {product.discountBadge}
                    </span>
                  )}

                  <button 
                    className="absolute top-3 right-3 bg-white p-2 rounded-full text-black hover:bg-gray-100 transition-colors shadow-sm z-10"
                    aria-label="Remove item from wishlist"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>

                  {/* Layout Box Wrapper using fill to scale seamlessly inside aspect ratio layout container */}
                  <div className="relative w-full h-37.5 transition-transform duration-300 group-hover:scale-105">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain mix-blend-multiply"
                      priority={product.id === 'w1'}
                    />
                  </div>

                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs font-normal py-2.5 flex items-center justify-center gap-2 transition-all duration-200 z-10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    Add To Cart
                  </button>
                </div>

                <div className="flex flex-col space-y-1 pt-1">
                  <h3 className="font-medium text-base text-black tracking-wide truncate">{product.name}</h3>
                  <div className="flex items-center gap-3 text-base">
                    <span className="text-[#DB4444] font-medium">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 font-normal line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

              </div>
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
              <div key={product.id} className="group flex flex-col space-y-3 relative">
                
                {/* Product Card Showcase Area */}
                <div className="bg-[#F5F5F5] rounded relative aspect-270/250 flex items-center justify-center overflow-hidden p-6">
                  
                  {product.discountBadge && (
                    <span className="absolute top-3 left-3 bg-[#DB4444] text-white font-normal text-xs px-3 py-1.5 rounded z-10">
                      {product.discountBadge}
                    </span>
                  )}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-[#00FF66] text-black font-medium text-xs px-3 py-1.5 rounded uppercase tracking-wider z-10">
                      New
                    </span>
                  )}

                  <button 
                    className="absolute top-3 right-3 bg-white p-2 rounded-full text-black hover:bg-gray-100 transition-colors shadow-sm z-10"
                    aria-label="Quick view product details"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>

                  {/* Layout Box Wrapper using fill to scale seamlessly inside aspect ratio layout container */}
                  <div className="relative w-full h-37.5 transition-transform duration-300 group-hover:scale-105">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>

                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs font-normal py-2.5 flex items-center justify-center gap-2 transition-all duration-200 z-10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    Add To Cart
                  </button>
                </div>

                <div className="flex flex-col space-y-1 pt-1">
                  <h3 className="font-medium text-base text-black tracking-wide truncate">{product.name}</h3>
                  
                  <div className="flex items-center gap-3 text-base">
                    <span className="text-[#DB4444] font-medium">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 font-normal line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  {product.rating && (
                    <div className="flex items-center gap-2 pt-0.5">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-xs font-semibold text-gray-400">
                        ({product.reviewsCount})
                      </span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WishlistPage;