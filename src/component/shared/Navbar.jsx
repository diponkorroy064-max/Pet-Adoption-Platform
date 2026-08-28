'use client'

import Link from "next/link";
import Navlinks from "./Navlinks";
import { authClient } from "@/lib/auth-client";
import { PawPrint, LayoutDashboard, UserIcon, LogOut, Menu, UserPlus, LogIn } from "lucide-react";
import Image from "next/image";

const links = (
    <>
        <li><Navlinks href="/">Home</Navlinks></li>
        <li><Navlinks href="/all-pets">All Pets</Navlinks></li>
        <li><Navlinks href="/about">About Us</Navlinks></li>
        <li><Navlinks href="/services">Services</Navlinks></li>
        <li><Navlinks href="/contact">Contact</Navlinks></li>
    </>
);

const Navbar = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

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
            <div className="navbar container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">

                {/* Left: Brand Logo */}
                <div className="navbar-start w-auto">
                    <Link href="/" className="flex items-center gap-3 group">
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
                <div className="navbar-center hidden lg:flex justify-center">
                    <ul className="menu menu-horizontal gap-1 text-base font-medium text-gray-700">
                        {links}
                    </ul>
                </div>

                {/* Right: Desktop Profile Controls & Mobile Toggle */}
                <div className="navbar-end w-auto flex items-center gap-2 sm:gap-3">

                    {isPending ? (
                        <span className="loading loading-spinner loading-sm text-orange-500"></span>
                    ) : (
                        <>
                            {/* Desktop Actions */}
                            <div className="hidden lg:flex items-center gap-3">
                                {user ? (
                                    <>
                                        <Link href={getDashboardPath(user.role)} className="flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold text-sm transition-all duration-300">
                                            <LayoutDashboard size={16} />
                                            <span>Dashboard</span>
                                        </Link>

                                        {/* Desktop User Avatar */}
                                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-orange-200 bg-orange-100 flex items-center justify-center">
                                            {user.image ? (
                                                <Image width={36} height={36} src={user.image} alt={user.name || "User Avatar"} className="object-cover w-full h-full" />
                                            ) : (
                                                <UserIcon className="text-orange-500" size={18} />
                                            )}
                                        </div>

                                        <button
                                            onClick={async () => await authClient.signOut()}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 font-semibold text-sm transition-all duration-300 active:scale-95 cursor-pointer border border-red-100 shadow-xs"
                                            title="Sign Out"
                                        >
                                            <LogOut size={16} className="transition-transform group-hover:-translate-x-0.5" />
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

                            {/* Mobile User Profile (Visible on Left of Hamburger Menu) */}
                            {user && (
                                <div className="flex lg:hidden items-center gap-2 mr-1">
                                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-orange-200 bg-orange-100 flex items-center justify-center shrink-0">
                                        {user.image ? (
                                            <Image
                                                width={36}
                                                height={36}
                                                src={user.image}
                                                alt={user.name || "User Avatar"}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <UserIcon className="text-orange-500" size={16} />
                                        )}
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold text-gray-800 max-w-20 sm:max-w-30 truncate">
                                        {user.name}
                                    </span>
                                </div>
                            )}

                            {/* Mobile Hamburger Dropdown Container */}
                            <div className="dropdown dropdown-end lg:hidden static">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <Menu size={24} className="text-gray-700" />
                                </label>

                                {/* Full-Width Dropdown Overlay Content */}
                                <div tabIndex={0} className="dropdown-content fixed top-20 left-0 right-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col justify-between space-y-6 z-50">
                                    {/* Mobile Nav Links */}
                                    <ul className="menu menu-vertical gap-2 text-base font-medium text-gray-800 p-0">
                                        {links}
                                    </ul>

                                    <hr className="border-gray-100" />

                                    {/* Mobile Action Controls */}
                                    <div className="flex flex-col gap-3 pt-1">
                                        {user ? (
                                            <>
                                                <Link href={getDashboardPath(user.role)} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-orange-500/20 bg-orange-50 text-orange-600 font-semibold text-sm hover:bg-orange-500 hover:text-white transition">
                                                    <LayoutDashboard size={18} />
                                                    <span>Dashboard</span>
                                                </Link>

                                                <button onClick={async () => await authClient.signOut()} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 font-semibold text-sm transition">
                                                    <LogOut size={18} />
                                                    <span>Sign Out</span>
                                                </button>
                                            </>
                                        ) : (
                                            <div className="flex flex-col gap-2">
                                                <Link href="/signIn" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition">
                                                    <LogIn size={18} />
                                                    <span>Sign In</span>
                                                </Link>

                                                <Link href="/signUp" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold text-sm transition">
                                                    <UserPlus size={18} />
                                                    <span>Sign Up</span>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Navbar;
