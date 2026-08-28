import ProcessSection from "@/component/services/ProcessSection"
import ServicesCTA from "@/component/services/ServicesCTA"
import ServicesGrid from "@/component/services/ServicesGrid"
import ServicesHero from "@/component/services/ServicesHero"


export const metadata = {
    title: 'Our Services | PetHaven',
    description: 'Explore our pet adoption, veterinary support, grooming, and foster services.',
}

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
