import { cn } from "@/lib/utils";
import { Finder } from "./components/finder/finder";

const MacHome = () => {
  return (
    <div className={cn("h-screen bg-mac-light dark:bg-mac-dark bg-cover bg-center bg-origin-content bg-no-repeat")}>
      <Finder />
    </div>
  );
};

export default MacHome;
