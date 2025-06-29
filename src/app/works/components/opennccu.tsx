import { Translatable } from "@/components/translatable";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./card";

export const Opennccu = () => {
  return (
    <Card className={cn("h-full")}>
      <div className={cn("m-auto space-y-10 md:w-3/5")}>
        <Image
          src={"/projects/opennccu.png"}
          alt=""
          width={80}
          height={80}
          className={cn("m-auto drop-shadow-2xl")}
        />

        <div className={cn("flex flex-col place-items-center space-y-4")}>
          <div className={cn("text-gray")}>Web Development</div>
          <div className={cn("text-5xl font-medium tracking-tight")}>
            OpenNCCU
          </div>
          <div
            className={cn(
              "m-auto flex w-max flex-col place-items-center space-y-1"
            )}
          >
            <Link href={"https://opennccu.com"} className={cn("block")}>
              <Translatable className={cn("text-center text-blue")}>
                View website ↗
              </Translatable>
            </Link>
            <Link href={"/works/opennccu"} className={cn("block")}>
              <Translatable className={cn("text-center text-blue")}>
                Learn more ↗
              </Translatable>
            </Link>
          </div>
        </div>
      </div>

      <div className={cn("h-[350px]")} />

      <Image
        src={"/projects/opennccu-mock.png"}
        alt=""
        width={260}
        height={600}
        className={cn(
          "absolute -bottom-44 left-1/2 -translate-x-1/2",
          "drop-shadow-2xl transition-transform group-hover/card:scale-110"
        )}
      />
    </Card>
  );
};
