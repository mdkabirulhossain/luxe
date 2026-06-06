/* eslint-disable @typescript-eslint/no-unused-vars */
// components/Footer.tsx
"use client";

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white pt-20 pb-6 font-sans">
      {/* Upper Footer Links Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 pb-16 border-b border-gray-800">
        
        {/* COLUMN 1: luxe / Subscribe */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-wider">Luxe</h2>
          <h3 className="text-xl font-medium">Subscribe</h3>
          <p className="text-sm text-gray-300 font-light">Get 10% off your first order</p>
          
          {/* Email Input Field */}
          <div className="relative max-w-60 border-2 border-white rounded-sm overflow-hidden bg-black">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-black text-sm text-gray-400 pl-4 pr-10 py-3 focus:outline-none placeholder-gray-600"
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              aria-label="Submit email"
            >
              <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>

        {/* COLUMN 2: Support */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium tracking-wide">Support</h3>
          <p className="text-sm text-gray-300 leading-relaxed max-w-55">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm text-gray-300 wrap-break-word hover:text-gray-400 transition-colors">
            <a href="mailto:luxe@gmail.com">luxe@gmail.com</a>
          </p>
          <p className="text-sm text-gray-300">
            <a href="tel:+88015888889999" className="hover:text-gray-400 transition-colors">
              +88015-88888-9999
            </a>
          </p>
        </div>

        {/* COLUMN 3: Account */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium tracking-wide">Account</h3>
          <ul className="space-y-3 text-sm text-gray-300 font-light">
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">My Account</a></li>
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Login / Register</a></li>
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Cart</a></li>
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Wishlist</a></li>
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Shop</a></li>
          </ul>
        </div>

        {/* COLUMN 4: Quick Link */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium tracking-wide">Quick Link</h3>
          <ul className="space-y-3 text-sm text-gray-300 font-light">
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">FAQ</a></li>
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 5: Download App & Socials */}
        <div className="space-y-4">

          {/* Social Platforms Links Handles vector layout */}
          <div className="flex items-center gap-6 pt-2 text-white">
            <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Disclaimer Base Bar */}
      <div className="w-full text-center pt-6 text-gray-600 text-sm flex items-center justify-center gap-1.5 font-light selection:bg-red-500">
        <span>&copy;</span>
        <span>Copyright Rimel 2022. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;