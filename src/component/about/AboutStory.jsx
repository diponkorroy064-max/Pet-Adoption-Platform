'use client';
import { motion } from 'framer-motion';


const AboutStory = () => {
    return (
        <section className="bg-linear-to-b from-orange-50 via-orange-50 to-white container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                    <p className="text-gray-600 leading-8 mb-5">
                        Pet Haven was created with a simple vision: helping abandoned and rescued animals find caring families. Every year, thousands of pets remain without a home. We believe technology can bridge the gap between shelters, pet owners, and adopters.
                    </p>
                    <p className="text-gray-600 leading-8">
                        Our platform enables users to browse pets, submit adoption requests, manage listings, and create a safe adoption experience for everyone.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl p-10"
                >
                    <h3 className="text-3xl font-bold mb-6 text-orange-500">Mission & Vision</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-xl mb-2">Our Mission</h4>
                            <p className="text-gray-600">
                                To promote responsible pet adoption and help every rescued animal find a safe, loving, and permanent home.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2">Our Vision</h4>
                            <p className="text-gray-600">
                                To become the most trusted online pet adoption platform where every pet has the opportunity to live a happy life.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutStory;
