import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PetsCard = ({ pet }) => {
    // console.log(pet);
    const { age, breed, description, email, fee, gender, healthStatus, imageURL, location, petName, species, vaccination, _id } = pet;

    return (
        <div className="border-2 border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

            <div className="relative">
                <Image className='w-full h-70 rounded-md p-4' src={imageURL || null} height={40} width={40} alt='Pet image' />
                <p className='absolute top-6 right-6 badge bg-orange-500 text-white'>{petName}</p>
                <p className={`absolute top-6 left-6 badge ${species === 'Dog' ? 'bg-green-500 text-white' : species === 'Cat' ? 'badge-secondary' :
                    'badge-ghost'
                    }`}>
                    {species}
                </p>
            </div>


            <div className="flex justify-center items-center px-4 pb-4">
                <Link href={`/all-pets/${_id}`} className="w-full text-center rounded-md bg-[#f58f95] font-bold text-white py-1.5">View Details</Link>
            </div>
        </div>
    );
};

export default PetsCard;

