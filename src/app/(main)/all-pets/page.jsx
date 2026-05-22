'use client';
import PetsCard from '@/component/shared/PetsCard';
import { useEffect, useState } from 'react';


const AllPets = () => {

    const [pets, setPets] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");

   
    useEffect(() => {
        fetch(
            `http://localhost:5000/pets?search=${searchText}&species=${selectedSpecies}`)
            .then(res => res.json())
            .then(data => setPets(data));

    }, [searchText, selectedSpecies]);
    console.log(pets);



    return (
        <div className="container max-auto mx-auto py-10 px-8">

            {/* Search & Filter */}
            <div className="flex justify-between mb-10">

                <input type="text" placeholder="Search by pet name" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="border p-2 rounded-xl"/>

                
                <select value={selectedSpecies} onChange={(e) => setSelectedSpecies(e.target.value)}
                    className="border p-2 rounded-xl">
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


