import Bannar from "@/component/homeComponent/Bannar";
import Featured from "@/component/homeComponent/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" dark:bg-black">
      <Bannar></Bannar>
      <Featured></Featured>
    </div>
  );
}

