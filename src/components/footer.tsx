import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <div
      className={cn(
        "w-full h-20 text-center text-sm text-gray",
        "flex justify-center place-items-center"
      )}
    >
      <div className={cn("size-max")}>Copyright © 2024 Dongdong867</div>
    </div>
  );
};
