import Image from 'next/image';
import React from 'react';


const PetsCard = ({ pet }) => {
    // console.log(pet);
    const { age, breed, description, email, fee, gender, healthStatus, imageURL, location, petName, species, vaccination, _id } = pet;


    return (

        <div className="border border-gray-200 rounded-md">

            <div className="">
                <Image className='w-full h-70 rounded-md rounded-b-none' src={imageURL} height={40} width={40} alt='Pet image' />
            </div>

            <div className="card-body items-center text-center rounded-md">
                <div className="flex justify-center gap-5">
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-secondary">Adopt Now</button>
                </div>
            </div>

        </div>
    );
};

export default PetsCard;

