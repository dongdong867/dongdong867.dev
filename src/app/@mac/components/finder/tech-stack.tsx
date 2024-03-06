"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { techStack } from "../../data/tech-stack";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState(techStack[0]);
  const [selectedItem, setSelectedItem] = useState(selectedCategory.list[0]);

  return (
    <div className={cn("flex text-sm")}>
      <div className={cn("min-w-[200px] min-h-[280px]")}>
        <div className={cn("text-xs font-semibold pl-8 py-1.5")}>
          Categories
        </div>
        <div className={cn("h-0.5 bg-gray4")} />
        <div className={cn("px-2 py-2")}>
          {techStack.map((category) => {
            return (
              <Button
                variant={"link"}
                key={category.name}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedItem(category.list[0]);
                }}
                className={cn(
                  "w-full h-max flex justify-start place-items-center space-x-2 p-0.5 px-3 rounded-md hover:no-underline",
                  {
                    "bg-gray3": selectedCategory.name == category.name,
                  }
                )}
              >
                <Image
                  src={"/mac/apps/folder.png"}
                  alt=""
                  width={20}
                  height={20}
                />
                <div>{category.name}</div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className={cn("w-0.5 bg-gray6")} />
      <div className={cn("min-w-[180px] min-h-[280px]")}>
        <div className={cn("text-xs font-semibold pl-8 py-1.5")}>Items</div>
        <div className={cn("h-0.5 bg-gray4")} />
        <div className={cn("px-3 py-2")}>
          {selectedCategory.list.map((item) => {
            return (
              <Button
                variant={"link"}
                key={item.name}
                onClick={() => setSelectedItem(item)}
                className={cn(
                  "w-full h-max flex justify-start place-items-center space-x-2 p-0.5 px-3 rounded-md hover:no-underline",
                  { "bg-gray3": selectedItem.name == item.name }
                )}
              >
                <Image
                  src={`/mac/tech-stack/${item.icon}`}
                  alt=""
                  width={20}
                  height={20}
                />
                <div>{item.name}</div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className={cn("w-0.5 bg-gray6")} />
      <div className={cn("min-w-[200px] my-auto")}>
        <Image
          src={`/mac/tech-stack/${selectedItem.icon}`}
          alt=""
          width={100}
          height={100}
          className={cn("w-3/4 h-auto p-2 m-auto")}
        />
        <div className={cn("p-4")}>
          <div className={cn("font-semibold")}>{selectedItem.name}</div>
          <div className={cn("text-gray")}>{selectedCategory.name}</div>
        </div>
      </div>
    </div>
  );
};
