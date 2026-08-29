'use client';

const statsData = [
    { value: "180+", label: "Happy Adoptions" },
    { value: "120+", label: "Available Pets" },
    { value: "65+", label: "Trusted Shelters" },
    { value: "2K+", label: "Community Members" },
];

const AboutStats = () => {
    return (
        <section className="container mx-auto px-6 py-10">
            <div className="bg-orange-500 rounded-3xl text-white p-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {statsData.map((stat, index) => (
                        <div key={index}>
                            <h2 className="text-5xl font-bold">{stat.value}</h2>
                            <p className="mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
