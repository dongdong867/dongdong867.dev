import { cn } from "@/lib/utils";
import { apps } from "../../data/apps";
import Image from "next/image";

export const Application = () => {
  return (
    <div className={cn("w-max px-6 py-4")}>
      <div className={cn("grid grid-cols-4 gap-x-8 gap-y-8 place-items-center")}>
        {apps.map((app) => {
          return (
            <div key={app.label} className={cn("col-span-1 space-y-1")}>
              <Image
                src={`/apps/${app.icon}`}
                alt=""
                width={60}
                height={60}
                className={cn("aspect-square p-0.5 rounded-md")}
              />
              <div className={cn("text-sm text-center")}>{app.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
