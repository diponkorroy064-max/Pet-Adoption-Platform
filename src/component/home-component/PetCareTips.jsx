'use client';

import { motion } from 'framer-motion';
import {
    HeartPulse,
    Bone,
    ShieldCheck,
    Stethoscope,
    Home,
    Smile,
} from 'lucide-react';

const tips = [
    {
        id: 1,
        icon: HeartPulse,
        title: 'Regular Exercise',
        description:
            'Keep your pets active with daily walks, playtime, and outdoor activities to maintain a healthy lifestyle.',
    },
    {
        id: 2,
        icon: Bone,
        title: 'Healthy Nutrition',
        description:
            'Provide balanced meals with fresh water and nutritious food suitable for your pet’s age and breed.',
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: 'Vaccination',
        description:
            'Ensure your pets receive timely vaccinations and preventive treatments for long-term health.',
    },
    {
        id: 4,
        icon: Stethoscope,
        title: 'Routine Checkups',
        description:
            'Visit your veterinarian regularly to monitor your pet’s overall health and detect issues early.',
    },
    {
        id: 5,
        icon: Home,
        title: 'Comfortable Shelter',
        description:
            'Create a clean, safe, and comfortable home environment where your pet feels secure and loved.',
    },
    {
        id: 6,
        icon: Smile,
        title: 'Love & Attention',
        description:
            'Spend quality time with your pets to strengthen your bond and improve their emotional well-being.',
    },
];


const PetCareTips = () => {
    return (
        <section className="py-20 bg-linear-to-b from-orange-50 via-white to-orange-50">
            <div className="container mx-auto px-5 lg:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16">
                    
                    <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600 mb-4">
                        Pet Care Guide
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                        Essential Pet Care Tips
                    </h2>

                    <p className="text-gray-600 text-lg leading-8">
                        Caring for your pet goes beyond providing food and shelter.
                        Follow these essential tips to keep your furry friends
                        healthy, happy, and full of life.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {tips.map((tip, index) => {
                        const Icon = tip.icon;

                        return (
                            <motion.div
                                key={tip.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: .5,
                                    delay: index * .1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                }}
                                className="bg-white rounded-3xl border border-orange-100 p-8 shadow-md hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                                    <Icon
                                        size={32}
                                        className="text-orange-500"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {tip.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {tip.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default PetCareTips;
