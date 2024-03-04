// components
import Link from "next/link";
import { Translatable } from "@/components/translatable";
// utils
import { cn } from "@/lib/utils";

const NavLink = ({ route, label }: { route: string; label: string }) => {
  return (
    <Translatable className={cn("p-1.5 rounded-md hover:bg-gray4")}>
      <Link href={route}>{label}</Link>
    </Translatable>
  );
};

export const Routes = () => {
  return (
    <div className={cn("flex place-items-center font-medium")}>
      <NavLink route={"/about"} label="About" />
      <NavLink route={"/works"} label="Works" />
      <NavLink route={"/contact"} label="Contact" />
    </div>
  );
};
