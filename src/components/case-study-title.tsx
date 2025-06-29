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
        "m-auto h-[40dvh] w-full space-y-4 md:w-4/5",
        "flex flex-col place-items-center justify-end md:place-items-start"
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
