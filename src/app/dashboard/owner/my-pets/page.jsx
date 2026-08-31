import ListingCard from '@/component/dashboard/owner/my-pet/ListingCard';
import { auth } from '@/lib/auth';
import { getPetsByEmail } from '@/lib/api/data';
import { headers } from 'next/headers';
import Link from 'next/link';
import { Plus, PawPrint, CheckCircle2, HeartHandshake } from 'lucide-react';


const MyListingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const ownerEmail = session?.user?.email;
    const filteredPets = (await getPetsByEmail(ownerEmail)) || [];
    const availablePets = filteredPets.filter(pet => pet?.status === 'available').length;
    const adoptedPets = filteredPets.filter(pet => pet?.status === 'adopted').length;


    return (
        <div className="min-h-screen py-8 px-4 sm:px-6">
            {/* Soft Background Accent */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-rose-50),transparent)] opacity-60 pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100/80 rounded-full border border-rose-200 mb-2">
                            Dashboard
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                            My Listings
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            Manage your pet listings and track adoption status.
                        </p>
                    </div>

                    <Link
                        href="/addPet"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-semibold text-sm rounded-xl shadow-md shadow-rose-200 transition-all duration-150 shrink-0"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add New Pet</span>
                    </Link>
                </div>

                {/* Analytics & Stats Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* Total Listings */}
                    <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl shadow-rose-100/40 rounded-2xl p-5 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Total Listings
                            </p>
                            <h3 className="text-2xl font-black text-gray-900 mt-1">
                                {filteredPets.length}
                            </h3>
                        </div>
                        <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
                            <PawPrint className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Available */}
                    <div className="bg-white/90 backdrop-blur-md border border-emerald-100 shadow-xl shadow-emerald-100/30 rounded-2xl p-5 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                                Available
                            </p>
                            <h3 className="text-2xl font-black text-emerald-600 mt-1">
                                {availablePets}
                            </h3>
                        </div>
                        <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Adopted */}
                    <div className="bg-white/90 backdrop-blur-md border border-blue-100 shadow-xl shadow-blue-100/30 rounded-2xl p-5 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                                Adopted
                            </p>
                            <h3 className="text-2xl font-black text-blue-600 mt-1">
                                {adoptedPets}
                            </h3>
                        </div>
                        <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <HeartHandshake className="w-5 h-5" />
                        </div>
                    </div>

                </div>

                {/* Listings Collection */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                        <span className="h-2 w-2 rounded-full bg-rose-500" />
                        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800">
                            Pet Listings
                        </h2>
                    </div>

                    {filteredPets.length === 0 ? (
                        /* Empty State Container */
                        <div className="text-center py-16 px-4 bg-white/60 backdrop-blur-sm rounded-3xl border border-dashed border-gray-200 shadow-sm space-y-4">
                            <div className="h-16 w-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500">
                                <PawPrint className="w-8 h-8 opacity-70" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-bold text-gray-800">No listings found</h3>
                                <p className="text-xs sm:text-sm text-gray-500 max-w-xs mx-auto">
                                    You haven`t posted any pets for adoption yet. Start by creating your first listing!
                                </p>
                            </div>
                            <Link
                                href="/addPet"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all duration-150"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Create Listing</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {filteredPets.map((pet) => (
                                <ListingCard key={pet._id} pet={pet} />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default MyListingsPage;
