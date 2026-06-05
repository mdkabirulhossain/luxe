import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryHeaderProps {
  onOpenCreateModal: () => void;
}

export function CategoryHeader({ onOpenCreateModal }: CategoryHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Category Management</h2>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          Configure site-wide e-commerce categories and subcategory lists.
        </p>
      </div>
      <Button 
        size="sm" 
        onClick={onOpenCreateModal}
        className="bg-black text-white hover:bg-zinc-800 font-bold text-xs gap-1.5 self-start sm:self-auto h-9 px-4"
      >
        <Plus className="h-4 w-4" />
        New Category
      </Button>
    </div>
  );
}