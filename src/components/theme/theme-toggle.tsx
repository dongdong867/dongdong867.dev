"use client";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
// icons
import { MdSunny, MdDarkMode } from "react-icons/md";
// utils
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Translatable } from "../translatable";

const ThemeDropdownItem = ({
  themeOption,
}: {
  themeOption: "Light" | "Dark" | "System";
}) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuItem onClick={() => setTheme(themeOption.toLowerCase())}>
      {themeOption}
    </DropdownMenuItem>
  );
};

const ThemeToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="theme-toggle"
          variant={"link"}
          size={"icon"}
          className="p-1 size-max rounded-full hover:bg-gray4"
        >
          <Translatable>
            <MdSunny className={cn("size-10 p-2 dark:hidden")} />
            <MdDarkMode
              className={cn("size-10 p-2 hidden dark:block dark:scale-100")}
            />
          </Translatable>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent>
        <ThemeDropdownItem themeOption="Light" />
        <ThemeDropdownItem themeOption="Dark" />
        <ThemeDropdownItem themeOption="System" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
