'use client'
import Link from 'next/link';
import React from 'react';
import EditListingModal from './EditListingModal';
import DeleteListingModal from './DeleteListingModal';


const ListingCard = ({ pet }) => {
    // console.log(pet);

    return (
        <div className="card card-side bg-base-100 shadow-xl border-2 border-gray-300">

            <figure>
                <img className='w-100 h-50'
                    src={pet?.imageURL}
                    alt="Movie" />
            </figure>

            <div className="card-body">
                <h2 className="text-4xl font-bold text-gray-900">{pet?.petName}</h2>

                <p className='text-2xl font-semibold'>Price: $ {pet?.fee}</p>

                <div className="card-actions justify-start gap-6">
                    <EditListingModal></EditListingModal>
                    <Link className="btn btn-outline btn-secondary w-25" href={"/#"}>View</Link>
                    <DeleteListingModal></DeleteListingModal>
                    <Link className="btn btn-outline btn-primary w-25" href={"/#"}>Request</Link>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;

