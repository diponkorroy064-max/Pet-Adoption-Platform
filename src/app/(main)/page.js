import Bannar from "@/component/home-component/Bannar";
import Featured from "@/component/home-component/Featured";
import PetCareTips from "@/component/home-component/PetCareTips";
import StatSection from "@/component/home-component/StatSection";
import WhyFeatured from "@/component/home-component/WhatFeatured";
import Image from "next/image";


export default function Home() {
  return (
    <div className=" dark:bg-black">
      <Bannar></Bannar>
      <Featured></Featured>
      <WhyFeatured></WhyFeatured>
      <PetCareTips></PetCareTips>
      <StatSection></StatSection>
    </div>
  );
}

