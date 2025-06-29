import { InviewTransition } from "@/components/inview-transition";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

export const Experience = () => {
  return (
    <div className={cn("m-auto h-max w-max space-y-6 pt-28 md:w-4/5")}>
      <div className={cn("py-10 text-3xl")}>Experience</div>
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
            key={`${experience.company}-${experience.position}-${experience.start}`}
          >
            <div
              className={cn(
                "flex w-full place-items-baseline justify-between text-lg max-md:flex-col md:text-xl"
              )}
            >
              <div className={cn("font-medium")}>
                {experience.position} @{experience.company}
              </div>
              <div className={cn("text-base text-gray")}>
                {experience.start} - {experience.end}
              </div>
            </div>
          </InviewTransition>
        );
      })}
    </div>
  );
};
