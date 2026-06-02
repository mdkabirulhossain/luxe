import * as React from "react";

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  footer?: React.ReactNode;
}

export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ title, value, footer, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[125px] ${className}`}
        {...props}
      >
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            {title}
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1.5 tracking-tight">
            {value}
          </h3>
        </div>
        {footer && <div className="text-xs mt-2">{footer}</div>}
      </div>
    );
  }
);
MetricCard.displayName = "MetricCard";