'use client';
import PetsCard from '@/component/shared/PetsCard';
import { useEffect, useState } from 'react';


const AllPets = () => {

    const [pets, setPets] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");

   
    useEffect(() => {
        fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?search=${searchText}&species=${selectedSpecies}`)
            .then(res => res.json())
            .then(data => setPets(data));

    }, [searchText, selectedSpecies]);
    console.log(pets);



    return (
        <div className="container max-auto mx-auto py-10 px-8">

            {/* Search & Filter */}
            <div className="flex justify-between mb-10">

                <input type="text" placeholder="Search Pet by Name" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="border border-gray-400 p-2 rounded-xl"/>
                
                <select value={selectedSpecies} onChange={(e) => setSelectedSpecies(e.target.value)}
                    className="border border-gray-400 p-2 rounded-xl cursor-pointer">
                    <option value="">All Species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Snake">Snake</option>
                    <option value="Fish">Fish</option>
                </select>
            </div>

            {/* Pet Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    pets.map(pet => <PetsCard key={pet._id} pet={pet}></PetsCard>)
                }

            </div>
        </div>
    );
};

export default AllPets;


