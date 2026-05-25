// components/FlashSales/FlashSalesSection.tsx
import React from 'react';
import CountdownTimer from './CountdownTimer';
import ProductCard, { Product } from './ProductCard';

// Temporary Mock Data array matching design assets
const mockProducts: Product[] = [
  { id: '1', title: 'HAVIT HV-G92 Gamepad', image: '/gamepad.png', discount: 40, currentPrice: 120, originalPrice: 160, rating: 5, reviewsCount: 88 },
  { id: '2', title: 'AK-900 Wired Keyboard', image: '/keyboard.png', discount: 35, currentPrice: 960, originalPrice: 1160, rating: 4, reviewsCount: 75 },
  { id: '3', title: 'IPS LCD Gaming Monitor', image: '/monitor.png', discount: 30, currentPrice: 370, originalPrice: 400, rating: 5, reviewsCount: 99 },
  { id: '4', title: 'S-Series Comfort Chair', image: '/chair.png', discount: 25, currentPrice: 375, originalPrice: 400, rating: 4.5, reviewsCount: 99 },
];

const FlashSalesSection: React.FC = () => {
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
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Flex Scrolling wrapper layout items */}
      <div className="flex gap-7 overflow-x-auto pb-4 scrollbar-hide snap-x">
        {mockProducts.map((prod) => (
          <div className="snap-start" key={prod.id}>
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