import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Dong = () => {
  return (
    <div
      className={cn(
        "w-11/12 md:w-4/5 h-max m-auto py-20 bg-gray5/50 rounded-lg drop-shadow-card"
      )}
    >
      <div
        className={cn(
          "w-full m-auto text-center space-y-16 flex flex-col justify-around place-items-center"
        )}
      >
        <div className={cn("space-y-4 flex flex-col place-items-center")}>
          <div className={cn("w-max text-gray")}>Brand Design</div>
          <div className={cn("w-max flex place-items-center space-x-2")}>
            <Image
              src={"/projects/dong.png"}
              alt=""
              width={60}
              height={60}
              className={cn("dark:invert")}
            />
            <div className={cn("text-5xl font-medium tracking-tight")}>
              Dong
            </div>
          </div>
          {/* <Link href={"/works/dong"}> */}
          {/* <div className={cn("text-blue text-lg after:content-['_↗']")}>Learn more</div> */}
          {/* </Link> */}
        </div>

        <div
          className={cn(
            "max-md:w-3/5 flex place-items-center drop-shadow-2xl",
            "transition-transform hover:scale-110"
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
    </div>
  );
};
