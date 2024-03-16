import { Translatable } from "@/components/translatable";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const SkillIcon = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <>
      <Translatable className={cn("size-fit max-lg:hidden")}>
        <Image
          src={`/tech-stack/${src}`}
          alt=""
          width={200}
          height={200}
          className={cn(
            "relative size-fit drop-shadow-2xl grayscale hover:grayscale-0",
            className
          )}
        />
      </Translatable>
      <Image
        src={`/tech-stack/${src}`}
        alt=""
        width={200}
        height={200}
        className={cn(
          "size-fit drop-shadow-2xl grayscale-[10%] hover:grayscale-0 lg:hidden",
          className
        )}
      />
    </>
  );
};
