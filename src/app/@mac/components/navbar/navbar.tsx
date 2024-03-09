// components
import { Logo } from "./logo";
import { Routes } from "./routes";
import ThemeToggle from "@/components/theme/theme-toggle";
// utils
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <div
      className={cn(
        "fixed w-full left-1/2 -translate-x-1/2",
        "flex justify-between place-items-center",
        "bg-gray4/30 backdrop-blur-sm shadow-lg",
        "transition-transform"
      )}
    >
      <div className={cn("flex")}>
        <Logo />
        <Routes />
      </div>
      <ThemeToggle />
    </div>
  );
};
