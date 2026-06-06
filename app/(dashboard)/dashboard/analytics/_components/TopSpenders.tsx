"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TOP_SPENDERS = [
  { name: "Marcus Holloway", orders: 32, plan: "Pro Plan", ltv: "$12,450", initials: "MH", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
  { name: "Sarah Jenkins", orders: 28, plan: "Pro Plan", ltv: "$9,820", initials: "SJ", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
  { name: "David Chen", orders: 21, plan: "Enterprise", ltv: "$8,410", initials: "DC", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
  { name: "Elena Rodriguez", orders: 19, plan: "Pro Plan", ltv: "$7,200", initials: "ER", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" },
];

export function TopSpenders() {
  return (
    <Card className="bg-white border-slate-100 shadow-sm h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4 p-6 border-b border-slate-50">
        <CardTitle className="text-sm font-bold text-slate-950">Top Spenders</CardTitle>
        <button className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer">View All</button>
      </CardHeader>
      <CardContent className="p-6 divide-y divide-slate-50">
        {TOP_SPENDERS.map((spender, idx) => (
          <div key={idx} className={`flex items-center justify-between ${idx === 0 ? "pb-4" : idx === TOP_SPENDERS.length - 1 ? "pt-4" : "py-4"}`}>
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border border-slate-100">
                <AvatarImage src={spender.avatar} alt={spender.name} />
                <AvatarFallback className="text-xs font-bold text-indigo-600 bg-indigo-50">{spender.initials}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900 leading-tight">{spender.name}</p>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                  {spender.orders} Orders • <span className="text-slate-500 font-semibold">{spender.plan}</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-indigo-600">{spender.ltv}</span>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">LTV</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}