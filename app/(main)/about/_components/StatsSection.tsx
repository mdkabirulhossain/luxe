import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  isActive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, isActive }) => {
  return (
    <div className={`border rounded p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ${
      isActive 
        ? 'bg-[#DB4444] border-[#DB4444] text-white shadow-lg' 
        : 'bg-white border-gray-200 text-black hover:border-gray-400'
    }`}>
      {/* Outer circular badge frame wrapper */}
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${
        isActive ? 'bg-white/30 text-white' : 'bg-gray-200 text-black group-hover:bg-black group-hover:text-white'
      }`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isActive ? 'bg-white text-black' : 'bg-black text-white'
        }`}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-3xl font-bold tracking-wide mb-1">{value}</h3>
      <p className={`text-xs font-normal ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
        {label}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <StatCard 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        }
        value="10.5k"
        label="Sellers active our site"
      />

      <StatCard 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-20c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
          </svg>
        }
        value="33k"
        label="Mopnthly Product Sale"
        isActive={true}
      />

      <StatCard 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        }
        value="45.5k"
        label="Customer active in our site"
      />

      <StatCard 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V7a4 4 0 018 0v4c0 .651-.13 1.271-.364 1.834m-2.183 3.93A12.09 12.09 0 0112 21c-2.071 0-4.004-.523-5.694-1.448m11.388-1.448A10.977 10.977 0 0118 12c0-1.282-.219-2.513-.623-3.664M7 11c0-1.282.219-2.513.623-3.664" />
          </svg>
        }
        value="25k"
        label="Anual gross sale in our site"
      />

    </div>
  );
};

export default StatsSection;