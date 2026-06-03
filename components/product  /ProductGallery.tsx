"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="w-full flex gap-4">
      {/* Thumbnails Sidebar Stack */}
      <div className="flex flex-col gap-4 w-24 sm:w-32 shrink-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`w-full aspect-4/3 bg-[#F5F5F5] rounded relative p-2 hover:opacity-90 transition-opacity border ${
              activeImage === img ? "border-gray-400" : "border-transparent"
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
          src={activeImage}
          alt="Main Focused variant product look"
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain mix-blend-multiply p-6"
          priority
        />
      </div>
    </div>
  );
}