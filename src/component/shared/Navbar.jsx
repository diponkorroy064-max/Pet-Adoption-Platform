'use client'

import React, { useState } from "react";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { authClient } from "@/lib/auth-client";
import { PawPrint, LayoutDashboard, UserIcon, LogOut, Menu, X, UserPlus, LogIn } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const closeMenu = () => setIsMenuOpen(false);

    const links = (
        <>
            <li onClick={closeMenu}><Navlinks href="/">Home</Navlinks></li>
            <li onClick={closeMenu}><Navlinks href="/all-pets">All Pets</Navlinks></li>
            <li onClick={closeMenu}><Navlinks href="/about">About Us</Navlinks></li>
            <li onClick={closeMenu}><Navlinks href="/services">Services</Navlinks></li>
            <li onClick={closeMenu}><Navlinks href="/contact">Contact</Navlinks></li>
        </>
    );

    const getDashboardPath = (role) => {
        switch (role?.toLowerCase()) {
            case "admin":
                return "/dashboard/admin";
            case "owner":
                return "/dashboard/owner";
            case "user":
            default:
                return "/dashboard/user";
        }
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-100 shadow-xs">
            <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">

                {/* Left: Brand Logo */}
                <div className="w-auto">
                    <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                            <PawPrint size={22} className="text-orange-500 group-hover:text-white transition" />
                        </div>

                        <div>
                            <h1 className="text-xl md:text-2xl font-black tracking-tight text-gray-900">
                                Pet<span className="text-orange-500">Haven</span>
                            </h1>
                        </div>
                    </Link>
                </div>

                {/* Center: Main Navigation (Desktop) */}
                <div className="hidden lg:flex justify-center">
                    <ul className="flex items-center gap-6 text-base font-medium text-gray-700">
                        {links}
                    </ul>
                </div>

                {/* Right: Desktop Controls & Mobile Toggle Button */}
                <div className="w-auto flex items-center gap-2 sm:gap-3">

                    {isPending ? (
                        <span className="loading loading-spinner loading-sm text-orange-500"></span>
                    ) : (
                        <>
                            {/* Desktop Actions */}
                            <div className="hidden lg:flex items-center gap-3">
                                {user ? (
                                    <>
                                        <Link
                                            href={getDashboardPath(user.role)}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold text-sm transition-all duration-300"
                                        >
                                            <LayoutDashboard size={16} />
                                            <span>Dashboard</span>
                                        </Link>

                                        {/* Avatar */}
                                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-orange-200 bg-orange-100 flex items-center justify-center">
                                            {user.image ? (
                                                <Image width={36} height={36} src={user.image} alt={user.name || "User Avatar"} className="object-cover w-full h-full" />
                                            ) : (
                                                <UserIcon className="text-orange-500" size={18} />
                                            )}
                                        </div>

                                        {/* User Meta */}
                                        <div className="flex flex-col min-w-0">
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 max-w-20 sm:max-w-30 truncate leading-snug">
                                                {user?.name}
                                            </p>

                                            <div className="mt-0.5 flex items-center">
                                                <span
                                                    className={`inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-semibold tracking-wide capitalize ${user?.role === 'owner'
                                                            ? 'bg-amber-100 text-amber-800 border border-amber-200/60'
                                                            : 'bg-gray-100 text-gray-600 border border-gray-200/60'
                                                        }`}
                                                >
                                                    {user?.role === 'owner' ? 'Owner' : user?.role || 'User'}
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={async () => await authClient.signOut()}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 font-semibold text-sm transition-all duration-300 active:scale-95 cursor-pointer border border-red-100 shadow-xs"
                                            title="Sign Out"
                                        >
                                            <LogOut size={16} />
                                            <span>Sign Out</span>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/signIn" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-orange-500/20 hover:-translate-y-0.5 active:scale-95">
                                            <LogIn size={16} />
                                            <span>Sign In</span>
                                        </Link>

                                        <Link href="/signUp" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
                                            <UserPlus size={16} />
                                            <span>Sign Up</span>
                                        </Link>
                                    </>
                                )}
                            </div>

                            {/* Mobile User Profile Header Info (Left of Hamburger) */}
                            {user && (
                                <div className="flex lg:hidden items-center gap-2 mr-1">
                                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-orange-200 bg-orange-100 flex items-center justify-center shrink-0">
                                        {user.image ? (
                                            <Image width={36} height={36} src={user.image} alt={user.name || "User Avatar"} className="object-cover w-full h-full" />
                                        ) : (
                                            <UserIcon className="text-orange-500" size={16} />
                                        )}
                                    </div>

                                    <div className="flex flex-col min-w-10">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 max-w-24 truncate">
                                            {user?.name}
                                        </p>

                                        <div className="mt-0.5 flex items-center">
                                            <span className={`inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-semibold tracking-wide capitalize ${user?.role === 'owner'
                                                    ? 'bg-amber-100 text-amber-800 border border-amber-200/60'
                                                    : 'bg-gray-100 text-gray-600 border border-gray-200/60'
                                                }`}>
                                                {user?.role === 'owner' ? 'Owner' : user?.role || 'User'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Mobile Hamburger/Close Toggle Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                                aria-label="Toggle Navigation Menu"
                            >
                                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Controlled Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-20 left-0 right-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col justify-between space-y-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <ul className="flex flex-col gap-4 text-base font-medium text-gray-800">
                        {links}
                    </ul>

                    <hr className="border-gray-100" />

                    <div className="flex flex-col gap-3 pt-1">
                        {user ? (
                            <>
                                <Link
                                    href={getDashboardPath(user.role)}
                                    onClick={closeMenu}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-orange-500/20 bg-orange-50 text-orange-600 font-semibold text-sm hover:bg-orange-500 hover:text-white transition"
                                >
                                    <LayoutDashboard size={18} />
                                    <span>Dashboard</span>
                                </Link>

                                <button
                                    onClick={async () => {
                                        closeMenu();
                                        await authClient.signOut();
                                    }}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 font-semibold text-sm transition cursor-pointer"
                                >
                                    <LogOut size={18} />
                                    <span>Sign Out</span>
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="/signIn"
                                    onClick={closeMenu}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition"
                                >
                                    <LogIn size={18} />
                                    <span>Sign In</span>
                                </Link>

                                <Link
                                    href="/signUp"
                                    onClick={closeMenu}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold text-sm transition">
                                    <UserPlus size={18} />
                                    <span>Sign Up</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
