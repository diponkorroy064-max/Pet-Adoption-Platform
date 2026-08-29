'use client'
import Link from 'next/link';
import React from 'react';
import EditListingModal from './EditListingModal';
import DeleteListingModal from './DeleteListingModal';
// import RequestListingModal from './RequestListingModal';
import Image from 'next/image';


const ListingCard = ({ pet }) => {
    return (
        <div className="card card-side bg-base-100 shadow-md border border-gray-200 rounded-2xl overflow-hidden flex-col sm:flex-row">
            {/* Image Container with aspect ratio control */}
            <div className="relative w-full sm:w-64 h-52 shrink-0 bg-gray-100">
                {pet?.imageURL ? (
                    <Image
                        src={pet.imageURL}
                        alt={pet?.petName || "Pet Listing Image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 256px"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-medium">
                        No Image Available
                    </div>
                )}
            </div>

            {/* Content Details */}
            <div className="card-body justify-between p-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{pet?.petName}</h2>
                    <p className="text-lg font-semibold text-orange-600 mt-1">
                        Price: ${pet?.fee}
                    </p>
                </div>

                {/* Modal & Action Buttons */}
                <div className="card-actions justify-start items-center gap-3 mt-4 flex-wrap">
                    <EditListingModal petData={pet} />
                    <Link href={`/all-pets/${pet?._id}`}>
                        <button className="btn btn-outline btn-sm rounded-lg px-4 font-medium">View</button>
                    </Link>
                    <DeleteListingModal petData={pet} />
                    {/* <RequestListingModal petData={pet} /> */}
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
