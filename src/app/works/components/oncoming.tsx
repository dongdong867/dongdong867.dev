import { cn } from "@/lib/utils";
import { Card } from "./card";
import { Typewriter } from "@/components/typewriter";

export const Oncoming = () => {
  return (
    <Card>
      <div
        className={cn(
          "m-auto h-max w-max text-2xl font-medium tracking-tight text-gray md:text-5xl"
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
