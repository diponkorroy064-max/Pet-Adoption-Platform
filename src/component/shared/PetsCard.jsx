'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, PawPrint, Calendar} from 'lucide-react';


const PetsCard = ({ pet }) => {
    const { age, breed, fee, imageURL, location, petName, species, _id,} = pet;


    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300">

            {/* Image */}
            <div className="relative overflow-hidden">
                <Image
                    src={imageURL}
                    alt={petName}
                    width={500}
                    height={350}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"/>

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                {/* Species */}
                <span
                    className={`absolute left-4 top-4 rounded-full px-4 py-1 text-sm font-semibold text-white
                        ${species === "Dog"
                            ? "bg-green-500"
                            : species === "Cat"
                                ? "bg-pink-500"
                                : "bg-orange-500"
                        }`}>
                    {species}
                </span>

                {/* Favourite */}
                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md hover:bg-red-500 hover:text-white transition">
                    <Heart size={18}/>
                </button>

                {/* Name */}
                <div className="absolute bottom-4 left-4">
                    <h2 className="text-2xl font-bold text-white">
                        {petName}
                    </h2>
                </div>
            </div>

            
            {/* Content */}
            <div className="space-y-4 p-5">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <PawPrint
                            size={18}
                            className="text-orange-500"/>
                        <span>{breed}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-orange-500"/>
                        <span>{age}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between text-sm">    
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-orange-500" />
                        <span>{location}</span>
                    </div>
                </div>
                
                {/* Fee */}
                <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-orange-500">
                        ${fee}
                    </p>

                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
                        Ready to Adopt
                    </span>
                </div>

                
                {/* Button */}
                <Link href={`/all-pets/${_id}`} className="block">
                    <motion.button
                        whileTap={{ scale: .95 }}
                        whileHover={{ scale: 1.03 }}
                        className="w-full rounded-xl bg-linear-to-r from-orange-500 to-[#f58f95] py-3 font-semibold text-white shadow-lg transition cursor-pointer">
                        View Details
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default PetsCard;
