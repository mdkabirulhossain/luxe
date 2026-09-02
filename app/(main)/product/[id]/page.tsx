// app/(main)/product/[id]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfoPanel from "@/components/product/ProductInfoPanel";
import RelatedItemsList from "@/components/product/RelatedItemsList";
import { dummyProducts } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  // Retrieve the matching dynamic product or fallback to the first gamepad
  const product = dummyProducts.find((p) => p.id === id) || dummyProducts[0];

  const defaultColor = product.colorVariants?.[0]?.colorClass || product.colors?.[0] || "";
  const defaultImage = product.colorVariants?.[0]?.image || product.images[0];

  const [selectedColor, setSelectedColor] = React.useState(defaultColor);
  const [activeImage, setActiveImage] = React.useState(defaultImage);

  React.useEffect(() => {
    const initialColor = product.colorVariants?.[0]?.colorClass || product.colors?.[0] || "";
    const initialImage = product.colorVariants?.[0]?.image || product.images[0];
    setSelectedColor(initialColor);
    setActiveImage(initialImage);
  }, [product]);

  const handleColorChange = (colorClass: string, variantImage?: string) => {
    setSelectedColor(colorClass);
    if (variantImage) {
      setActiveImage(variantImage);
    }
  };

  const handleSelectImage = (img: string) => {
    setActiveImage(img);
  };

  return (
    <main className="w-full min-h-screen bg-white text-black px-4 md:px-12 lg:px-24 py-10 max-w-360 mx-auto">
      {/* Breadcrumbs Navigation Header */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-12 select-none">
        <span className="hover:text-black transition-colors cursor-pointer">Account</span>
        <span>/</span>
        <span className="hover:text-black transition-colors cursor-pointer">Products</span>
        <span>/</span>
        <span className="text-black font-semibold truncate">{product.title}</span>
      </nav>

      {/* Split Interactive Form Canvas Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Side: Images Viewport columns */}
        <div className="lg:col-span-7">
          <ProductGallery 
            key={product.id + "-gallery"} 
            images={product.images} 
            activeImage={activeImage}
            onSelectImage={handleSelectImage}
          />
        </div>

        {/* Right Side: Options Setup Info Columns */}
        <div className="lg:col-span-5">
          <ProductInfoPanel 
            key={product.id + "-info"} 
            product={product} 
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
          />
        </div>
      </div>

      {/* Lower Secondary Linked Related Modules */}
      <RelatedItemsList />
    </main>
  );
}