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
    <div className={cn("w-full md:w-3/4 md:min-h-[20dvh] p-8")}>
      <div className={cn("lg:flex max-lg:space-y-2")}>
        <div className={cn("w-1/3 text-sm md:text-lg text-gray")}>{label}</div>
        {src && (
          <Link
            href={src ?? ""}
            className={cn("w-2/3 text-xl block md:text-4xl tracking-tight")}
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
          "w-5/6 md:w-4/5 h-[80dvh] flex m-auto place-items-center"
        )}
      >
        <div className={cn("text-4xl md:text-6xl")}>
          <div className={cn("text-gray text-xl md:text-2xl")}>
            Feel free to
          </div>
          <InviewTransition className={cn("font-medium tracking-tight")}>GET IN TOUCH</InviewTransition>
        </div>
      </div>
      <div
        className={cn(
          "w-full m-auto flex flex-col place-items-end border-t border-gray4 divide-y divide-gray5"
        )}
      >
        <Contact label="Location">
          <div className={cn("w-2/3 text-xl md:text-4xl")}>@Taipei, Taiwan</div>
        </Contact>
        <Contact label="Mail" src="mailto:dongdong0867@gmail.com" />
        <Contact label="GitHub" src="https://github.com/dongdong867" />
        <Contact label="LinkedIn" src="https://linkedin.com/in/dongdong867" />
        <Contact label="Social Media">
          <div className={cn("w-full md:w-2/3 text-xl md:text-4xl space-x-4 max-md:space-y-2")}>
            <Link
              href={"https://discordapp.com/users/978679087067435039"}
              className={cn("w-max rounded-full inline-block border border-gray px-4 py-3")}
            >
              Discord
            </Link>
            <Link
              href={"https://instagram.com/dongdong_867"}
              className={cn("w-max rounded-full inline-block border border-gray px-4 py-3")}
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
