'use client';

import PetsCard from '@/component/shared/PetsCard';
import { useEffect, useState } from 'react';
import { Search, Filter, PawPrint } from 'lucide-react';

const AllPets = () => {
    const [pets, setPets] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");

    useEffect(() => {
        fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?search=${searchText}&species=${selectedSpecies}`
        )
            .then((res) => res.json())
            .then((data) => setPets(data));
    }, [searchText, selectedSpecies]);

    
    return (
        <section className="min-h-screen bg-linear-to-b from-orange-50 via-white to-orange-50">

            <div className="container mx-auto px-5 lg:px-8 py-12">

                {/* Header */}
                <div className="max-w-5xl mb-5">

                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-600 font-semibold mb-5">
                        <PawPrint size={18} />
                        Find Your Forever Friend
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
                        Explore Our Lovely Pets
                    </h1>

                    <p className="text-gray-600 text-lg leading-8">
                        Browse hundreds of adorable pets waiting for a loving
                        family. Search by name or filter by species to find
                        your perfect companion.
                    </p>

                </div>

                {/* Search Section */}

                <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-6 mb-12">

                    <div className="flex flex-col lg:flex-row gap-5 items-center">

                        {/* Search */}

                        <div className="relative w-full">

                            <Search
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="Search pet by name..."
                                value={searchText}
                                onChange={(e) =>
                                    setSearchText(e.target.value)
                                }
                                className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                            />

                        </div>

                        {/* Filter */}

                        <div className="relative w-full lg:w-72">

                            <Filter
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <select
                                value={selectedSpecies}
                                onChange={(e) =>
                                    setSelectedSpecies(e.target.value)
                                }
                                className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 outline-none cursor-pointer focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                            >
                                <option value="">All Species</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Bird">Bird</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Snake">Snake</option>
                                <option value="Fish">Fish</option>
                            </select>

                        </div>

                    </div>

                    {/* Result */}

                    <div className="flex justify-between items-center mt-6 flex-wrap gap-3">

                        <h3 className="text-lg font-semibold text-gray-700">
                            Available Pets
                        </h3>

                        <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
                            {pets.length} Pets Found
                        </span>

                    </div>

                </div>

                {/* Cards */}

                {pets.length > 0 ? (

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

                        {pets.map((pet) => (
                            <PetsCard key={pet._id} pet={pet} />
                        ))}

                    </div>

                ) : (

                    <div className="text-center py-24 bg-white rounded-3xl shadow-lg">

                        <PawPrint
                            size={70}
                            className="mx-auto text-orange-400 mb-5"
                        />

                        <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            No Pets Found
                        </h2>

                        <p className="text-gray-500">
                            Try changing your search or filter options.
                        </p>

                    </div>

                )}

            </div>

        </section>
    );
};

export default AllPets;