"use client";

import React from "react";
import { Plus, Pencil } from "lucide-react";

interface AdminUser {
  name: string;
  email: string;
  role: "OWNER" | "EDITOR" | "SUPPORT";
  status: "Active" | "Away";
  initials: string;
}

const teamAdmins: AdminUser[] = [
  {
    name: "Alex Sterling",
    email: "alex@lumina.io",
    role: "OWNER",
    status: "Active",
    initials: "AS",
  },
  {
    name: "Marcus Kaine",
    email: "m.kaine@lumina.io",
    role: "EDITOR",
    status: "Active",
    initials: "MK",
  },
  {
    name: "Elena Low",
    email: "elena@lumina.io",
    role: "SUPPORT",
    status: "Away",
    initials: "EL",
  },
];

const roleBadges = {
  OWNER: "bg-black text-white text-[9px] px-2 py-0.5 font-bold rounded",
  EDITOR: "bg-blue-50 text-blue-700 border border-blue-100 text-[9px] px-2 py-0.5 font-bold rounded",
  SUPPORT: "bg-indigo-50 text-indigo-700 border border-indigo-100 text-[9px] px-2 py-0.5 font-bold rounded",
};

export default function AdminRolesCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Table Title Module */}
      <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100">
        <div>
          <h2 className="text-base font-bold text-slate-900">Admin Roles</h2>
          <p className="text-xs text-slate-400 mt-0.5">Manage team permissions and access levels.</p>
        </div>
        <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-black hover:bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-sm">
          <Plus className="h-3.5 w-3.5" />
          Add Member
        </button>
      </div>

      {/* Responsive Table Context */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              <th className="py-3 px-6">User</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs font-medium">
            {teamAdmins.map((user) => (
              <tr key={user.email} className="hover:bg-slate-50/40 transition-colors">
                <td className="py-3.5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-700 text-[11px] border border-slate-200">
                      {user.initials}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{user.name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-normal">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className={roleBadges[user.role]}>{user.role}</span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <span className={`h-1.5 w-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500" : "bg-amber-500"}`} />
                    {user.status}
                  </div>
                </td>
                <td className="py-3.5 px-6 text-right">
                  <button className="p-1 text-slate-400 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors cursor-pointer">
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}