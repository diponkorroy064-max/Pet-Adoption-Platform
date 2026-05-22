'use client'
import Link from "next/link";
import Navlinks from "./Navlinks";
import { authClient } from "@/lib/auth-client";
import ProfileDropdown from "./ProfileDropdown";
import logo from '@/assets/logo.png'
import Image from "next/image";
import { PawPrint } from "lucide-react";


const links = <>
    <li><Navlinks href={"/"}>Home</Navlinks></li>
    <li><Navlinks href={"/all-pets"}>All Pets</Navlinks></li>
    <li><Navlinks href={"/my-request"}>My Request</Navlinks></li>
    <li><Navlinks href={"/add-pet"}>Add Pet</Navlinks></li>
</>


const Navbar = () => {
    const { data, isPending } = authClient.useSession();
    // console.log("data from navbar", data);
    const user = data?.user;
    // console.log("user in  navbar", user);


    return (
        <div className="container mx-auto navbar bg-base-100 shadow px-10">

            <div className="navbar-start gap-3">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" md:hidden hover:text-red-500 hover:font-extra-bold cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 border border-gray-300 rounded-md z-30 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <Link className="text-xl font-extrabold" href={"/"}>Pet Haven</Link>
                    <Link className="text-xl hidden md:flex" href={"/"}><PawPrint className="text-orange-400 font-extrabold" size={32} /></Link>
               </div>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {isPending && <h2>Loading...</h2>}
                <div>
                    {
                        user ? (<div className="flex justify-center items-center gap-3">
                            <h2 className="text-xl font-bold text-orange-400 hidden md:flex">{user?.name}</h2>
                            <ProfileDropdown></ProfileDropdown>
                        </div>) : (<Link className="btn bg-orange-400 text-white" href={"/signIn"}>Sign In</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

