"use client";
import Link from "next/link";
import { FaFacebookF,FaInstagram, FaLinkedinIn,FaTwitter, FaYoutube} from "react-icons/fa";
import { PawPrint, Mail, Phone, MapPin, Send} from "lucide-react";
import { motion } from "framer-motion";


const Footer = () => {
    return (
        <footer className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        viewport={{ once: true }}>
                        <Link href="/" className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                                <PawPrint size={26} />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold">
                                    Pet Haven
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Find Your Forever Friend
                                </p>
                            </div>
                        </Link>

                        <p className="text-gray-300 leading-7">
                            Pet Haven is a trusted adoption platform helping
                            loving pets find caring families. Together we create
                            happier lives, one adoption at a time.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}>
                        <h3 className="text-xl font-semibold mb-5 text-orange-400">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="hover:text-orange-400 transition"> Home</Link>
                            </li>

                            <li>
                                <Link
                                    href="/all-pets"
                                    className="hover:text-orange-400 transition">
                                    All Pets
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-orange-400 transition"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-orange-400 transition"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-orange-400 transition"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}>
                        <h3 className="text-xl font-semibold mb-5 text-orange-400">
                            Contact
                        </h3>

                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <Mail className="text-orange-400 mt-1" size={18} />
                                <span className="text-gray-300">
                                    support@pethaven.com
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <Phone className="text-orange-400 mt-1" size={18} />
                                <span className="text-gray-300">
                                    +880 1234-567890
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <MapPin className="text-orange-400 mt-1" size={18} />
                                <span className="text-gray-300">
                                    Dhaka, Bangladesh
                                </span>
                            </div>

                        </div>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold mb-5 text-orange-400">
                            Stay Updated
                        </h3>

                        <p className="text-gray-300 mb-5">
                            Subscribe to receive adoption news and pet care tips.
                        </p>

                        <div className="flex">

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-l-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-orange-400"
                            />

                            <button className="bg-orange-500 hover:bg-orange-600 px-5 rounded-r-xl transition">

                                <Send size={18} />

                            </button>

                        </div>

                        {/* Social */}
                        <div className="flex gap-3 mt-6">

                            {[
                                { icon: <FaFacebookF />, url: "#" },
                                { icon: <FaInstagram />, url: "#" },
                                { icon: <FaTwitter />, url: "#" },
                                { icon: <FaYoutube />, url: "#" },
                                { icon: <FaLinkedinIn />, url: "#" },
                            ].map((item, index) => (

                                <a
                                    key={index}
                                    href={item.url}
                                    className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {item.icon}
                                </a>

                            ))}

                        </div>

                    </motion.div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-400 text-sm text-center">
                        © {new Date().getFullYear()} Pet Haven. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-400">

                        <Link
                            href="/"
                            className="hover:text-orange-400 transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/"
                            className="hover:text-orange-400 transition"
                        >
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
