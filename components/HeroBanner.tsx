
// components/HeroBanner.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MOCK_SLIDES = [
  {
    id: 1,
    iconType: "apple",
    subTitle: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    imageUrl: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1400&q=80",
    link: "#"
  },
  {
    id: 2,
    iconType: "audio",
    subTitle: "Smart Home Audio",
    title: "Premium Sound Experience",
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1400&q=80",
    link: "#"
  },
  {
    id: 3,
    iconType: "fitness",
    subTitle: "Wearable Tech",
    title: "Track Your Fitness Goals",
    imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1400&q=80",
    link: "#"
  }
];

const HeroBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === MOCK_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // Helper function to render matching premium SVG icon nodes depending on payload definitions
  const renderSlideIcon = (type: string) => {
    switch (type) {
      case "apple":
        return (
          <svg className="w-4 h-5 sm:w-5 sm:h-6 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.29-1.9-14.84-6.09-3.35-2.52-7.15-7.04-11.41-13.56-4.48-6.83-8.14-14.42-10.98-22.77-2.84-8.35-4.27-16.71-4.27-25.07 0-12.88 3.12-23.41 9.35-31.57 6.23-8.16 14.19-12.28 23.89-12.37 4.46 0 9.53 1.31 15.22 3.93 5.69 2.62 9.42 3.93 11.19 3.93 1.12 0 5.11-1.42 12-4.26 6.88-2.84 12.67-4.11 17.34-3.81 14.28.89 25.02 6.16 32.22 15.81-11.37 6.86-16.92 16.14-16.63 27.83.28 9.53 3.86 17.39 10.74 23.58 6.88 6.2 15.11 9.61 24.69 10.23-2.14 6.13-4.66 12.1-7.56 17.91zM120.52 14.14c0-7.83 2.74-15.02 8.21-21.58 5.48-6.56 12.18-10.45 20.11-11.66.19 1.12.28 2.1.28 2.94 0 7.45-2.89 14.48-8.67 21.08-5.78 6.6-12.77 10.61-20.97 12.01-.56-1.87-.85-3.8-.96-5.79z" />
          </svg>
        );
      case "audio":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        );
      case "fitness":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-neutral-950 text-white mt-4 lg:mt-10 ml-0 lg:ml-11 relative overflow-hidden rounded-sm aspect-892/380 min-h-85 sm:min-h-95 select-none shadow-sm">

      {/* ── Slides Viewport Track ── */}
      {MOCK_SLIDES.map((slide, idx) => {
        const isSelected = currentIndex === idx;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full flex items-center px-6 sm:px-16 lg:px-20 transition-all duration-1000 ease-in-out ${isSelected ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* Immersive Background Image Layer with Ken Burns Zoom Effect */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className={`object-cover transition-transform duration-6000 ease-out ${isSelected ? "scale-105" : "scale-100"
                  }`}
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent md:via-black/40" />
            </div>

            {/* Elegant Minimalist Content Box */}
            <div className="relative flex flex-col space-y-4 sm:space-y-5 max-w-[85%] sm:max-w-lg z-20 pl-2 sm:pl-0">

              {/* Subtitle with Dynamic Custom Icon Condition Tracking */}
              <div
                className={`flex items-center gap-2 sm:gap-3 transition-all duration-700 delay-300 transform ${isSelected ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
              >
                <div className="w-5 sm:w-6 flex items-center justify-start text-white">
                  {renderSlideIcon(slide.iconType)}
                </div>
                <span className="text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-neutral-300 pt-0.5 select-none">
                  {slide.subTitle}
                </span>
              </div>

              {/* Clean, Massive Heading */}
              <h1
                className={`text-2xl sm:text-4xl lg:text-[52px] font-light leading-tight sm:leading-14.5 lg:leading-15.5 tracking-tight text-white transition-all duration-700 delay-500 transform ${isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                {slide.title.split(' ').map((word, i) =>
                  word.toLowerCase().includes('off') || word.toLowerCase().includes('premium') ? (
                    <span key={i} className="font-semibold text-white inline-block">{word}&nbsp;</span>
                  ) : <span key={i} className="inline-block">{word}&nbsp;</span>
                )}
              </h1>

              {/* Understated Call To Action Link with Clip Safety */}
              <div
                className={`pt-1 sm:pt-2 transition-all duration-700 delay-700 transform ${isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <a
                  href={slide.link}
                  className="inline-flex items-center gap-2 group font-medium text-sm sm:text-base text-white relative py-1"
                >
                  <span className="relative z-10 block">
                    Shop Now
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </span>

                  <span className="inline-block pl-0.5">
                    <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

          </div>
        );
      })}

      {/* ── High-End Clean Dash Pagination Controls ── */}
      <div className="absolute bottom-6 left-8 sm:left-16 lg:left-20 flex items-center gap-2 z-20">
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
                className={`h-0.75 rounded-full transition-all duration-500 ${isActive ? "w-8 bg-white" : "w-4 bg-neutral-600 group-hover:bg-neutral-400"
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