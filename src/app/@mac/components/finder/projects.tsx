"use client";

import { useState } from "react";
import { projects } from "../../data/projects";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ProjectDetail = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className={cn("w-full flex justify-between text-xs border-b border-gray3")}>
      <div className={cn("text-gray")}>{label}</div>
      <div>{value}</div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className={cn("w-full max-w-[600px] flex")}>
      <div className={cn("w-2/3")}>
        <div className={cn("max-w-[300px] aspect-square m-auto p-10")}>
          <Image
            src={`/mac/projects/${selectedProject.icon}`}
            alt=""
            width={300}
            height={300}
            className={cn("size-full rounded-3xl shadow-2xl")}
          />
        </div>
        <div
          className={cn(
            "flex p-2 overflow-hidden overflow-x-scroll"
          )}
        >
          {projects.map((project) => {
            return (
              <Button
                key={project.name}
                variant={"link"}
                onClick={() => setSelectedProject(project)}
                className={cn("p-2.5 aspect-square size-full", {"bg-gray3": project.name == selectedProject.name})}
              >
                <Image
                  src={`/mac/projects/${project.icon}`}
                  alt=""
                  width={100}
                  height={100}
                  className={cn("max-w-12 rounded-md")}
                />
              </Button>
            );
          })}
        </div>
      </div>
      <div className={cn("w-0.5 bg-gray6")} />
      <div className={cn("w-1/3 min-w-[180px] mx-auto space-y-4 px-3 py-4")}>
        <div className={cn("flex place-items-center space-x-3")}>
          <Image
            src={`/mac/projects/${selectedProject.icon}`}
            alt=""
            width={50}
            height={50}
            className={cn("rounded-md")}
          />
          <div>
            <div className={cn("font-medium")}>{selectedProject.name}</div>
            <div className={cn("text-xs")}>{selectedProject.type}</div>
          </div>
        </div>
        <div className={cn("space-y-1")}>
          <div className={cn("text-sm font-medium")}>Information</div>
          <ProjectDetail label={"Started"} value={selectedProject.start} />
          <ProjectDetail label={"Ended"} value={selectedProject.end} />
        </div>
      </div>
    </div>
  );
};
