// app/(auth)/signup/page.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignUpPage: React.FC = () => {
  // Local state handling for form inputs
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Admin dashboard integration blueprint logic:
    // This is where you would dispatch an asynchronous fetch() request to your API auth endpoint.
    // e.g., registerUser({ ...formData })
    console.log("SignUp attempt initiated with payload:", formData);
    // Remember to clear form data or route on success.
  };

  const handleGoogleSignUp = () => {
    // Integrating external OAuth providers logic placeholder.
    console.log("Initiating Google Sign-Up handshake...");
  };

  return (
    <main className="w-full bg-white text-black font-sans flex items-center justify-center p-4 md:p-0 py-12 md:py-20 select-none">
      <div className="max-w-275 w-full flex flex-col md:flex-row items-stretch bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden">
        
        {/* LEFT COLUMN: E-Commerce Illustration Area */}
        {/* Defines the visual context for the e-commerce application platform branding context */}
        <div className="flex-1 min-w-75 md:min-w-112.5 bg-[#C5E8E8] relative flex items-center justify-center h-87.5 md:h-auto">
          {/* Note: This Unsplash path is used as a temporary mockup; replace with your relative asset path e.g., '/images/signup-main.png' */}
          <div className="relative w-[90%] md:w-[95%] h-[90%] md:h-[95%]">
            <Image 
              src="https://images.unsplash.com/photo-1610438235354-a6fa55280b5c?auto=format&fit=crop&w=600&q=80" 
              alt="E-commerce shopping application illustration" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              priority // Prioritizes loading of the branding asset above the fold to enhance perceived speed.
              className="object-contain" 
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Account Registration Form Area */}
        {/* Handles the data input for new application user creation flow */}
        <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-center gap-10">
          
          {/* Header text structured content framework */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide text-black">Create an account</h1>
            <p className="text-sm font-light text-black tracking-wide">Enter your details below</p>
          </div>

          {/* Core SignUp form structure wrapper */}
          <form onSubmit={handleFormSubmit} className="space-y-7 flex flex-col items-stretch">
            
            {/* Input fields mapping with clean bottom-border design aesthetic */}
            <div className="relative">
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                autoComplete="name"
                placeholder="Name" 
                className="w-full bg-transparent text-sm border-b border-gray-300 pb-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:font-light" 
              />
            </div>

            <div className="relative">
              <input 
                type="text" 
                id="emailOrPhone"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleInputChange}
                required
                autoComplete="email" // Use appropriate completion attribute; 'email' is preferred for multi-input contexts.
                placeholder="Email or Phone Number" 
                className="w-full bg-transparent text-sm border-b border-gray-300 pb-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:font-light" 
              />
            </div>

            <div className="relative">
              <input 
                type="password" 
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="new-password"
                placeholder="Password" 
                className="w-full bg-transparent text-sm border-b border-gray-300 pb-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 placeholder:font-light" 
              />
            </div>

            {/* Primary registration action button view layout */}
            <div className="pt-4 flex flex-col gap-4 items-stretch">
              <button 
                type="submit" 
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-4 px-10 rounded-sm transition-colors w-full"
              >
                Create Account
              </button>
              
              {/* Secondary OAuth provider social action button framework section */}
              <button 
                type="button" 
                onClick={handleGoogleSignUp}
                className="bg-white border border-gray-200 hover:border-gray-300 rounded-sm text-sm py-3.5 px-6 w-full flex items-center justify-center gap-2.5 shadow-sm active:scale-99 transition-all"
                aria-label="Sign up with Google"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=48&q=80" 
                  alt="" 
                  width={20} 
                  height={20} 
                  className="object-contain" 
                  aria-hidden="true" // Decorative asset hidden from accessibility trees.
                />
                <span className="text-black font-normal">Sign up with Google</span>
              </button>
            </div>
          </form>

          {/* Footer text link node layout structure view */}
          <div className="w-full text-center text-sm font-light text-gray-700 flex items-center justify-center gap-1.5 selection:bg-red-500">
            <span>Already have account?</span>
            <Link
              href="/LogIn" 
              className="font-normal text-black hover:text-red-500 hover:underline underline-offset-4 decoration-1 transition-all"
              >
              Log in
           </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default SignUpPage;