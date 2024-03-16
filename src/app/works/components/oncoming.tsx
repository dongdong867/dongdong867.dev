import { cn } from "@/lib/utils";
import { Card } from "./card";
import { Typewriter } from "@/components/typewriter";

export const Oncoming = () => {
  return (
    <Card>
      <div
        className={cn(
          "w-max h-max m-auto text-gray text-2xl md:text-5xl font-medium tracking-tight"
          )}
      >
        <Typewriter
          words={[{ text: "More works oncoming..." }]}
          cursorClassName={cn("h-8 md:h-12 w-0.5 md:w-1")}
        />
      </div>
    </Card>
  );
};
