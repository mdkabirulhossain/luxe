// // components/ProductCard.tsx
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// // ─── Shared Product Type ──────────────────────────────────────────────────────

// export interface ProductCardData {
//   id: string;
//   /** Display title / name */
//   title: string;
//   image: string;
//   currentPrice: number;
//   originalPrice?: number;
//   /** Percentage number, e.g. 40 → shows "-40%" */
//   discount?: number;
//   /** If true shows a green "NEW" badge instead of a discount badge */
//   isNew?: boolean;
//   rating?: number;
//   reviewsCount?: number;
//   /** Tailwind bg-* class strings for colour swatches, e.g. ['bg-red-500','bg-black'] */
//   colors?: string[];
// }

// // ─── Variant Config ───────────────────────────────────────────────────────────

// export type ProductCardVariant =
//   | "flash-sales"   // FlashSalesSection  → discount badge | wishlist + view btns | orange stars
//   | "best-selling"  // BestSellingProducts → discount badge | wishlist + view btns | orange stars
//   | "explore"       // ExploreOurProducts  → isNew/discount badge | wishlist + view btns | yellow stars | colour swatches | slide-up cart
//   | "wishlist"      // Wishlist section    → discount badge | delete btn | cart-icon Add To Cart | no stars
//   | "just-for-you"; // Wishlist page JFY   → discount/isNew badge | view btn | cart-icon Add To Cart | stars

// interface ProductCardProps {
//   product: ProductCardData;
//   variant: ProductCardVariant;
//   /** Only used by explore variant to track selected colour swatch externally */
//   selectedColorIndex?: number;
//   onColorSelect?: (productId: string, colorIndex: number) => void;
// }

// // ─── Star helpers ─────────────────────────────────────────────────────────────

// const StarIcon: React.FC<{ filled: boolean; colorClass: string }> = ({
//   filled,
//   colorClass,
// }) => (
//   <svg
//     className={`w-4 h-4 ${filled ? colorClass + " fill-current" : "text-gray-300"}`}
//     viewBox="0 0 20 20"
//   >
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   </svg>
// );

// const renderStars = (rating: number, colorClass: string) =>
//   Array.from({ length: 5 }, (_, i) => (
//     <StarIcon key={i} filled={i < Math.floor(rating)} colorClass={colorClass} />
//   ));

// // ─── SVG Icon atoms ───────────────────────────────────────────────────────────

// const HeartIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//     />
//   </svg>
// );

// const EyeIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//     />
//   </svg>
// );

// const TrashIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//     />
//   </svg>
// );

// const CartIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
//     />
//   </svg>
// );

// // ─── Component ────────────────────────────────────────────────────────────────

// const ProductCard: React.FC<ProductCardProps> = ({
//   product,
//   variant,
//   selectedColorIndex = 0,
//   onColorSelect,
// }) => {
//   const router = useRouter();

//   // Internal fallback for colour swatch state when not controlled externally
//   const [localColorIndex, setLocalColorIndex] = useState(0);
//   const activeColorIndex =
//     onColorSelect !== undefined ? selectedColorIndex : localColorIndex;

//   const handleColorSelect = (idx: number) => {
//     if (onColorSelect) {
//       onColorSelect(product.id, idx);
//     } else {
//       setLocalColorIndex(idx);
//     }
//   };

//   const handleNavigate = () => {
//     router.push(`/product/${product.id}`);
//   };

//   const isWishlistOrJFY = variant === "wishlist" || variant === "just-for-you";

//   // Unify wrapper sizes across components to ensure grid items match perfectly
//   const containerClassName = "group relative flex flex-col w-full max-w-[270px] mx-auto select-none";

//   // Global gray card background definition matching the UI layout precisely
//   const imageAreaClassName = "relative w-full aspect-[270/250] bg-[#F5F5F5] flex items-center justify-center rounded overflow-hidden p-4 cursor-pointer";

//   // Global uniform badge classes matching styling variations
//   const discountBadgeClassName = "absolute top-3 left-3 bg-[#DB4444] text-white font-normal text-xs px-2.5 py-1 rounded-sm z-10";
//   const newBadgeClassName = "absolute top-3 left-3 bg-[#00FF66] text-black font-medium text-xs px-2.5 py-1 rounded-sm uppercase tracking-wider z-10";

