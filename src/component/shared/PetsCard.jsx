import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PetsCard = ({ pet }) => {
    // console.log(pet);
    const { age, breed, description, email, fee, gender, healthStatus, imageURL, location, petName, species, vaccination, _id } = pet;

    return (

        <div className="border border-gray-200 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

            <div className="relative">
                <Image className='w-full h-70 rounded-md rounded-b-none' src={imageURL || null} height={40} width={40} alt='Pet image' />
                <p className='absolute top-2 right-2 badge badge-secondary'>{petName}</p>
            </div>

            <div className="card-body items-center text-center rounded-md">
                <div className="flex justify-center gap-5">
                    <Link href={`/all-pets/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    <button className="btn btn-secondary">Adopt Now</button>
                </div>
            </div>

        </div>
    );
};

export default PetsCard;

