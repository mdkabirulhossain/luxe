import React from 'react';
import Image from 'next/image';

const OurStory: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      
      {/* Left Text Block */}
      <div className="w-full lg:w-1/2 space-y-6 lg:pr-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-wide font-sans">
          Our Story
        </h1>
        <div className="text-sm md:text-base text-black font-normal leading-relaxed space-y-4">
          <p>
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping 
            marketplace with an active presence in Bangladesh. Supported 
            by a wide range of tailored marketing, data and service solutions, 
            Exclusive has 10,500 sellers and 300 brands and serves 3 
            millions customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a 
            very fast. Exclusive offers a diverse assortment in categories 
            ranging from consumer.
          </p>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="w-full lg:w-1/2 relative aspect-705/609 roundedoverflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" // Replace with your exact pink background shopping asset
          alt="Our Story Retail Presentation"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover rounded-sm"
        />
      </div>

    </div>
  );
};

export default OurStory;