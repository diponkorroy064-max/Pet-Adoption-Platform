'use client'

import { motion } from 'framer-motion'
import { Search, UserCheck, HeartHandshake } from 'lucide-react'

const steps = [
    {
        icon: Search,
        step: '01',
        title: 'Browse & Discover',
        description: 'Explore verified pet profiles or service options tailored to your location and preferences.',
    },
    {
        icon: UserCheck,
        step: '02',
        title: 'Connect & Verify',
        description: 'Submit an inquiry or booking request. Our team verifies matches to ensure safe arrangements.',
    },
    {
        icon: HeartHandshake,
        step: '03',
        title: 'Welcome Home',
        description: 'Finalize agreements, schedule pickups or appointments, and start your journey together.',
    },
]

export default function ProcessSection() {
    return (
        <section className="py-20 bg-orange-50/40 border-y border-orange-100">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How It Works</h2>
                    <p className="text-gray-600 mt-3">Getting started with PetHaven is simple and stress-free.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm relative overflow-hidden"
                            >
                                <span className="absolute top-4 right-6 text-5xl font-black text-orange-100 select-none">
                                    {step.step}
                                </span>
                                <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-6">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
