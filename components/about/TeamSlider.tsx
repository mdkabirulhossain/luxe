"use client";

import React from 'react';
import Image from 'next/image';

interface Member {
  name: string;
  role: string;
  image: string;
}

const TeamSlider: React.FC = () => {
  const team: Member[] = [
    {
      name: 'Tom Cruise',
      role: 'Founder & Chairman',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
      name: 'Emma Watson',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      name: 'Will Smith',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Cards Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col space-y-4">
            
            {/* Flat background frame area wrapper */}
            <div className="bg-[#F5F5F5] rounded-sm relative aspect-370/430 w-full overflow-hidden flex items-end justify-center pt-8">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain object-bottom mix-blend-multiply"
              />
            </div>

            {/* Profile Information Block Details */}
            <div className="space-y-1">
              <h3 className="text-2xl font-medium tracking-wide text-black">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>

            {/* Social Share Vectors */}
            <div className="flex items-center gap-4 text-black">
              {/* Twitter Icon */}
              <a href="#" className="hover:text-gray-600 transition-colors" aria-label="Twitter Profile">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="hover:text-gray-600 transition-colors" aria-label="Instagram Profile">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7a5 5 0 100 10 5 5 0 000-10zM21 8a2 2 0 11-4 0 2 2 0 014 0zM12 2a10 10 0 110 20 10 10 0 010-20z" />
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="#" className="hover:text-gray-600 transition-colors" aria-label="LinkedIn Profile">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM2 4a2 2 0 114 0 2 2 0 01-4 0z" />
                </svg>
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Slider Carousel Nav Indicators */}
      <div className="flex items-center justify-center gap-3 pt-4">
        <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer" />
        <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer" />
        {/* Core focused step element indicator matched to layout model design spec */}
        <span className="w-3 h-3 rounded-full bg-[#DB4444] ring-2 ring-offset-2 ring-gray-400 cursor-pointer" />
        <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer" />
        <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default TeamSlider;