"use client";

import { cn } from "@/lib/utils";
import { WindowAction } from "../window-action";

export const TopBar = () => {
  const hideTerminal = () => {
    const terminal = document.getElementById("terminal");
    terminal?.classList.add("hidden");
  };
  return (
    <div className={cn("w-full flex place-items-center bg-gray4")}>
      <WindowAction closeAction={hideTerminal} expendAction={() => {}} />
    </div>
  );
};
