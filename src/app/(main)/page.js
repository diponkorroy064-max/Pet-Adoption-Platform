import Bannar from "@/component/home-component/Bannar";
import Featured from "@/component/home-component/Featured";
import HappyCustomers from "@/component/home-component/HappyCustomers";
import PetCareTips from "@/component/home-component/PetCareTips";
import StatSection from "@/component/home-component/StatSection";
import WhyFeatured from "@/component/home-component/WhatFeatured";


export default function Home() {
  return (
    <div className=" dark:bg-black">
      <Bannar/>
      <Featured/>
      <WhyFeatured/>
      <PetCareTips/>
      <HappyCustomers/>
      <StatSection/>
    </div>
  );
}

