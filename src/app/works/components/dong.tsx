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
          "m-auto flex w-full flex-col place-items-center justify-around space-y-16 text-center"
        )}
      >
        <div
          className={cn(
            "flex w-1/2 flex-col place-items-center md:w-full md:space-y-4"
          )}
        >
          <div className={cn("text-gray")}>Brand Design</div>
          <div
            className={cn("flex place-items-center space-x-2 max-md:hidden")}
          >
            <Image
              src={"/projects/dong.png"}
              alt=""
              width={60}
              height={60}
              className={cn("size-10 dark:invert md:size-16")}
            />
            <div className={cn("text-5xl font-medium tracking-tight")}>
              Dong
            </div>
          </div>
          <div className={cn("m-auto w-max")}>
            <Link href={"https://github.com/dongdong867/dongdong867.dev"}>
              <Translatable className={cn("text-center text-blue")}>
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
            "flex place-items-center drop-shadow-2xl max-md:w-4/5",
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
            className={cn("my-auto h-max dark:hidden")}
          />
        </div>
      </div>
    </Card>
  );
};
