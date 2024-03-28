import { cn } from "@/lib/utils";
import Image from "next/image";
import ThemeToggle from "./theme/theme-toggle";
import Link from "next/link";
import { Translatable } from "./translatable";

export const Navbar = () => {
  return (
    <div
      className={cn(
        "fixed w-full max-w-md max-md:w-11/12 left-1/2 -translate-x-1/2",
        "mt-4 px-4 bg-gray5/50 backdrop-blur-md rounded-full z-50 shadow-lg",
        "flex justify-between place-items-center"
      )}
    >
      <Link href={"/"}>
        <Translatable className={cn("p-1.5")}>
          <Image
            src={"/dong-icon_320px.png"}
            alt=""
            width={40}
            height={40}
            className={cn("size-10 aspect-square p-1.5 invert dark:invert-0")}
          />
        </Translatable>
      </Link>

      <div className={cn("flex font-medium")}>
        <Translatable className={cn("p-1.5")}>
          <Link href={"/works"}>Works</Link>
        </Translatable>
        <Translatable className={cn("p-1.5")}>
          <Link href={"/about"}>About</Link>
        </Translatable>
        <Translatable className={cn("p-1.5")}>
          <Link href={"/contact"}>Contact</Link>
        </Translatable>
      </div>

      <ThemeToggle />
    </div>
  );
};
