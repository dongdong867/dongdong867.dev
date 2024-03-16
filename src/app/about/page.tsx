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
      <div className={cn("h-[80dvh] flex place-items-center")}>
        <div className={cn("w-5/6 md:w-4/5 m-auto text-4xl md:text-5xl")}>
          <div className={cn("text-xl md:text-3xl text-gray")}>
            Living an ordinary life with
          </div>
          <InviewTransition>extraordinary moments.</InviewTransition>
        </div>
      </div>
      <div
        className={cn(
          "w-full md:w-5/6 m-auto rounded-sm bg-gray6/50 dark:bg-white flex justify-end px-20 md:px-40 py-4 md:py-8"
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
          "w-5/6 h-[60dvh] md:h-[80dvh] flex flex-col justify-center m-auto space-y-2 text-center"
        )}
      >
        <div className={cn("md:text-lg text-gray")}>On the path toward</div>
        <div className={cn("text-2xl md:text-5xl md:space-y-4")}>
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
