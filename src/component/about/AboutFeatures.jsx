'use client';
import { motion } from 'framer-motion';
import { HeartHandshake, ShieldCheck, Users, Home } from 'lucide-react';

const features = [
    {
        icon: HeartHandshake,
        title: "Trusted Adoption",
        description: "We connect loving families with pets that deserve a safe and caring forever home.",
    },
    {
        icon: ShieldCheck,
        title: "Verified Listings",
        description: "Every pet listing is carefully reviewed to ensure authenticity and transparency.",
    },
    {
        icon: Users,
        title: "Supportive Community",
        description: "Join thousands of pet lovers, adopters, and responsible pet owners.",
    },
    {
        icon: Home,
        title: "Forever Homes",
        description: "Our goal is to help every rescued pet find a loving family and a happy future.",
    },
];


const AboutFeatures = () => {
    return (
        <section className="bg-linear-to-b from-orange-50 via-white to-orange-50 container mx-auto px-6 py-20">
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold mb-4">Why Choose Pet Haven?</h2>
                <p className="text-gray-600 max-w-5xl mx-auto">
                    We provide a secure, reliable, and user-friendly platform that makes adopting pets easier than ever.
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
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl shadow-lg p-8 text-center">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-5">
                                <Icon className="text-orange-500" size={30} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default AboutFeatures;
