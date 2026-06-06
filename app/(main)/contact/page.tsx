// app/contact/page.tsx or components/Contact.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="bg-white min-h-screen py-10 md:py-20 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-10 md:mb-16 flex items-center gap-2 select-none">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black font-normal">Contact</span>
        </nav>

        {/* Main Content Layout Split Box */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* LEFT COLUMN: Info Cards Panel */}
          <div className="w-full lg:w-85 shrink-0 bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] rounded px-6 py-10 flex flex-col justify-between">
            
            {/* Top Sub-section: Call To Us */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-base font-medium text-black">Call To Us</h2>
              </div>
              <div className="text-sm text-black space-y-2 font-normal leading-relaxed">
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
            </div>

            {/* Horizontal Divider Line */}
            <hr className="border-gray-300 my-8 w-full" />

            {/* Bottom Sub-section: Write To Us */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-base font-medium text-black">Write To Us</h2>
              </div>
              <div className="text-sm text-black space-y-3 font-normal leading-relaxed">
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p className="break-all">Emails: customer@luxe.com</p>
                <p className="break-all">Emails: support@luxe.com</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Form Panel */}
          <form 
            onSubmit={handleSubmit}
            className="flex-1 bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] rounded p-6 md:p-10 flex flex-col justify-between space-y-6"
          >
            {/* Form Top Section: Three-Column Inputs Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Name Field */}
              <div className="relative bg-[#F5F5F5] rounded">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent text-sm px-4 py-3.5 text-gray-800 placeholder-transparent focus:outline-none peer"
                  id="name"
                />
                <label 
                  htmlFor="name"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none transition-all peer-placeholder-shown:block peer-focus:hidden hidden items-center gap-0.5"
                >
                  Your Name <span className="text-[#DB4444]">*</span>
                </label>
              </div>

              {/* Email Field */}
              <div className="relative bg-[#F5F5F5] rounded">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent text-sm px-4 py-3.5 text-gray-800 placeholder-transparent focus:outline-none peer"
                  id="email"
                />
                <label 
                  htmlFor="email"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none transition-all peer-placeholder-shown:block peer-focus:hidden hidden items-center gap-0.5"
                >
                  Your Email <span className="text-[#DB4444]">*</span>
                </label>
              </div>

              {/* Phone Field */}
              <div className="relative bg-[#F5F5F5] rounded">
                <input
                  type="tel"
                  required
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent text-sm px-4 py-3.5 text-gray-800 placeholder-transparent focus:outline-none peer"
                  id="phone"
                />
                <label 
                  htmlFor="phone"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none transition-all peer-placeholder-shown:block peer-focus:hidden hidden items-center gap-0.5"
                >
                  Your Phone <span className="text-[#DB4444]">*</span>
                </label>
              </div>

            </div>

            {/* Form Middle Section: Message Textarea */}
            <div className="flex-1 min-h-50 md:min-h-62.5 bg-[#F5F5F5] rounded relative">
              <textarea
                placeholder="Your Massage"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full h-full bg-transparent text-sm p-4 text-gray-800 placeholder-gray-400 focus:outline-none resize-none"
              />
            </div>

            {/* Form Bottom Section: Action Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#DB4444] text-white font-medium text-sm md:text-base rounded px-12 py-4 hover:bg-[#c23b3b] active:scale-[0.99] transition-all"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;