import React from "react";
import { Button } from "@/components/ui/button";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalMode: "create" | "edit";
  catName: string;
  setCatName: (value: string) => void;
  subcatsText: string;
  setSubcatsText: (value: string) => void;
  catStatus: "Active" | "Hidden";
  setCatStatus: (value: "Active" | "Hidden") => void;
  onSaveCategory: (e: React.FormEvent) => void;
}

export function CategoryModal({
  isOpen,
  onClose,
  modalMode,
  catName,
  setCatName,
  subcatsText,
  setSubcatsText,
  catStatus,
  setCatStatus,
  onSaveCategory,
}: CategoryModalProps) {
  if (!isOpen) return null;

  return (
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
        
        <form onSubmit={onSaveCategory} className="space-y-3.5">
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
              onClick={onClose}
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
  );
}