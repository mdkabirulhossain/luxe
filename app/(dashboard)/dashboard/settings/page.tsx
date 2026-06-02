import React from "react";
import { User, Bell, Shield, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const settingsSections = [
    {
      title: "Profile Settings",
      description: "Manage your personal information and account details.",
      icon: User,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Notifications",
      description: "Configure how and when you receive alerts and updates.",
      icon: Bell,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Security",
      description: "Manage your password, two-factor authentication, and sessions.",
      icon: Shield,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Appearance",
      description: "Customize the look and feel of your dashboard.",
      icon: Palette,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h2>
        <p className="text-sm text-slate-500 mt-1">Manage your account preferences and configurations.</p>
      </div>

      {/* Settings Category Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.title} className="border border-slate-200/80 shadow-none rounded-xl hover:border-slate-300 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${section.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{section.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{section.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Profile Form */}
      <Card className="border border-slate-200/80 shadow-none rounded-xl">
        <CardHeader className="p-6 border-b border-slate-100">
          <CardTitle className="text-base font-bold text-slate-900">Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 tracking-wider">FIRST NAME</label>
              <Input
                type="text"
                defaultValue="Alex"
                className="bg-slate-50 border-slate-200 text-sm h-10 rounded-lg focus-visible:ring-indigo-500 focus-visible:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 tracking-wider">LAST NAME</label>
              <Input
                type="text"
                defaultValue="Sterling"
                className="bg-slate-50 border-slate-200 text-sm h-10 rounded-lg focus-visible:ring-indigo-500 focus-visible:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 tracking-wider">EMAIL ADDRESS</label>
              <Input
                type="email"
                defaultValue="alex.sterling@luxe.com"
                className="bg-slate-50 border-slate-200 text-sm h-10 rounded-lg focus-visible:ring-indigo-500 focus-visible:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 tracking-wider">ROLE</label>
              <Input
                type="text"
                defaultValue="Lead Administrator"
                disabled
                className="bg-slate-100 border-slate-200 text-sm h-10 rounded-lg text-slate-500"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="bg-black text-white hover:bg-slate-800 h-10 px-6 rounded-lg text-sm font-semibold">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
