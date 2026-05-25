"use client";

import React from 'react';
import Link from 'next/link';
import OurStory from '@/components/about/OurStory';
import StatsSection from '@/components/about/StatsSection';
import TeamSlider from '@/components/about/TeamSlider';
import FeaturesSection from '@/components/FeaturesSection';


export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-10 pb-20 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-10 md:mb-16 flex items-center gap-2 select-none">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black font-normal">About</span>
        </nav>

        {/* Layout Stack matching image rhythm */}
        <div className="space-y-28">
          <OurStory />
          <StatsSection />
          <TeamSlider />
          <FeaturesSection />
        </div>

      </div>
    </div>
  );
}