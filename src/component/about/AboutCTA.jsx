'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutCTA = () => {
    return (
        <section className="bg-linear-to-b from-orange-50 via-orange-50 to-white container mx-auto px-6 py-20">
            <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-5xl font-bold mb-6">
                    Ready to Meet Your New Best Friend?
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    Start your adoption journey today and give a loving pet the forever home they deserve.
                </p>

                <Link href="/all-pets" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
                    <span>Browse Pets</span>
                    <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default AboutCTA;
