import Image from "next/image";
import NavTitle from "@/components/nav-title";
import Cone from "public/cone.png"

export default function Home() {
  return (
    <div>
      <div className="mt-[50vh] mb-[30vh]">
        <NavTitle />
      </div>
      <div className="relative">
        <div className="relative w-max m-auto">
          <div className="text-3xl font-semibold">I Develop</div>
          <div className="pl-20 text-9xl font-bold">
            <div>Frontend</div>
            <div>Backend</div>
            <div>Database</div>
            <div>Mobile App</div>
            <div>NLP, LLM</div>
          </div>
        </div>
        <Image src={Cone} alt="" width={300} height={300} className="" />
      </div>
    </div>
  );
}
