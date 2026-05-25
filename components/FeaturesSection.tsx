// components/FeaturesSection.tsx
import React from 'react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const featuresData: FeatureItem[] = [
  {
    id: 1,
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A2.5 2.5 0 1114 12H5M19 12h.01M16 8h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a2 2 0 01-2 2h-1.172a3 3 0 01-5.656 0H9.172a3 3 0 01-5.656 0H3a1 1 0 01-1-1v-3a1 1 0 011-1h13V8z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full pt-20 pb-20 bg-white flex justify-center items-center">
      {/* 3-Column Responsive Layout Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 max-w-6xl w-full px-4">
        {featuresData.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center group">
            
            {/* Concentric Circle Icon Badges (Double border visual effect) */}
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 mb-6">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
            </div>

            {/* Content Text Elements */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-wider text-black font-sans uppercase">
                {feature.title}
              </h3>
              <p className="text-sm font-normal text-gray-600">
                {feature.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;