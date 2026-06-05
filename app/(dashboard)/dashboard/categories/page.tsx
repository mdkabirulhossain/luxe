"use client";

import React, { useState, useMemo } from "react";
import { Plus, Search, Edit2, Trash2, FolderTree, Tags, Layers, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryItem {
  id: string;
  name: string;
  subcategories: string[];
  productCount: number;
  status: "Active" | "Hidden";
}

const INITIAL_CATEGORIES: CategoryItem[] = [
  {
    id: "cat-1",
    name: "Woman's Fashion",
    subcategories: ["Dresses", "Tops & Tees", "Jackets & Coats", "Handbags"],
    productCount: 42,
    status: "Active",
  },
  {
    id: "cat-2",
    name: "Men's Fashion",
    subcategories: ["Shirts & Polos", "Pants & Jeans", "Jackets & Coats", "Watches"],
    productCount: 38,
    status: "Active",
  },
  {
    id: "cat-3",
    name: "Electronics",
    subcategories: ["Smartphones", "Laptops", "Accessories", "Gaming"],
    productCount: 56,
    status: "Active",
  },
  {
    id: "cat-4",
    name: "Home & Lifestyle",
    subcategories: ["Furniture", "Home Decor", "Kitchenware", "Bedding"],
    productCount: 29,
    status: "Active",
  },
  {
    id: "cat-5",
    name: "Medicine",
    subcategories: ["First Aid", "Supplements", "Prescriptions"],
    productCount: 14,
    status: "Active",
  },
  {
    id: "cat-6",
    name: "Sports & Outdoor",
    subcategories: ["Fitness Equipment", "Outdoor Gear", "Sportswear"],
    productCount: 22,
    status: "Active",
  },
  {
    id: "cat-7",
    name: "Baby's & Toys",
    subcategories: ["Toys", "Baby Clothing", "Strollers", "Feeding Essentials"],
    productCount: 19,
    status: "Active",
  },
  {
    id: "cat-8",
    name: "Groceries & Pets",
    subcategories: ["Snacks", "Pet Food", "Beverages", "Household Staples"],
    productCount: 47,
    status: "Active",
  },
  {
    id: "cat-9",
    name: "Health & Beauty",
    subcategories: ["Skincare", "Haircare", "Makeup", "Fragrances"],
    productCount: 31,
    status: "Active",
  },
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
  
  // Toast notifications
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);

  const showToast = (message: string, type: "success" | "info" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

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

    // Parse subcategories from comma-separated input
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
      showToast(`Category "${newCat.name}" created successfully!`);
    } else if (modalMode === "edit" && editingId) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingId
            ? { ...cat, name: catName.trim(), subcategories, status: catStatus }
            : cat
        )
      );
      showToast(`Category "${catName.trim()}" updated successfully!`);
    }

    setIsModalOpen(false);
  };

  // Delete Category Action
  const handleDeleteCategory = (id: string, name: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
    showToast(`Category "${name}" deleted successfully!`, "info");
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Page Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Category Management</h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Configure site-wide e-commerce categories and subcategory lists.
          </p>
        </div>
        <Button 
          size="sm" 
          onClick={handleOpenCreateModal}
          className="bg-black text-white hover:bg-zinc-800 font-bold text-xs gap-1.5 self-start sm:self-auto h-9 px-4"
        >
          <Plus className="h-4 w-4" />
          New Category
        </Button>
      </div>

      {/* 2. Top Metric Analytics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Total Categories card */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-indigo-50/50 rounded-lg text-indigo-600 border border-indigo-50 shrink-0">
            <FolderTree className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Categories</p>
            <h3 className="text-xl font-bold text-slate-900 mt-1">{totalCategoriesCount}</h3>
          </div>
        </div>

        {/* Total Subcategories card */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-emerald-50/50 rounded-lg text-emerald-600 border border-emerald-50 shrink-0">
            <Tags className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Subcategories</p>
            <h3 className="text-xl font-bold text-slate-900 mt-1">{totalSubcategoriesCount}</h3>
          </div>
        </div>

        {/* Active categories count */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-amber-50/50 rounded-lg text-amber-600 border border-amber-50 shrink-0">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Status</p>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              {activeCount} / {totalCategoriesCount} Active
            </h3>
          </div>
        </div>
      </div>

      {/* 3. Search and Actions Control Rack */}
      <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center">
        <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 w-full max-w-md focus-within:ring-1 focus-within:ring-black focus-within:bg-white transition-all">
          <Search className="h-4 w-4 text-slate-400 shrink-0 mr-2" />
          <input
            type="text"
            placeholder="Search categories or subcategories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs w-full outline-none text-slate-700 placeholder-slate-400"
          />
        </div>
      </div>

      {/* 4. Table Layout List */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="py-4 px-6 font-bold w-1/4">Category Name</th>
                <th className="py-4 px-6 font-bold w-5/12">Subcategories</th>
                <th className="py-4 px-6 font-bold text-center w-32">Products</th>
                <th className="py-4 px-6 font-bold text-center w-28">Status</th>
                <th className="py-4 px-6 font-bold text-right w-28">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm font-medium text-slate-700">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50/30 transition-colors">
                    
                    {/* Category Title */}
                    <td className="py-4 px-6">
                      <span className="text-slate-900 font-bold text-sm leading-normal">{cat.name}</span>
                    </td>

                    {/* Subcategories tags list chips */}
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1.5 max-w-md py-1">
                        {cat.subcategories.length > 0 ? (
                          cat.subcategories.map((sub, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="inline-flex items-center text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200/40"
                            >
                              {sub}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-slate-450 italic font-normal">No subcategories</span>
                        )}
                      </div>
                    </td>

                    {/* Associated Products Count */}
                    <td className="py-4 px-6 text-center font-semibold text-slate-800">
                      {cat.productCount}
                    </td>

                    {/* Status badge pill */}
                    <td className="py-4 px-6 text-center">
                      <span 
                        className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold border tracking-wide uppercase ${
                          cat.status === "Active" 
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                            : "bg-amber-50 text-amber-600 border-amber-100"
                        }`}
                      >
                        {cat.status}
                      </span>
                    </td>

                    {/* Row Controls */}
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-3 text-slate-400">
                        <button
                          onClick={() => handleOpenEditModal(cat)}
                          className="hover:text-slate-900 transition-colors p-1 cursor-pointer"
                          aria-label="Edit category"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(cat.id, cat.name)}
                          className="hover:text-rose-600 transition-colors p-1 cursor-pointer"
                          aria-label="Delete category"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400 text-xs italic font-normal">
                    No categories found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Modal: Create / Edit Category Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white border border-slate-100 rounded-xl max-w-sm w-full p-6 shadow-2xl flex flex-col space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {modalMode === "create" ? "Add New Category" : "Edit Category"}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {modalMode === "create" 
                  ? "Define a new category to group your products." 
                  : "Update the configuration details of this category."}
              </p>
            </div>
            
            <form onSubmit={handleSaveCategory} className="space-y-3.5">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="cat-name" className="text-xs font-semibold text-slate-600">Category Name *</label>
                <input 
                  type="text" 
                  id="cat-name"
                  required
                  placeholder="e.g. Health & Beauty"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-black w-full"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="cat-sub" className="text-xs font-semibold text-slate-600">Subcategories (Optional)</label>
                <input 
                  type="text" 
                  id="cat-sub"
                  placeholder="e.g. Skincare, Makeup, Haircare"
                  value={subcatsText}
                  onChange={(e) => setSubcatsText(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-black w-full"
                />
                <span className="text-[10px] text-slate-400 font-medium leading-normal">Separate multiple subcategories with commas.</span>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="cat-status" className="text-xs font-semibold text-slate-600">Status</label>
                <select
                  id="cat-status"
                  value={catStatus}
                  onChange={(e) => setCatStatus(e.target.value as "Active" | "Hidden")}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-black w-full cursor-pointer"
                >
                  <option value="Active">Active</option>
                  <option value="Hidden">Hidden</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button 
                  type="button"
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs font-bold text-slate-500 hover:bg-slate-50 cursor-pointer h-9 px-3.5"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  size="sm"
                  className="bg-black text-white hover:bg-zinc-800 font-bold text-xs h-9 px-3.5"
                >
                  {modalMode === "create" ? "Create Category" : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating success toast alerts */}
      {toast && (
        <div className="fixed top-6 right-6 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-lg shadow-xl z-50 flex items-center gap-2 animate-fadeIn">
          {toast.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
