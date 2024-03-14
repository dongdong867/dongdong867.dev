import { cn } from "@/lib/utils";
import { Opennccu } from "./components/opennccu";
import { Dong } from "./components/dong";
import { SimPOS } from "./components/simpos";
import { What2Eat } from "./components/what2eat";
import { Csrone } from "./components/csrone";
import { LetsBeatGoogle } from "./components/lets-beat-google";
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
      <Csrone />
      <Opennccu />
      <What2Eat />
      <SimPOS />
      <GoCafe />
      <Oncoming />
    </div>
  );
};

export default WorksPage;
