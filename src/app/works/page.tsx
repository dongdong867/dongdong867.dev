import { cn } from "@/lib/utils";
import { Opennccu } from "./components/opennccu";
import { Dong } from "./components/dong";
import { SimPOS } from "./components/simpos";
import { What2Eat } from "./components/what2eat";
import { Csrone } from "./components/csrone";
import { GoCafe } from "./components/gocafe";
import { Oncoming } from "./components/oncoming";

const WorksPage = () => {
  return (
    <div className={cn("py-20 space-y-14")}>
      <div
        className={cn(
          "w-4/5 md:w-2/3 h-80 space-y-1",
          "flex flex-col justify-center m-auto"
        )}
      >
        <div className={cn("md:text-lg text-gray tracking-tight")}>
          Growth begins with
        </div>
        <div className={cn("text-5xl")}>the smallest of shifts.</div>
      </div>

      <Dong />
      <SimPOS />
      <Csrone />
      <div className={cn("w-full md:w-4/5 m-auto flex max-md:flex-col max-md:space-y-14 md:space-x-4 lg:space-x-14")}>
        <Opennccu />
        <What2Eat />
      </div>
      <GoCafe />
      <Oncoming />
    </div>
  );
};

export default WorksPage;
