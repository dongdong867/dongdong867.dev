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
            max-sm:flex-col max-sm:place-items-start
            md:space-x-1"
      >
        <TranslatableContext className="text-base">
          <Link href={"/fullstack"} className="cursor-none">
            <div className="w-full flex justify-between place-items-center space-x-1 sm:hidden">
              <div>A Full Stack Developer</div>
              <FiArrowUpRight />
            </div>
            <div className="max-sm:hidden">A Full Stack Developer</div>
          </Link>
        </TranslatableContext>

        <Separator
          orientation="vertical"
          className="w-0.5 h-5 bg-foreground max-sm:hidden"
        />

        <TranslatableContext className="text-base">
          <Link href={"/uiux"} className="cursor-none">
            <div className="w-full flex justify-between place-items-center space-x-1 sm:hidden">
              <div>A UI/ UX Designer</div>
              <FiArrowUpRight />
            </div>
            <div className="max-sm:hidden">A UI/ UX Designer</div>
          </Link>
        </TranslatableContext>
      </div>
    </div>
  );
};

export default NavTitle;
