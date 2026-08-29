import Bannar from "@/component/home-component/Bannar";
import Featured from "@/component/home-component/Featured";
import HappyCustomers from "@/component/home-component/HappyCustomers";
import PetCareTips from "@/component/home-component/PetCareTips";
import StatSection from "@/component/home-component/StatSection";
import WhyFeatured from "@/component/home-component/WhatFeatured";


export const metadata = {
  title: "PetHaven | Find Your Perfect Companion & Adopt a Pet",
  description: "Connect with loving pets in need of a forever home. PetHaven makes pet adoption and rehoming safe, seamless, and joyful.",
  keywords: ["pet adoption", "adopt a dog", "adopt a cat", "rehome a pet", "pet rescue", "PetHaven"],
  authors: [{ name: "PetHaven Team" }],
  openGraph: {
    title: "PetHaven | Find Your Perfect Companion",
    description: "Connect with loving pets in need of a forever home. Explore available pets for adoption today.",
    url: "https://pet-adoption-platform-blush.vercel.app", 
    siteName: "PetHaven",
    images: [
      {
        url: "/og-image.png", // Place an image inside public/og-image.png
        width: 1200,
        height: 630,
        alt: "PetHaven Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetHaven | Find Your Perfect Companion",
    description: "Connect with loving pets in need of a forever home.",
    images: ["/og-image.png"],
  },
};


export default function Home() {
  return (
    <div className="dark:bg-black">
      <Bannar/>
      <Featured/>
      <WhyFeatured/>
      <PetCareTips/>
      <HappyCustomers/>
      <StatSection/>
    </div>
  );
}

