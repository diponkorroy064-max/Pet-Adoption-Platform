import Link from "next/link";
import React from "react";
import { FaCat } from "react-icons/fa";


const NotFoundPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
            <div className="text-center">

                {/* Cat Icon */}
                <div className="flex justify-center mb-6">
                    <FaCat className="text-7xl text-orange-500 animate-bounce" />
                </div>

                <h1 className="text-7xl md:text-9xl font-bold text-blue-600">
                    404
                </h1>

                <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mt-4 max-w-md mx-auto">
                    Oops! The curious cat couldn`t find this page.
                </p>

                <Link href="/" className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"> Back To Home </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
