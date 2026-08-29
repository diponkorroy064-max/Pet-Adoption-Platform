'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, PlusCircle, PawPrint, Users, CheckSquare, Settings, LogOut, LayoutDashboard, X} from "lucide-react";
import { authClient } from "@/lib/auth-client";


// Navigation links configured by role---
const roleNavigation = {
    user: [
        { label: "Dashboard", href: "/dashboard/user", icon: LayoutDashboard },
        { label: "My Adoption Requests", href: "/dashboard/user/my-requests", icon: Heart },
        { label: "Saved Pets", href: "/dashboard/user/favorites", icon: PawPrint },
        { label: "Profile Settings", href: "/dashboard/user/profile", icon: Settings },
    ],
    owner: [
        { label: "Dashboard", href: "/dashboard/owner", icon: LayoutDashboard },
        { label: "Add New Pet", href: "/dashboard/owner/add-pet", icon: PlusCircle },
        { label: "My Listed Pets", href: "/dashboard/owner/my-pets", icon: PawPrint },
        { label: "Adoption Applications", href: "/dashboard/owner/applications", icon: CheckSquare },
        { label: "Profile Settings", href: "/dashboard/owner/profile", icon: Settings },
    ],
    admin: [
        { label: "Admin Overview", href: "/dashboard/admin", icon: LayoutDashboard },
        { label: "Manage All Pets", href: "/dashboard/admin/all-pets", icon: PawPrint },
        { label: "Manage Users", href: "/dashboard/admin/users", icon: Users },
        { label: "Pending Approvals", href: "/dashboard/admin/approvals", icon: CheckSquare },
        { label: "System Settings", href: "/dashboard/admin/settings", icon: Settings },
    ],
};


const Sidebar = ({ userRole = "user", isOpen = false, onClose = () => { } }) => {
    const pathname = usePathname();
    const normalizedRole = userRole?.toLowerCase();
    const navItems = roleNavigation[normalizedRole] || roleNavigation.user;

    return (
        <>
            {/* Dark Backdrop Overlay (Mobile Only) */}
            <div onClick={onClose} className={`fixed inset-0 bg-gray-900/50 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}/>

            {/* Sidebar Element (Fixed position on desktop & sliding drawer on mobile) */}
            <aside className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-4 shadow-xl lg:shadow-xs transition-transform duration-300 ease-in-out h-screen ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
                <div className="space-y-6">
                    {/* Role Badge & Mobile Close Header */}
                    <div className="px-3 py-2 border-b border-gray-100 pb-4 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                Portal Navigation
                            </p>
                            <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold capitalize bg-orange-100 text-orange-600">
                                {normalizedRole} Account
                            </div>
                        </div>

                        {/* Mobile Close Button */}
                        <button onClick={onClose} className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition cursor-pointer">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Dynamic Nav Links */}
                    <nav className="space-y-1 flex flex-col gap-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link key={item.href} href={item.href} onClick={onClose}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                                            ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                                            : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                                        }`}>
                                    <Icon size={18} />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom Common Actions */}
                <div className="space-y-1 border-t border-gray-100 pt-4">
                    <Link href="/" onClick={onClose} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition">
                        <Home size={18} />
                        <span>Back to Home</span>
                    </Link>

                    <button
                        onClick={async () => {
                            onClose();
                            await authClient.signOut();
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition cursor-pointer">
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
