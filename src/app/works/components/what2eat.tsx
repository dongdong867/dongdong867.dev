import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./card";

export const What2Eat = () => {
  return (
    <Card>
      <div className={cn("flex max-md:flex-col-reverse justify-around")}>
        <div className={cn("w-2/5 h-1 max-md:h-[380px]")} />
        <Image
          src={"/projects/what2eat-mock.png"}
          alt=""
          width={260}
          height={600}
          className={cn(
            "absolute md:top-12 max-md:-bottom-44 max-md:left-1/2 max-md:-translate-x-1/2 md:left-20 lg:left-40 xl:left-60 drop-shadow-2xl",
            "transition-transform group-hover/card:scale-110"
          )}
        />
        <div className={cn("md:w-1/2 my-auto space-y-10")}>
          <Image
            src={"/projects/what2eat.png"}
            alt=""
            width={80}
            height={80}
            className={cn("m-auto drop-shadow-2xl")}
          />

          <div className={cn("flex flex-col place-items-center space-y-4")}>
            <div className={cn("text-gray")}>Web Development</div>
            <div className={cn("text-5xl font-medium tracking-tight")}>
              What2Eat
            </div>
            <div className={cn("text-blue")}>( Close Beta )</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
