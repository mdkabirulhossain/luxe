import { DollarSign, ShoppingBag, Users, Percent, LucideIcon } from "lucide-react";

export interface MetricItem {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  iconBg: string;
}

export const metricsData: MetricItem[] = [
  {
    title: "TOTAL REVENUE",
    value: "$128,430.00",
    change: "+12.5%",
    isPositive: true,
    icon: DollarSign,
    iconBg: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "TOTAL ORDERS",
    value: "1,240",
    change: "+8.2%",
    isPositive: true,
    icon: ShoppingBag,
    iconBg: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "ACTIVE CUSTOMERS",
    value: "8,432",
    change: "-2.4%",
    isPositive: false,
    icon: Users,
    iconBg: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "CONVERSION RATE",
    value: "3.24%",
    change: "+4.1%",
    isPositive: true,
    icon: Percent,
    iconBg: "bg-indigo-50 text-indigo-600",
  },
];