"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SetStateAction } from "react";
import { FaGitAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { WindowAction } from "../window-action";

const SidebarButton = ({
  selected,
  clickAction,
  children,
}: {
  selected: boolean;
  clickAction: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Button
      variant={"link"}
      onClick={clickAction}
      className={cn(
        "w-full h-max flex justify-start place-items-center px-4 py-1 space-x-2 font-normal hover:no-underline",
        { "bg-gray2/80": selected }
      )}
    >
      {children}
    </Button>
  );
};

export const Sidebar = ({
  selection,
  setSelection,
}: {
  selection: string;
  setSelection: React.Dispatch<SetStateAction<string>>;
}) => {
  const hideFinder = () => {
    const finder = document.getElementById("finder");
    finder?.classList.add("hidden");
  };

  return (
    <div className={cn("w-1/4 min-w-[150px] bg-gray4/85 backdrop-blur-md")}>
      <WindowAction closeAction={hideFinder} expendAction={() => {}} />

      <div className={cn("px-2 py-3 space-y-2 text-sm")}>
        <SidebarButton
          selected={selection == "experience"}
          clickAction={() => setSelection("experience")}
        >
          <MdOutlineWork />
          <div>Experience</div>
        </SidebarButton>

        <SidebarButton
          selected={selection == "projects"}
          clickAction={() => setSelection("projects")}
        >
          <FaGitAlt />
          <div>Projects</div>
        </SidebarButton>

        <SidebarButton
          selected={selection == "techStack"}
          clickAction={() => setSelection("techStack")}
        >
          <FaCode />
          <div>Tech Stack</div>
        </SidebarButton>
      </div>
    </div>
  );
};
