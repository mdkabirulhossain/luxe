
// // components/Header.tsx
// "use client";

// import React, { useState, useRef } from 'react';
// import Link from 'next/link'; // 1. Imported Next.js Link component

// const Header: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchVisibleOnMobile, setIsSearchVisibleOnMobile] = useState(false);
  
//   const mobileSearchInputRef = useRef<HTMLInputElement>(null);

//   const handleMobileSearchActivation = () => {
//     setIsMobileMenuOpen(false);
//     setIsSearchVisibleOnMobile(true);
//     setTimeout(() => {
//       mobileSearchInputRef.current?.focus();
//     }, 100);
//   };

//   return (
//     <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 font-sans">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        
//         {/* Left Section: Mobile Menu Trigger + Brand Logo */}
//         <div className="flex items-center gap-3">
//           <button 
//             onClick={() => {
//               setIsMobileMenuOpen(!isMobileMenuOpen);
//               if (!isMobileMenuOpen) setIsSearchVisibleOnMobile(false);
//             }}
//             className="md:hidden text-black hover:text-gray-600 focus:outline-none transition-colors"
//             aria-label="Toggle navigation menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>

//           {/* Logo Branding */}
//           <Link href="/" className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer text-black selection:bg-red-500">
//             Exclusive
//           </Link>
//         </div>

//         {/* Center Section: Desktop Navigation Links */}
//         <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-base font-medium text-black">
//           <Link href="/" className="underline underline-offset-8 decoration-2 decoration-black transition-all">Home</Link>
//           <Link href="#" className="hover:underline underline-offset-8 decoration-1 transition-all">Contact</Link>
//           <Link href="#" className="hover:underline underline-offset-8 decoration-1 transition-all">About</Link>
          
//           {/* FIX 1: Exact folder name case-match route point -> /SignUp */}
//           <Link href="/SignUp" className="hover:underline underline-offset-8 decoration-1 transition-all">Sign Up</Link>
//         </nav>

//         {/* Right Section: Utilities + Global Actions */}
//         <div className="flex items-center gap-3 sm:gap-6">
//           <div className="hidden lg:flex relative bg-gray-100 px-4 py-2.5 rounded items-center w-64 border border-transparent focus-within:border-gray-300 focus-within:bg-white transition-all">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
//             />
//             <svg className="w-5 h-5 text-black cursor-pointer shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>

//           <button 
//             onClick={() => {
//               setIsSearchVisibleOnMobile(!isSearchVisibleOnMobile);
//               if (!isSearchVisibleOnMobile) {
//                 setIsMobileMenuOpen(false);
//                 setTimeout(() => mobileSearchInputRef.current?.focus(), 100);
//               }
//             }}
//             className="lg:hidden text-black hover:text-gray-600 p-1.5 transition-colors"
//             aria-label="Toggle search view"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </button>
          
//           <button className="text-black hover:text-gray-600 p-1.5 transition-colors relative" aria-label="View Wishlist">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//             <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full" />
//           </button>
          
//           <button className="text-black hover:text-gray-600 p-1.5 transition-colors relative" aria-label="View Basket Cart">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
//             </svg>
//             <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center scale-90">
//               2
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* 1. Global Collapsible Mobile Search Sub-Header Panel */}
//       {isSearchVisibleOnMobile && (
//         <div className="w-full bg-gray-50 border-b border-gray-200 px-4 py-3 lg:hidden transition-all duration-200">
//           <div className="relative bg-white px-4 py-2.5 rounded flex items-center w-full border border-gray-300 shadow-inner focus-within:ring-1 focus-within:ring-black transition-all">
//             <input
//               ref={mobileSearchInputRef}
//               type="text"
//               placeholder="What are you looking for?"
//               className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
//             />
//             <svg className="w-5 h-5 text-gray-500 cursor-pointer shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>
//       )}

//       {/* 2. Mobile Menu Navigation Links Drawer Overlay Panel */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden w-full bg-white border-b border-gray-200 shadow-xl absolute left-0 top-20 z-40 transition-all duration-300 ease-in-out">
//           <div className="flex flex-col p-6 space-y-4">
            
//             <div className="relative bg-gray-100 px-4 py-3 rounded flex items-center w-full border border-transparent focus-within:bg-white focus-within:border-gray-300 transition-all mb-2">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 onFocus={handleMobileSearchActivation}
//                 onClick={handleMobileSearchActivation}
//                 className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
//               />
//               <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>

