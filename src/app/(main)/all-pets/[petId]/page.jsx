import AdoptModal from '@/component/shared/AdoptModal';
import { getPetsById } from '@/lib/api/data';
import Image from 'next/image';
import React from 'react';
import {
    MapPin,
    Heart,
    ShieldCheck,
    Activity,
    DollarSign,
    Tag,
    Calendar,
    Sparkles
} from 'lucide-react';

const PetDetailsPage = async ({ params }) => {
    const { petId } = await params;
    const petDataById = await getPetsById(petId);

    const {
        age,
        breed,
        description,
        fee,
        gender,
        healthStatus,
        imageURL,
        location,
        petName,
        species,
        vaccination
    } = petDataById || {};

    return (
        <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">

                {/* Image Section */}
                <div className="lg:col-span-5 relative min-h-80 sm:min-h-105 bg-orange-50">
                    <Image
                        src={imageURL}
                        alt={petName || "Pet image"}
                        fill
                        priority
                        className="object-cover w-full h-full"
                    />
                    {/* Floating Species Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-xs font-bold text-gray-800 uppercase tracking-wider">
                        <Tag size={14} className="text-orange-500" />
                        <span>{species}</span>
                    </div>
                </div>

                {/* Details Section */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">

                        {/* Title & Fee */}
                        <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                                    {petName}
                                </h1>
                                <p className="text-sm font-semibold text-orange-500 mt-1 flex items-center gap-1">
                                    <Sparkles size={16} /> {breed}
                                </p>
                            </div>

                            {fee && (
                                <div className="text-right bg-orange-50 px-4 py-2 rounded-2xl border border-orange-100">
                                    <span className="text-xs text-gray-400 block font-medium">Adoption Fee</span>
                                    <span className="text-xl font-extrabold text-orange-600 flex items-center justify-end">
                                        <DollarSign size={18} className="-mr-1" />{fee}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {description}
                        </p>

                        {/* Quick Specs Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                            {/* Gender */}
                            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                    <Heart size={18} />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block">Gender</span>
                                    <span className="text-sm font-bold text-gray-800 capitalize">{gender}</span>
                                </div>
                            </div>

                            {/* Age */}
                            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block">Age</span>
                                    <span className="text-sm font-bold text-gray-800">{age || 'N/A'}</span>
                                </div>
                            </div>

                            {/* Health */}
                            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center gap-3 col-span-2 sm:col-span-1">
                                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                    <Activity size={18} />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block">Health</span>
                                    <span className="text-sm font-bold text-emerald-600 truncate block max-w-25">{healthStatus}</span>
                                </div>
                            </div>
                        </div>

                        {/* Badges / Extras */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {/* Location Badge */}
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
                                <MapPin size={14} />
                                <span>{location}</span>
                            </div>

                            {/* Vaccination Badge */}
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
                                <ShieldCheck size={14} />
                                <span>{vaccination}</span>
                            </div>
                        </div>

                    </div>

                    {/* Modal Call to Action Button Container */}
                    <div className="pt-4 border-t border-gray-100">
                        <AdoptModal petDataById={petDataById} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PetDetailsPage;
