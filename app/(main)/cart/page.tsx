// app/Cart/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  // Mock internal state initialized directly from your visual schema requirements
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'prod-1',
      name: 'LCD Monitor',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=80&q=80',
      price: 650,
      quantity: 1,
    },
    {
      id: 'prod-2',
      name: 'H1 Gamepad',
      image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=80&q=80',
      price: 550,
      quantity: 2,
    },
  ]);

  const [couponCode, setCouponCode] = useState('');

  // Handle precise iterative quantity variance
  const handleQuantityChange = (id: string, value: number) => {
    if (value < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };

  // Remove individual line items immediately from frame bounds
  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Dynamic calculations metrics
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = "Free";
  const total = subtotal;

  return (
    <main className="w-full min-h-screen bg-white text-black font-sans py-10 px-4 md:px-8 selection:bg-red-500">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Breadcrumbs Navigation Stack Layout Section */}
        <nav className="text-sm tracking-wide text-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black font-normal">Cart</span>
        </nav>

        {/* Tabular Layout Structure View */}
        <div className="space-y-6">
          
          {/* Header Row Node Grid Setup Structure */}
          <div className="w-full grid grid-cols-4 items-center bg-white shadow-[0_1px_5px_rgba(0,0,0,0.05)] rounded-sm py-6 px-6 text-base font-normal text-black text-center md:text-left">
            <div className="text-left">Product</div>
            <div className="text-center md:text-left md:pl-12">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-right">Subtotal</div>
          </div>

          {/* Dynamic Content Line-Item Processing Loops */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div 
                key={item.id}
                className="w-full grid grid-cols-4 items-center bg-white shadow-[0_1px_5px_rgba(0,0,0,0.05)] rounded-sm py-5 px-6 text-base text-black transition-all group relative"
              >
                {/* Column 1: Image Frame + Label descriptor container context */}
                <div className="flex items-center gap-4 relative">
                  {/* Absolute positioning close button layout indicator overlay element */}
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10"
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                  <div className="relative w-12 h-12 shrink-0 bg-transparent">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <span className="font-normal text-sm sm:text-base text-black">{item.name}</span>
                </div>

                {/* Column 2: Standard Base Price Field Metric View */}
                <div className="text-center md:text-left md:pl-12 font-normal text-black">
                  ${item.price}
                </div>

                {/* Column 3: Stepper Dual Arrow Integrated State Controller Component Box */}
                <div className="flex justify-center">
                  <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-1.5 w-18 bg-white">
                    <span className="text-base font-normal">{String(item.quantity).padStart(2, '0')}</span>
                    <div className="flex flex-col ml-1 text-[10px] text-gray-500 select-none">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="hover:text-black transition-colors focus:outline-none leading-none pb-0.5"
                      >
                        ▲
                      </button>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="hover:text-black transition-colors focus:outline-none leading-none pt-0.5"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>

                {/* Column 4: Extended Aggregated Row Segment Computational Nodes */}
                <div className="text-right font-normal text-black">
                  ${item.price * item.quantity}
                </div>

              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-12 text-gray-400 font-light text-sm bg-white border border-dashed rounded-sm">
                Your e-commerce shopping cart is currently empty.
              </div>
            )}
          </div>

          {/* Action Row Secondary: Return state pathways control link triggers row stack */}
          <div className="w-full flex flex-row justify-between items-center gap-4 pt-3">
            <Link 
              href="/" 
              className="border border-black text-black hover:bg-gray-50 transition-colors text-sm sm:text-base font-medium py-4 px-12 rounded-sm"
            >
              Return To Shop
            </Link>
            <button 
              onClick={() => window.location.reload()}
              className="border border-black text-black hover:bg-gray-50 transition-colors text-sm sm:text-base font-medium py-4 px-12 rounded-sm"
            >
              Update Cart
            </button>
          </div>

        </div>

        {/* Action Row Tertiary Section Layout Grid Splits Wrapper Framework */}
        <div className="w-full flex flex-col lg:flex-row lg:items-start justify-between gap-10 pt-4">
          
          {/* Coupon Entry Form Elements Container Area Grid Side */}
          <div className="flex flex-row items-stretch gap-4 max-w-125 w-full">
            <input 
              type="text" 
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border border-black text-sm rounded-sm px-6 py-4 w-full focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400 placeholder:font-light"
            />
            <button 
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-medium text-sm sm:text-base px-10 py-4 rounded-sm transition-colors whitespace-nowrap active:scale-99"
            >
              Apply Coupon
            </button>
          </div>

          {/* Financial Calculation Balance Abstract Modal Block Side Column View */}
          <div className="border-2 border-black rounded-sm p-6 sm:p-8 max-w-117.5 w-full lg:ml-auto space-y-6">
            <h2 className="text-xl font-medium text-black tracking-wide">Cart Total</h2>
            
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="font-light text-black">Subtotal:</span>
                <span className="font-normal text-black">${subtotal}</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="font-light text-black">Shipping:</span>
                <span className="font-normal text-black">{shipping}</span>
              </div>
              
              <div className="flex justify-between items-center pt-1">
                <span className="font-light text-black">Total:</span>
                <span className="font-normal text-black">${total}</span>
              </div>
            </div>

            <div className="w-full flex justify-center pt-2">
              <Link 
                href="/checkout"
                className="bg-red-500 hover:bg-red-600 text-white font-medium text-sm sm:text-base py-4 px-12 rounded-sm transition-colors text-center block w-full max-w-fit"
              >
                Procees to checkout
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default CartPage;