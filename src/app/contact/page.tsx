// components
import Link from "next/link";
import { InviewTransition } from "@/components/inview-transition";
// utils
import { cn } from "@/lib/utils";

const Contact = ({
  label,
  src,
  children,
}: {
  label: string;
  src?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("w-full p-8 md:min-h-[20dvh] md:w-3/4")}>
      <div className={cn("max-lg:space-y-2 lg:flex")}>
        <div className={cn("w-1/3 text-sm text-gray md:text-lg")}>{label}</div>
        {src && (
          <Link
            href={src ?? ""}
            className={cn("block w-2/3 text-xl tracking-tight md:text-4xl")}
          >
            {src.replace("https://", "").replace("mailto:", "")}
          </Link>
        )}
        {children ?? children}
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <>
      <div
        className={cn(
          "m-auto flex h-[80dvh] w-5/6 place-items-center md:w-4/5"
        )}
      >
        <div className={cn("text-4xl md:text-6xl")}>
          <div className={cn("text-xl text-gray md:text-2xl")}>
            Feel free to
          </div>
          <InviewTransition className={cn("font-medium tracking-tight")}>
            GET IN TOUCH
          </InviewTransition>
        </div>
      </div>
      <div
        className={cn(
          "m-auto flex w-full flex-col place-items-end divide-y divide-gray5 border-t border-gray4"
        )}
      >
        <Contact label="Location">
          <div className={cn("w-2/3 text-xl md:text-4xl")}>@Taipei, Taiwan</div>
        </Contact>
        <Contact label="Mail" src="mailto:dongdong0867@gmail.com" />
        <Contact label="GitHub" src="https://github.com/dongdong867" />
        <Contact label="LinkedIn" src="https://linkedin.com/in/dongdong867" />
        <Contact label="Social Media">
          <div
            className={cn(
              "w-full space-x-4 text-xl max-md:space-y-2 md:w-4/5 md:text-4xl lg:w-2/3"
            )}
          >
            <Link
              href={"https://discordapp.com/users/978679087067435039"}
              className={cn(
                "inline-block w-max rounded-full border border-gray px-4 py-3"
              )}
            >
              Discord
            </Link>
            <Link
              href={"https://instagram.com/dongdong_867"}
              className={cn(
                "inline-block w-max rounded-full border border-gray px-4 py-3"
              )}
            >
              Instagram
            </Link>
          </div>
        </Contact>

        <div className={cn("w-full md:w-4/5")} />
      </div>
    </>
  );
};

export default ContactPage;
