"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const FinderFrame = ({
  application,
  projects,
  techStack,
}: {
  application: JSX.Element;
  projects: JSX.Element;
  techStack: JSX.Element;
}) => {
  const [selection, setSelection] = useState("application");

  const getTitle = () => {
    switch (selection) {
      case "application":
        return "Application";
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
        "relative w-4/5 max-w-[600px] flex top-12 left-4 bg-gray5 rounded-lg overflow-hidden"
      )}
    >
      <Sidebar selection={selection} setSelection={setSelection} />
      <div className={cn("size-full")}>
        <div className={cn("px-4 py-3 font-semibold")}>{getTitle()}</div>
        <div className={cn("px-4")}>
          {selection == "application" && application}
          {selection == "projects" && projects}
          {selection == "techStack" && techStack}
        </div>
      </div>
    </motion.div>
  );
};
