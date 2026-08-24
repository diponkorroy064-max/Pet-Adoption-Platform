'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
    HeartHandshake,
    PawPrint,
    Users,
    ArrowRight,
} from 'lucide-react';

const stats = [
    {
        id: 1,
        title: 'Happy Adoptions',
        value: 180,
        suffix: '+',
        color: 'from-cyan-500 to-sky-500',
        bg: 'bg-cyan-50',
        icon: HeartHandshake,
    },
    {
        id: 2,
        title: 'Pet Species',
        value: 68,
        suffix: '+',
        color: 'from-orange-500 to-amber-500',
        bg: 'bg-orange-50',
        icon: PawPrint,
    },
    {
        id: 3,
        title: 'Pet Owners',
        value: 28,
        suffix: '+',
        color: 'from-green-500 to-emerald-500',
        bg: 'bg-green-50',
        icon: Users,
    },
];

const StatSection = () => {
    return (
        <section className="py-20 bg-linear-to-b from-white via-orange-50 to-white">

            <div className="container mx-auto px-5 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >

                    <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold mb-5">
                        Our Achievement
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
                        Our Growing Community
                    </h2>

                    <p className="text-lg text-gray-600 leading-8">
                        Every adoption creates a happier life. Together with pet
                        lovers, shelters, and volunteers, we have built a trusted
                        platform that helps thousands of pets find their forever
                        homes.
                    </p>
                </motion.div>

                {/* Statistics */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: .5,
                                    delay: index * .15,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                className={`${item.bg} rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-white relative overflow-hidden`}
                            >

                                {/* Background Circle */}

                                <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-linear-to-br ${item.color} opacity-10`} />

                                {/* Icon */}

                                <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${item.color} flex items-center justify-center text-white shadow-lg mb-8`}>
                                    <Icon size={30} />
                                </div>

                                {/* Counter */}

                                <h2 className="text-5xl font-extrabold text-gray-900 mb-2">

                                    <CountUp
                                        end={item.value}
                                        duration={3}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />

                                    {item.suffix}

                                </h2>

                                <p className="text-xl font-semibold text-gray-700 mb-5">
                                    {item.title}
                                </p>

                                <div className="flex items-center gap-2 text-orange-500 font-semibold">
                                    Learn More
                                    <ArrowRight size={18} />
                                </div>

                            </motion.div>

                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default StatSection;
