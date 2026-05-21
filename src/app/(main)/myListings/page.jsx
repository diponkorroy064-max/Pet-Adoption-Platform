import ListingCard from '@/component/shared/ListingCard';
import { auth } from '@/lib/auth';
import { getPetsByEmail } from '@/lib/data';
import { headers } from 'next/headers';
// import Link from 'next/link';


const MyListingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session);
    // console.log(session?.user);
    const ownerEmail = session?.user?.email;
    // console.log("owner in mylisting page", ownerEmail);

    const filteredPets = await getPetsByEmail(ownerEmail);
    console.log("filtered pets", filteredPets);


    return (
        <div className='px-5 container mx-auto'>

            <div className="max-w-250 mx-auto">
                <div className="card my-10 border-2 border-gray-300 bg-base-100 shadow-xl p-5">

                    <h2 className="text-3xl text-gray-900 font-bold">My Listings</h2>

                    <div>
                        <h3 className='text-xl font-extrabold text-gray-700'>Statistics:-</h3>

                        <div className='text-gray-500 flex gap-8 font-bold'>
                            <span>Total Listings {filteredPets.length}</span>
                            <span>Available {filteredPets.length}</span>
                            <span>Adopted </span>
                        </div>
                    </div>
                </div>

                <div className='mb-10 space-y-10'>
                    {
                        filteredPets.length === 0 ? (<div className='text-center py-20 text-red-400 font-semibold'>There is no list of pet yet</div>) :
                            filteredPets?.map(pet => <ListingCard key={pet._id} pet={pet}></ListingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyListingsPage;


