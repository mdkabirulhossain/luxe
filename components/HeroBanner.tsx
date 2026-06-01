/* eslint-disable @next/next/no-img-element */
"use client"; // REQUIRED: Tells Next.js this component handles client-side state interactions

import React, { useState, useEffect } from 'react';

// Structuring mock banners exactly how an admin dashboard API payload will look
const MOCK_SLIDES = [
  {
    id: 1,
    subTitle: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    imageUrl: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    subTitle: "Smart Home Audio",
    title: "Premium Sound Experience",
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    subTitle: "Wearable Tech",
    title: "Track Your Fitness Goals",
    imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

const HeroBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = MOCK_SLIDES[currentIndex];

  // AUTOPLAY EFFECT: Automatically switch slides after a 4-second delay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === MOCK_SLIDES.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4000ms = 4 seconds delay

    // Cleanup the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(timer);
  }, []);

  // CLICK HANDLER: Instantly switches to the clicked slide
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex-1 bg-black text-white mt-4 lg:mt-10 ml-0 lg:ml-11 p-6 sm:p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden rounded-md min-h-80 md:min-h-95 transition-all duration-500 ease-in-out">
      
      {/* Dynamic Text Info */}
      <div className="flex flex-col space-y-3 md:space-y-4 z-10 max-w-sm text-center md:text-left items-center md:items-start w-full transition-opacity duration-300">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl"></span>
          <span className="text-xs sm:text-base font-light tracking-wide text-gray-300">
            {currentSlide.subTitle}
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-wider min-h-18 md:min-h-0">
          {currentSlide.title}
        </h1>
        
        <a href={currentSlide.link} className="flex items-center gap-2 pt-1 group font-medium underline underline-offset-8 decoration-1 hover:text-gray-300 text-sm sm:text-base">
          Shop Now
          <svg className="w-4 h-4 sm:w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Dynamic Image Container */}
      <div className="mt-6 md:mt-0 w-full max-w-50 sm:max-w-60 md:max-w-xs flex justify-center h-45 sm:h-55 md:h-70">
        <img 
          key={currentIndex} // Adding a key forces a beautiful fade re-render when image URL updates
          src={currentSlide.imageUrl} 
          alt={currentSlide.title} 
          className="object-contain h-full w-full rounded-md drop-shadow-2xl animate-fadeIn" 
        />
      </div>

      {/* Slide Indicators / Interactive Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
        {MOCK_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)} // Trigger image state change on user click
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentIndex 
                ? "w-3.5 h-3.5 bg-red-500 border border-white scale-110" 
                : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;