import React from 'react';
import PetsCard from '../shared/PetsCard';
// import { getPets } from '@/lib/api/data';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getPets } from '@/lib/api/data';


const Featured = async () => {
    const petsInfo = await getPets();
    const topPets = petsInfo?.slice(0, 6) || [];

    return (
        <section className="py-16 bg-linear-to-b from-orange-50 via-white to-orange-100 overflow-hidden">
            {/* CSS Keyframes for Marquee */}
            <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

            {/* Section Header */}
            <div className="px-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
                        <Sparkles size={14} />
                        <span>Meet Our Stars</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                        Featured <span className="text-orange-500">Pets</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base mt-1">
                        These lovable companions are looking for a forever home. Take a look and find your new best friend.
                    </p>
                </div>

                <Link href="/all-pets" className="inline-flex items-center gap-2 font-bold text-sm text-orange-600 hover:text-orange-700 hover:underline group">
                    <span>View All Pets</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Marquee Scroller Wrapper */}
            <div className="relative w-full overflow-hidden py-4">
                {/* Left Shadow Fade */}
                <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

                {/* Right Shadow Fade */}
                <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Marquee Track Container */}
                <div className="marquee-track">
                    {/* First Array Set */}
                    <div className="flex gap-6 shrink-0">
                        {topPets.map((pet) => (
                            <div key={`set1-${pet._id}`} className="w-70 sm:w-[320px] shrink-0">
                                <PetsCard pet={pet} />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate Array Set to create unbroken continuous scroll */}
                    <div className="flex gap-6 shrink-0">
                        {topPets.map((pet) => (
                            <div key={`set2-${pet._id}`} className="w-70 sm:w-[320px] shrink-0">
                                <PetsCard pet={pet} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
