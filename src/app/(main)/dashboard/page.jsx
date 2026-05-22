import PieChartComponent from '@/component/shared/PieChartComponent';
import { auth } from '@/lib/auth';
import { getAdoptRequestByEmail, getPets, getPetsByEmail } from '@/lib/data';
import { Avatar, Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { LuLogOut } from 'react-icons/lu';
// import { Pie, PieChart } from 'recharts';



const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session);
    // console.log(session?.user);
    const user = session?.user;

    const getAllPets = await getPets();
    // console.log(getAllPets);

    const listedPets = await getPetsByEmail(user?.email);
    console.log(listedPets);
    // const listed = [...listedPets];
    // console.log(listed);

    const requestedPets = await getAdoptRequestByEmail(user?.email);
    // console.log(requestedPets);

    const totalPendings = requestedPets.filter(pet => pet.status === "Pending");
    const totalApproved = requestedPets.filter(pet => pet.status === "Approved");
    const totalRejected = requestedPets.filter(pet => pet.status === "Rejected");



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
                    <Button className='btn btn-outline btn-primary w-full'>Logout <LuLogOut/></Button>
                </div>
            </div>

            
            <div className='border-2 border-gray-300 p-8 col-span-1 md:col-span-4 space-y-4 shadow-xl'>
                <h1 className='text-2xl font-bold text-gray-900'>Statistics</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-xl font-semibold'>
                    <div className='border border-gray-300 rounded-md py-5 px-10 shadow'>
                        Total Pets : {getAllPets.length}
                    </div>

                    <div className='border border-gray-300 rounded-md py-5 px-10 shadow'>
                        Total Listed Pets : {listedPets.length}
                    </div>

                    <div className='border border-gray-300 rounded-md py-5 px-10 shadow'>
                        Total Request : {requestedPets.length}
                    </div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-xl font-semibold'>
                    <div className='border border-blue-400 rounded-md px-10 py-5 shadow text-blue-400'>
                        Pendings : {totalPendings.length}
                    </div>

                    <div className='border border-green-400 rounded-md px-10 py-5 shadow text-green-400'>
                        Approved : {totalApproved.length}
                    </div>

                    <div className='border border-yellow-400 rounded-md px-10 py-5 shadow text-yellow-400'>
                        Rejected : {totalRejected.length}
                    </div>
                </div>


                <div className=''>
                    <PieChartComponent totalPendings={totalPendings} totalApproved={totalApproved} totalRejected={totalRejected}></PieChartComponent>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

