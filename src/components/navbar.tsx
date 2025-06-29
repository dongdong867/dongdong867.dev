import { cn } from "@/lib/utils";
import Image from "next/image";
import ThemeToggle from "./theme/theme-toggle";
import Link from "next/link";
import { Translatable } from "./translatable";

export const Navbar = () => {
  return (
    <div
      className={cn(
        "fixed left-1/2 w-full max-w-md -translate-x-1/2 max-md:w-11/12",
        "z-50 mt-4 rounded-full bg-gray5/50 px-4 shadow-lg backdrop-blur-md",
        "flex place-items-center justify-between"
      )}
    >
      <Link href={"/"}>
        <Translatable className={cn("p-1.5")}>
          <Image
            src={"/dong-icon_320px.png"}
            alt=""
            width={40}
            height={40}
            className={cn("aspect-square size-10 p-1.5 invert dark:invert-0")}
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
