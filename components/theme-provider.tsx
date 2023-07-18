"use client";

import { LuSun, LuMoon, LuMonitor } from "react-icons/lu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect, useState } from "react";

const ThemeProvider = () => {
  const [mode, setMode] = useState("system");

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const handleRef = (element: HTMLButtonElement) => {
    setWidth(element.offsetWidth);
    setHeight(element.offsetHeight);
  };

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
        <Button
          ref={handleRef}
          className="w-12 h-9 p-0 bg-white/0 text-primary text-xl hover:bg-muted-foreground/30 hover:cursor-none"
          onMouseMove={(e) => {
            if (e.clientX < width && e.clientY < height) {
              setClientX(e.clientX / 3);
              setClientY(e.clientY / 3);
            }
          }}
          onMouseLeave={() => {
            setClientX(0);
            setClientY(0);
          }}
        >
          {mode !== "system" ? (
            <>
              <LuSun
                className="dark:hidden"
                style={{
                  transform: `translate((${clientX}-20)px, (${clientY}-20)px)`,
                }}
              />
              <LuMoon
                className="hidden dark:inline"
                style={{
                  transform: `translate((${clientX}-20)px, (${clientY}-20)px)`,
                }}
              />
            </>
          ) : (
            <LuMonitor
              style={{
                transform: `translate(${clientX}%, ${clientY}%)`,
                top: `20px`,
              }}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setMode("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeProvider;
