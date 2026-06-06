import React from "react";
import { Search } from "lucide-react";

interface CategorySearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function CategorySearch({ searchQuery, setSearchQuery }: CategorySearchProps) {
  return (
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
  );
}