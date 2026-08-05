import AdoptModal from '@/component/shared/AdoptModal';
import { getPetsById } from '@/lib/data';
import Image from 'next/image';
import React from 'react';


const PetDetailsPage = async ({ params }) => {
    const {petId} = await params;
    const petDataById = await getPetsById(petId);
    console.log(petDataById);

    const { age, breed, description, email, fee, gender, healthStatus, imageURL, location, petName, species, vaccination, _id } = petDataById;


    return (
        <div className='container mx-auto w-90 md:w-175 lg:w-200 py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-base-100 border-2 border-gray-300 shadow-xl">
                <div className='p-5'>
                    <Image className='w-full h-70 rounded-md bg-cover' src={imageURL} height={40} width={40} alt='Pet image' />
                </div>
                

                <div className="p-5 space-y-3">
                    <h2 className="text-2xl font-bold">Pet Name : <span className='text-[#f58f95]'>{petName}</span></h2>

                    <p className='font-semibold'>{description}</p>

                    <p className='font-semibold'>Breed : <span className='text-orange-400'>{breed}</span></p>

                    <p>Gender : <span className='badge badge-outline badge-info'> {gender}</span></p>

                    <p className='font-semibold'>Heatth Status : <span className='text-green-400'>{healthStatus}</span></p>

                    <p>Species : {species}</p>

                    <p className='font-semibold'>Location : <span className='text-blue-400'>{location}</span></p>

                    <p className='badge badge-outline text-yellow-400'>{vaccination}</p>

                    <div className="card-actions justify-start mt-4">
                        <AdoptModal petDataById={petDataById}></AdoptModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetailsPage;


