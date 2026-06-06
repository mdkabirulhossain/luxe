// app/(auth)/login/page.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LogInPage: React.FC = () => {
  // Local state management for authenticated input collection
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Production API payload integration placeholder:
    console.log("Authentication requested with payload:", formData);
  };

  return (
    <main className="w-full bg-white text-black font-sans flex items-center justify-center p-4 md:p-0 py-12 md:py-20 select-none">
      <div className="max-w-275 w-full flex flex-col md:flex-row items-stretch bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden">
        
        {/* LEFT COLUMN: Premium Side Illustration Frame */}
        <div className="flex-1 min-w-75 md:min-w-112.5 bg-[#C5E8E8] relative flex items-center justify-center h-75 md:h-auto">
          <div className="relative w-[90%] md:w-[95%] h-[90%] md:h-[95%]">
            <Image 
              src="https://images.unsplash.com/photo-1610438235354-a6fa55280b5c?auto=format&fit=crop&w=600&q=80" 
              alt="Luxe E-Commerce Shopping Vector View Illustration" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-contain" 
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Login Form Panel */}
        <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-center gap-12">
          
          {/* Header Typography Group */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide text-black">
              Log in to Luxe
            </h1>
            <p className="text-sm font-light text-black tracking-wide">
              Enter your details below
            </p>
          </div>

          {/* Secure Credential Input Flow */}
          <form onSubmit={handleFormSubmit} className="space-y-8 flex flex-col items-stretch">
            
            {/* Input Field: Identity Token */}
            <div className="relative">
              <input 
                type="text" 
                id="emailOrPhone"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleInputChange}
                required
                autoComplete="username"
                placeholder="Email or Phone Number" 
                className="w-full bg-transparent text-sm border-b border-gray-300 pb-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:font-light" 
              />
            </div>

            {/* Input Field: Secure Key */}
            <div className="relative">
              <input 
                type="password" 
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="current-password"
                placeholder="Password" 
                className="w-full bg-transparent text-sm border-b border-gray-300 pb-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:font-light" 
              />
            </div>

            {/* Action Row Layout: Aligns Submit button with Forget link perfectly */}
            <div className="pt-4 flex flex-row items-center justify-between gap-4">
              <button 
                type="submit" 
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-4 px-10 rounded-sm transition-colors shadow-sm active:scale-98"
              >
                Log In
              </button>
              
              <a 
                href="#" 
                className="text-sm font-normal text-red-500 hover:text-red-600 transition-colors cursor-pointer"
              >
                Forget Password?
              </a>
            </div>

          </form>

          {/* Footer: Sign Up redirect for new users */}
          <div className="w-full text-center text-sm font-light text-gray-700 flex items-center justify-center gap-1.5 selection:bg-red-500">
            <span>Don&apos;t have an account?</span>
            <Link
              href="/SignUp"
              className="font-normal text-black hover:text-red-500 hover:underline underline-offset-4 decoration-1 transition-all"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default LogInPage;