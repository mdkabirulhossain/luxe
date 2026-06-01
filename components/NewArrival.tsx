// components/NewArrival.tsx
import React from 'react';
import Image from 'next/image';

const NewArrival: React.FC = () => {
  return (
    <section className="w-full pt-16 pb-16 bg-white">
      {/* Red category accent block */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold text-sm tracking-wide">Featured</span>
      </div>

      {/* Primary Section Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-black mb-14">
        New Arrival
      </h2>

      {/* Complex Grid Dashboard Matrix Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5">
        
        {/* BLOCK 1: PlayStation 5 */}
        <div className="md:col-span-2 md:row-span-2 relative bg-black rounded-sm overflow-hidden min-h-112.5 lg:min-h-150 group flex items-end">
          <Image 
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80" 
            alt="PlayStation 5" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // Speeds up LCP loading execution metrics above the fold
            className="object-cover object-bottom opacity-80 group-hover:scale-102 transition-transform duration-500 mix-blend-lighten"
          />
          {/* Subtle gradient overlay ensuring text legibility */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
          
          <div className="relative z-20 p-6 sm:p-8 max-w-sm space-y-2.5">
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">PlayStation 5</h3>
            <p className="text-xs sm:text-sm font-light text-gray-300 leading-relaxed">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="#" className="inline-block pt-1 text-white font-medium text-base underline underline-offset-8 decoration-1 hover:text-gray-300 transition-colors">
              Shop Now
            </a>
          </div>
        </div>

        {/* BLOCK 2: Women's Collections */}
        <div className="lg:col-span-2 relative bg-[#0D0D0D] rounded-sm overflow-hidden min-h-71.25 group flex items-end justify-start">
          <div className="absolute right-0 bottom-0 w-[60%] h-full z-0">
            <Image 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80" 
              alt="Women's Collections" 
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-contain object-bottom opacity-80 group-hover:scale-102 transition-transform duration-500 scale-x-[-1]"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent lg:bg-linear-to-t lg:from-black/70 z-10" />
          
          <div className="relative z-20 p-6 sm:p-8 max-w-xs space-y-2">
            <h3 className="text-xl font-semibold text-white tracking-wide">Women&apos;s Collections</h3>
            <p className="text-xs sm:text-sm font-light text-gray-300 leading-relaxed">
              Featured woman collections that give you another vibe.
            </p>
            <a href="#" className="inline-block pt-1 text-white font-medium text-sm underline underline-offset-8 decoration-1 hover:text-gray-300 transition-colors">
              Shop Now
            </a>
          </div>
        </div>

        {/* BLOCK 3: Speakers */}
        <div className="relative bg-[#0D0D0D] rounded-sm overflow-hidden min-h-71.25 group flex items-end">
          <div className="absolute inset-0 p-6 opacity-75 group-hover:scale-105 transition-transform duration-500 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80" 
              alt="Speakers" 
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-contain p-6"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent z-10" />
          
          <div className="relative z-20 p-6 space-y-1.5 w-full">
            <h3 className="text-lg font-semibold text-white tracking-wide">Speakers</h3>
            <p className="text-xs font-light text-gray-300 leading-tight line-clamp-2">
              Amazon wireless speakers
            </p>
            <a href="#" className="inline-block pt-1 text-white font-medium text-sm underline underline-offset-8 decoration-1 hover:text-gray-300 transition-colors">
              Shop Now
            </a>
          </div>
        </div>

        {/* BLOCK 4: Perfume */}
        <div className="relative bg-[#0D0D0D] rounded-sm overflow-hidden min-h-71.25 group flex items-end">
          <div className="absolute inset-0 p-8 opacity-75 group-hover:scale-105 transition-transform duration-500 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80" 
              alt="Perfume" 
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-contain p-8"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent z-10" />
          
          <div className="relative z-20 p-6 space-y-1.5 w-full">
            <h3 className="text-lg font-semibold text-white tracking-wide">Perfume</h3>
            <p className="text-xs font-light text-gray-300 leading-tight line-clamp-2">
              GUCCI INTENSE OUD EDP
            </p>
            <a href="#" className="inline-block pt-1 text-white font-medium text-sm underline underline-offset-8 decoration-1 hover:text-gray-300 transition-colors">
              Shop Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewArrival;