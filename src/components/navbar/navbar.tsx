import ThemeToggle from "../theme/theme-toggle";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Routes } from "./routes";

export const Navbar = () => {

  return (
    <div
      className={cn(
        "fixed w-11/12 max-w-lg left-1/2 -translate-x-1/2 mt-4 my-4",
        "flex justify-between place-items-center",
        "bg-gray5/90 rounded-full backdrop-blur-sm shadow-xl",
        "transition-transform",
      )}
    >
      <Logo />
      <Routes />
      <ThemeToggle />
    </div>
  );
};
