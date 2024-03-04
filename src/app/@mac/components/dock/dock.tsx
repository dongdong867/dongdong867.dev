"use client";

import { cn } from "@/lib/utils";
import { DockIcon } from "./icon";
import { apps } from "../../data/apps";

export const Dock = () => {
  return (
    <div
      className={cn(
        "fixed w-max bottom-2 left-1/2 -translate-x-1/2",
        "rounded-lg bg-gray3/40 backdrop-blur-sm",
        "px-1 py-2 shadow-xl"
      )}
    >
      {apps.map((app) => {
        return (
          <DockIcon
            key={app.label}
            src={`/mac/apps/${app.icon}`}
            label={app.label}
            clickAction={() => {}}
          />
        );
      })}
    </div>
  );
};
