import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OrderStatus, StatusBadge } from "./status-badge";


export interface OrderItem {
  id: string;
  customer: {
    name: string;
    initials: string;
  };
  date: string;
  amount: number;
  status: OrderStatus;
}

export interface OrderTableProps {
  orders: OrderItem[];
  onQuickView?: (orderId: string) => void;
}

export const OrderTable: React.FC<OrderTableProps> = ({ orders, onQuickView }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <th className="py-4 px-6 font-bold">Order ID</th>
              <th className="py-4 px-6 font-bold">Customer</th>
              <th className="py-4 px-6 font-bold">Date</th>
              <th className="py-4 px-6 font-bold">Amount</th>
              <th className="py-4 px-6 font-bold">Status</th>
              <th className="py-4 px-6 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm font-medium text-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/30 transition-colors">
                {/* Order ID Link */}
                <td className="py-4 px-6 text-indigo-600 font-semibold cursor-pointer hover:underline">
                  {order.id}
                </td>
                
                {/* Customer Info with Badge */}
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 bg-indigo-50 text-indigo-600 font-bold rounded-full flex items-center justify-center text-[10px] tracking-wide">
                      {order.customer.initials}
                    </div>
                    <span className="text-gray-900 text-sm font-semibold">{order.customer.name}</span>
                  </div>
                </td>
                
                {/* Date */}
                <td className="py-4 px-6 text-gray-400 font-normal">
                  {order.date}
                </td>
                
                {/* Format Amount Currency */}
                <td className="py-4 px-6 font-bold text-gray-900">
                  {order.amount === 0 
                    ? "$0.00" 
                    : `$${order.amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  }
                </td>
                
                {/* Status Component */}
                <td className="py-4 px-6">
                  <StatusBadge status={order.status} />
                </td>
                
                {/* Actions Trigger */}
                <td className="py-4 px-6 text-right">
                  <button 
                    onClick={() => onQuickView?.(order.id)}
                    className="inline-flex items-center border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-600 shadow-sm bg-white hover:bg-gray-50 transition-all"
                  >
                    <span>Quick View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Module Row */}
      <div className="px-6 py-4 border-t border-gray-100 bg-slate-50/30 flex items-center justify-between text-xs font-semibold text-gray-400">
        <div>
          Showing <span className="text-gray-600">1 to 5</span> of <span className="text-gray-600">1,284</span> entries
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-1.5 rounded-md border border-gray-200 bg-white text-gray-400 hover:text-gray-600 transition shadow-sm">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button className="px-3 py-1.5 rounded-md bg-black text-white font-bold">1</button>
          <button className="px-3 py-1.5 rounded-md border border-transparent text-gray-600 hover:border-gray-200 hover:bg-white transition">2</button>
          <button className="px-3 py-1.5 rounded-md border border-transparent text-gray-600 hover:border-gray-200 hover:bg-white transition">3</button>
          <button className="p-1.5 rounded-md border border-gray-200 bg-white text-gray-400 hover:text-gray-600 transition shadow-sm">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};