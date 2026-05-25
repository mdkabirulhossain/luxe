// app/(main)/page.tsx
import React from 'react';
import TopHeader from '@/components/TopHeader';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FlashSalesSection from '@/components/FlashSales/FlashSalesSection';
import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans antialiased">
      {/* Layout Global Header Modules */}
      <TopHeader />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Banner Grid Section */}
        <div className="flex flex-col lg:flex-row items-stretch">
          <Sidebar />
          <HeroBanner />
        </div>
        
        {/* Today's Flash Deals Dynamic Section */}
        <FlashSalesSection />
      </div>
    </main>
  );
}