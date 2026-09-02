"use client";

import React, { useState, useEffect } from "react";
import { X, Plus, Trash2, Palette, Package, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductItem, StockStatus, ProductColorOption } from "./ProductTable";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: ProductItem) => void;
  initialProduct?: ProductItem | null;
}

const PRESET_COLORS = [
  { name: "Black", colorClass: "bg-black", hex: "#000000" },
  { name: "Red", colorClass: "bg-red-500", hex: "#ef4444" },
  { name: "Blue", colorClass: "bg-blue-600", hex: "#2563eb" },
  { name: "White", colorClass: "bg-white border border-gray-300", hex: "#ffffff" },
  { name: "Gray", colorClass: "bg-gray-400", hex: "#9ca3af" },
  { name: "Purple", colorClass: "bg-purple-600", hex: "#9333ea" },
  { name: "Green", colorClass: "bg-emerald-600", hex: "#059669" },
];

export function AddProductModal({ isOpen, onClose, onSave, initialProduct }: AddProductModalProps) {
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [price, setPrice] = useState<number | "">(199.99);
  const [stockStatus, setStockStatus] = useState<StockStatus>("In Stock");
  const [imageSrc, setImageSrc] = useState("");
  const [description, setDescription] = useState("");
  
  // Color variants state
  const [colorVariants, setColorVariants] = useState<ProductColorOption[]>([]);
  const [newColorName, setNewColorName] = useState("");
  const [newColorHex, setNewColorHex] = useState("#000000");
  const [newColorImage, setNewColorImage] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setName(initialProduct.name);
      setSku(initialProduct.sku);
      setCategory(initialProduct.category);
      setPrice(initialProduct.price);
      setStockStatus(initialProduct.stockStatus);
      setImageSrc(initialProduct.imageSrc);
      setDescription(initialProduct.description || "");
      setColorVariants(initialProduct.colors || []);
    } else {
      setName("");
      setSku(`PRD-${Math.floor(1000 + Math.random() * 9000)}`);
      setCategory("Electronics");
      setPrice(199.99);
      setStockStatus("In Stock");
      setImageSrc("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400");
      setDescription("High quality premium luxury product designed for ultimate performance and durability.");
      setColorVariants([
        { name: "Black Stealth", colorClass: "bg-black", hex: "#000000", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400" },
        { name: "Cyber Red", colorClass: "bg-red-500", hex: "#ef4444", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400" }
      ]);
    }
  }, [initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleAddColorVariant = () => {
    if (!newColorName.trim()) return;
    const colorClass = `bg-[${newColorHex}]`;
    const newVariant: ProductColorOption = {
      name: newColorName,
      colorClass: colorClass,
      hex: newColorHex,
      image: newColorImage || imageSrc,
    };
    setColorVariants([...colorVariants, newVariant]);
    setNewColorName("");
    setNewColorHex("#000000");
    setNewColorImage("");
  };

  const handleRemoveColorVariant = (index: number) => {
    setColorVariants(colorVariants.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct: ProductItem = {
      id: initialProduct?.id || `prod-${Date.now()}`,
      name,
      sku,
      category,
      price: Number(price),
      stockStatus,
      imageSrc: imageSrc || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300",
      colors: colorVariants,
      description,
    };

    onSave(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-black rounded-lg text-white">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {initialProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <p className="text-xs text-slate-500 font-medium">Configure product details, stock, and color variants</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          
          {/* Row 1: Name & SKU */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Product Title *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aura Edition Headset"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">SKU Code</label>
              <input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="e.g. WTC-004-WHT"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Row 2: Category, Price, Stock Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Footwear">Footwear</option>
                <option value="Apparel">Apparel</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Price ($) *</label>
              <input
                type="number"
                step="0.01"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="299.00"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Stock Status</label>
              <select
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value as StockStatus)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>

          {/* Row 3: Image URL & Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
              <ImageIcon className="h-3.5 w-3.5 text-slate-500" />
              Main Product Image URL
            </label>
            <input
              type="url"
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a brief overview of the product features..."
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          {/* Color Variants Builder */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Palette className="h-4 w-4 text-purple-600" />
                Color Variants & Corresponding Images
              </label>
              <span className="text-[11px] text-slate-400 font-medium">{colorVariants.length} color(s) added</span>
            </div>

            {/* Added Colors Chips */}
            {colorVariants.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {colorVariants.map((variant, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs text-xs"
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0" 
                      style={{ backgroundColor: variant.hex || "#000" }} 
                    />
                    <span className="font-bold text-slate-800">{variant.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveColorVariant(idx)}
                      className="text-slate-400 hover:text-rose-600 transition-colors ml-1"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Quick Add Presets */}
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[11px] font-semibold text-slate-400">Quick presets:</span>
              {PRESET_COLORS.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => {
                    if (!colorVariants.some((c) => c.name === preset.name)) {
                      setColorVariants([
                        ...colorVariants,
                        { name: preset.name, colorClass: preset.colorClass, hex: preset.hex, image: imageSrc }
                      ]);
                    }
                  }}
                  title={`Add ${preset.name}`}
                  className="w-5 h-5 rounded-full border border-slate-300 hover:scale-110 transition-transform"
                  style={{ backgroundColor: preset.hex }}
                />
              ))}
            </div>

            {/* Add Custom Color Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2 items-end">
              <div className="sm:col-span-4">
                <input
                  type="text"
                  placeholder="Color Name (e.g. Midnight Black)"
                  value={newColorName}
                  onChange={(e) => setNewColorName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div className="sm:col-span-2 flex items-center gap-2">
                <input
                  type="color"
                  value={newColorHex}
                  onChange={(e) => setNewColorHex(e.target.value)}
                  className="w-full h-8 rounded border border-slate-200 cursor-pointer p-0.5 bg-white"
                />
              </div>
              <div className="sm:col-span-4">
                <input
                  type="url"
                  placeholder="Variant Image URL (Optional)"
                  value={newColorImage}
                  onChange={(e) => setNewColorImage(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div className="sm:col-span-2">
                <Button
                  type="button"
                  onClick={handleAddColorVariant}
                  size="sm"
                  className="w-full h-8 text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
                >
                  <Plus className="h-3 w-3 mr-1" /> Add
                </Button>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              className="text-xs font-semibold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              className="bg-black text-white hover:bg-zinc-800 text-xs font-bold px-5"
            >
              {initialProduct ? "Save Changes" : "Create Product"}
            </Button>
          </div>

        </form>

      </div>
    </div>
  );
}
