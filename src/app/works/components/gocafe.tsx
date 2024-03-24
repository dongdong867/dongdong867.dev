import { Translatable } from "@/components/translatable";
import { Card } from "./card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const GoCafe = () => {
  return (
    <Card>
      <div className={cn("flex max-md:flex-col")}>
        <div className={cn("md:w-3/5 my-auto space-y-10")}>
          <Image
            src={"/projects/gocafe.png"}
            alt=""
            width={80}
            height={80}
            className={cn("m-auto drop-shadow-2xl")}
          />

          <div className={cn("flex flex-col place-items-center space-y-4")}>
            <div className={cn("text-gray")}>Web Development</div>
            <div className={cn("text-5xl font-medium tracking-tight")}>
              Go Cafe
            </div>
            <div className={cn("w-max m-auto")}>
              <Link href={"https://github.com/dongdong867/go-cafe"}>
                <Translatable className={cn("text-center text-blue")}>
                  Source Code ↗
                </Translatable>
              </Link>
            </div>
          </div>
        </div>

        <div className={cn("max-md:h-[380px]")} />
        <Image
          src={"/projects/gocafe-mock.png"}
          alt=""
          width={260}
          height={600}
          className={cn(
            "absolute md:top-12 max-md:-bottom-44 max-md:left-1/2 max-md:-translate-x-1/2 md:right-20 lg:right-40 xl:right-60",
            "drop-shadow-2xl transition-transform group-hover/card:scale-110"
          )}
        />
      </div>
    </Card>
  );
};
