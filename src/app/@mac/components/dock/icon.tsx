"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const DockIcon = ({
  src,
  label,
  clickAction,
}: {
  src: string;
  label: string;
  clickAction: () => void;
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger className={cn("mx-1")}>
          <Button asChild variant={"link"} size={"icon"} onClick={clickAction}>
            <Image src={src} alt="" width={40} height={40} className={cn("size-full")} />
          </Button>
        </TooltipTrigger>

        <TooltipContent align="center">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
