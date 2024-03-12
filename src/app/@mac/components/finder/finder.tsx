"use client";

import { Projects } from "./projects";
import { TechStack } from "./tech-stack";
import { Experience } from "./experience";
import { FinderFrame } from "./frame";
import { cn } from "@/lib/utils";
import { ApplicationWindow } from "../window";
import { useState } from "react";

export const Finder = () => {
  const [selection, setSelection] = useState("experience");

  return (
    <ApplicationWindow
      id="finder"
      detectUpdated={selection}
      className={cn("hidden")}
    >
      <div className={cn("relative w-max h-max")}>
        <FinderFrame
          selection={selection}
          setSelection={setSelection}
          experience={<Experience />}
          projects={<Projects />}
          techStack={<TechStack />}
        />
      </div>
    </ApplicationWindow>
  );
};
