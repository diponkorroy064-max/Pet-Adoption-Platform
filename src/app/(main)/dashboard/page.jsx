import { auth } from '@/lib/auth';
import { getPets } from '@/lib/data';
import { Avatar, Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { LuLogOut } from 'react-icons/lu';


const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session);
    // console.log(session?.user);
    const user = session?.user;

    const getAllPets = await getPets();
    console.log(getAllPets);


    return (
        <div className='container mx-auto py-10 px-8 grid grid-cols-1 md:grid-cols-5 gap-5 '>
            <div className='border-2 border-gray-300 p-8 col-span-1 space-y-4 shadow-xl'>
                <div className='space-y-2'>
                    <Avatar className='w-30 h-30 mx-auto border border-gray-400'>
                        <Avatar.Image alt="John Doe" src={user?.image}/>
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    <div className='text-center'>
                        <h2 className='text-xl text-gray-900 font-bold'>{user?.name}</h2>
                        <h4 className='text-[13px]'>{user?.email}</h4>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <Link className='btn btn-outline btn-secondary w-full' href={'/my-request'}>My Request</Link>
                    <Link className='btn btn-outline btn-secondary w-full' href={'/add-pet'}>Add Pets</Link>
                    <Link className='btn btn-outline btn-secondary w-full' href={'/myListings'}>My Listings</Link>
                    <Button className='btn btn-outline w-full'>Logout <LuLogOut/></Button>
                </div>
            </div>

            
            <div className='border-2 border-gray-300 p-8 col-span-4 space-y-4 shadow-xl'>
                <h1>My Requested Pets</h1>

                <div className='border border-gray-300 rounded-md'>
                    Total Pets : {getAllPets.length}
                </div>

                <div className='border border-gray-300 rounded-md'>
                    Total Request
                </div>

                <div className='border border-gray-300 rounded-md'>
                    Total Pendings
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

