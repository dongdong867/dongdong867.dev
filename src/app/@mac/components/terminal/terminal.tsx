import { cn } from "@/lib/utils";
import { Frame } from "./frame";
import { ApplicationWindow } from "../window";

export const Terminal = () => {
  return (
    <ApplicationWindow
      id="terminal"
      className={cn("absolute w-max h-max hidden")}
    >
      <Frame />
    </ApplicationWindow>
  );
};
