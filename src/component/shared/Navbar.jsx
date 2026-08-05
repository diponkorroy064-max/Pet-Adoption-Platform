'use client'

import Link from "next/link";
import Navlinks from "./Navlinks";
import { authClient } from "@/lib/auth-client";
import ProfileDropdown from "./ProfileDropdown";
import { PawPrint } from "lucide-react";

const links = (
    <>
        <li><Navlinks href="/">Home</Navlinks></li>
        <li><Navlinks href="/all-pets">All Pets</Navlinks></li>
        <li><Navlinks href="/my-request">My Request</Navlinks></li>
        <li><Navlinks href="/add-pet">Add Pet</Navlinks></li>
    </>
);

const Navbar = () => {

    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    return (
        <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">

            <div className="navbar container mx-auto px-4 lg:px-8 h-20">

                {/* Left */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown">

                        <label
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content mt-4 w-64 rounded-2xl bg-white shadow-xl border border-gray-100 p-4 space-y-1 z-50"
                        >
                            {links}
                        </ul>

                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                    >

                        <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-400 transition-all duration-300">

                            <PawPrint
                                size={24}
                                className="text-orange-500 group-hover:text-white transition"
                            />

                        </div>

                        <div>

                            <h2 className="text-xl md:text-2xl font-extrabold">
                                Pet
                                <span className="text-orange-500">
                                    Haven
                                </span>
                            </h2>

                            <p className="text-xs text-gray-500 hidden sm:block">
                                Find Your Best Friend
                            </p>

                        </div>

                    </Link>

                </div>

                {/* Center */}

                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal gap-3 text-[16px] font-semibold">
                        {links}
                    </ul>

                </div>

                {/* Right */}

                <div className="navbar-end">

                    {isPending && (
                        <span className="loading loading-spinner loading-md text-orange-500"></span>
                    )}

                    {!isPending && (

                        <>
                            {
                                user ? (

                                    <div className="flex items-center gap-4">

                                        <div className="hidden md:block text-right">

                                            <h2 className="font-bold text-gray-800">
                                                {user.name}
                                            </h2>

                                            <p className="text-xs text-gray-500">
                                                Welcome Back 👋
                                            </p>

                                        </div>

                                        <ProfileDropdown />

                                    </div>

                                ) : (

                                    <Link
                                        href="/signIn"
                                        className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-300 shadow-lg hover:shadow-orange-300"
                                    >
                                        Sign In
                                    </Link>

                                )
                            }

                        </>

                    )}

                </div>

            </div>

        </div>
    );
};

export default Navbar;
