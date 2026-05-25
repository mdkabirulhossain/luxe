/* eslint-disable @next/next/no-img-element */
// components/HeroBanner.tsx
import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="flex-1 bg-black text-white mt-10 ml-0 lg:ml-11 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden rounded-sm">
      {/* Text Info */}
      <div className="flex flex-col space-y-4 z-10 max-w-sm">
        <div className="flex items-center gap-4">
          {/* Apple Logo placeholder icon */}
          <span className="text-3xl"></span>
          <span className="text-base font-light tracking-wide">iPhone 14 Series</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-wider">
          Up to 10% off Voucher
        </h1>
        <a href="#" className="flex items-center gap-2 pt-2 group font-medium underline underline-offset-8 decoration-1 hover:text-gray-300">
          Shop Now
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Image Container */}
      <div className="mt-8 md:mt-0 max-w-xs md:max-w-md">
        {/* Replace src with your actual public route when image asset is ready */}
        <img src="/iphone-banner.png" alt="iPhone 14" className="object-contain" />
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2.5">
        <span className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
        <span className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
        <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-white cursor-pointer"></span>
        <span className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
        <span className="w-3 h-3 rounded-full bg-gray-500 cursor-pointer"></span>
      </div>
    </div>
  );
};

export default HeroBanner;