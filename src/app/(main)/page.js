import Bannar from "@/component/homeComponent/Bannar";
import Featured from "@/component/homeComponent/Featured";
import StatSection from "@/component/homeComponent/StatSection";
import WhyFeatured from "@/component/homeComponent/WhatFeatured";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" dark:bg-black">
      <Bannar></Bannar>
      <Featured></Featured>
      <WhyFeatured></WhyFeatured>
      <StatSection></StatSection>
    </div>
  );
}

