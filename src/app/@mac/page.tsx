import { cn } from "@/lib/utils";
import { Finder } from "./components/finder/finder";
import { Terminal } from "./components/terminal/terminal";

const MacHome = () => {
  return (
    <div
      className={cn(
        "w-full h-screen bg-mac-light dark:bg-mac-dark",
        "bg-cover bg-center bg-origin-content bg-no-repeat"
      )}
    >
      <Finder />
      <Terminal />
    </div>
  );
};

export default MacHome;
