'use client'
import { motion } from 'framer-motion'
import { HeartHandshake, ShieldCheck, Heart } from 'lucide-react'
import Image from 'next/image'


export default function ServicesHero() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-orange-50 to-white py-12 md:py-16 lg:py-20">
            {/* Background Glow Effects */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-6 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-xs md:text-sm">
                            <HeartHandshake size={18} />
                            <span>Dedicated Pet Care Services</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                            Everything Your Pet Needs to <span className="text-orange-500">Thrive</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            From seamless adoptions to top-tier wellness support, we offer trusted services tailored to every pet and pet parent.
                        </motion.p>
                    </div>

                    {/* Right Column: Hero Image with Floating Badges */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative flex justify-center items-center">
                        {/* Main Service Image Container */}
                        <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                            <Image
                                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97"
                                alt="Veterinarian examining a happy dog"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Badge (Bottom Left) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute -bottom-5 -left-2 sm:left-4 bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                <ShieldCheck size={22} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Expert Care</h4>
                                <p className="text-xs text-gray-500">Verified Professionals</p>
                            </div>
                        </motion.div>

                        {/* Floating Badge (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="absolute -top-4 -right-2 sm:right-4 bg-orange-500 text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-bold">
                            <Heart size={16} className="fill-white" />
                            <span>100% Dedicated</span>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
