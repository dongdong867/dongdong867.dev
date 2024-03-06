"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const FinderFrame = ({
  experience,
  projects,
  techStack,
}: {
  experience: JSX.Element;
  projects: JSX.Element;
  techStack: JSX.Element;
}) => {
  const [selection, setSelection] = useState("experience");

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
    <motion.div
      drag
      className={cn(
        "relative w-max max-w-screen-md flex top-12 left-4 rounded-lg overflow-hidden border border-gray2 shadow-xl"
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
    </motion.div>
  );
};
