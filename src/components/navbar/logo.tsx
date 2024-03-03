import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Translatable } from "../translatable";

export const Logo = () => {
  return (
    <Translatable className={cn("p-1 rounded-full hover:bg-gray4")}>
      <Link href={"/"}>
        <Button asChild variant={"link"} size={"icon"}>
          <Image
            alt=""
            width={20}
            height={20}
            aria-label="home"
            src={"/dong-icon.png"}
            className={cn("p-2 invert dark:invert-0")}
          />
        </Button>
      </Link>
    </Translatable>
  );
};
