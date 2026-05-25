// components/TopHeader.tsx
import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <div className="w-full bg-black text-white text-xs sm:text-sm py-3 px-4 flex justify-between items-center">
      <div className="flex-1 flex justify-center items-center gap-2">
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <a href="#" className="underline font-semibold hover:text-gray-300 transition-colors">
          ShopNow
        </a>
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
        <span>English</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default TopHeader;