import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";
import { WorkStack } from "./components/work-stack";
import { InviewTransition } from "@/components/inview-transition";
import { Experience } from "./components/experience";
import Link from "next/link";
import { Translatable } from "@/components/translatable";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div
        className={cn(
          "w-max md:w-2/3 m-auto h-screen",
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
        <InviewTransition className={cn("py-2 -space-y-px text-gray text-lg")}>
          <div>A Fullstack Developer</div>
          <div>A Mobile Application Developer</div>
          <div>A NLP Engineer</div>
          <div>A Tech Lover</div>
        </InviewTransition>
      </div>
      <div
        className={cn(
          "w-full h-screen sm:h-[120dvh] m-auto bg-white text-black",
          "flex justify-center place-items-center"
        )}
      >
        <div className={cn("size-full")}>
          <Image
            src={"/home/swift-student-challenge-16x9.jpg"}
            alt=""
            width={1920}
            height={1080}
            className={cn(
              "w-full m-auto aspect-video max-md:hidden lg:max-w-5xl"
            )}
          />
          <Image
            src={"/home/swift-student-challenge-1x1.jpg"}
            alt=""
            width={768}
            height={768}
            className={cn("w-full aspect-square md:hidden")}
          />

          <div
            className={cn(
              "w-5/6 m-auto py-8 md:py-20 text-pretty flex flex-col place-items-center"
            )}
          >
            <div className={cn("text-lg md:text-xl text-center tracking-wide")}>
              Selected as the winner of Swift Student Challenge of 2024 by Apple
              Inc.
            </div>
            <Link href={"/works/simpos"} className={cn("md:text-lg text-blue")}>
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
