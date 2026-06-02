import * as React from "react";

export type OrderStatus = "DELIVERED" | "PROCESSING" | "SHIPPED" | "CANCELLED";

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: OrderStatus;
}

const statusVariants: Record<OrderStatus, string> = {
  DELIVERED: "bg-emerald-50 text-emerald-600 border-emerald-100",
  PROCESSING: "bg-blue-50 text-blue-500 border-blue-100",
  SHIPPED: "bg-indigo-50 text-indigo-600 border-indigo-100",
  CANCELLED: "bg-rose-50 text-rose-500 border-rose-100",
};

export const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ status, className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wide uppercase ${statusVariants[status]} ${className}`}
        {...props}
      >
        {status}
      </span>
    );
  }
);
StatusBadge.displayName = "StatusBadge";