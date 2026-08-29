import React from 'react';
import AboutPageClient from './AboutPageClient';

export const metadata = {
    title: "About Us | PetHaven",
    description: "Learn about PetHaven's mission to connect rescue animals with compassionate families and build a safer, happier world for pets.",
    openGraph: {
        title: "About Us | PetHaven",
        description: "Learn about our mission to connect rescue animals with compassionate families.",
        url: "https://pethaven.com/about",
        siteName: "PetHaven",
        type: "website",
    },
};

const AboutPage = () => {
    return (
        <>
            <AboutPageClient/>
        </>
    );
};

export default AboutPage;
