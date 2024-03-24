import { cn } from "@/lib/utils";
import { Typewriter } from "./typewriter";

export const CaseStudyTitle = ({
  title,
  label,
}: {
  title: string;
  label: string;
}) => {
  return (
    <div
      className={cn(
        "w-full md:w-4/5 h-[40dvh] m-auto space-y-4",
        "flex flex-col justify-end place-items-center md:place-items-start"
      )}
    >
      <Typewriter
        words={[
          {
            text: title,
            className: "text-5xl font-medium tracking-tight",
          },
        ]}
      />
      <div className={cn("text-gray")}>{label}</div>
    </div>
  );
};
