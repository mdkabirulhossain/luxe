"use client";

import React, { useState } from "react";
import { Heart, Truck, RotateCcw, Star } from "lucide-react";

export default function ProductInfoPanel() {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(2);

  return (
    <div className="w-full flex flex-col">
      {/* Header and Reviews */}
      <h1 className="text-2xl font-semibold text-black tracking-wide">
        Havic HV G-92 Gamepad
      </h1>
      
      <div className="flex items-center gap-2 mt-2 text-sm">
        <div className="flex items-center text-amber-500">
          {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          <Star className="w-4 h-4 text-gray-300" />
        </div>
        <span className="text-gray-400 font-medium">(150 Reviews)</span>
        <span className="text-gray-300">|</span>
        <span className="text-emerald-500 font-medium">In Stock</span>
      </div>

      <div className="text-2xl font-medium text-black mt-4">$192.00</div>

      <p className="text-xs text-gray-700 leading-relaxed mt-4 border-b border-gray-200 pb-6">
        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy 
        bubble free install & mess free removal Pressure sensitive.
      </p>

      {/* Colour Swatch Options */}
      <div className="flex items-center gap-4 mt-6">
        <span className="text-sm font-medium text-black">Colours:</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedColor("blue")}
            className={`w-5 h-5 rounded-full bg-[#A0BCE0] ring-offset-2 ring-1 transition-all ${
              selectedColor === "blue" ? "ring-black" : "ring-transparent"
            }`}
          />
          <button
            onClick={() => setSelectedColor("red")}
            className={`w-5 h-5 rounded-full bg-[#E07A7A] ring-offset-2 ring-1 transition-all ${
              selectedColor === "red" ? "ring-black" : "ring-transparent"
            }`}
          />
        </div>
      </div>

      {/* Size Layout Options */}
      <div className="flex items-center gap-4 mt-6">
        <span className="text-sm font-medium text-black w-14">Size:</span>
        <div className="flex items-center gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 rounded text-xs font-semibold border transition-colors ${
                selectedSize === size
                  ? "bg-[#DB4444] text-white border-[#DB4444]"
                  : "bg-white text-black border-gray-300 hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Buy Actions Row counter trigger */}
      <div className="flex items-center gap-4 mt-8">
        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-11">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 text-xl font-medium hover:bg-gray-100 h-full border-r border-gray-300"
          >
            -
          </button>
          <div className="w-12 text-center font-semibold text-sm">{quantity}</div>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 bg-[#DB4444] text-white text-xl font-medium h-full hover:bg-red-600"
          >
            +
          </button>
        </div>

        <button className="flex-1 bg-[#DB4444] hover:bg-red-600 text-white text-sm font-medium h-11 rounded transition-colors">
          Buy Now
        </button>

        <button className="p-2.5 border border-gray-300 rounded hover:border-black transition-colors h-11 w-11 flex items-center justify-center text-black">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Delivery / Shipping Feature Cards */}
      <div className="border border-gray-300 rounded-md mt-10 divide-y divide-gray-300">
        <div className="flex items-start gap-4 p-4">
          <Truck className="w-6 h-6 text-black shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-black">Free Delivery</h4>
            <button className="text-[11px] font-medium text-black underline mt-1 block">
              Enter your postal code for Delivery Availability
            </button>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4">
          <RotateCcw className="w-6 h-6 text-black shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-black">Return Delivery</h4>
            <p className="text-[11px] font-medium text-black mt-1">
              Free 30 Days Delivery Returns. <button className="underline">Details</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}