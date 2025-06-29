import { cn } from "@/lib/utils";
import { Card } from "./card";
import Image from "next/image";
import Link from "next/link";
import { Translatable } from "@/components/translatable";

export const Csrone = () => {
  return (
    <Card>
      <div
        className={cn(
          "m-auto flex w-max place-items-center max-md:flex-col-reverse max-md:gap-y-10 md:space-x-20"
        )}
      >
        <Image
          src={"/projects/csrone.png"}
          alt=""
          width={200}
          height={200}
          className={cn(
            "drop-shadow-2xl transition-transform group-hover/card:scale-110"
          )}
        />
        <div className={cn("w-max space-y-4 text-center")}>
          <div className={cn("text-gray")}>NLP Research</div>
          <div className={cn("font-medium tracking-tight")}>
            <div className={cn("text-5xl")}>CSRone</div>
            <div className={cn("text-lg md:text-2xl")}>w/ NCCU</div>
          </div>
          <Link href={"/works/csrone"} className={cn("m-auto block")}>
            <Translatable className={cn("m-auto text-center text-blue")}>
              Learn more ↗
            </Translatable>
          </Link>
        </div>
      </div>
    </Card>
  );
};
