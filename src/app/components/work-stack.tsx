import Image from "next/image";
import Donut from "/public/home/donut.png";
import Cone from "/public/home/cone.png";
import { cn } from "@/lib/utils";

export const WorkStack = () => {
  return (
    <div
      style={{ colorScheme: "dark" }}
      className={cn(
        "dark m-auto flex h-[60dvh] w-screen bg-black py-10 text-white dark:bg-background md:h-[110dvh]"
      )}
    >
      <div className="relative m-auto h-max w-max">
        <div className="relative m-auto w-max">
          <div className="mb-4 text-xl font-semibold md:text-3xl">
            I Develop
          </div>
          <div className="pl-10 text-4xl font-bold md:pl-20 md:text-7xl md:tracking-tight xl:text-8xl">
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
          className="absolute left-[70%] top-[12%] z-10 w-1/3 md:top-[5%] lg:top-[3%]"
        />
        <Image
          src={Cone}
          alt=""
          width={300}
          height={300}
          className="absolute -bottom-[12%] -left-[8%] w-1/3 lg:-left-[10%]"
        />
      </div>
    </div>
  );
};
