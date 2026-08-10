// app/(main)/page.tsx
import React from 'react';
import HeroBanner from '@/app/(main)/_components/HeroBanner';
import FlashSalesSection from '@/app/(main)/_components/FlashSales/FlashSalesSection';
import BrowseByCategory from '@/app/(main)/_components/BrowseByCategory';
import BestSellingProducts from '@/app/(main)/_components/BestSellingProducts';
import ExploreOurProducts from '@/app/(main)/_components/ExploreOurProducts';
import NewArrival from '@/app/(main)/_components/NewArrival';
import FeaturesSection from '@/app/(main)/_components/FeaturesSection';

export default function Home() {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
        {/* Full Width Hero Banner */}
        <div className="w-full">
          <HeroBanner />
        </div>
        
        {/* Beautiful Dynamic Categories Section */}
        <BrowseByCategory />
        
        {/* Today's Flash Deals Dynamic Section */}
        <FlashSalesSection />

        <BestSellingProducts />

        <ExploreOurProducts />

        <NewArrival />

        <FeaturesSection />
      </div>
    </main>
  );
}