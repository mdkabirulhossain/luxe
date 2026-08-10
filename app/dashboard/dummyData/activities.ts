import { ShoppingBag, LucideIcon } from "lucide-react";

export interface ActivityUser {
  name: string;
  avatar: string;
  fallback: string;
}

export interface ActivityItem {
  id: number;
  type: "order" | "alert" | "ticket" | "milestone";
  user?: ActivityUser;
  icon?: LucideIcon;
  action: string;
  target: string;
  time: string;
  badgeText: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
}

export const activitiesData: ActivityItem[] = [
  {
    id: 1,
    type: "order",
    user: { name: "Marcus Wright", avatar: "/user1.jpg", fallback: "MW" },
    action: "placed a new order",
    target: "Order #ORD-88291 • $1,240.00",
    time: "2 minutes ago",
    badgeText: "Processing",
    badgeVariant: "secondary",
  },
  {
    id: 2,
    type: "alert",
    icon: ShoppingBag,
    action: "Inventory Alert for 'Quantum Pro X2'",
    target: "Stock level reached threshold (5 remaining)",
    time: "45 minutes ago",
    badgeText: "Low Stock",
    badgeVariant: "destructive",
  },
  {
    id: 3,
    type: "ticket",
    user: { name: "Elena Rodriguez", avatar: "/user2.jpg", fallback: "ER" },
    action: "resolved a support ticket",
    target: "Ticket #TIC-44910: Refund Request",
    time: "1 hour ago",
    badgeText: "Resolved",
    badgeVariant: "outline",
  },
  {
    id: 4,
    type: "milestone",
    action: "New Performance Milestone achieved",
    target: "Monthly sales goal exceeded by 15%",
    time: "1 day ago",
    badgeText: "Achievement",
    badgeVariant: "default",
  },
];