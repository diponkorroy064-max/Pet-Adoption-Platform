'use client'

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { UserIcon, Menu } from "lucide-react";
import Image from "next/image";
import Sidebar from "@/component/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
    const { data, isPending } = authClient.useSession();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const user = data?.user;

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <span className="loading loading-spinner loading-lg text-orange-500"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-4">
                <p className="text-gray-600 font-semibold">You must be logged in to access the dashboard.</p>
                <a href="/signIn" className="px-6 py-2.5 bg-orange-500 text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition">
                    Go to Sign In
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Fixed Responsive Sidebar */}
            <Sidebar
                userRole={user.role}
                isOpen={isMobileOpen}
                onClose={() => setIsMobileOpen(false)}
            />

            {/* Main Content Area (Offset by lg:pl-64 for fixed sidebar spacing) */}
            <div className="flex-1 flex flex-col min-w-0 lg:pl-64">

                {/* Top Header */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-3">
                        {/* Mobile Drawer Trigger Toggle */}
                        <button
                            onClick={() => setIsMobileOpen(true)}
                            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition active:scale-95 cursor-pointer"
                            aria-label="Open Sidebar"
                        >
                            <Menu size={24} />
                        </button>

                        <h2 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
                            Welcome back, <span className="text-orange-500">{user.name}</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-gray-800">{user.name}</p>
                            <p className="text-xs text-gray-400 capitalize">{user.role || "User"}</p>
                        </div>

                        <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-200 bg-orange-100 flex items-center justify-center">
                            {user.image ? (
                                <Image width={40} height={40} src={user.image} alt={user.name} className="object-cover w-full h-full" />
                            ) : (
                                <UserIcon className="text-orange-500" size={20} />
                            )}
                        </div>
                    </div>
                </header>

                {/* Dashboard Dynamic Page View */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
