import { InviewTransition } from "@/components/inview-transition";
import { Translatable } from "@/components/translatable";
import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Experience } from "./components/experience";
import { WorkStack } from "./components/work-stack";

const Home = () => {
  return (
    <>
      <div
        className={cn(
          "m-auto h-screen w-max md:w-2/3",
          "flex flex-col justify-center space-y-6"
        )}
      >
        <div className={cn("text-xl")}>Hi, I&apos;m</div>
        <Typewriter
          words={[
            {
              text: "Dongdong867",
              className: "text-4xl md:text-5xl font-semibold tracking-tight",
            },
          ]}
          className={cn("text-4xl md:text-5xl")}
        />
        <InviewTransition className={cn("-space-y-px py-2 text-xl text-gray")}>
          <div>A Fullstack Developer</div>
          <div>A Mobile Application Developer</div>
          <div>A NLP Engineer</div>
          <div>A Tech Lover</div>
        </InviewTransition>
      </div>
      <div
        className={cn(
          "m-auto h-screen w-full bg-white text-black sm:h-[120dvh]",
          "flex place-items-center justify-center"
        )}
      >
        <div className={cn("w-full  ")}>
          <Image
            src={"/home/swift-student-challenge-16x9.jpg"}
            alt=""
            width={1920}
            height={1080}
            className={cn(
              "m-auto aspect-video w-full max-md:hidden lg:max-w-5xl"
            )}
          />
          <Image
            src={"/home/swift-student-challenge-1x1.jpg"}
            alt=""
            width={768}
            height={768}
            className={cn("aspect-square w-full md:hidden")}
          />

          <div
            className={cn(
              "m-auto flex w-5/6 flex-col place-items-center text-pretty py-8 md:py-20"
            )}
          >
            <div className={cn("text-center text-lg tracking-wide md:text-xl")}>
              Selected as the winner of Swift Student Challenge of 2024 by Apple
              Inc.
            </div>
            <Link href={"/works/simpos"} className={cn("text-blue md:text-lg")}>
              <Translatable className={cn("p-4")}>View project ↗</Translatable>
            </Link>
          </div>
        </div>
      </div>
      <WorkStack />
      <Experience />
      <div className={cn("h-[30dvh]")} />
    </>
  );
};

export default Home;
