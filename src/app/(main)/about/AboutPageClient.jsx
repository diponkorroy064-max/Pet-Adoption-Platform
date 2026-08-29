'use client';
import AboutHero from '@/component/about/AboutHero';
import AboutStory from '@/component/about/AboutStory';
import AboutFeatures from '@/component/about/AboutFeatures';
import AboutStats from '@/component/about/AboutStats';
import AboutCTA from '@/component/about/AboutCTA';


const AboutPageClient = () => {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <AboutFeatures />
            <AboutStats />
            <AboutCTA />
        </>
    );
};

export default AboutPageClient;
