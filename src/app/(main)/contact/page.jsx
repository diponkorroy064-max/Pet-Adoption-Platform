import React from 'react';
import ContactPageClient from './ContactPageClient'

export const metadata = {
    title: "Contact Us | PetHaven",
    description: "Have questions or need assistance? Reach out to the PetHaven team for support with pet adoption, rehoming, or general inquiries.",
    openGraph: {
        title: "Contact Us | PetHaven",
        description: "Get in touch with the PetHaven team for assistance with pet adoption and support.",
        url: "https://pethaven.com/contact",
        siteName: "PetHaven",
        type: "website",
    },
};

const ContactPage = () => {
    return (
        <>
            <ContactPageClient/>
        </>
    );
};

export default ContactPage;
