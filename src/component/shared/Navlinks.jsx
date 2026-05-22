'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Navlinks = ({ href, children }) => {
    const pathname = usePathname();
    // console.log("pathname", pathname);
    const isActive = href === pathname;

    return (
        <div>
            <Link href={href}  className={`${isActive? "text-orange-400 font-bold border-b-2 rounded-md border-orange-400":""}`}>
                {children}
            </Link>
        </div>
    );
};

export default Navlinks;


