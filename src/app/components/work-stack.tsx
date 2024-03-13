import Image from "next/image";
import Donut from "/public/home/donut.png";
import Cone from "/public/home/cone.png";
import { cn } from "@/lib/utils";

export const WorkStack = () => {
  return (
    <div
      style={{ colorScheme: "dark" }}
      className={cn(
        "w-screen h-[50dvh] md:h-[120dvh] flex m-auto text-white bg-black py-10"
      )}
    >
      <div className="relative m-auto w-max h-max">
        <div className="relative w-max m-auto">
          <div className="mb-4 text-xl md:text-3xl font-semibold">
            I Develop
          </div>
          <div className="pl-10 md:pl-20 text-4xl md:text-7xl xl:text-8xl font-bold md:tracking-tight">
            <div className="relative z-20">Frontend</div>
            <div>Backend</div>
            <div>Database</div>
            <div>Mobile App</div>
            <div className="relative z-20">NLP, LLM</div>
          </div>
        </div>
        <Image
          src={Donut}
          alt=""
          width={300}
          height={300}
          className="absolute w-1/3 top-[12%] md:top-[5%] lg:top-[3%] left-[70%] z-10"
        />
        <Image
          src={Cone}
          alt=""
          width={300}
          height={300}
          className="absolute w-1/3 -left-[8%] lg:-left-[10%] -bottom-[12%]"
        />
      </div>
    </div>
  );
};
