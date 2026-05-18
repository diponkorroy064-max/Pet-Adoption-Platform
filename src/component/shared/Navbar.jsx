import { Button } from "@heroui/react";
import Link from "next/link";
import Navlinks from "./Navlinks";


const links = <>
    <li><Navlinks href={"/"}>Home</Navlinks></li>
    <li><Navlinks href={"/all-pets"}>All Pets</Navlinks></li>
    <li><Navlinks href={"/my-request"}>My Request</Navlinks></li>
    <li><Navlinks href={"/add-pet"}>Add Pet</Navlinks></li>
</>


const Navbar = () => {
    return (
        <div className="container mx-auto navbar bg-base-100 shadow px-10">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" md:hidden hover:text-red-500 hover:font-extra-bold cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 border border-gray-300 rounded-md z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
            </div>

            <div className="navbar-end">
                <Link href={"/signIn"}>Sign In</Link>
            </div>
        </div>
    );
};

export default Navbar;

