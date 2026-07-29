// components/HeroBanner.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const MOCK_SLIDES = [
  {
    id: 1,
    iconType: "fashion",
    subTitle: "Exclusive Collection 2026",
    title: "Define Your Signature Style",
    description: "Discover curated designer wear and exclusive apparel built for modern luxury.",
    imageUrl: "/luxury_fashion_banner_clean.png",
    imagePosition: "object-top",
    link: "/products?category=Women's%20Fashion",
  },
  {
    id: 2,
    iconType: "gadgets",
    subTitle: "Premium Audio & Tech",
    title: "Immersive Sound Elite Gear",
    description: "Elevate your productivity and experience studio-grade fidelity accessories.",
    imageUrl: "/luxury_gadgets_banner.png",
    imagePosition: "object-center",
    link: "/products?category=Computers%20%26%20Laptops",
  },
];

const HeroBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === MOCK_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const renderSlideIcon = (type: string) => {
    switch (type) {
      case "fashion":
        return (
          <svg className="w-5 h-5 text-[#DB4444]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case "gadgets":
        return (
          <svg className="w-5 h-5 text-[#DB4444]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-[#F9F8F6] mt-4 lg:mt-6 relative overflow-hidden rounded-md h-[460px] lg:h-auto lg:aspect-[1170/420] select-none shadow-sm flex">
      {/* Slides Viewport Track */}
      {MOCK_SLIDES.map((slide, idx) => {
        const isSelected = currentIndex === idx;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row items-stretch transition-opacity duration-700 ease-in-out ${
              isSelected ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Left Column: Text Card (Editorial Presentation) */}
            <div className="w-full h-1/2 lg:w-[42%] lg:h-full bg-[#F9F8F6] text-black flex flex-col justify-center p-6 lg:p-12 z-20 relative shrink-0">
              <div className="flex flex-col space-y-3.5 lg:space-y-5 max-w-md">
                {/* Subtitle with Icon */}
                <div
                  className={`flex items-center gap-2 lg:gap-3 transition-all duration-700 delay-300 transform ${
                    isSelected ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <div className="w-5 flex items-center justify-start">
                    {renderSlideIcon(slide.iconType)}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 pt-0.5">
                    {slide.subTitle}
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className={`text-2xl sm:text-3xl lg:text-[38px] lg:leading-[46px] font-bold tracking-tight text-neutral-950 transition-all duration-700 delay-500 transform ${
                    isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm lg:text-[14px] text-gray-600 font-normal leading-relaxed transition-all duration-700 delay-600 transform ${
                    isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.description}
                </p>

                {/* Call To Action */}
                <div
                  className={`pt-1 transition-all duration-700 delay-700 transform ${
                    isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <a
                    href={slide.link}
                    className="inline-flex items-center gap-2 group font-semibold text-xs sm:text-sm text-[#DB4444] relative py-1"
                  >
                    <span className="relative z-10 block">
                      Shop Collection
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DB4444] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                    <span className="inline-block pl-0.5">
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Image Pane */}
            <div className="w-full h-1/2 lg:w-[58%] lg:h-full relative overflow-hidden bg-neutral-100">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="(max-width: 1200px) 100vw, 800px"
                className={`object-cover ${slide.imagePosition || "object-center"} transition-transform duration-6000 ease-out ${
                  isSelected ? "scale-102" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        );
      })}

      {/* Pagination Controls */}
      <div className="absolute bottom-6 left-8 lg:left-12 flex items-center gap-2 z-20">
        {MOCK_SLIDES.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="relative py-2 focus:outline-none cursor-pointer group"
            >
              <div
                className={`h-1 rounded-full transition-all duration-500 ${
                  isActive ? "w-8 bg-[#DB4444]" : "w-4 bg-gray-300 group-hover:bg-gray-400"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBanner;