import { cn } from "@/lib/utils";
import { Csrone } from "./components/csrone";
import { Dong } from "./components/dong";
import { GoCafe } from "./components/gocafe";
import { Oncoming } from "./components/oncoming";
import { Opennccu } from "./components/opennccu";
import { SimPOS } from "./components/simpos";
import { What2Eat } from "./components/what2eat";

const WorksPage = () => {
  return (
    <div className={cn("space-y-14 py-20")}>
      <div
        className={cn(
          "h-80 w-4/5 space-y-1 md:w-2/3",
          "m-auto flex flex-col justify-center"
        )}
      >
        <div className={cn("tracking-tight text-gray md:text-lg")}>
          Growth begins with
        </div>
        <div className={cn("text-5xl")}>the smallest of shifts.</div>
      </div>

      <Dong />
      <SimPOS />
      <div
        className={cn(
          "m-auto flex w-full max-md:flex-col max-md:space-y-14 md:w-4/5 md:space-x-4 lg:space-x-14"
        )}
      >
        <Opennccu />
        <What2Eat />
      </div>
      <Csrone />
      <GoCafe />
      <Oncoming />
    </div>
  );
};

export default WorksPage;
