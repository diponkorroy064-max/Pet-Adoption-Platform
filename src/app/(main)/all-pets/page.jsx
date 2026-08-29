import React from 'react';
import AllPetsClient from './AllPetsClient';

export const metadata = {
    title: "All Pets for Adoption | PetHaven",
    description: "Browse through available pets looking for a loving home. Filter by category, breed, and location to find your perfect furry companion today.",
    openGraph: {
        title: "All Pets for Adoption | PetHaven",
        description: "Browse through available pets looking for a loving home.",
        url: "https://pethaven.com/all-pets",
        siteName: "PetHaven",
        type: "website",
    },
};

const AllPetsPage = () => {
    return (
        <>
            <AllPetsClient/>
        </>
    );
};

export default AllPetsPage;
