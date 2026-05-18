import React from 'react';
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="container mx-auto bg-gray-900 text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">

                    <div>
                        <h2 className="text-2xl font-bold mb-4">YourBrand</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We build modern and responsive web applications using Next.js
                            and the latest technologies.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact Information
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>Email: contact@yourbrand.com</li>
                            <li>Phone: +880 1234-567890</li>
                            <li>Address: Dhaka, Bangladesh</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

                        <div className="flex gap-4">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition"
                            >
                                <FaTwitter />
                            </Link>

                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 mt-6 text-sm">
                    © {new Date().getFullYear()} YourBrand. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

