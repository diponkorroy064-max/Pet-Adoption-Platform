import React from 'react';
import Image from 'next/image';
import { Star, HeartHandshake } from 'lucide-react';

// Sample dataset of 33 Happy Customers with clean image URLs
const customersData = [
    { id: 1, name: "Sarah Jenkins", comment: "Adopted Milo last week! The process was so smooth and transparent.", date: "Aug 12, 2026", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    { id: 2, name: "David Chen", comment: "PetHaven made finding our golden retriever puppy an absolute dream.", date: "Aug 10, 2026", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
    { id: 3, name: "Emma Watson", comment: "Thank you for helping us give Luna a loving home! Best shelter platform.", date: "Aug 08, 2026", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
    { id: 4, name: "Michael Vance", comment: "Great communication with the pet owner. Highly recommend this site!", date: "Aug 05, 2026", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
    { id: 5, name: "Jessica Taylor", comment: "Brought home a sweet rescue cat. Feeling so blessed!", date: "Jul 30, 2026", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
    { id: 6, name: "Robert Fox", comment: "Super straightforward process and helpful support staff.", date: "Jul 28, 2026", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61" },
    { id: 7, name: "Amanda Ray", comment: "Our new dog Bella is settling in wonderfully. Thank you!", date: "Jul 25, 2026", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
    { id: 8, name: "James Miller", comment: "Verified profiles gave me full peace of mind during adoption.", date: "Jul 22, 2026", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" },
    { id: 9, name: "Sophia Martinez", comment: "The adoption dashboard made tracking application status very easy.", date: "Jul 20, 2026", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
    { id: 10, name: "Daniel Craig", comment: "Adopted two kittens! My house is full of joy now.", date: "Jul 18, 2026", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
    { id: 11, name: "Olivia Brown", comment: " Wonderful customer care team and amazing animals.", date: "Jul 15, 2026", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" },
    { id: 12, name: "Liam Wilson", comment: "Adopted a senior dog. Best decision of my life!", date: "Jul 12, 2026", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" },
    { id: 13, name: "Emily Clark", comment: "Finding pets near my location was super fast and convenient.", date: "Jul 09, 2026", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
    { id: 14, name: "Ethan Harris", comment: "Top notch website interface. Really smooth experience.", date: "Jul 05, 2026", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce" },
    { id: 15, name: "Chloe Lewis", comment: "Thank you for uniting me with my furry soulmate!", date: "Jul 02, 2026", avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
    { id: 16, name: "Alexander King", comment: "Very ethical and transparent adoption network.", date: "Jun 28, 2026", avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556" },
    { id: 17, name: "Mia Scott", comment: "Loved receiving updates on my application step by step.", date: "Jun 24, 2026", avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df" },
    { id: 18, name: "Benjamin Wright", comment: "Max is energetic and healthy. Kudos to the owner!", date: "Jun 20, 2026", avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea" },
    { id: 19, name: "Charlotte Green", comment: "Friendly rescue center connections. 10/10 service.", date: "Jun 17, 2026", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
    { id: 20, name: "Henry Adams", comment: "Quick responses from pet owners. Everything went great.", date: "Jun 14, 2026", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
    { id: 21, name: "Grace Baker", comment: "Found a bunny for my daughter. She is over the moon!", date: "Jun 10, 2026", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
    { id: 22, name: "Sebastian Hall", comment: "Comprehensive health records were provided immediately.", date: "Jun 06, 2026", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
    { id: 23, name: "Zoe Nelson", comment: "My heart is full! Thank you PetHaven team.", date: "Jun 02, 2026", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    { id: 24, name: "Jack Carter", comment: "Simple, easy, and hassle-free adoption flow.", date: "May 29, 2026", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
    { id: 25, name: "Lily Mitchell", comment: "Got my handsome companion Toby here!", date: "May 25, 2026", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
    { id: 26, name: "Ryan Perez", comment: "Outstanding initiative to connect homeless pets with families.", date: "May 21, 2026", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61" },
    { id: 27, name: "Hannah Roberts", comment: "So happy with how quickly everything was arranged.", date: "May 18, 2026", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
    { id: 28, name: "Luke Turner", comment: "Great filtering system to find vaccinated pets.", date: "May 14, 2026", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" },
    { id: 29, name: "Ella Phillips", comment: "Seamless integration and super responsive platform.", date: "May 10, 2026", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" },
    { id: 30, name: "Gabriel Campbell", comment: "Found our loyal family guard dog here. Five stars!", date: "May 06, 2026", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
    { id: 31, name: "Victoria Parker", comment: "Warmest experience adopting a pet ever.", date: "May 02, 2026", avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
    { id: 32, name: "Owen Evans", comment: "Highly organized portal for pet lovers.", date: "Apr 28, 2026", avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556" },
    { id: 33, name: "Penelope Edwards", comment: "Adopted a kitten that stole my heart completely!", date: "Apr 25, 2026", avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df" },
];


// Split 33 customers into 3 separate groups of 11 items---
const row1 = customersData.slice(0, 11);
const row2 = customersData.slice(11, 22);
const row3 = customersData.slice(22, 33);


// Card Component---
const CustomerCard = ({ item }) => (
    <div className="w-75 sm:w-85 shrink-0 bg-white p-5 rounded-2xl border border-gray-300 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-3">
        <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-orange-200 shrink-0">
                <Image
                    src={item.avatar}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="min-w-0">
                <h4 className="text-sm font-bold text-gray-900 truncate">{item.name}</h4>
                <div className="flex items-center text-amber-400 gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                    ))}
                </div>
            </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 italic">
            &ldquo;{item.comment}&rdquo;
        </p>

        <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-medium">
            <span>Verified Adopter</span>
            <span>{item.date}</span>
        </div>
    </div>
);


const HappyCustomers = () => {
    return (
        <section className="py-20 bg-linear-to-b from-white via-orange-50/20 to-white overflow-hidden">
            {/* Inline Keyframe Styles */}
            <style>{`
        /* Left to Right Movement */
        @keyframes scrollLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        /* Right to Left Movement */
        @keyframes scrollRightToLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .row-left-to-right {
          display: flex;
          width: max-content;
          gap: 1.25rem;
          animation: scrollLeftToRight 35s linear infinite;
        }

        .row-right-to-left {
          display: flex;
          width: max-content;
          gap: 1.25rem;
          animation: scrollRightToLeft 35s linear infinite;
        }

        .marquee-wrapper:hover .row-left-to-right,
        .marquee-wrapper:hover .row-right-to-left {
          animation-play-state: paused;
        }
      `}</style>

            {/* Header */}
            <div className="container mx-auto px-6 mb-12 text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-orange-600 text-xs font-bold uppercase tracking-wider">
                    <HeartHandshake size={14} />
                    <span>Community Love</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    Over <span className="text-orange-500">30+ Happy</span> Adopters
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                    See what our community members have to say about finding their lifetime pet companions.
                </p>
            </div>

            
            {/* Marquee Rows Wrapper */}
            <div className="relative w-full overflow-hidden space-y-5 py-2">
                {/* Left & Right Gradient Shadows */}
                <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* --- ROW 1: Left to Right --- */}
                <div className="marquee-wrapper overflow-hidden">
                    <div className="row-left-to-right">
                        <div className="flex gap-5 shrink-0">
                            {row1.map((item) => (
                                <CustomerCard key={`r1-1-${item.id}`} item={item} />
                            ))}
                        </div>
                        {/* Duplicated for smooth infinite loop */}
                        <div className="flex gap-5 shrink-0">
                            {row1.map((item) => (
                                <CustomerCard key={`r1-2-${item.id}`} item={item} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- ROW 2: Right to Left --- */}
                <div className="marquee-wrapper overflow-hidden">
                    <div className="row-right-to-left">
                        <div className="flex gap-5 shrink-0">
                            {row2.map((item) => (
                                <CustomerCard key={`r2-1-${item.id}`} item={item} />
                            ))}
                        </div>
                        {/* Duplicated for smooth infinite loop */}
                        <div className="flex gap-5 shrink-0">
                            {row2.map((item) => (
                                <CustomerCard key={`r2-2-${item.id}`} item={item} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- ROW 3: Left to Right --- */}
                <div className="marquee-wrapper overflow-hidden">
                    <div className="row-left-to-right">
                        <div className="flex gap-5 shrink-0">
                            {row3.map((item) => (
                                <CustomerCard key={`r3-1-${item.id}`} item={item} />
                            ))}
                        </div>
                        {/* Duplicated for smooth infinite loop */}
                        <div className="flex gap-5 shrink-0">
                            {row3.map((item) => (
                                <CustomerCard key={`r3-2-${item.id}`} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HappyCustomers;
