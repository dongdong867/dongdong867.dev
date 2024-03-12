"use client";

import { SetStateAction } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

export const FinderFrame = ({
  selection,
  setSelection,
  experience,
  projects,
  techStack,
}: {
  selection: string;
  setSelection: React.Dispatch<SetStateAction<string>>;
  experience: JSX.Element;
  projects: JSX.Element;
  techStack: JSX.Element;
}) => {
  const getTitle = () => {
    switch (selection) {
      case "experience":
        return "Experience";
      case "projects":
        return "Projects";
      case "techStack":
        return "Tech Stack";
    }
  };

  return (
    <div
      className={cn(
        "relative w-max max-w-screen-md top-12 flex rounded-lg overflow-hidden border border-gray2 shadow-xl"
      )}
    >
      <Sidebar selection={selection} setSelection={setSelection} />
      <div className={cn("w-0.5 bg-gray6")} />
      <div className={cn("size-full")}>
        <div className={cn("px-4 py-3 font-semibold bg-gray3")}>
          {getTitle()}
        </div>
        <div className={cn("bg-gray5")}>
          {selection == "experience" && experience}
          {selection == "projects" && projects}
          {selection == "techStack" && techStack}
        </div>
      </div>
    </div>
  );
};
