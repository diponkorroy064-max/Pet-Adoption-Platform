"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import catImg from '@/assets/featuredImg.png';


// Testimonial Dataset--
const testimonials = [
    {
        id: 1,
        name: "Kenneth Fong",
        role: "Pet Parent",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        highlights: [
            "Finding Bella changed our lives, the adoption process was incredibly smooth and supportive.",
            "This platform connects you with shelters that truly care about the animals well-being.",
            "We found our perfect furry family member within a week. Highly recommended!"
        ]
    },
    {
        id: 2,
        name: "Sophia Martinez",
        role: "Dog Lover",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        highlights: [
            "The verification process gave me complete confidence when adopting Max.",
            "The support staff guided us through every step of pet transition.",
            "Amazing experience! Our home feels complete now with our new pup."
        ]
    },
    {
        id: 3,
        name: "David Chen",
        role: "Cat Enthusiast",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        highlights: [
            "Adopted two rescue kittens together. Smooth paperwork and transparent health status.",
            "Great platform features making shelter discovery super fast.",
            "Couldn't be happier with the whole adoption journey!"
        ]
    }
];

const WhatFeatured = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="container mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto bg-linear-to-br from-[#fcf9f8] to-[#f4ebe8] rounded-[36px] md:rounded-[48px] border border-orange-100/60 shadow-xl shadow-orange-950/5 grid grid-cols-1 lg:grid-cols-12 items-center relative overflow-hidden">

                {/* Floating Decorative Paw */}
                <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute left-6 top-8 text-orange-300 text-3xl opacity-70 pointer-events-none"
                >
                    <FaPaw />
                </motion.div>

                {/* Left Content Area */}
                <div className="lg:col-span-7 p-6 sm:p-10 md:p-16 relative z-10 flex flex-col justify-between h-full">
                    <div>
                        {/* Section Header */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-wider">
                                Testimonials
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gray-900 tracking-tight">
                            What Pet Lovers <br />
                            <span className="text-orange-500">Say About Us</span>
                        </h2>

                        {/* Animated Testimonial Content */}
                        <div className="mt-8 min-h-50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul className="space-y-4 max-w-xl">
                                        {currentTestimonial.highlights.map((text, idx) => (
                                            <li key={idx} className="flex items-start gap-3.5 text-gray-700 text-base sm:text-lg leading-relaxed">
                                                <CheckCircle2 size={24} className="text-orange-500 shrink-0 mt-0.5" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Footer Controls & User Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-200/60">
                        {/* User Profile */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-4"
                            >
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-orange-400 p-0.5 shadow-sm">
                                    <Image
                                        src={currentTestimonial.avatar}
                                        alt={currentTestimonial.name}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 leading-snug">
                                        {currentTestimonial.name}
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm font-medium">
                                        {currentTestimonial.role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Action Buttons */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handlePrev}
                                aria-label="Previous testimonial"
                                className="w-12 h-12 rounded-full cursor-pointer bg-gray-900 text-white flex items-center justify-center hover:bg-orange-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button
                                onClick={handleNext}
                                aria-label="Next testimonial"
                                className="w-12 h-12 rounded-full cursor-pointer bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Hero Image Section */}
                <div className="lg:col-span-5 relative h-90 sm:h-112.5 lg:h-130 flex items-end justify-center p-6">

                    {/* Animated Backdrop Shape */}
                    <motion.div
                        animate={{ scale: [1, 1.03, 1], rotate: [0, 2, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute bottom-6 w-[85%] h-[75%] bg-linear-to-tr from-[#f58f95] to-[#fca5a5] rounded-[44px] shadow-lg"
                    />

                    {/* Decorative Background Quote Icon */}
                    <Quote className="absolute top-12 right-12 text-white/20 w-24 h-24 rotate-12 pointer-events-none" />

                    {/* Pet Hero Image */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-20 w-full max-w-85 sm:max-w-100 h-full flex items-end justify-center"
                    >
                        <Image
                            src={catImg}
                            alt="Featured Pet"
                            priority
                            className="object-contain drop-shadow-2xl max-h-[90%]"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WhatFeatured;
