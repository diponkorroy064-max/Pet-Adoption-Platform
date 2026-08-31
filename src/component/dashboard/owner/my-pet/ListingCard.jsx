'use client';
import Link from 'next/link';
import React from 'react';
import EditListingModal from '../../../shared/EditListingModal';
import DeleteListingModal from '../../../shared/DeleteListingModal';
// import RequestListingModal from './RequestListingModal';
import Image from 'next/image';
import { Eye, MapPin, Tag } from 'lucide-react';


const ListingCard = ({ pet }) => {
    const isAvailable = pet?.status?.toLowerCase() === 'available' || !pet?.status;

    return (
        <div className="group relative bg-white/90 backdrop-blur-md border border-rose-100/80 hover:border-rose-200 shadow-sm hover:shadow-xl hover:shadow-rose-100/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col sm:flex-row">
            {/* Image Container */}
            <div className="relative w-full sm:w-60 h-52 sm:h-auto shrink-0 bg-gray-50 overflow-hidden">
                {pet?.imageURL ? (
                    <Image
                        src={pet.imageURL}
                        alt={pet?.petName || 'Pet Listing Image'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 640px) 100vw, 240px"
                    />
                ) : (
                    <div className="w-full h-full min-h-50 flex items-center justify-center text-gray-400 text-xs font-medium">
                        No Image Available
                    </div>
                )}

                {/* Status Badge Over Image */}
                <div className="absolute top-3 left-3 z-10">
                    <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm border backdrop-blur-md ${isAvailable
                            ? 'bg-emerald-500/90 text-white border-emerald-400'
                            : 'bg-blue-500/90 text-white border-blue-400'
                            }`}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        {pet?.status || 'Available'}
                    </span>
                </div>
            </div>

            {/* Content Details */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                    {/* Top Info Bar: Species/Breed Badge + Price */}
                    <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-lg border border-rose-100">
                            <Tag className="w-3 h-3" />
                            {pet?.species || 'Pet'} {pet?.breed ? `• ${pet.breed}` : ''}
                        </span>
                        <span className="text-lg font-black text-rose-600">
                            ${pet?.fee ?? '0'}
                        </span>
                    </div>

                    {/* Title & Location */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-200">
                            {pet?.petName || 'Unnamed Pet'}
                        </h3>
                        {pet?.location && (
                            <p className="flex items-center gap-1 text-xs font-medium text-gray-500 mt-1">
                                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                                <span>{pet.location}</span>
                            </p>
                        )}
                    </div>
                </div>

                {/* Modal & Action Buttons */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                        <EditListingModal petData={pet} />
                        <DeleteListingModal petData={pet} />
                        {/* <RequestListingModal petData={pet} /> */}
                    </div>

                    <Link href={`/all-pets/${pet?._id}`}>
                        <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 hover:bg-rose-600 active:scale-95 text-white font-medium text-xs rounded-xl shadow-sm transition-all duration-200">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
