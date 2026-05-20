'use client'
import Link from 'next/link';
import React from 'react';
import EditListingModal from './EditListingModal';
import DeleteListingModal from './DeleteListingModal';
import RequestListingModal from './RequestListingModal';
import Image from 'next/image';
import { Button } from '@heroui/react';


const ListingCard = ({ pet }) => {
    const petData = pet;
    console.log(petData);

    return (
        <div className="card card-side bg-base-100 shadow-xl border-2 border-gray-300">

            <div>
                <Image className='w-100 h-50 rounded-l-xl' src={petData?.imageURL} alt="listing Image" width={100} height={100}/>
            </div>

            <div className="card-body">
                <h2 className="text-4xl font-bold text-gray-900">{petData?.petName}</h2>

                <p className='text-2xl font-semibold'>Price: $ {petData?.fee}</p>

                <div className="card-actions justify-start gap-6">
                    <EditListingModal petData={petData}></EditListingModal>
                    <Link href={`/all-pets/${petData._id}`}><Button className="w-25 rounded-md">View</Button></Link>
                    <DeleteListingModal petData={petData}></DeleteListingModal>
                    <RequestListingModal></RequestListingModal>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;

