import { CaseStudyTitle } from "@/components/case-study-title";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SimPOSPage = () => {
  return (
    <div>
      <CaseStudyTitle title="SimPOS" label="iOS Development" />

      <div
        className={cn(
          "h-[40dvh] w-full space-y-4",
          "flex place-items-center justify-center"
        )}
      >
        <div className="space-x-4 text-2xl text-gray">
          Sometimes
          <span className={cn("mx-4 text-6xl font-medium text-foreground")}>
            Simple
          </span>
          is all people need.
        </div>
      </div>

      <div className="m-auto flex w-full place-items-center bg-gray6 py-20 md:w-5/6">
        <Image
          src={"/projects/simpos/banner.png"}
          alt=""
          width={800}
          height={500}
          className={cn("m-auto drop-shadow-2xl")}
        />
      </div>

      <div className={cn("h-[10dvh]")} />

      <div className={cn("text-center text-4xl text-gray")}>
        A  WWDC24 Swift Student Challenge Winning Project.
      </div>

      <div className={cn("h-[20dvh]")} />

      <div className={cn("m-auto w-full md:w-5/6")}>
        <div
          className={cn(
            "w-5/6 space-y-8 text-pretty text-lg md:ml-20 md:max-w-[800px]"
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

      <div className={cn("h-[20dvh]")} />
    </div>
  );
};

export default SimPOSPage;
