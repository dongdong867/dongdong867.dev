import Link from "next/link";
import TranslatableContext from "./translatable-context";
import { FiArrowUpRight } from "react-icons/fi";
import { Separator } from "./ui/separator";

const NavTitle = () => {
  return (
    <div>
      <div
        className="
          w-full h-max
          m-auto
          text-center font-display font-black
          -space-y-2
          md:-space-y-4
        "
      >
        <div className="text-xl md:text-3xl">Hi, I&apos;m</div>
        <div
          className="
              w-max 
              m-auto
              text-4xl text-transparent 
              drop-shadow-md
              leading-normal 
              bg-title-gradient bg-clip-text 
              md:text-6xl md:leading-normal"
        >
          Dongdong867.
        </div>
      </div>
      <div
        className="
            w-full h-max
            m-auto
            font-semibold 
            flex justify-center place-items-center 
            max-sm:w-max
            max-sm:mt-2
            max-sm:flex-col
            sm:space-x-4"
      >
        <div>A Full Stack Developer</div>

        <Separator
          orientation="vertical"
          className="w-0.5 h-5 bg-foreground max-sm:hidden"
        />

        <div>A Student</div>

        <Separator
          orientation="vertical"
          className="w-0.5 h-5 bg-foreground max-sm:hidden"
        />

        <div>A Tech Lover</div>
      </div>
    </div>
  );
};

export default NavTitle;
