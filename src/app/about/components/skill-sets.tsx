"use client";

import { Translatable } from "@/components/translatable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type SkillSetsProps = {
  frontend: React.ReactNode;
  backend: React.ReactNode;
  mobile: React.ReactNode;
  database: React.ReactNode;
  languages: React.ReactNode;
  hosting: React.ReactNode;
  others: React.ReactNode;
};

export const SkillSets = ({
  frontend,
  backend,
  mobile,
  database,
  languages,
  hosting,
  others,
}: SkillSetsProps) => {
  const [selection, setSelection] = useState("frontend");

  const showSelection = () => {
    switch (selection) {
      case "frontend":
        return frontend;
      case "backend":
        return backend;
      case "mobile":
        return mobile;
      case "database":
        return database;
      case "languages":
        return languages;
      case "hosting":
        return hosting;
      case "others":
        return others;
      default:
        return <div></div>;
    }
  };

  const SkillSetButton = ({
    label,
    selectionName,
    className,
  }: {
    label: string;
    selectionName: string;
    className?: string;
  }) => {
    return (
      <Button
        variant={"outline"}
        onClick={() => setSelection(selectionName)}
        className={cn(
          "h-full text-2xl md:text-3xl text-black rounded-full p-0 m-auto md:m-2",
          className,
          {
            "dark:text-white bg-gray5 hover:bg-gray5 dark:bg-gray4 dark:hover:bg-gray4":
              selection == selectionName,
          }
        )}
      >
        <Translatable className={cn("size-full px-4 py-2 flex place-items-center")}>{label}</Translatable>
      </Button>
    );
  };

  return (
    <div className={cn("w-full h-max bg-white")}>
      <div className={cn("w-11/12 md:w-5/6 m-auto md:py-20 space-y-20")}>
        <div className={cn("flex max-md:flex-col place-items-center max-md:space-y-6")}>
          <div
            className={cn(
              "w-full md:w-2/5 max-md:text-center max-md:space-x-2 space-y-2"
            )}
          >
            <div className={cn("text-lg md:text-xl text-gray pb-4 md:pb-8")}>
              Skill Sets
            </div>
            <SkillSetButton label="Frontend" selectionName="frontend" />
            <SkillSetButton label="Backend" selectionName="backend" />
            <SkillSetButton label="Mobile" selectionName="mobile" />
            <SkillSetButton label="Database" selectionName="database" />
            <SkillSetButton
              label="Languages"
              selectionName="languages"
              className={cn("text-balance")}
            />
            <SkillSetButton label="Hosting" selectionName="hosting" />
            <SkillSetButton label="Others" selectionName="others" />
          </div>
          <div
            className={cn(
              "w-11/12 md:w-3/5 min-h-[300px] flex justify-center place-items-center space-x-2"
            )}
          >
            {showSelection()}
          </div>
        </div>
      </div>
    </div>
  );
};
