// components/Sidebar.tsx
import React from 'react';

const categories = [
  { name: "Woman's Fashion", hasSub: true },
  { name: "Men's Fashion", hasSub: true },
  { name: "Electronics", hasSub: false },
  { name: "Home & Lifestyle", hasSub: false },
  { name: "Medicine", hasSub: false },
  { name: "Sports & Outdoor", hasSub: false },
  { name: "Baby's & Toys", hasSub: false },
  { name: "Groceries & Pets", hasSub: false },
  { name: "Health & Beauty", hasSub: false },
];

const Sidebar: React.FC = () => {
  return (
    <>
      {/* MOBILE & TABLET CATEGORY ROW: Horizontal swipeable chips */}
      <div className="w-full lg:hidden overflow-x-auto scrollbar-none py-4 border-b border-gray-100 sticky top-0 bg-white z-20">
        <div className="flex gap-3 px-1 whitespace-nowrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="text-sm bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-1"
            >
              <span>{cat.name}</span>
              {cat.hasSub && <span className="text-[10px] text-gray-500">▼</span>}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP SIDEBAR: Standard vertical menu */}
      <aside className="w-64 border-r border-gray-200 pt-10 pr-4 hidden lg:block shrink-0">
        <ul className="space-y-4">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex justify-between items-center text-base text-black cursor-pointer hover:text-gray-600 transition-colors">
              <span>{cat.name}</span>
              {cat.hasSub && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;