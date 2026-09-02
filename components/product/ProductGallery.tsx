"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  activeImage?: string;
  onSelectImage?: (image: string) => void;
}

export default function ProductGallery({ images, activeImage: externalActiveImage, onSelectImage }: ProductGalleryProps) {
  const [internalActiveImage, setInternalActiveImage] = useState(images[0]);

  const currentActiveImage = externalActiveImage || internalActiveImage;

  const handleImageClick = (img: string) => {
    setInternalActiveImage(img);
    if (onSelectImage) {
      onSelectImage(img);
    }
  };

  return (
    <div className="w-full flex gap-4">
      {/* Thumbnails Sidebar Stack */}
      <div className="flex flex-col gap-4 w-24 sm:w-32 shrink-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => handleImageClick(img)}
            className={`w-full aspect-4/3 bg-[#F5F5F5] rounded relative p-2 hover:opacity-90 transition-opacity border ${
              currentActiveImage === img ? "border-black ring-1 ring-black" : "border-transparent"
            }`}
          >
            {/* Wrapper layout for Next.js Fill Optimization */}
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`View variant ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 96px, 128px"
                className="object-contain"
                priority={idx === 0}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Main Focus Feature Preview Canvas */}
      <div className="flex-1 bg-[#F5F5F5] rounded p-6 aspect-4/3 relative">
        <Image
          src={currentActiveImage}
          alt="Main Focused variant product look"
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain mix-blend-multiply p-6 transition-all duration-300"
          priority
        />
      </div>
    </div>
  );
}