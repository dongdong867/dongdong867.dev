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
    if (element) {
      setWidth(element.offsetWidth);
      setHeight(element.offsetHeight);
    }
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
          className="w-9 h-9 p-0 bg-transparent text-xl hover:bg-gray/50 hover:cursor-none focus-visible:ring-transparent focus-visible:ring-offset-0"
          onMouseMove={(e) => {
            if (e.clientX < width && e.clientY < height) {
              setClientX(e.clientX / 2);
              setClientY(e.clientY / 2);
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
                  transform: `translate(${clientX}%, ${clientY}%)`,
                }}
              />
              <LuMoon
                className="hidden dark:inline"
                style={{
                  transform: `translate(${clientX}%, ${clientY}%)`,
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
