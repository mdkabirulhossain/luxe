import React from 'react';
import '@/app/globals.css'; // Make sure your Tailwind styles path is correct

export const metadata = {
  title: 'Exclusive E-Commerce',
  description: 'Your premium shopping destination',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}