// app/(main)/layout.tsx
import React from 'react';
import TopHeader from '@/components/TopHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Exclusive E-Commerce',
  description: 'Your premium shopping destination',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-black antialiased">
      {/* Persists on every nested page inside the (main) group */}
      <TopHeader />
      <Header />
      
      {/* Main page view layer area */}
      <div className="grow">
        {children}
      </div>
      
      {/* Persists at the bottom of every page */}
      <Footer />
    </div>
  );
}