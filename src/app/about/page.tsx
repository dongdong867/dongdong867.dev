// components
import Image from "next/image";
import { Mobile } from "./components/mobile";
import { Others } from "./components/others";
import { Backend } from "./components/backend";
import { Hosting } from "./components/hosting";
import { Frontend } from "./components/frontend";
import { Database } from "./components/database";
import { Languages } from "./components/languages";
import { SkillSets } from "./components/skill-sets";
import { InviewTransition } from "@/components/inview-transition";
// utils
import { cn } from "@/lib/utils";

const AboutPage = () => {
  return (
    <div>
      <div className={cn("flex h-[80dvh] place-items-center")}>
        <div className={cn("m-auto w-5/6 text-4xl md:w-4/5 md:text-5xl")}>
          <div className={cn("text-xl text-gray md:text-3xl")}>
            Living an ordinary life with
          </div>
          <InviewTransition>extraordinary moments.</InviewTransition>
        </div>
      </div>
      <div
        className={cn(
          "m-auto flex w-full justify-end rounded-sm bg-gray6/50 px-20 py-4 dark:bg-white md:w-5/6 md:px-40 md:py-8"
        )}
      >
        <Image
          src={"/about/avatar-outline.png"}
          alt=""
          width={500}
          height={409}
        />
      </div>
      <div
        className={cn(
          "m-auto flex h-[60dvh] w-5/6 flex-col justify-center space-y-2 text-center md:h-[80dvh]"
        )}
      >
        <div className={cn("text-gray md:text-lg")}>On the path toward</div>
        <div className={cn("text-2xl md:space-y-4 md:text-5xl")}>
          <InviewTransition>enhancing lives and</InviewTransition>
          <InviewTransition className={cn("delay-200")}>
            fostering positive change
          </InviewTransition>
        </div>
      </div>

      <SkillSets
        frontend={<Frontend />}
        backend={<Backend />}
        mobile={<Mobile />}
        database={<Database />}
        languages={<Languages />}
        hosting={<Hosting />}
        others={<Others />}
      />
    </div>
  );
};

export default AboutPage;
