import { cn } from "@/lib/utils";
import { Card } from "./card";
import Image from "next/image";
import Link from "next/link";
import { Translatable } from "@/components/translatable";

export const SimPOS = () => {
  return (
    <Card>
      <div className={cn("w-max m-auto text-center space-y-4")}>
        <div className={cn("text-gray")}>iOS Development</div>
        <div className={cn("text-5xl font-medium tracking-tight")}>SimPOS</div>
        <div className={cn("w-max m-auto")}>
              <Link href={"https://github.com/dongdong867/SimPOS"}>
                <Translatable className={cn("text-center text-blue drop-shadow-md")}>
                  Source Code ↗
                </Translatable>
              </Link>
            </div>
      </div>

      <div className={cn("h-[120px] md:h-[280px]")} />
      <Image
        src={"/projects/simpos-mock.png"}
        alt=""
        width={600}
        height={300}
        className={cn(
          "absolute max-md:w-5/6 -bottom-20 md:-bottom-32",
          "left-1/2 -translate-x-1/2 drop-shadow-2xl",
          "transition-transform group-hover/card:scale-110"
        )}
      />
    </Card>
  );
};
