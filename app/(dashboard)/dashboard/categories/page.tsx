"use client";

import React, { useState, useMemo } from "react";
import { CategoryHeader } from "@/app/(dashboard)/dashboard/categories/_components/CategoryHeader";
import { CategoryMetrics } from "@/app/(dashboard)/dashboard/categories/_components/CategoryMetrics";
import { CategoryModal } from "@/app/(dashboard)/dashboard/categories/_components/CategoryModal";
import { CategorySearch } from "@/app/(dashboard)/dashboard/categories/_components/CategorySearch";
import { CategoryTable } from "@/app/(dashboard)/dashboard/categories/_components/CategoryTable";
import { CategoryItem } from "@/types/category/category.types";
import { toast } from "sonner"; // Directly imported functional global toaster

const INITIAL_CATEGORIES: CategoryItem[] = [
  { id: "cat-1", name: "Woman's Fashion", subcategories: ["Dresses", "Tops & Tees", "Jackets & Coats", "Handbags"], productCount: 42, status: "Active" },
  { id: "cat-2", name: "Men's Fashion", subcategories: ["Shirts & Polos", "Pants & Jeans", "Jackets & Coats", "Watches"], productCount: 38, status: "Active" },
  { id: "cat-3", name: "Electronics", subcategories: ["Smartphones", "Laptops", "Accessories", "Gaming"], productCount: 56, status: "Active" },
  { id: "cat-4", name: "Home & Lifestyle", subcategories: ["Furniture", "Home Decor", "Kitchenware", "Bedding"], productCount: 29, status: "Active" },
  { id: "cat-5", name: "Medicine", subcategories: ["First Aid", "Supplements", "Prescriptions"], productCount: 14, status: "Active" },
  { id: "cat-6", name: "Sports & Outdoor", subcategories: ["Fitness Equipment", "Outdoor Gear", "Sportswear"], productCount: 22, status: "Active" },
  { id: "cat-7", name: "Baby's & Toys", subcategories: ["Toys", "Baby Clothing", "Strollers", "Feeding Essentials"], productCount: 19, status: "Active" },
  { id: "cat-8", name: "Groceries & Pets", subcategories: ["Snacks", "Pet Food", "Beverages", "Household Staples"], productCount: 47, status: "Active" },
  { id: "cat-9", name: "Health & Beauty", subcategories: ["Skincare", "Haircare", "Makeup", "Fragrances"], productCount: 31, status: "Active" },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form states
  const [catName, setCatName] = useState("");
  const [subcatsText, setSubcatsText] = useState("");
  const [catStatus, setCatStatus] = useState<"Active" | "Hidden">("Active");

  // Search filtering
  const filteredCategories = useMemo(() => {
    return categories.filter((cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subcategories.some((sub) => sub.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [categories, searchQuery]);

  // Analytics derivations
  const totalCategoriesCount = categories.length;
  const totalSubcategoriesCount = useMemo(() => {
    return categories.reduce((sum, cat) => sum + cat.subcategories.length, 0);
  }, [categories]);
  const activeCount = categories.filter((c) => c.status === "Active").length;

  // Open modal for Create Category
  const handleOpenCreateModal = () => {
    setModalMode("create");
    setEditingId(null);
    setCatName("");
    setSubcatsText("");
    setCatStatus("Active");
    setIsModalOpen(true);
  };

  // Open modal for Edit Category
  const handleOpenEditModal = (cat: CategoryItem) => {
    setModalMode("edit");
    setEditingId(cat.id);
    setCatName(cat.name);
    setSubcatsText(cat.subcategories.join(", "));
    setCatStatus(cat.status);
    setIsModalOpen(true);
  };

  // Handle Create or Update Category Action
  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (catName.trim() === "") return;

    const subcategories = subcatsText
      .split(",")
      .map((sub) => sub.trim())
      .filter((sub) => sub !== "");

    if (modalMode === "create") {
      const newCat: CategoryItem = {
        id: `cat-${Date.now()}`,
        name: catName.trim(),
        subcategories,
        productCount: 0,
        status: catStatus,
      };
      setCategories((prev) => [newCat, ...prev]);
      
      toast.success("Success", {
        description: `Category "${newCat.name}" created successfully!`,
      });
    } else if (modalMode === "edit" && editingId) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingId
            ? { ...cat, name: catName.trim(), subcategories, status: catStatus }
            : cat
        )
      );

      toast.info("Updated", {
        description: `Category "${catName.trim()}" updated successfully!`,
      });
    }

    setIsModalOpen(false);
  };

  // Delete Category Action
  const handleDeleteCategory = (id: string, name: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
    
    toast.error("Deleted", {
      description: `Category "${name}" deleted successfully!`,
    });
  };

  return (
    <div className="space-y-6">
      <CategoryHeader onOpenCreateModal={handleOpenCreateModal} />
      
      <CategoryMetrics 
        totalCategoriesCount={totalCategoriesCount}
        totalSubcategoriesCount={totalSubcategoriesCount}
        activeCount={activeCount}
      />

      <CategorySearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <CategoryTable
        filteredCategories={filteredCategories}
        onOpenEditModal={handleOpenEditModal}
        onDeleteCategory={handleDeleteCategory}
      />

      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalMode={modalMode}
        catName={catName}
        setCatName={setCatName}
        subcatsText={subcatsText}
        setSubcatsText={setSubcatsText}
        catStatus={catStatus}
        setCatStatus={setCatStatus}
        onSaveCategory={handleSaveCategory}
      />
    </div>
  );
}