//             {/* Nav Menu Navigation Links */}
//             <nav className="flex flex-col space-y-4 text-base font-semibold text-black">
//               <Link href="/" className="pb-2 border-b border-gray-100 text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//               <Link href="#" className="pb-2 border-b border-gray-100 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
//               <Link href="#" className="pb-2 border-b border-gray-100 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              
//               {/* FIX 2: Exact case-match path and drawer reset fix -> /SignUp */}
//               <Link href="/SignUp" className="pb-1 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
//                 Sign Up
//               </Link>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// components/Header.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisibleOnMobile, setIsSearchVisibleOnMobile] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleMobileSearchActivation = () => {
    setIsMobileMenuOpen(false);
    setIsSearchVisibleOnMobile(true);
    setTimeout(() => {
      mobileSearchInputRef.current?.focus();
    }, 100);
  };

  // Close user dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Left Section: Mobile Menu Trigger + Brand Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (!isMobileMenuOpen) {
                setIsSearchVisibleOnMobile(false);
                setIsUserMenuOpen(false);
              }
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
          <Link href="/" className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer text-black selection:bg-red-500">
            Exclusive
          </Link>
        </div>

        {/* Center Section: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-base font-medium text-black">
          <Link href="/" className="underline underline-offset-8 decoration-2 decoration-black transition-all">Home</Link>
          <Link href="#" className="hover:underline underline-offset-8 decoration-1 transition-all">Contact</Link>
          <Link href="#" className="hover:underline underline-offset-8 decoration-1 transition-all">About</Link>
          <Link href="/SignUp" className="hover:underline underline-offset-8 decoration-1 transition-all">Sign Up</Link>
        </nav>

        {/* Right Section: Utilities + Global Actions */}
        <div className="flex items-center gap-2 sm:gap-4 relative">
          
          {/* Desktop Adaptive Search input bar */}
          <div className="hidden lg:flex relative bg-gray-100 px-4 py-2.5 rounded items-center w-64 border border-transparent focus-within:border-gray-300 focus-within:bg-white transition-all mr-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
            />
            <svg className="w-5 h-5 text-black cursor-pointer shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Mobile Search Toggle Icon */}
          <button 
            onClick={() => {
              setIsSearchVisibleOnMobile(!isSearchVisibleOnMobile);
              if (!isSearchVisibleOnMobile) {
                setIsMobileMenuOpen(false);
                setIsUserMenuOpen(false);
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
          {/* <button className="text-black hover:text-gray-600 p-1.5 transition-colors relative" aria-label="View Wishlist">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button> */}
          {/* Wishlist Link Button */}
        <Link 
           href="/wishlist" 
           className="text-black hover:text-gray-600 p-1.5 transition-colors relative block w-fit" 
           aria-label="View Wishlist"
        >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
            {/* Red active status indicator badge dot */}
           <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full" />
       </Link>
          
          {/* Shopping Cart Button */}
          <button className="text-black hover:text-gray-600 p-1.5 transition-colors relative" aria-label="View Basket Cart">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center scale-90">
              2
            </span>
          </button>

          {/* User Account Dropdown Trigger */}
          <div className="relative" ref={userMenuRef}>
            <button 
              onClick={() => {
                setIsUserMenuOpen(!isUserMenuOpen);
                if (!isUserMenuOpen) {
                  setIsMobileMenuOpen(false);
                  setIsSearchVisibleOnMobile(false);
                }
              }}
              className={`p-1.5 rounded-full transition-all duration-200 ${
                isUserMenuOpen ? 'bg-red-500 text-white' : 'bg-transparent text-black hover:bg-gray-100'
              }`}
              aria-label="Toggle user menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Dropdown Menu Overlay matching the requested image layout */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 rounded-md shadow-2xl bg-linear-to-br from-neutral-800 via-neutral-900 to-stone-950 backdrop-blur-md border border-neutral-700/30 py-3 z-60 transition-all duration-200">
                <div className="flex flex-col space-y-0.5 text-white text-sm">
                  
                  <Link href="/account" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors" onClick={() => setIsUserMenuOpen(false)}>
                    <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Manage My Account</span>
                  </Link>

                  <Link href="/orders" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors" onClick={() => setIsUserMenuOpen(false)}>
                    <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>My Order</span>
                  </Link>

                  <Link href="/cancellations" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors" onClick={() => setIsUserMenuOpen(false)}>
                    <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>My Cancellations</span>
                  </Link>

                  <Link href="/reviews" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors" onClick={() => setIsUserMenuOpen(false)}>
                    <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span>My Reviews</span>
                  </Link>

                  <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors text-left w-full" onClick={() => setIsUserMenuOpen(false)}>
                    <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>

                </div>
              </div>
            )}
          </div>

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
              <Link href="/" className="pb-2 border-b border-gray-100 text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="#" className="pb-2 border-b border-gray-100 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="#" className="pb-2 border-b border-gray-100 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/SignUp" className="pb-1 hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;