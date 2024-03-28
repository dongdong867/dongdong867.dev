import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";
import { WorkStack } from "./components/work-stack";
import { InviewTransition } from "@/components/inview-transition";
import { Experience } from "./components/experience";
import Link from "next/link";
import { Translatable } from "@/components/translatable";

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
          "w-full h-[120dvh] m-auto bg-white text-black",
          "flex justify-center place-items-center"
        )}
      >
        <div>
          <video
            width={500}
            muted
            autoPlay
            className={cn(
              "size-full md:max-h-[500px] lg:max-h-[600px] max-md:hidden"
            )}
          >
            <source
              src="/home/swift-student-challenge-16x9.mov"
              type="video/mp4"
            />
          </video>
          <video
            width={500}
            muted
            autoPlay
            className={cn("w-max aspect-square md:hidden")}
          >
            <source
              src="/home/swift-student-challenge-1x1.mov"
              type="video/mp4"
            />
          </video>

          <div
            className={cn(
              "w-5/6 m-auto py-8 md:py-20 text-pretty flex flex-col place-items-center"
            )}
          >
            <div className={cn("text-lg md:text-2xl text-center")}>
              Selected as the winner of Swift Student Challenge of 2024 by Apple
              Inc.
            </div>
            <Link href={"/works/simpos"} className={cn("md:text-xl text-blue")}>
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
