import TranslatableContext from "@/components/translatable-context";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-7.5rem)] text-center flex justify-center place-items-center max-sm:h-[calc(100vh-8.25rem)]">
      <div>
        <div className="font-display font-black -space-y-2 cursor-default md:-space-y-4">
          <div className="text-xl md:text-3xl">Hi, I'm</div>
          <div
            className="
              h-full 
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
            max-sm:w-4/5
            max-sm:mt-2
            max-sm:flex-col max-sm:place-items-start
            md:space-x-1"
        >
          <TranslatableContext className="text-base px-3 py-1">
            <Link href={"/student"} className="cursor-none">
              <div className="w-full flex justify-between place-items-center space-x-1 sm:hidden">
                <div>A Student</div>
                <FiArrowUpRight />
              </div>
              <div className="max-sm:hidden">A Student</div>
            </Link>
          </TranslatableContext>
          <Separator
            orientation="vertical"
            className="w-0.5 h-5 bg-foreground max-sm:hidden"
          />
          <TranslatableContext className="text-base px-3 py-1">
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
          <TranslatableContext className="text-base px-3 py-1">
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
    </div>
  );
}
