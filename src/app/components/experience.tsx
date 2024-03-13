import { cn } from "@/lib/utils";
import { experiences } from "@/data/experience";
import { InviewTransition } from "@/components/inview-transition";

export const Experience = () => {
  return (
    <div className={cn("w-max md:w-4/5 h-max m-auto pt-28 space-y-6")}>
      <div className={cn("text-3xl py-10")}>Experience</div>
      {experiences.map((experience) => {
        return (
          <InviewTransition
            repeat={false}
            offscreen={{
              y: 200,
              opacity: 0,
              display: "hidden",
            }}
            onscreen={{
              y: 0,
              opacity: 1,
              display: "block",
              transitionDuration: "800ms",
            }}
            key={`${experience.company}-${experience.position}`}
          >
            <div
              className={cn(
                "w-full flex max-md:flex-col justify-between place-items-baseline text-lg md:text-xl"
              )}
            >
              <div className={cn("font-medium")}>
                {experience.position} @{experience.company}
              </div>
              <div className={cn("text-gray text-base")}>
                {experience.start} - {experience.end}
              </div>
            </div>
          </InviewTransition>
        );
      })}
    </div>
  );
};
