import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative m-auto h-max  w-11/12 py-10 md:w-4/5 md:py-20",
        "group/card overflow-hidden rounded-lg bg-gray6",
        className
      )}
    >
      {children}
    </div>
  );
};
