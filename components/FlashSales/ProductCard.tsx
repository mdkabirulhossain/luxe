// components/FlashSales/ProductCard.tsx
import React from 'react';

export interface Product {
  id: string;
  title: string;
  image: string;
  discount: number;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Helper to render star rating SVGs
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="group relative flex flex-col w-full min-w-[270px] max-w-[270px]">
      {/* Top Banner (Image & Actions) */}
      <div className="relative w-full h-[250px] bg-gray-100 flex items-center justify-center rounded-sm overflow-hidden">
        {/* Discount Tag */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-sm font-medium">
          -{product.discount}%
        </span>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button className="bg-white p-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="bg-white p-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>

        {/* Main Product Image */}
        <img src={product.image} alt={product.title} className="object-contain max-h-[180px] w-auto mix-blend-multiply" />

        {/* Dynamic Add to Cart overlay bar */}
        <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2.5 text-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>

      {/* Details Box */}
      <div className="flex flex-col pt-4 pb-2 space-y-1.5">
        <h3 className="text-base font-medium text-black line-clamp-1">{product.title}</h3>
        <div className="flex items-center gap-3 font-medium text-sm">
          <span className="text-red-500">${product.currentPrice}</span>
          <span className="text-gray-400 line-through">${product.originalPrice}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <span className="text-xs font-semibold text-gray-500">({product.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;