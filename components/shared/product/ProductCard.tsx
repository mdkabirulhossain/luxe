// components/ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ColorVariant } from "@/lib/products";

// ─── Shared Product Type ──────────────────────────────────────────────────────

export interface ProductCardData {
  id: string;
  title: string;
  image: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  isBestSeller?: boolean;
  isHot?: boolean;
  isNew?: boolean;
  colors?: string[];
  colorVariants?: ColorVariant[];
  rating?: number;
  reviewsCount?: number;
}

interface ProductCardProps {
  product: ProductCardData;
  variant?: string;
  selectedColorIndex?: number;
  onColorSelect?: (productId: string, colorIndex: number) => void;
}

// ─── SVG Icon Atoms ───────────────────────────────────────────────────────────

const HeartIcon = () => (
  <svg className="w-4.5 h-4.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const MedalIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#D49842]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
  </svg>
);

const FireIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#F0553A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 7.1 10c.1.99-.45 1.9-1.32 2.44C4.34 13.34 3 15.5 3 18a9 9 0 1014.657.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 14.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const [currentImage, setCurrentImage] = React.useState(product.image);
  const [activeColor, setActiveColor] = React.useState<string | null>(
    product.colorVariants?.[0]?.colorClass || null
  );

  React.useEffect(() => {
    setCurrentImage(product.image);
  }, [product.image]);

  // Any click routes to the product details page as requested
  const handleNavigate = () => {
    router.push(`/product/${product.id}`);
  };

  // Helper to trigger navigation from buttons without bubbling issues
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleNavigate();
  };

  const handleColorClick = (e: React.MouseEvent, colorClass: string, variantImage?: string) => {
    e.stopPropagation();
    setActiveColor(colorClass);
    if (variantImage) {
      setCurrentImage(variantImage);
    }
  };

  return (
    <div 
      className="group w-full flex flex-col gap-3 select-none mx-auto cursor-pointer"
      onClick={handleNavigate}
    >
      {/* ── Image Showcase Area ── */}
      <div className="relative w-full aspect-[4/4.2] bg-[#F6F7F9] rounded-[24px] overflow-hidden flex items-center justify-center p-6 border border-gray-100">
        
        {/* Discount Badge */}
        {product.discount !== undefined && (
          <div 
            className="absolute top-4 left-0 bg-[#257B82] text-white text-[11px] font-bold px-3 py-1.5 z-10"
            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%)' }}
          >
            {product.discount}% OFF
          </div>
        )}

        {/* Right Side Action Floating Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
          
          {/* Wishlist / Heart */}
          <button 
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:bg-gray-50 transition-colors"
            onClick={handleButtonClick}
          >
            <HeartIcon />
          </button>

          {/* Best Seller Hover Badge */}
          <button 
            className="flex items-center justify-end bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] h-9 overflow-hidden transition-all duration-300 w-9 group-hover:w-26.25 group-hover:px-3 hover:bg-gray-50"
            onClick={handleButtonClick}
          >
            <span className="text-[12px] font-bold text-[#D49842] hidden group-hover:block pr-1.5 whitespace-nowrap">
              Best Seller
            </span>
            <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:w-auto group-hover:h-auto">
              <MedalIcon />
            </div>
          </button>

          {/* Hot Hover Badge */}
          <button 
            className="flex items-center justify-end bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] h-9 overflow-hidden transition-all duration-300 w-9 group-hover:w-17.5 group-hover:px-3 hover:bg-gray-50"
            onClick={handleButtonClick}
          >
            <span className="text-[12px] font-bold text-[#F0553A] hidden group-hover:block pr-1.5 whitespace-nowrap">
              Hot
            </span>
            <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:w-auto group-hover:h-auto">
              <FireIcon />
            </div>
          </button>

        </div>

        {/* Main Product Image */}
        <div className="relative w-full h-full max-w-[90%] transition-transform duration-500 group-hover:scale-105">
          <Image
            src={currentImage || product.image || "/placeholder.png"}
            alt={product.title}
            fill
            sizes="(max-width: 280px) 100vw, 250px"
            className="object-contain pointer-events-none mix-blend-multiply"
          />
        </div>

        {/* Bottom Hover Actions (Add to Cart / Shop) */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 translate-y-2 group-hover:translate-y-0">
          <button 
            className="flex-2 bg-[#257B82] hover:bg-[#1C646B] text-white text-sm font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors"
            onClick={handleButtonClick}
          >
            <CartIcon />
            Add To Cart
          </button>
          <button 
            className="flex-1 bg-white hover:bg-gray-50 text-[#1F2937] text-sm font-bold py-2.5 rounded-full shadow-sm transition-colors"
            onClick={handleButtonClick}
          >
            Shop
          </button>
        </div>

      </div>

      {/* ── Product Details ── */}
      <div className="flex flex-col px-1">
        <h3 className="text-[17px] text-[#2C4059] font-medium leading-snug hover:underline">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            {product.originalPrice !== undefined && (
              <span className="text-[15px] font-medium text-gray-400 line-through">
                ৳ {product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-[17px] font-bold text-[#0F172A]">
              ৳ {product.currentPrice.toLocaleString()}
            </span>
          </div>

          {/* Color Swatch Dots on Card */}
          {product.colorVariants && product.colorVariants.length > 0 && (
            <div className="flex items-center gap-1.5 z-20">
              {product.colorVariants.map((variant) => (
                <button
                  key={variant.name + variant.colorClass}
                  onClick={(e) => handleColorClick(e, variant.colorClass, variant.image)}
                  title={variant.name}
                  className={`w-3.5 h-3.5 rounded-full ${variant.colorClass} border border-gray-300 transition-transform ${
                    activeColor === variant.colorClass ? "scale-125 ring-1 ring-black" : "hover:scale-110"
                  }`}
                  style={variant.hex ? { backgroundColor: variant.hex } : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProductCard;