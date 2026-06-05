// components/BestSellingProducts.tsx
import React from 'react';
import Link from 'next/link';
import ProductCard, { ProductCardData } from '@/components/shared/product/ProductCard';

// Dummy placeholder datasets matching your exact upload criteria
const bestSellingData: ProductCardData[] = [
  {
    id: 'b1',
    title: 'The north coat',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    discount: 30,
    currentPrice: 260,
    originalPrice: 360,
    rating: 5,
    reviewsCount: 65,
  },
  {
    id: 'b2',
    title: 'Gucci duffle bag',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80',
    discount: 15,
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviewsCount: 65,
  },
  {
    id: 'b3',
    title: 'RGB liquid CPU Cooler',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80',
    discount: 10,
    currentPrice: 160,
    originalPrice: 170,
    rating: 4.5,
    reviewsCount: 65,
  },
 {
    id: 'b4',
    title: 'RGB liquid CPU Cooler',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80',
    discount: 10,
    currentPrice: 160,
    originalPrice: 170,
    rating: 4.5,
    reviewsCount: 65,
  },
   
];

const BestSellingProducts: React.FC = () => {
  return (
    <section className="w-full pt-16 pb-16 bg-white">
      {/* Accent Subtitle Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold text-sm tracking-wide">This Month</span>
      </div>

      {/* Main Title Heading Actions Row */}
      <div className="flex items-center justify-between gap-4 mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-black">
          Best Selling Products
        </h2>

        <Link href="/products" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-sm text-sm font-medium transition-colors whitespace-nowrap inline-block text-center select-none cursor-pointer">
          View All
        </Link>
      </div>

      {/* Grid Container Setup: Responsive fallback flex swiper on tiny mobile screens */}
      <div className="flex gap-7 overflow-x-auto pb-4 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
        {bestSellingData.map((product) => (
          <div key={product.id} className="shrink-0 md:shrink md:w-full">
            <ProductCard product={product} variant="best-selling" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;