import TranslatableContextButton from "@/components/translatable-context-button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-7.25rem)] text-center flex justify-center place-items-center">
      <div>
        <div className="font-display font-black -space-y-4">
          <div className="text-3xl">Hi, I'm</div>
          <div className="h-full text-7xl leading-normal text-transparent bg-title-gradient bg-clip-text">
            Dongdong867.
          </div>
        </div>
        <div className="flex justify-center place-items-center space-x-1 mt-2">
          <TranslatableContextButton className="text-lg">
            A Student
          </TranslatableContextButton>
          <Separator
            orientation="vertical"
            className="w-0.5 h-6 bg-foreground"
          />
          <TranslatableContextButton className="text-lg">
            A Full Stack Developer
          </TranslatableContextButton>
          <Separator
            orientation="vertical"
            className="w-0.5 h-6 bg-foreground"
          />
          <TranslatableContextButton className="text-lg">
            A UI/ UX Designer
          </TranslatableContextButton>
        </div>
      </div>
    </div>
  );
}
