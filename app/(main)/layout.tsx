// import React from 'react';
// import '@/app/globals.css'; // Make sure your Tailwind styles path is correct

// export const metadata = {
//   title: 'Exclusive E-Commerce',
//   description: 'Your premium shopping destination',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


// app/(main)/layout.tsx
import React from 'react';

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
    // DO NOT use <html> or <body> here. 
    // They are already provided globally by the root layout.
    <div className="w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}