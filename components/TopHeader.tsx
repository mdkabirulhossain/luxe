// // components/TopHeader.tsx
// import React from 'react';

// const TopHeader: React.FC = () => {
//   return (
//     <div className="w-full bg-black text-white py-3 px-4 md:px-8 text-xs sm:text-sm">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
        
//         {/* Spacer item hidden on mobile to push center item perfectly to center on desktop */}
//         <div className="hidden lg:block w-20" />

//         {/* Promotion Message Content Frame */}
//         <div className="flex flex-wrap items-center justify-center gap-x-2 text-center leading-normal">
//           <span className="font-light text-gray-200">
//             Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
//           </span>
//           <a 
//             href="#" 
//             className="underline font-semibold text-white hover:text-gray-300 transition-colors whitespace-nowrap"
//           >
//             ShopNow
//           </a>
//         </div>

//         {/* Language Switch Selector */}
//         <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors shrink-0 select-none">
//           <span>English</span>
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TopHeader;

// components/TopHeader.tsx
import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        
        {/* Left Spacer: Hidden on mobile to center content perfectly on desktop */}
        <div className="hidden lg:block w-20" />

        {/* Promotion Message Content Frame */}
        <div className="flex-1 min-w-0 flex items-center justify-center gap-2 text-[10px] sm:text-xs md:text-sm font-normal text-center tracking-wide">
          <div className="truncate whitespace-nowrap text-gray-200">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <a 
            href="#" 
            className="underline font-semibold text-white hover:text-gray-300 transition-colors whitespace-nowrap shrink-0 ml-1"
          >
            ShopNow
          </a>
        </div>

        {/* Language Switch Selector */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors shrink-0 select-none text-[11px] sm:text-xs md:text-sm">
          <span>English</span>
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;