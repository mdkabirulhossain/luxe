"use client";

import AdminRolesCard from "@/components/dashboard/settings/AdminRolesCard";
import GeneralInfoCard from "@/components/dashboard/settings/GeneralInfoCard";
import PaymentGatewaysCard from "@/components/dashboard/settings/PaymentGatewaysCard";
import SettingsTabs from "@/components/dashboard/settings/SettingsTabs";
import React, { useState } from "react";


export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-350 mx-auto min-h-screen flex flex-col justify-between">
      <div className="space-y-6">
        {/* Main Section Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Global Settings</h1>
          <p className="text-sm text-slate-500 mt-1">
            Configure your enterprise storefront parameters and operational workflows.
          </p>
        </div>

        {/* Form Column Layout Split */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Configuration Card Container Flow */}
          <div className="flex-1 w-full space-y-6">
            <GeneralInfoCard />
            <PaymentGatewaysCard />
            <AdminRolesCard />
          </div>
        </div>
      </div>

      {/* Bottom Save/Discard Configurations Actions Bar */}
      <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200 mt-8">
        <button 
          type="button" 
          className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 bg-white rounded-lg transition-colors cursor-pointer"
        >
          Discard Changes
        </button>
        <button 
          type="button" 
          className="px-4 py-2 text-xs font-bold text-white bg-black hover:bg-slate-900 rounded-lg transition-colors shadow-sm cursor-pointer"
        >
          Save Configuration
        </button>
      </div>
    </div>
  );
}