// app/(main)/page.tsx
import React from 'react';
import HeroBanner from '@/app/(main)/_components/HeroBanner';
import FlashSalesSection from '@/app/(main)/_components/FlashSales/FlashSalesSection';
import Sidebar from '@/components/sidebar';
import BrowseByCategory from '@/app/(main)/_components/BrowseByCategory';
import BestSellingProducts from '@/app/(main)/_components/BestSellingProducts';
import ExploreOurProducts from '@/app/(main)/_components/ExploreOurProducts';
import NewArrival from '@/app/(main)/_components/NewArrival';
import FeaturesSection from '@/app/(main)/_components/FeaturesSection';

export default function Home() {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
        {/* Responsive Grid Setup */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-start w-full">
          <Sidebar />
          <HeroBanner />
        </div>
        
        {/* Today's Flash Deals Dynamic Section */}
        <FlashSalesSection />

        {/* Beautiful Dynamic Categories Section */}
        <BrowseByCategory />

        <BestSellingProducts />

        <ExploreOurProducts />

        <NewArrival />

        <FeaturesSection />
      </div>
    </main>
  );
}