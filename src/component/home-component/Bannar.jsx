"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Bannar = () => {
    return (
        <section className="relative w-full h-[65vh] sm:h-[70vh] lg:h-[85vh] min-h-130 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1558788353-f76d92427f16"
                    alt="Happy dog looking for adoption"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/10 to-black/60" />

                {/* Extra Brightness */}
                <div className="absolute inset-0 backdrop-brightness-75" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-5 sm:px-8">
                <div className="max-w-5xl text-center flex flex-col items-center gap-5">

                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-orange-300 bg-orange-500/15 border border-orange-300/40 backdrop-blur-md px-5 py-2 rounded-full"
                    >
                        Pet Adoption Platform
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-tight text-gray-200"
                    >
                        Find Your
                        <span className="text-[#f58f95]"> Perfect</span>

                        <br />

                        Companion
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-8"
                    >
                        Explore hundreds of loving pets waiting for a forever
                        home. Find your perfect companion and begin a beautiful
                        journey together.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.7,
                            duration: 0.5,
                        }}
                        className="pt-3"
                    >
                        <Link href="/all-pets">
                            <button className="group relative overflow-hidden rounded-full bg-[#f58f95] px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-400/40 active:scale-95 cursor-pointer">

                                <span className="relative z-10">
                                    Adopt Now
                                </span>

                                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                            </button>
                        </Link>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default Bannar;
