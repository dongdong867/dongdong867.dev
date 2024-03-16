import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";
import { WorkStack } from "./components/work-stack";
import { InviewTransition } from "@/components/inview-transition";
import { Experience } from "./components/experience";

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
        <WorkStack />
      <Experience />
      <div className={cn("h-[25dvh]")} />
    </>
  );
};

export default Home;
