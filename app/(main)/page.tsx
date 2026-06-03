// app/(main)/page.tsx
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import FlashSalesSection from '@/components/FlashSales/FlashSalesSection';
import Sidebar from '@/components/sidebar';
import BrowseByCategory from '@/components/BrowseByCategory';
import BestSellingProducts from '@/components/BestSellingProducts';
import ExploreOurProducts from '@/components/ExploreOurProducts';
import NewArrival from '@/components/NewArrival';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
        {/* Responsive Grid Setup */}
        <div className="flex flex-col lg:flex-row items-start">
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