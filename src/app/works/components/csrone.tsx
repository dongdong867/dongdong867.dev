import { cn } from "@/lib/utils";
import { Card } from "./card";
import Image from "next/image";

export const Csrone = () => {
  return (
    <Card>
      <div
        className={cn(
          "w-max flex place-items-center max-md:flex-col-reverse m-auto max-md:gap-y-10 md:space-x-20"
        )}
      >
        <Image
          src={"/projects/csrone.png"}
          alt=""
          width={200}
          height={200}
          className={cn("drop-shadow-2xl transition-transform group-hover/card:scale-110")}
        />
        <div className={cn("w-max text-center space-y-4")}>
          <div className={cn("text-gray")}>NLP Research</div>
          <div className={cn("font-medium tracking-tight")}>
            <div className={cn("text-5xl")}>CSRone</div>
            <div className={cn("text-lg md:text-2xl")}>w/ NCCU</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
