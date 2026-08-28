'use client'
import { motion } from 'framer-motion'
import { HeartHandshake } from 'lucide-react'

export default function ServicesHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 to-white py-20 lg:py-28">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-xs md:text-sm"
                    >
                        <HeartHandshake size={18} />
                        <span>Dedicated Pet Care Services</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight"
                    >
                        Everything Your Pet Needs to <span className="text-orange-500">Thrive</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed"
                    >
                        From seamless adoptions to top-tier wellness support, we offer trusted services tailored to every pet and pet parent.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

