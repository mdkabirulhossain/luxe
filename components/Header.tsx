// components/Header.tsx
"use client";

import React, { useState, useRef } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisibleOnMobile, setIsSearchVisibleOnMobile] = useState(false);
  
  // Create a reference to the main mobile input field to auto-focus it
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  const handleMobileSearchActivation = () => {
    // 1. Close the navigation drawer link container
    setIsMobileMenuOpen(false);
    
    // 2. Open the global floating sub-header search bar container
    setIsSearchVisibleOnMobile(true);
    
    // 3. Defer focus slightly to let the DOM paint and sliding transition finish smoothly
    setTimeout(() => {
      mobileSearchInputRef.current?.focus();
    }, 100);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Left Section: Mobile Menu Trigger + Brand Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburg Button Trigger */}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              // Clean UX: Hide active sub-search bar if user manually toggles the main menu open
              if (!isMobileMenuOpen) setIsSearchVisibleOnMobile(false);
            }}
            className="md:hidden text-black hover:text-gray-600 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo Branding */}
          <div className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer text-black selection:bg-red-500">
            Exclusive
          </div>
        </div>

        {/* Center Section: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-base font-medium text-black">
          <a href="#" className="underline underline-offset-8 decoration-2 decoration-black transition-all">Home</a>
          <a href="#" className="hover:underline underline-offset-8 decoration-1 transition-all">Contact</a>
          <a href="#" className="hover:underline underline-offset-8 decoration-1 transition-all">About</a>
          <a href="#" className="hover:underline underline-offset-8 decoration-1 transition-all">Sign Up</a>
        </nav>

        {/* Right Section: Utilities + Global Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          
          {/* Desktop Adaptive Search input bar */}
          <div className="hidden lg:flex relative bg-gray-100 px-4 py-2.5 rounded items-center w-64 border border-transparent focus-within:border-gray-300 focus-within:bg-white transition-all">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
            />
            <svg className="w-5 h-5 text-black cursor-pointer shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Mobile Search Toggle Icon Icon (Toggles sub-bar visibility instantly) */}
          <button 
            onClick={() => {
              setIsSearchVisibleOnMobile(!isSearchVisibleOnMobile);
              if (!isSearchVisibleOnMobile) {
                setIsMobileMenuOpen(false);
                setTimeout(() => mobileSearchInputRef.current?.focus(), 100);
              }
            }}
            className="lg:hidden text-black hover:text-gray-600 p-1.5 transition-colors"
            aria-label="Toggle search view"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Wishlist Button */}
          <button className="text-black hover:text-gray-600 p-1.5 transition-colors relative" aria-label="View Wishlist">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full" />
          </button>
          
          {/* Shopping Cart Button */}
          <button className="text-black hover:text-gray-600 p-1.5 transition-colors relative" aria-label="View Basket Cart">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center scale-90">
              2
            </span>
          </button>
        </div>
      </div>

      {/* 1. Global Collapsible Mobile Search Sub-Header Panel */}
      {isSearchVisibleOnMobile && (
        <div className="w-full bg-gray-50 border-b border-gray-200 px-4 py-3 lg:hidden transition-all duration-200">
          <div className="relative bg-white px-4 py-2.5 rounded flex items-center w-full border border-gray-300 shadow-inner focus-within:ring-1 focus-within:ring-black transition-all">
            <input
              ref={mobileSearchInputRef}
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
            />
            <svg className="w-5 h-5 text-gray-500 cursor-pointer shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      )}

      {/* 2. Mobile Menu Navigation Links Drawer Overlay Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-b border-gray-200 shadow-xl absolute left-0 top-20 z-40 transition-all duration-300 ease-in-out">
          <div className="flex flex-col p-6 space-y-4">
            
            {/* Embedded Search Input inside the Drawer Option Stack */}
            <div className="relative bg-gray-100 px-4 py-3 rounded flex items-center w-full border border-transparent focus-within:bg-white focus-within:border-gray-300 transition-all mb-2">
              <input
                type="text"
                placeholder="Search products..."
                onFocus={handleMobileSearchActivation}
                onClick={handleMobileSearchActivation}
                className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
              />
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Nav Menu Navigation Links */}
            <nav className="flex flex-col space-y-4 text-base font-semibold text-black">
              <a href="#" className="pb-2 border-b border-gray-100 text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#" className="pb-2 border-b border-gray-100 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a href="#" className="pb-2 border-b border-gray-100 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#" className="pb-1 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;