"use client";

import React from "react";
import { Plus, Pencil } from "lucide-react";
import { ColumnDef, DataTable } from "@/components/shared/table/DataTable";

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
  const columns: ColumnDef<AdminUser>[] = [
    {
      header: "User",
      className: "px-6", // Retains precise header padding boundaries
      render: (user) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-700 text-[11px] border border-slate-200">
            {user.initials}
          </div>
          <div>
            <p className="font-bold text-slate-900">{user.name}</p>
            <p className="text-[11px] text-slate-400 mt-0.5 font-normal">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Role",
      className: "px-4",
      render: (user) => <span className={roleBadges[user.role]}>{user.role}</span>,
    },
    {
      header: "Status",
      className: "px-4",
      render: (user) => (
        <div className="flex items-center gap-1.5 text-slate-700">
          <span className={`h-1.5 w-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500" : "bg-amber-500"}`} />
          {user.status}
        </div>
      ),
    },
    {
      header: "Actions",
      className: "px-6 text-right",
      render: () => (
        <button className="p-1 text-slate-400 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors cursor-pointer">
          <Pencil className="h-3.5 w-3.5" />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Table Title Module Explicitly Maintained */}
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

      {/* Shared generic datatable inheriting structural setups override */}
      <DataTable
        data={teamAdmins}
        columns={columns}
        rowKey={(user) => user.email}
        containerBorderClass="border-transparent rounded-none border-0 shadow-none" // Prevents nested layout double-borders
        headerRowClass="bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold tracking-wider text-slate-400 uppercase"
        bodyRowClass="hover:bg-slate-50/40"
        divideClass="divide-slate-100 text-xs font-medium" // Applies the specific text-xs setting of the original
      />
    </div>
  );
}