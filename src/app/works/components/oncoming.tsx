import { cn } from "@/lib/utils";
import { Card } from "./card";
import { Typewriter } from "@/components/typewriter";

export const Oncoming = () => {
  return (
    <Card>
      <div
        className={cn(
          "w-max h-max m-auto text-gray text-5xl font-medium tracking-tight"
        )}
      >
        <Typewriter
          words={[{ text: "More works oncoming..." }]}
          cursorClassName={cn("h-12 w-1")}
        />
      </div>
    </Card>
  );
};
