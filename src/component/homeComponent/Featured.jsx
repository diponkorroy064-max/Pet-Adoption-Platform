import React from 'react';
import PetsCard from '../shared/PetsCard';
import { getPets } from '@/lib/data';


const Featured = async() => {
     const petsInfo = await getPets();
    // console.log(petsInfo);
    const topPets = petsInfo.slice(0, 6);
    // console.log("top pets",topPets);
    
    return (
        <div className='container mx-auto mt-8 py-6 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    topPets.map(pet => <PetsCard key={pet._id} pet={pet}></PetsCard>)
                }
            </div>
        </div>
    );
};

export default Featured;

