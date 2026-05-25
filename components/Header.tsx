// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">Exclusive</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-12 text-base font-medium">
          <a href="#" className="underline underline-offset-4 decoration-2">Home</a>
          <a href="#" className="hover:underline underline-offset-4">Contact</a>
          <a href="#" className="hover:underline underline-offset-4">About</a>
          <a href="#" className="hover:underline underline-offset-4">Sign Up</a>
        </nav>

        {/* Search & Icons */}
        <div className="flex items-center gap-6">
          <div className="relative bg-gray-100 px-5 py-2.5 rounded flex items-center w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-sm w-full outline-none text-gray-700"
            />
            <svg className="w-5 h-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* Wishlist */}
          <button className="hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          
          {/* Cart */}
          <button className="hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;