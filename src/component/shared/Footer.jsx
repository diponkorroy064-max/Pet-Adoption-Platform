import React from 'react';
import Link from "next/link";
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { PawPrint } from "lucide-react";


const Footer = () => {
    return (
        <footer className="container mx-auto bg-[#1f2937] text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <PawPrint className="text-orange-400" size={32} />
                        <h2 className="text-2xl font-bold">Pet Haven</h2>
                    </div>

                    <p className="text-gray-300 text-[14px] leading-7"> Pet Haven is a trusted pet adoption platform helping loving pets find their forever homes. Adopt, rescue, and make a difference in an animal`s life today.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-orange-400"> Contact Us </h3>

                    <ul className="space-y-3 text-gray-300">
                        <li>Email: support@pethaven.com</li>
                        <li>Phone: +880 1234-567890</li>
                        <li>Location: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-orange-400"> Follow Us </h3>

                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white text-[#1f2937] p-3 rounded-full hover:bg-orange-400 hover:text-white transition duration-300"><FaFacebookF size={18}/>
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white text-[#1f2937] p-3 rounded-full hover:bg-orange-400 hover:text-white transition duration-300"><FaInstagram size={18} />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-white text-[#1f2937] p-3 rounded-full hover:bg-orange-400 hover:text-white transition duration-300"><FaTwitter size={18}/>
                        </a>

                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-white text-[#1f2937] p-3 rounded-full hover:bg-orange-400 hover:text-white transition duration-300"> <FaYoutube size={18} />
                        </a>

                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-white text-[#1f2937] p-3 rounded-full hover:bg-orange-400 hover:text-white transition duration-300"> <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Pet Haven. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

