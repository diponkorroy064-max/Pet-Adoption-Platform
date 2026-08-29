import ListingCard from '@/component/shared/ListingCard';
import { auth } from '@/lib/auth';
import { getPetsByEmail } from '@/lib/api/data';
import { headers } from 'next/headers';

const MyListingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const ownerEmail = session?.user?.email;
    const filteredPets = (await getPetsByEmail(ownerEmail)) || [];

    const availablePets = filteredPets.filter(pet => pet?.status === 'available').length;
    const adoptedPets = filteredPets.filter(pet => pet?.status === 'adopted').length;

    return (
        <div className="px-5 container mx-auto">
            <div className="max-w-4xl mx-auto">
                {/* Stats Card */}
                <div className="card my-10 border border-gray-200 bg-base-100 shadow-sm p-6 rounded-2xl">
                    <h2 className="text-3xl text-gray-900 font-bold mb-4">My Listings</h2>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Statistics</h3>
                        <div className="text-gray-700 flex flex-wrap gap-8 font-semibold text-base">
                            <span>Total Listings: <strong className="text-gray-900">{filteredPets.length}</strong></span>
                            <span>Available: <strong className="text-emerald-600">{availablePets}</strong></span>
                            <span>Adopted: <strong className="text-blue-600">{adoptedPets}</strong></span>
                        </div>
                    </div>
                </div>

                {/* Listings Grid/List */}
                <div className="mb-10 space-y-6">
                    {filteredPets.length === 0 ? (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-gray-500 font-medium">
                            No listings available yet.
                        </div>
                    ) : (
                        filteredPets.map((pet) => (
                            <ListingCard key={pet._id} pet={pet} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyListingsPage;
