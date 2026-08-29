'use client'

import { motion } from 'framer-motion'
import { Heart, Stethoscope, Scissors, Home, ShieldCheck, Sparkles } from 'lucide-react'

const services = [
    {
        icon: Heart,
        title: 'Pet Adoption Matching',
        description: 'Our personalized matching system connects rescue pets with loving families based on lifestyle, home, and energy levels.',
    },
    {
        icon: Stethoscope,
        title: 'Veterinary Consultations',
        description: 'Connect with certified veterinarians for routine checkups, emergency advice, and customized nutrition plans.',
    },
    {
        icon: Scissors,
        title: 'Professional Grooming',
        description: 'Full-service grooming packages including baths, hair trimming, nail care, and coat conditioning by experienced pros.',
    },
    {
        icon: Home,
        title: 'Foster & Temporary Care',
        description: 'A safe haven program for pets in transition, providing vetted temporary foster homes with full supplies provided.',
    },
    {
        icon: ShieldCheck,
        title: 'Pet Insurance Guidance',
        description: 'Compare and enroll in transparent pet insurance plans designed to cover unexpected medical costs without stress.',
    },
    {
        icon: Sparkles,
        title: 'Behavioral Training',
        description: 'Positive-reinforcement training sessions for puppies and adult dogs to address socialization, obedience, and habits.',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
}


export default function ServicesGrid() {
    return (
        <section className="py-10 md:py-15 lg:py-20 bg-linear-to-b from-orange-50 to-white">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What We Offer</h2>
                    <p className="text-gray-600 mt-3">Comprehensive solutions for adoptable pets and lifelong companions.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="p-8 rounded-3xl border border-gray-100 bg-white shadow-lg shadow-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
