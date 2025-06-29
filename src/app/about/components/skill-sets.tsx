"use client";

import { Translatable } from "@/components/translatable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
          "m-auto h-full rounded-full p-0 text-2xl text-black md:m-2 md:text-3xl",
          className,
          {
            "bg-gray5 hover:bg-gray5 dark:bg-gray4 dark:text-white dark:hover:bg-gray4":
              selection == selectionName,
          }
        )}
      >
        <Translatable
          className={cn("flex size-full place-items-center px-4 py-2")}
        >
          {label}
        </Translatable>
      </Button>
    );
  };

  return (
    <div className={cn("h-max w-full bg-white")}>
      <div className={cn("m-auto w-11/12 space-y-20 md:w-5/6 md:py-20")}>
        <div
          className={cn(
            "flex place-items-center max-md:flex-col max-md:space-y-6"
          )}
        >
          <div
            className={cn(
              "w-full space-y-2 max-md:space-x-2 max-md:text-center md:w-2/5"
            )}
          >
            <div className={cn("pb-4 text-lg text-gray md:pb-8 md:text-xl")}>
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
              "flex min-h-[300px] w-11/12 place-items-center justify-center space-x-2 md:w-3/5"
            )}
          >
            {showSelection()}
          </div>
        </div>
      </div>
    </div>
  );
};
