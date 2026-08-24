'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeartHandshake, PawPrint, ShieldCheck, Users, Home, ArrowRight} from 'lucide-react';

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
            <section className="container mx-auto px-6 py-20">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="text-center max-w-4xl mx-auto">

                    <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold mb-6">
                        <PawPrint size={18} />
                        About Pet Haven
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        Every Pet Deserves
                        <span className="text-orange-500"> A Loving Home</span>
                    </h1>

                    <p className="text-lg text-gray-600 leading-8">
                        Pet Haven is a trusted pet adoption platform dedicated to
                        connecting rescued pets with compassionate families.
                        Our mission is to make pet adoption simple, transparent,
                        and accessible for everyone.
                    </p>

                </motion.div>
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

                    <Link href="/all-pets">

                        <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">

                            Browse Pets

                            <ArrowRight size={20} />

                        </button>

                    </Link>

                </div>

            </section>

        </main>
    );
};

export default AboutPage;
