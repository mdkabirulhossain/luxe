"use client";

import * as React from "react";
import { OrderStatus, StatusBadge } from "../../../../../components/dashboard/orders/StatusBadge";
import { ColumnDef, DataTable } from "@/components/shared/table/DataTable";

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
  const columns: ColumnDef<OrderItem>[] = [
    {
      header: "Order ID",
      className: "text-indigo-600 font-semibold cursor-pointer hover:underline",
      render: (order) => order.id,
    },
    {
      header: "Customer",
      render: (order) => (
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 bg-indigo-50 text-indigo-600 font-bold rounded-full flex items-center justify-center text-[10px] tracking-wide">
            {order.customer.initials}
          </div>
          <span className="text-gray-900 text-sm font-semibold">{order.customer.name}</span>
        </div>
      ),
    },
    {
      header: "Date",
      className: "text-gray-400 font-normal",
      render: (order) => order.date,
    },
    {
      header: "Amount",
      className: "font-bold text-gray-900",
      render: (order) =>
        order.amount === 0
          ? "$0.00"
          : `$${order.amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    },
    {
      header: "Status",
      render: (order) => <StatusBadge status={order.status} />,
    },
    {
      header: "Actions",
      className: "text-right",
      render: (order) => (
        <button 
          onClick={() => onQuickView?.(order.id)}
          className="inline-flex items-center border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-600 shadow-sm bg-white hover:bg-gray-50 transition-all"
        >
          <span>Quick View</span>
        </button>
      ),
    },
  ];

  return (
    <DataTable
      data={orders}
      columns={columns}
      rowKey={(order) => order.id}
      containerBorderClass="border-gray-100"
      headerRowClass="bg-slate-50/70 border-b border-gray-100 text-gray-400"
      divideClass="divide-gray-50 text-gray-700"
      pagination={{
        currentStart: 1,
        currentEnd: 5,
        totalEntries: 1284,
        entryLabel: "entries",
        borderClass: "border-gray-100 bg-slate-50/30",
      }}
    />
  );
};