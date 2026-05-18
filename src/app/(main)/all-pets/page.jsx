import PetsCard from '@/component/shared/PetsCard';
import { getPets } from '@/lib/data';
import React from 'react';



const AllPetsPage = async() => {
    const petsInfo = await getPets();
    // console.log(petsInfo);


    return (
        <div className='container mx-auto px-10 py-12'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    petsInfo.map(pet=> <PetsCard key={pet._id} pet={pet}></PetsCard>)
                }
            </div>
        </div>
    );
};

export default AllPetsPage;

