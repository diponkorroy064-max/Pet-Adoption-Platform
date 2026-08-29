import ProcessSection from "@/component/services/ProcessSection"
import ServicesCTA from "@/component/services/ServicesCTA"
import ServicesGrid from "@/component/services/ServicesGrid"
import ServicesHero from "@/component/services/ServicesHero"


export const metadata = {
    title: "Our Services | PetHaven",
    description: "Explore PetHaven services including pet adoption listings, rehoming support, pet owner resources, and community care services.",
    openGraph: {
        title: "Our Services | PetHaven",
        description: "Explore PetHaven services including adoption, rehoming, and pet care resources.",
        url: "https://pethaven.com/services",
        siteName: "PetHaven",
        type: "website",
    },
};


export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServicesHero/>
            <ServicesGrid/>
            <ProcessSection />
            <ServicesCTA />
        </main>
    )
}
