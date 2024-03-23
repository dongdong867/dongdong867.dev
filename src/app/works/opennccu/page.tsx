import { InviewTransition } from "@/components/inview-transition";
import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";
import Image from "next/image";

const OpenNCCUPage = () => {
  return (
    <div>
      <div
        className={cn(
          "w-full md:w-4/5 h-[40dvh] m-auto space-y-4",
          "flex flex-col justify-end place-items-center md:place-items-start"
        )}
      >
        <Typewriter
          words={[
            {
              text: "OpenNCCU",
              className: "text-5xl font-medium tracking-tight",
            },
          ]}
        />
        <div className={cn("text-gray")}>PWA/ Web Development</div>
      </div>

      <div
        className={cn(
          "w-full h-[40dvh] text-2xl sm:text-4xl md:text-5xl font-medium group/opennccu"
        )}
      >
        <div
          className={cn(
            "w-max h-full m-auto flex justify-center place-items-center space-x-2 md:space-x-3"
          )}
        >
          <div>Design</div>
          <div>
            <div
              className={cn(
                "transition-all text-[#59CC95] animate-sliding-top"
              )}
            >
              by
            </div>
            <div
              className={cn("transition-all text-gray animate-sliding-down")}
            >
              for
            </div>
          </div>
          <div>NCCU students.</div>
        </div>
      </div>

      <Image
        src={"/projects/opennccu/banner.png"}
        alt=""
        width={1000}
        height={500}
        className={cn("lg:w-4/5 m-auto overflow-hidden bg-gray5")}
      />

      <div className={cn("h-[20dvh]")} />

      <div className={cn("w-5/6 md:w-max m-auto space-y-20 md:text-lg")}>
        <div className={cn("md:max-w-[600px] space-y-10")}>
          <div className="w-max">
            <Image
              src={"/projects/opennccu.png"}
              alt=""
              width={80}
              height={80}
              className={cn("drop-shadow-2xl")}
            />
          </div>

          <InviewTransition>
            OpenNCCU is a non-profit organization founded by a group of students
            in NCCU, out goal is to drive the digital transformation in NCCU and
            offering outstanding digital experiment to students.
          </InviewTransition>

          <InviewTransition>
            We launch a collection of exclusive digital tools for NCCU.
          </InviewTransition>
        </div>
      </div>

      <div className={cn("w-5/6 md:w-max m-auto flex pt-20 space-x-10")}>
        <div className={cn("max-md:space-y-10 md:flex md:space-x-10")}>
          <Image
            src={"/projects/opennccu/rain.png"}
            alt=""
            width={140}
            height={140}
            className={cn("drop-shadow-2xl")}
          />
          <Image
            src={"/projects/opennccu/s-or-n.png"}
            alt=""
            width={140}
            height={140}
            className={cn("drop-shadow-2xl")}
          />
        </div>
        <div className={cn("max-md:space-y-10 md:flex md:space-x-10")}>
          <Image
            src={"/projects/opennccu/gpa.png"}
            alt=""
            width={140}
            height={140}
            className={cn("drop-shadow-2xl")}
          />
          <Image
            src={"/projects/opennccu/review.png"}
            alt=""
            width={140}
            height={140}
            className={cn("drop-shadow-2xl")}
          />
        </div>
      </div>

      <div className={cn("h-[12dvh] flex place-items-end")}>
        <div className={cn("h-max mx-auto  text-2xl font-medium text-gray")}>
          And more coming soon...
        </div>
      </div>
      <div className={cn("h-[10dvh]")} />
    </div>
  );
};

export default OpenNCCUPage;
