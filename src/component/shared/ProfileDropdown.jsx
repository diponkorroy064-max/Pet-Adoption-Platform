'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';


const ProfileDropdown = () => {
    const { data, isPending } = authClient.useSession();
    // console.log("data from navbar", data);
    const user = data?.user;
    console.log("user in profile Dropdown", user);


    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
                <Avatar>
                    <Avatar.Image alt="John Doe" src={user?.image} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
            </div>

            <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-md border border-gray-300 z-1 w-52 p-2 shadow-md">
                <Button className="w-full rounded-md"><Link href={"/#"}>Dashboard</Link></Button>
                <Button className="w-full rounded-md" onClick={async () => await authClient.signOut()}>Sign Out</Button>
            </div>
        </div>
    );
};

export default ProfileDropdown;

