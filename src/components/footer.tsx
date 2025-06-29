import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <div
      className={cn(
        "h-20 w-full text-center text-sm text-gray",
        "flex place-items-center justify-center"
      )}
    >
      <div className={cn("size-max")}>Copyright © 2024 Dongdong867</div>
    </div>
  );
};
