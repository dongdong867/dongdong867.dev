// components
import Image from "next/image";
import { Translatable } from "@/components/translatable";
import { CaseStudyTitle } from "@/components/case-study-title";
import { InviewTransition } from "@/components/inview-transition";
// utils
import { cn } from "@/lib/utils";

const OpenNCCUPage = () => {
  return (
    <div>
      <CaseStudyTitle title="OpenNCCU" label="PWA/ Web Development" />

      <div
        className={cn(
          "group/opennccu h-[40dvh] w-full text-2xl font-medium sm:text-4xl md:text-5xl"
        )}
      >
        <div
          className={cn(
            "m-auto flex h-full w-max place-items-center justify-center space-x-2 md:space-x-3"
          )}
        >
          <div>Design</div>
          <div>
            <div
              className={cn(
                "animate-sliding-top text-[#59CC95] transition-all"
              )}
            >
              by
            </div>
            <div
              className={cn("animate-sliding-down text-gray transition-all")}
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
        className={cn("m-auto overflow-hidden bg-gray5 lg:w-4/5")}
      />

      <div className={cn("h-[20dvh]")} />

      <div className={cn("m-auto w-5/6 space-y-20 md:w-max md:text-lg")}>
        <div className={cn("space-y-10 md:max-w-[600px]")}>
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

      <div className={cn("m-auto flex w-5/6 space-x-10 pt-20 md:w-max")}>
        <div className={cn("max-md:space-y-10 md:flex md:space-x-10")}>
          <Translatable>
            <Image
              src={"/projects/opennccu/rain.png"}
              alt=""
              width={140}
              height={140}
              className={cn("drop-shadow-2xl")}
            />
          </Translatable>
          <Translatable>
            <Image
              src={"/projects/opennccu/s-or-n.png"}
              alt=""
              width={140}
              height={140}
              className={cn("drop-shadow-2xl")}
            />
          </Translatable>
        </div>
        <div className={cn("max-md:space-y-10 md:flex md:space-x-10")}>
          <Translatable>
            <Image
              src={"/projects/opennccu/gpa.png"}
              alt=""
              width={140}
              height={140}
              className={cn("drop-shadow-2xl")}
            />
          </Translatable>
          <Translatable>
            <Image
              src={"/projects/opennccu/review.png"}
              alt=""
              width={140}
              height={140}
              className={cn("drop-shadow-2xl")}
            />
          </Translatable>
        </div>
      </div>

      <div className={cn("flex h-[12dvh] place-items-end")}>
        <div className={cn("mx-auto h-max  text-2xl font-medium text-gray")}>
          And more coming soon...
        </div>
      </div>
      <div className={cn("h-[10dvh]")} />
    </div>
  );
};

export default OpenNCCUPage;
