"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

export const FinderFrame = ({
  experience,
  projects,
  techStack,
}: {
  experience: JSX.Element;
  projects: JSX.Element;
  techStack: JSX.Element;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [selection, setSelection] = useState("experience");

  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current?.offsetWidth ?? 0);
  }, [selection]);

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
      dragConstraints={{
        top: 0,
        left: -width + 20,
        right: windowWidth - 20,
        bottom: windowHeight - 20,
      }}
      dragElastic={0.1}
      ref={ref}
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
    </motion.div>
  );
};
