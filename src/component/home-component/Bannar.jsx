"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const bannerImages = [
    {
        src: "https://images.unsplash.com/photo-1555341029-f730b0ce4522",
        alt: "Happy dog looking for adoption",
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1683134532512-8acfb7bb96b2",
        alt: "Adorable puppy playing outdoors",
    },
    {
        src: "https://images.unsplash.com/photo-1745502302522-1229a326e817",
        alt: "Cute kitten relaxing indoor",
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1664371206153-c0ade7ecfe22",
        alt: "Friendly golden retriever smiling",
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-[85vh] bg-linear-to-b from-orange-50/50 via-white to-white overflow-hidden py-12 md:py-10 flex items-center">
            <div className="px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start text-left gap-6 z-10 max-w-2xl">
                        {/* Badge */}
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-100 border border-orange-200 px-5 py-2 rounded-full"
                        >
                            Pet Adoption Platform
                        </motion.span>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight text-gray-900">
                            Find Your{" "}
                            <span className="text-orange-500">Perfect</span>{" "}
                            Companion
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-base sm:text-lg text-gray-600 leading-relaxed"
                        >
                            Explore hundreds of loving pets waiting for a forever home. Find your perfect companion and begin a beautiful journey together.
                        </motion.p>

                        {/* Button & Dots */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex items-center gap-6 pt-2"
                        >
                            <Link href="/all-pets">
                                <button className="group relative overflow-hidden rounded-full bg-orange-500 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95 cursor-pointer">
                                    <span className="relative z-10">Adopt Now</span>
                                    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                                </button>
                            </Link>

                            {/* Manual Slide Dots Indicator */}
                            <div className="flex items-center gap-2">
                                {bannerImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                                                ? "w-8 bg-orange-500"
                                                : "w-2.5 bg-gray-300 hover:bg-orange-300"
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Animated Image Slider */}
                    <div className="relative w-full h-95 sm:h-112.5 lg:h-110 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={bannerImages[currentIndex].src}
                                    alt={bannerImages[currentIndex].alt}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                {/* Subtle inner shadow overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