//   // Core typography rules
//   const titleClassName = "text-base font-medium text-black line-clamp-1 cursor-pointer hover:underline tracking-wide";
//   const currentPriceClassName = "text-[#DB4444] font-medium text-base";
//   const originalPriceClassName = "text-gray-400 font-normal line-through text-base";

//   // Harmonized warm amber-orange star color profile matching your references
//   const starColorClass = "text-[#FFAD33]";

//   return (
//     <div className={containerClassName}>
//       {/* ── Top Display Area (Image & Actions) ── */}
//       <div className={imageAreaClassName} onClick={handleNavigate}>
//         {/* Badges */}
//         {product.discount !== undefined && (
//           <span className={discountBadgeClassName}>-{product.discount}%</span>
//         )}
//         {product.isNew && (
//           <span className={newBadgeClassName}>New</span>
//         )}

//         {/* Action Buttons Layer */}
//         {variant === "wishlist" && (
//           <button
//             className="absolute top-3 right-3 bg-white p-2 rounded-full text-black hover:bg-gray-100 transition-colors shadow-sm z-10"
//             aria-label="Remove item from wishlist"
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//           >
//             <TrashIcon />
//           </button>
//         )}

//         {variant === "just-for-you" && (
//           <button
//             className="absolute top-3 right-3 bg-white p-2 rounded-full text-black hover:bg-gray-100 transition-colors shadow-sm z-10"
//             aria-label="Quick view product details"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleNavigate();
//             }}
//           >
//             <EyeIcon />
//           </button>
//         )}

//         {!isWishlistOrJFY && (
//           <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
//             <button
//               className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm text-black"
//               onClick={(e) => {
//                 e.stopPropagation();
//               }}
//             >
//               <HeartIcon />
//             </button>
//             <button
//               className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm text-black"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleNavigate();
//               }}
//             >
//               <EyeIcon />
//             </button>
//           </div>
//         )}

//         {/* Unified Next.js Image Element Container with Matching Percentage Ratio Ratios */}
//         <div className="relative w-full h-[65%] max-w-[80%] mx-auto transition-transform duration-300 group-hover:scale-105">
//           <Image
//             src={product.image}
//             alt={product.title}
//             fill
//             sizes="(max-width: 270px) 100vw, 220px"
//             className="object-cover select-none pointer-events-none mix-blend-multiply"
//             priority={variant === "flash-sales"}
//           />
//         </div>

//         {/* Dynamic Add to Cart Trays */}
//         {variant === "wishlist" ? (
//           // Permanently visible black layout bar block matching your keyboard reference
//           <button
//             className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs font-normal py-3 flex items-center justify-center gap-2 z-10"
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//           >
//             <CartIcon />
//             Add To Cart
//           </button>
//         ) : (
//           // Dynamic slide-in / reveal action layout for remaining categories
//           <button
//             className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-center text-xs font-normal opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//           >
//             Add To Cart
//           </button>
//         )}
//       </div>

//       {/* ── Product Details Box ── */}
//       <div className="flex flex-col pt-3 pb-1 space-y-1.5">
//         <h3 className={titleClassName} onClick={handleNavigate}>
//           {product.title}
//         </h3>

//         <div className="flex items-center gap-3">
//           <span className={currentPriceClassName}>${product.currentPrice}</span>
//           {product.originalPrice !== undefined && (
//             <span className={originalPriceClassName}>${product.originalPrice}</span>
//           )}

//           {/* Inline explore variant rating metric alignment */}
//           {variant === "explore" && product.rating !== undefined && (
//             <>
//               <div className="flex items-center ml-auto">
//                 {renderStars(product.rating, starColorClass)}
//               </div>
//               <span className="text-xs font-semibold text-gray-400">
//                 ({product.reviewsCount})
//               </span>
//             </>
//           )}
//         </div>

//         {/* Standard block-level ratings for alternative variants */}
//         {variant !== "explore" && variant !== "wishlist" && product.rating !== undefined && (
//           <div className="flex items-center gap-2">
//             <div className="flex items-center">
//               {renderStars(product.rating, starColorClass)}
//             </div>
//             <span className="text-xs font-semibold text-gray-400">
//               ({product.reviewsCount})
//             </span>
//           </div>
//         )}

