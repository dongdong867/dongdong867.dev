import { Translatable } from "@/components/translatable";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./card";

export const Opennccu = () => {
  return (
    <Card>
      <div className={cn("md:w-3/5 m-auto space-y-10")}>
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
          <div className={cn("w-max m-auto")}>
            <Link href={"https://opennccu.com"}>
              <Translatable className={cn("text-center text-blue drop-shadow-md")}>
                View Website ↗
              </Translatable>
            </Link>
          </div>
        </div>
      </div>

      <div className={cn("h-[380px]")} />

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
