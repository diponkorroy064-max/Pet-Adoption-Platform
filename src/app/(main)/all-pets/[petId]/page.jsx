import AdoptModal from '@/component/shared/AdoptModal';
import { getPetsById } from '@/lib/data';
import Image from 'next/image';
import React from 'react';


const PetDetailsPage = async ({ params }) => {
    const {petId} = await params;
    const petDataById = await getPetsById(petId);
    // console.log(petDataById);

    const { age, breed, description, email, fee, gender, healthStatus, imageURL, location, petName, species, vaccination, _id } = petDataById;


    return (
        <div className='container mx-auto w-90 md:w-175 lg:w-200 py-10'>
            <div className="card lg:card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                <div>
                    <Image className='w-full h-70 rounded-md' src={imageURL} height={40} width={40} alt='Pet image' />
                </div>
                
                <div className="card-body">
                    <h2 className="card-title">{petName}</h2>
                    <p>{description}</p>
                    <p>{breed}</p>
                    <p>{healthStatus}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-start">
                        <AdoptModal petDataById={petDataById}></AdoptModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetailsPage;


