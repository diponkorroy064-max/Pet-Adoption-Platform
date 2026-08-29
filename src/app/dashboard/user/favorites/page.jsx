'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Trash2, Eye, PawPrint, Search, MapPin, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@heroui/react';

// Example favorite pets mock data
const initialFavorites = [
    {
        _id: '1',
        name: 'Bella',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: '2 Years',
        gender: 'Female',
        location: 'Austin, TX',
        description: 'Friendly, energetic golden retriever who loves playing fetch and outdoor activities.',
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
    },
    {
        _id: '2',
        name: 'Milo',
        type: 'Cat',
        breed: 'British Shorthair',
        age: '1 Year',
        gender: 'Male',
        location: 'Seattle, WA',
        description: 'Calm and affectionate indoor cat looking for a quiet home with lots of lap time.',
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    },
    {
        _id: '3',
        name: 'Charlie',
        type: 'Dog',
        breed: 'French Bulldog',
        age: '3 Years',
        gender: 'Male',
        location: 'Denver, CO',
        description: 'Playful Frenchie with a great personality, fully vaccinated and good with kids.',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
    },
];

const SavedFavouritePetsPage = () => {
    const [favorites, setFavorites] = useState(initialFavorites);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('All');

    // Remove pet handler
    const handleRemoveFavorite = (id) => {
        setFavorites((prev) => prev.filter((pet) => pet._id !== id));
    };

    // Filter logic
    const filteredPets = favorites.filter((pet) => {
        const matchesSearch =
            pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pet.breed.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType =
            filterType === 'All' || pet.type.toLowerCase() === filterType.toLowerCase();
        return matchesSearch && matchesType;
    });


    return (
        <div className="space-y-8 max-w-6xl">

            {/* Header Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-rose-500 via-pink-500 to-orange-500 p-6 md:p-8 text-white shadow-xl">
                <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-32 h-32 bg-amber-300/20 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10 max-w-2xl space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider">
                        <Heart size={14} className="fill-white" />
                        <span>Wishlist</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                        Saved Favorite Pets
                    </h1>
                    <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
                        Keep track of all the companions you`ve saved. Revisit their profiles, submit adoption applications, or manage your wishlist anytime.
                    </p>
                </div>
            </div>

            {/* Control Bar: Search & Filters */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
                {/* Search Input */}
                <div className="relative w-full sm:w-72">
                    <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search saved pets..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-500 transition"
                    />
                </div>

                {/* Filter Buttons & Counter */}
                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                    <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
                        {['All', 'Dog', 'Cat'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filterType === type
                                        ? 'bg-white text-rose-600 shadow-xs'
                                        : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {type}s
                            </button>
                        ))}
                    </div>

                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-2 rounded-xl">
                        {filteredPets.length} {filteredPets.length === 1 ? 'Pet' : 'Pets'}
                    </span>
                </div>
            </div>

            {/* Horizontal Card List */}
            {filteredPets.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-xs space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                        <Heart size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">No Saved Pets Found</h3>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto">
                        {searchQuery || filterType !== 'All'
                            ? 'No pets match your current search filters.'
                            : "You haven't saved any pets to your favorites yet. Explore available pets to add some!"}
                    </p>
                    <Link href="/all-pets">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm mt-2 shadow-md shadow-orange-500/20">
                            Explore Pets
                        </Button>
                    </Link>
                </div>
            ) : (
                <motion.div layout className="flex flex-col gap-5">
                    <AnimatePresence>
                        {filteredPets.map((pet) => (
                            <motion.div
                                key={pet._id}
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="group bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-stretch"
                            >
                                {/* Left Image Thumbnail Container */}
                                <div className="relative w-full sm:w-56 md:w-64 h-48 sm:h-auto shrink-0 bg-gray-100 overflow-hidden">
                                    <Image
                                        src={pet.image}
                                        alt={pet.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 256px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                                        {pet.type}
                                    </span>
                                </div>

                                {/* Right Content Area */}
                                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                                    <div className="space-y-2">
                                        {/* Title & Remove Button */}
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-orange-500 transition-colors">
                                                        {pet.name}
                                                    </h3>
                                                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                                                        {pet.gender}
                                                    </span>
                                                </div>
                                                <p className="text-xs font-semibold text-gray-500 mt-0.5">
                                                    {pet.breed}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => handleRemoveFavorite(pet._id)}
                                                title="Remove from wishlist"
                                                className="p-2 rounded-xl text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition shrink-0"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>

                                        {/* Description */}
                                        {pet.description && (
                                            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                                {pet.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Bottom Meta & Action Area */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-gray-100">
                                        {/* Meta Information Tags */}
                                        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-orange-500" />
                                                <span>{pet.age}</span>
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={14} className="text-rose-500" />
                                                <span>{pet.location}</span>
                                            </span>
                                        </div>

                                        {/* Action Button */}
                                        <div className="flex items-center gap-2">
                                            <Link href={`/all-pets/${pet._id}`} className="w-full sm:w-auto">
                                                <Button
                                                    variant="flat"
                                                    className="w-full sm:w-auto bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold px-5 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
                                                >
                                                    <Eye size={15} />
                                                    <span>View Details</span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}

        </div>
    );
};

export default SavedFavouritePetsPage;
