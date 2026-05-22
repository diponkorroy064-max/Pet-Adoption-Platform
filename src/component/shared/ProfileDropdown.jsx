'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { LuLogOut } from 'react-icons/lu';


const ProfileDropdown = () => {
    const { data, isPending } = authClient.useSession();
    // console.log("data from navbar", data);
    const user = data?.user;
    // console.log("user in profile Dropdown", user);


    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="cursor-pointer">
                <Avatar>
                    <Avatar.Image className='hover:border-2 rounded-full border-red-400' alt="User" src={user?.image} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
            </div>

            <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-md border border-gray-300 z-40 w-60 p-2 shadow-md">
                <Link className="w-full rounded-md btn btn-outline btn-secondary" href={"/dashboard"}>Dashboard</Link>
                <p className="w-full rounded-md btn btn-outline btn-secondary" onClick={async () => await authClient.signOut()}>Sign Out  <LuLogOut/></p>
            </div>
        </div>
    );
};

export default ProfileDropdown;

