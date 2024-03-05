"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SetStateAction } from "react";
import { FaAppStoreIos, FaGitAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

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
  return (
    <div className={cn("w-1/4 min-w-[150px] bg-gray4/85 backdrop-blur-md")}>
      <div className={cn("flex p-4 space-x-2")}>
        <div className={cn("size-3 bg-red rounded-full")} />
        <div className={cn("size-3 bg-yellow rounded-full")} />
        <div className={cn("size-3 bg-green rounded-full")} />
      </div>

      <div className={cn("px-2 py-3 space-y-2 text-sm")}>
        <SidebarButton
          selected={selection == "application"}
          clickAction={() => setSelection("application")}
        >
          <FaAppStoreIos />
          <div>Application</div>
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
