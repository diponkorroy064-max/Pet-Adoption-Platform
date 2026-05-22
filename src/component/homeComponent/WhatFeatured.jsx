"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowCircleRight, FaPaw } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar } from "@heroui/react";
import catImg from '@/assets/featuredImg.png';


const WhatFeatured = () => {
    return (
        <section className="container mx-auto py-16 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto bg-[#f7f3f2] rounded-[40px] grid grid-cols-1 lg:grid-cols-2 items-center relative">

                {/* Left Content */}
                <div className="p-8 md:p-16 relative z-10">

                    {/* Paw Animation */}
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute left-3 top-20 text-black text-3xl">
                        <FaPaw />
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-black">
                        What Pet Lovers <br /> Say About Us?
                    </h2>

                    <ul className="mt-8 text-gray-600 text-xl space-y-4 max-w-xl">
                        <li className="flex gap-2"><FaArrowCircleRight className="text-3xl" /> <span> Finding Bella changed our lives, the adoption process was incredibly smooth and supportive.</span></li>

                        <li className="flex gap-2"><FaArrowCircleRight className="text-3xl" /> <span>This platform connects you with shelters that truly care about the animals well-being.</span></li>

                        <li className="flex gap-2"><FaArrowCircleRight className="text-3xl" /> <span>We found our perfect furry family member within a week. Highly recommended</span></li>
                    </ul>

                    {/* User Info */}
                    <div className="flex items-center justify-between mt-10">
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                                <Avatar.Fallback>JD</Avatar.Fallback>
                            </Avatar>

                            <div>
                                <h4 className="font-bold text-xl text-black"> Kenneth Fong </h4>
                                <p className="text-gray-500 text-sm"> Pet Lovers </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3">
                            <button className="w-12 h-12 rounded-full cursor-pointer bg-black text-white flex items-center justify-center hover:scale-110 transition duration-300">
                                <ChevronLeft size={20} />
                            </button>

                            <button className="w-12 h-12 rounded-full cursor-pointer bg-[#ead7d4] text-black flex items-center justify-center hover:scale-110 transition duration-300">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>


                {/* Right Image Area */}
                <div className="relative h-125 md:h-162.5 flex items-end justify-center">

                    {/* Background Shape */}
                    <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute bottom-20 w-[90%] h-[75%] bg-[#f58f95] rounded-[60px]" />

                    {/* Dog Image */}
                    <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="absolute top-30 left-20 md:left-16 z-20" >
                        <Image src={catImg} alt="dog" width={380} height={500} className="w-80 md:w-120 object-contain" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatFeatured;

