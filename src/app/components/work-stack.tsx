import { InviewTransition } from "@/components/inview-transition";
import { cn } from "@/lib/utils";

export const WorkStack = () => {
  return (
    <InviewTransition className={cn("py-2 -space-y-px")}>
      <div>A Fullstack Developer</div>
      <div>A Mobile Application Developer</div>
      <div>A NLP Engineer</div>
      <div>A Tech Lover</div>
    </InviewTransition>
  );
};
