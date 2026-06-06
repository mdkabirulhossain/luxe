"use client";

import React, { useState } from "react";
import { CreditCard, Wallet } from "lucide-react";

interface GatewayItem {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

export default function PaymentGatewaysCard() {
  const [gateways, setGateways] = useState<GatewayItem[]>([
    {
      id: "stripe",
      name: "Stripe",
      description: "Accept credit cards and local payment methods globally.",
      enabled: true,
      icon: CreditCard,
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Enable express checkout and PayPal Credit for customers.",
      enabled: false,
      icon: Wallet,
    },
  ]);

  const toggleGateway = (id: string) => {
    setGateways((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">Payment Gateways</h2>
        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border border-blue-100 uppercase">
          Encrypted Connections
        </span>
      </div>

      <div className="space-y-3">
        {gateways.map((gateway) => {
          const Icon = gateway.icon;
          return (
            <div
              key={gateway.id}
              className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-center text-indigo-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{gateway.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{gateway.description}</p>
                </div>
              </div>

              {/* Toggle Switch Component */}
              <button
                type="button"
                onClick={() => toggleGateway(gateway.id)}
                className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out cursor-pointer ${
                  gateway.enabled ? "bg-emerald-500" : "bg-slate-200"
                }`}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                    gateway.enabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}