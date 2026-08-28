'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeartHandshake, PawPrint, ShieldCheck, Users, Home, ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: HeartHandshake,
        title: "Trusted Adoption",
        description:
            "We connect loving families with pets that deserve a safe and caring forever home.",
    },
    {
        icon: ShieldCheck,
        title: "Verified Listings",
        description:
            "Every pet listing is carefully reviewed to ensure authenticity and transparency.",
    },
    {
        icon: Users,
        title: "Supportive Community",
        description:
            "Join thousands of pet lovers, adopters, and responsible pet owners.",
    },
    {
        icon: Home,
        title: "Forever Homes",
        description:
            "Our goal is to help every rescued pet find a loving family and a happy future.",
    },
];


const AboutPage = () => {
    return (
        <main className="bg-linear-to-b from-orange-50 via-white to-orange-50">

            {/* Hero */}
            <section className="relative overflow-hidden bg-linear-to-b from-orange-50/60 via-white to-white py-17 md:py-10 lg:py-15">
                {/* Decorative Background Glows */}
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
                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 bg-orange-100/80 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide">
                                <PawPrint size={18} className="text-orange-500" />
                                About Pet Haven
                            </span>

                            {/* Main Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
                                Every Pet Deserves{" "}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                                    A Loving Home
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                                Pet Haven is a trusted pet adoption platform dedicated to connecting rescued pets with compassionate families. Our mission is to make pet adoption simple, transparent, and accessible for everyone.
                            </p>

                            {/* Key Highlights */}
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

                            {/* Action Buttons */}
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

                        {/* Right Column: Hero Visual Showcase */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="relative flex justify-center items-center"
                        >
                            {/* Main Featured Image Container */}
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

                            {/* Floating Floating Card (Bottom Left) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="absolute -bottom-6 -left-4 sm:left-4 bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-lg">
                                    2.5k+
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Happy Adoptions</p>
                                    <p className="text-sm font-bold text-gray-900">Forever Homes Found</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge (Top Right) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="absolute -top-4 -right-2 sm:right-4 bg-orange-500 text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-bold">
                                <Heart size={16} className="fill-white" />
                                <span>Loving Companions</span>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="container mx-auto px-6 py-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}>

                        <h2 className="text-4xl font-bold mb-6">
                            Our Story
                        </h2>

                        <p className="text-gray-600 leading-8 mb-5">
                            Pet Haven was created with a simple vision:
                            helping abandoned and rescued animals find caring
                            families. Every year, thousands of pets remain
                            without a home. We believe technology can bridge
                            the gap between shelters, pet owners, and adopters.
                        </p>

                        <p className="text-gray-600 leading-8">
                            Our platform enables users to browse pets, submit
                            adoption requests, manage listings, and create a
                            safe adoption experience for everyone.
                        </p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-xl p-10">

                        <h3 className="text-3xl font-bold mb-6 text-orange-500">
                            Mission & Vision
                        </h3>

                        <div className="space-y-6">

                            <div>
                                <h4 className="font-bold text-xl mb-2">
                                    Our Mission
                                </h4>

                                <p className="text-gray-600">
                                    To promote responsible pet adoption and help
                                    every rescued animal find a safe, loving,
                                    and permanent home.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-xl mb-2">
                                    Our Vision
                                </h4>

                                <p className="text-gray-600">
                                    To become the most trusted online pet
                                    adoption platform where every pet has the
                                    opportunity to live a happy life.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </section>

            {/* Features */}
            <section className="container mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-4">
                        Why Choose Pet Haven?
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide a secure, reliable, and user-friendly platform
                        that makes adopting pets easier than ever.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * .15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl shadow-lg p-8 text-center"
                            >

                                <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-5">

                                    <Icon
                                        className="text-orange-500"
                                        size={30}
                                    />

                                </div>

                                <h3 className="text-xl font-bold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600">
                                    {item.description}
                                </p>

                            </motion.div>

                        );
                    })}

                </div>

            </section>

            {/* Statistics */}

            <section className="container mx-auto px-6 py-10">

                <div className="bg-orange-500 rounded-3xl text-white p-12">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                        <div>
                            <h2 className="text-5xl font-bold">180+</h2>
                            <p className="mt-2">Happy Adoptions</p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold">120+</h2>
                            <p className="mt-2">Available Pets</p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold">65+</h2>
                            <p className="mt-2">Trusted Shelters</p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold">2K+</h2>
                            <p className="mt-2">Community Members</p>
                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="container mx-auto px-6 py-24">

                <div className="text-center max-w-3xl mx-auto">

                    <h2 className="text-5xl font-bold mb-6">
                        Ready to Meet Your New Best Friend?
                    </h2>

                    <p className="text-lg text-gray-600 mb-8">
                        Start your adoption journey today and give a loving pet
                        the forever home they deserve.
                    </p>

                    <Link href="/all-pets" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
                        Browse Pets
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
