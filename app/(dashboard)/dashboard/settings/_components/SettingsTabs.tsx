"use client";

import React from "react";
import { Info, CreditCard, Truck, ShieldCheck } from "lucide-react";

interface TabItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const settingsTabs: TabItem[] = [
  { id: "general", name: "General Info", icon: Info },
  { id: "gateways", name: "Payment Gateways", icon: CreditCard },
  { id: "shipping", name: "Shipping Methods", icon: Truck },
  { id: "roles", name: "Admin Roles", icon: ShieldCheck },
];

interface SettingsTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function SettingsTabs({ activeTab, setActiveTab }: SettingsTabsProps) {
  return (
    <nav className="w-full lg:w-56 flex flex-col gap-1 shrink-0">
      {settingsTabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all text-left ${
              isActive
                ? "bg-black text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {tab.name}
          </button>
        );
      })}
    </nav>
  );
}