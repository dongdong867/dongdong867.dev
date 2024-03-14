import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./card";
import { Translatable } from "@/components/translatable";

export const Dong = () => {
  return (
    <Card>
      <div
        className={cn(
          "w-full m-auto text-center space-y-16 flex flex-col justify-around place-items-center"
        )}
      >
        <div
          className={cn(
            "w-1/2 md:w-full md:space-y-4 flex flex-col place-items-center"
          )}
        >
          <div className={cn("text-gray")}>Brand Design</div>
          <div className={cn("max-md:hidden flex place-items-center space-x-2")}>
            <Image
              src={"/projects/dong.png"}
              alt=""
              width={60}
              height={60}
              className={cn("size-10 md:size-16 dark:invert")}
            />
            <div
              className={cn("text-5xl font-medium tracking-tight")}
            >
              Dong
            </div>
          </div>
          <div className={cn("w-max m-auto")}>
              <Link href={"https://github.com/dongdong867/dongdong867.dev"}>
                <Translatable className={cn("text-center text-blue drop-shadow-md")}>
                  Source Code ↗
                </Translatable>
              </Link>
            </div>
          {/* <Link href={"/works/dong"}> */}
          {/* <div className={cn("text-blue text-lg after:content-['_↗']")}>Learn more</div> */}
          {/* </Link> */}
        </div>

        <div
          className={cn(
            "max-md:w-4/5 flex place-items-center drop-shadow-2xl",
            "transition-transform group-hover/card:scale-110"
          )}
        >
          <Image
            src={"/projects/dong-logo-white.png"}
            alt=""
            width={590}
            height={140}
            className={cn("hidden dark:block")}
          />

          <Image
            src={"/projects/dong-logo-black.png"}
            alt=""
            width={590}
            height={140}
            className={cn("h-max my-auto dark:hidden")}
          />
        </div>
      </div>
    </Card>
  );
};