//         {/* Dynamic color swatches for explore selection workflows */}
//         {variant === "explore" && product.colors && product.colors.length > 0 && (
//           <div className="flex items-center gap-2 pt-0.5">
//             {product.colors.map((colorClass, idx) => (
//               <button
//                 key={idx}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleColorSelect(idx);
//                 }}
//                 className={`w-3.5 h-3.5 rounded-full ${colorClass} relative transition-transform hover:scale-110 ${activeColorIndex === idx ? "ring-2 ring-offset-2 ring-black" : ""
//                   }`}
//                 aria-label={`Select color option ${idx + 1}`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



// components/ProductCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// ─── Shared Product Type ──────────────────────────────────────────────────────

export interface ProductCardData {
  id: string;
  /** Display title / name */
  title: string;
  image: string;
  currentPrice: number;
  originalPrice?: number;
  /** Percentage number, e.g. 10 → shows "10% OFF" */
  discount?: number;
  /** If true shows a green "NEW" badge instead of a discount badge */
  isNew?: boolean;
  rating?: number;
  reviewsCount?: number;
  /** Array of hex codes, Tailwind classes, or image asset URLs */
  colors?: string[];
  /** Category text, e.g., "WOMEN SHOES" */
  category?: string;
}

// ─── Variant Config ───────────────────────────────────────────────────────────

export type ProductCardVariant =
  | "flash-sales"   // Top filled banner styling + horizontal split action footer (Layout B)
  | "best-selling"  // Light clean canvas + integrated block-level icon cart (Layout A)
  | "explore"       
  | "wishlist"      
  | "just-for-you"; 

interface ProductCardProps {
  product: ProductCardData;
  variant: ProductCardVariant;
  selectedColorIndex?: number;
  onColorSelect?: (productId: string, colorIndex: number) => void;
}

// ─── SVG Icon atoms ───────────────────────────────────────────────────────────

