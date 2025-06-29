import { cn } from "@/lib/utils";
import { Card } from "./card";
import Image from "next/image";
import Link from "next/link";
import { Translatable } from "@/components/translatable";

export const SimPOS = () => {
  return (
    <Card>
      <div className={cn("m-auto w-max space-y-4 text-center")}>
        <div className={cn("text-gray")}>iOS Development</div>
        <div className={cn("text-5xl font-medium tracking-tight")}>SimPOS</div>
        <div> 2024 Swift Student Challenge Winning Project</div>
        <div className={cn("m-auto flex w-max flex-col place-items-center")}>
          <Link href={"https://github.com/dongdong867/SimPOS"}>
            <Translatable className={cn("text-center text-blue")}>
              Source code ↗
            </Translatable>
          </Link>
          <Link href={"/works/simpos"}>
            <Translatable className={cn("text-center text-blue")}>
              Learn more ↗
            </Translatable>
          </Link>
        </div>
      </div>

      <div className={cn("h-[300px] md:h-[280px]")} />
      <Image
        src={"/projects/simpos-mock.png"}
        alt=""
        width={600}
        height={300}
        className={cn(
          "absolute -bottom-20 max-md:w-5/6 md:-bottom-32",
          "left-1/2 -translate-x-1/2 drop-shadow-2xl",
          "transition-transform group-hover/card:scale-110"
        )}
      />
    </Card>
  );
};
