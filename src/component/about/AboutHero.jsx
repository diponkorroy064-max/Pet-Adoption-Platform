'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PawPrint, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-orange-50/60 via-white to-white py-17 md:py-10 lg:py-15">
            {/* Background Glows */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col items-start text-left space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 bg-orange-100/80 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide">
                            <PawPrint size={18} className="text-orange-500" />
                            About Pet Haven
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
                            Every Pet Deserves{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                                A Loving Home
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                            Pet Haven is a trusted pet adoption platform dedicated to connecting rescued pets with compassionate families. Our mission is to make pet adoption simple, transparent, and accessible for everyone.
                        </p>

                        <div className="grid grid-cols-2 gap-4 w-full pt-2">
                            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                    <Heart size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">100% Care</h4>
                                    <p className="text-xs text-gray-500">Vetted & Healthy</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Verified</h4>
                                    <p className="text-xs text-gray-500">Safe Process</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/all-pets"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <span>Find a Companion</span>
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="relative flex justify-center items-center"
                    >
                        <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                            <Image
                                src="https://images.unsplash.com/photo-1482066490729-6f26115b60dc"
                                alt="Two happy dogs running in a field"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="absolute -bottom-6 -left-4 sm:left-4 bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-lg">
                                2.5k+
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Happy Adoptions</p>
                                <p className="text-sm font-bold text-gray-900">Forever Homes Found</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute -top-4 -right-2 sm:right-4 bg-orange-500 text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-bold"
                        >
                            <Heart size={16} className="fill-white" />
                            <span>Loving Companions</span>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutHero;
