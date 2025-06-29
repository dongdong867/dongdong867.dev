import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./card";

export const What2Eat = () => {
  return (
    <Card>
      <div className={cn("flex flex-col justify-around")}>
        <div className={cn("m-auto space-y-10 md:w-1/2")}>
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
            <div
              className={cn(
                "flex flex-col place-items-center space-y-1 text-blue"
              )}
            >
              <div>( Close Beta )</div>
              <div>Case Study Working...</div>
            </div>
          </div>
        </div>
        <div className={cn("h-[350px] w-2/5")} />
        <Image
          src={"/projects/what2eat-mock.png"}
          alt=""
          width={260}
          height={600}
          className={cn(
            "absolute -bottom-44 left-1/2 -translate-x-1/2 drop-shadow-2xl",
            "transition-transform group-hover/card:scale-110"
          )}
        />
      </div>
    </Card>
  );
};
