'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServicesCTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 p-10 md:p-16 text-center text-white shadow-xl shadow-orange-500/20"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-3xl md:text-5xl font-black tracking-tight mb-4"
                    >
                        Ready to Give a Pet a Loving Home?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="text-orange-100 text-base md:text-lg max-w-2xl mx-auto mb-8"
                    >
                        Explore our adoption catalog or reach out to our team for custom pet care solutions today.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="/all-pets"
                            className="px-8 py-3.5 rounded-full bg-white text-orange-600 font-bold hover:bg-orange-50 transition duration-300 shadow-md flex items-center gap-2"
                        >
                            <span>View Available Pets</span>
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/contact"
                            className="px-8 py-3.5 rounded-full border border-white/40 hover:bg-white/10 text-white font-semibold transition duration-300"
                        >
                            Contact Support
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
