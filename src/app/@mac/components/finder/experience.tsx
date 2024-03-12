"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { experiences } from "../../data/experiences";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ExperienceInfo = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className={cn("flex justify-between border-b border-gray3")}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  return (
    <div className={cn("flex bg-gray5")}>
      <div>
        <div className={cn("p-2")}>
          {experiences.map((experience) => {
            return (
              <Button
                variant={"link"}
                key={`${experience.name}-${experience.company}`}
                onClick={() => setSelectedExperience(experience)}
                className={cn(
                  "w-full h-max flex justify-start place-items-center space-x-2  hover:no-underline",
                  {
                    "bg-gray3":
                      selectedExperience.company == experience.company &&
                      selectedExperience.name == experience.name,
                  }
                )}
              >
                <Image
                  src={`/experience/${experience.icon}`}
                  alt=""
                  width={40}
                  height={40}
                  className={cn("rounded-md")}
                />
                <div>{experience.name}</div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className={cn("w-px bg-gray6")} />
      <div className={cn("max-w-[200px] p-4 space-y-2")}>
        <Image
          src={`/experience/${selectedExperience.icon}`}
          alt=""
          width={150}
          height={150}
          className={cn("rounded-lg m-auto")}
        />

        <div className={cn("-space-y-1")}>
          <div className={cn("font-semibold")}>{selectedExperience.name}</div>
          <div className={cn("text-gray text-sm")}>
            {selectedExperience.company}
          </div>
        </div>

        <div className={cn("text-xs space-y-1")}>
          <div className={cn("text-sm font-semibold")}>Information</div>
          <ExperienceInfo label={"Start"} value={selectedExperience.start} />
          <ExperienceInfo label={"End"} value={selectedExperience.end} />
          <div className={cn("border-b border-gray3")}>
            <div>Tech Used:</div>
            <div>{selectedExperience.techUsed}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
