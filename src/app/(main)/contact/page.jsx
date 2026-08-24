'use client';
import { motion } from 'framer-motion';
import {Mail,Phone,MapPin, Clock, Send, PawPrint, MessageCircle} from 'lucide-react';

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        value: "+880 1234-567890",
    },
    {
        icon: Mail,
        title: "Email",
        value: "support@pethaven.com",
    },
    {
        icon: MapPin,
        title: "Address",
        value: "Dhaka, Bangladesh",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Sun - Thu : 9 AM - 6 PM",
    },
];

const faqs = [
    {
        question: "How do I adopt a pet?",
        answer:
            "Browse available pets, view their details, and submit an adoption request after logging in.",
    },
    {
        question: "Can I list my own pet for adoption?",
        answer:
            "Yes. After signing in, you can add your pet through the Add Pet dashboard.",
    },
    {
        question: "Is there any adoption fee?",
        answer:
            "Some pets may have an adoption fee set by the owner or shelter to cover vaccination and care costs.",
    },
];


export default function ContactPage() {
    return (
        <main className="bg-linear-to-b from-orange-50 via-white to-orange-50">

            {/* Hero */}
            <section className="container mx-auto px-6 pt-20 pb-14">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="max-w-3xl mx-auto text-center">

                    <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold mb-6">
                        <PawPrint size={18} />
                        Contact Pet Haven
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        We would Love to Hear From You
                    </h1>

                    <p className="text-lg text-gray-600 leading-8">
                        Have questions about pet adoption or need assistance?
                        Our team is here to help you find your perfect companion.
                    </p>
                </motion.div>
            </section>

            {/* Contact Cards */}
            <section className="container mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * .1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-3xl p-8 shadow-lg text-center">

                                <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-5">

                                    <Icon className="text-orange-500" size={30} />

                                </div>

                                <h3 className="text-xl font-bold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600">
                                    {item.value}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Contact Form */}
            <section className="container mx-auto px-6 pb-20">

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-xl p-10">

                        <h2 className="text-3xl font-bold mb-2">
                            Send Us a Message
                        </h2>

                        <p className="text-gray-600 mb-8">
                            Fill out the form below and we will get back to you as soon as possible.
                        </p>

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-orange-500"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-orange-500"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-orange-500"
                            />

                            <textarea
                                rows={6}
                                placeholder="Your Message"
                                className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-orange-500 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition cursor-pointer">
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-xl bg-white">

                        <div className="h-full min-h-125">

                            <iframe
                                title="Google Map"
                                className="w-full h-full"
                                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            
            {/* FAQ */}
            <section className="container mx-auto px-6 pb-24">

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <MessageCircle
                            className="mx-auto text-orange-500 mb-4"
                            size={40}
                        />
                        <h2 className="text-4xl font-bold">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    
                    <div className="space-y-5">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * .1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-md p-6">

                                <h3 className="text-xl font-semibold mb-2">
                                    {faq.question}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

