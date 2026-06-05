// app/(auth)/layout.tsx
import React from 'react';
import TopHeader from '@/components/TopHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Exclusive E-Commerce',
  description: 'Your premium shopping destination',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-black antialiased">
      {/* Persists on every nested page inside the (auth) group */}
      <TopHeader />
      <Navbar />
      
      {/* Auth page view layer area */}
      <div className="grow">
        {children}
      </div>
      
      {/* Persists at the bottom of every page */}
      <Footer />
    </div>
  );
}
