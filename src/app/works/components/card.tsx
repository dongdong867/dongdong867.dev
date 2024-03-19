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
        "relative w-11/12 md:w-4/5  h-max py-10 md:py-20 m-auto",
        "bg-gray6 rounded-lg overflow-hidden group/card"
      )}
    >
      {children}
    </div>
  );
};
