import { CaseStudyTitle } from "@/components/case-study-title";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SimPOSPage = () => {
  return (
    <div>
      <CaseStudyTitle title="SimPOS" label="iOS Development" />

      <div
        className={cn(
          "w-full h-[40dvh] space-y-4",
          "flex justify-center place-items-center"
        )}
      >
        <div className="space-x-4 text-2xl text-gray">
          Sometimes
          <span
            className={cn(
              "text-6xl text-foreground tracking-tight font-medium mx-4"
            )}
          >
            Simple
          </span>
          is all people need.
        </div>
      </div>

      <div className="w-full md:w-5/6 m-auto py-20 bg-gray6 flex place-items-center">
        <Image
          src={"/projects/simpos/banner.png"}
          alt=""
          width={800}
          height={500}
          className={cn("m-auto drop-shadow-2xl")}
        />
      </div>

      <div className={cn("h-[10dvh]")} />

      <div className={cn("w-full md:w-5/6 m-auto")}>
        <div
          className={cn(
            "w-5/6 md:max-w-[800px] md:ml-20 space-y-8 text-lg text-pretty"
          )}
        >
          <div>
            SimPOS is a solution tailored for small-sized businesses in need of
            a straightforward and affordable POS application. While the market
            is saturated with expensive and feature-rich POS systems, SimPOS
            stands out as a beacon of simplicity and accessability.
          </div>
          <div>
            SimPOS is purpose-built to address the specific needs of small
            businesses, offering a seamless platform for processing sales
            without the hassle of costly software or intricate systems.
          </div>
        </div>
      </div>

      <div className={cn("h-[10dvh]")} />
    </div>
  );
};

export default SimPOSPage;