const HeartFilledIcon = () => (
  <svg className="w-5 h-5 text-[#FF7A00] fill-current" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 21 5.42 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const HeartOutlineIcon = () => (
  <svg className="w-5 h-5 text-[#FF7A00] fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant,
  selectedColorIndex = 0,
  onColorSelect,
}) => {
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [localColorIndex, setLocalColorIndex] = useState(0);

  const activeColorIndex = onColorSelect !== undefined ? selectedColorIndex : localColorIndex;

  const handleColorSelect = (idx: number) => {
    if (onColorSelect) {
      onColorSelect(product.id, idx);
    } else {
      setLocalColorIndex(idx);
    }
  };

  const handleNavigate = () => {
    router.push(`/product/${product.id}`);
  };

  const isDarkBannerVariant = variant === "flash-sales";

  // Safely check if color data contains explicit alternative image asset keys
  const colorItem = product.colors?.[activeColorIndex];
  const isColorAnImage = colorItem && (colorItem.startsWith("/") || colorItem.startsWith("http") || colorItem.includes("."));
  
  // Base display fallback to guarantee clean asset rendering
  const finalImgSrc = isColorAnImage && colorItem ? colorItem : (product.image || "/placeholder-shoe.png");

  return (
    <div className="w-full max-w-[340px] bg-white rounded-3xl border border-slate-100 shadow-sm p-4 flex flex-col space-y-4 select-none mx-auto">
      
      {/* ── Top Display Area (Image Showcase Canvas) ── */}
      <div 
        className={`relative w-full aspect-square rounded-2xl flex items-center justify-center overflow-hidden transition-all p-6 cursor-pointer ${
          isDarkBannerVariant ? "bg-[#1E283B]" : "bg-[#F8FAFC]"
        }`}
        onClick={handleNavigate}
      >
        {/* Discount floating badge - Fixed to top-left corner per UI images */}
        {product.discount !== undefined && (
          <span className="absolute top-0 left-0 bg-[#FF7A00] text-white font-bold text-[10px] px-3 py-1.5 rounded-br-xl uppercase tracking-wider z-10">
            {product.discount}% OFF
          </span>
        )}
        {product.isNew && product.discount === undefined && (
          <span className="absolute top-0 left-0 bg-emerald-500 text-white font-bold text-[10px] px-3 py-1.5 rounded-br-xl uppercase tracking-wider z-10">
            New
          </span>
        )}

        {/* Top Floating Heart Control (Positioned matching layout reference image) */}
        {!isDarkBannerVariant && (
          <button
            className="absolute top-4 right-4 p-1 transition-transform active:scale-95 z-10 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            aria-label="Toggle Wishlist"
          >
            {isWishlisted ? <HeartFilledIcon /> : <HeartOutlineIcon />}
          </button>
        )}

        {/* Primary Main Asset Canvas Render */}
        <div className="relative w-full h-[75%] max-w-[85%] mx-auto transition-transform duration-300 hover:scale-105">
          <Image
            src={finalImgSrc}
            alt={product.title || "Product Image"}
            fill
            sizes="(max-width: 340px) 100vw, 280px"
            className="object-contain select-none pointer-events-none"
            priority
          />
        </div>
      </div>

      {/* ── Middle Interactive Track (Product Image Gallery Layout) ── */}
      <div className="flex items-center gap-2 px-1 overflow-x-auto scrollbar-none">
        {/* If product has variant thumbnail images, loop them; otherwise, show product main asset in gallery */}
        {product.colors && product.colors.length > 0 ? (
          product.colors.slice(0, 5).map((colorValue, idx) => {
            const isAssetImage = colorValue.startsWith("/") || colorValue.startsWith("http") || colorValue.includes(".");
            
            return (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  handleColorSelect(idx);
                }}
                className={`w-12 h-12 rounded-xl border bg-white overflow-hidden relative shrink-0 transition-all flex items-center justify-center p-1 ${
                  activeColorIndex === idx 
                    ? "border-[#FF7A00] ring-1 ring-[#FF7A00]" 
                    : "border-slate-100 hover:border-slate-200"
                }`}
                aria-label={`Select item variant ${idx + 1}`}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={isAssetImage ? colorValue : product.image} 
                    alt="" 
                    fill 
                    sizes="48px" 
                    className="object-contain" 
                  />
                </div>
              </button>
            );
          })
        ) : (
          /* Default active visual fallback preview thumbnail when color options array is empty */
          <button
            className="w-12 h-12 rounded-xl border border-[#FF7A00] ring-1 ring-[#FF7A00] bg-white overflow-hidden relative shrink-0 p-1"
            aria-label="Product active view"
          >
            <div className="relative w-full h-full">
              <Image src={product.image} alt="" fill sizes="48px" className="object-contain" />
            </div>
          </button>
        )}
        
        {/* Layout B Count Overlay Marker (+2) */}
        {isDarkBannerVariant && product.colors && product.colors.length > 3 && (
          <span className="text-[11px] font-bold text-[#FF7A00] pl-1 shrink-0">
            +{product.colors.length - 3}
          </span>
        )}
      </div>

      {/* ── Text Content Layer (Labels & Identity) ── */}
      <div className="flex flex-col px-1 space-y-1 text-left">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none" onClick={handleNavigate}>
          {product.title}
        </h3>
        
        {product.category && (
          <span className="text-[10px] font-bold text-[#FF7A00] tracking-wider uppercase pt-0.5">
            {product.category}
          </span>
        )}

        {/* Pricing Layout Matrix */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-xl font-extrabold text-slate-900">${product.currentPrice}</span>
          {product.originalPrice !== undefined && (
            <span className="text-sm font-medium text-slate-400 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>

      {/* ── Bottom Controls Footer (Add To Cart Matrices) ── */}
      <div className="pt-2">
        {isDarkBannerVariant ? (
          /* Layout B: Horizontal Split Footer Actions Grid */
          <div className="flex items-center gap-2 w-full">
            <button 
              className="flex-1 bg-[#1E283B] hover:bg-[#0f172a] text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all active:scale-[0.99] uppercase tracking-wider cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              Add To Cart
            </button>
            <button
              className={`p-3.5 rounded-xl border transition-all active:scale-95 cursor-pointer flex items-center justify-center ${
                isWishlisted 
                  ? "bg-orange-50 border-orange-200" 
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              aria-label="Add to favorites"
            >
              {isWishlisted ? <HeartFilledIcon /> : <HeartOutlineIcon />}
            </button>
          </div>
        ) : (
          /* Layout A: Block-Level Primary Embedded Cart Call To Action */
          <button
            className="w-full bg-[#1E283B] hover:bg-[#0f172a] text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.99] uppercase tracking-wider cursor-pointer shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <CartIcon />
            <span>Add To Cart</span>
          </button>
        )}
      </div>

    </div>
  );
};

export default ProductCard;