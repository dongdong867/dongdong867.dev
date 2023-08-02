import TranslatableContext from "@/components/translatable-context";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-7.25rem)] text-center flex justify-center place-items-center">
      <div>
        <div className="font-display font-black -space-y-4">
          <div className="text-3xl">Hi, I'm</div>
          <div className="h-full text-6xl leading-normal text-transparent bg-title-gradient bg-clip-text">
            Dongdong867.
          </div>
        </div>
        <div className="h-max flex justify-center place-items-center space-x-1">
          <TranslatableContext className="text-base px-3 py-1">
            <Link href={"/student"} className="cursor-none">
              A Student
            </Link>
          </TranslatableContext>
          <Separator
            orientation="vertical"
            className="w-0.5 h-5 bg-foreground"
          />
          <TranslatableContext className="text-base px-3 py-1">
            <Link href={"/fullstack"} className="cursor-none">
              A Full Stack Developer
            </Link>
          </TranslatableContext>
          <Separator
            orientation="vertical"
            className="w-0.5 h-5 bg-foreground"
          />
          <TranslatableContext className="text-base px-3 py-1">
            <Link href={"/uiux"} className="cursor-none">
              A UI/ UX Designer
            </Link>
          </TranslatableContext>
        </div>
      </div>
    </div>
  );
}
