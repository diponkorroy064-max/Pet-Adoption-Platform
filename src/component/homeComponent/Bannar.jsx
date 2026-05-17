import Image from 'next/image';
import React from 'react';
import bannarImg from '@/assets/bannar2.avif'

const Bannar = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-125 md:h-[80vh] flex items-center justify-start text-white overflow-hidden">

            {/* Background Banner Image */}
            <div className="absolute inset-0 z-0">
                <Image src={bannarImg} height={400} width={400} alt="Happy Paws Pet Shop Banner" className="w-full h-full object-cover object-center brightness-[0.4] md:brightness-[0.6]" />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
            </div>

            {/* Hero Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col items-start gap-4 md:gap-6">

                {/* Project Tag Indicator */}
                <span className="text-xs md:text-sm font-semibold tracking-widest text-orange-400 uppercase bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                    Next.js Project
                </span>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-2xl leading-none uppercase drop-shadow-md">
                    Find Your <br />
                    <span className="text-orange-500">Perfect</span> Companion
                </h1>

                {/* Short Description */}
                <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-xl font-medium leading-relaxed drop-shadow">
                    Explore hundreds of loving pets waiting for a forever home. We offer premium pet supplies, expert care, and joyful adoption services.
                </p>

                {/* Action Button */}
                <div className="mt-2">
                    <button
                        className="px-8 py-4 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white text-lg font-bold uppercase tracking-wider rounded-full transition-all duration-200 shadow-lg shadow-orange-600/30 hover:shadow-orange-500/40 cursor-pointer" >
                        Adopt Now
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Bannar;

