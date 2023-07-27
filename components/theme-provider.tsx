"use client";

import { LuSun, LuMoon, LuMonitor } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect, useState } from "react";
import TranslatableContextButton from "./translatable-context-button";

const ThemeProvider = () => {
  const [mode, setMode] = useState("system");

  useEffect(() => {
    if (
      mode === "dark" ||
      (mode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [mode]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <TranslatableContextButton className="w-10 h-10 p-0 text-2xl focus-visible:ring-transparent focus-visible:ring-offset-0">
            {mode !== "system" ? (
              <>
                <LuSun className="dark:hidden" />
                <LuMoon className="hidden dark:inline" />
              </>
            ) : (
              <LuMonitor />
            )}
          </TranslatableContextButton>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background">
        <DropdownMenuItem
          onClick={() => setMode("light")}
          className="hover:bg-gray"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setMode("dark")}
          className="hover:bg-gray"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setMode("system")}
          className="hover:bg-gray"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeProvider;
