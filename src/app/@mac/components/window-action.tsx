import { cn } from "@/lib/utils";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const ActionButton = ({
  onClick,
  className,
  children,
}: {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={cn("size-3 rounded-full flex place-items-center", className)}
    >
      {children}
    </div>
  );
};

export const WindowAction = ({
  closeAction,
  expendAction,
}: {
  closeAction: () => void;
  expendAction: () => void;
}) => {
  return (
    <div className={cn("flex p-4 space-x-2")}>
      <ActionButton onClick={closeAction} className={cn("bg-red")}>
        <FaTimes
          size={8}
          className={cn("m-auto text-gray3 opacity-0 hover:opacity-100")}
        />
      </ActionButton>
      <ActionButton onClick={closeAction} className={cn("bg-yellow")}>
        <FaMinus
          size={8}
          className={cn("m-auto text-gray3 opacity-0 hover:opacity-100")}
        />
      </ActionButton>
      <ActionButton onClick={expendAction} className={cn("bg-green")}>
        <FaPlus
          size={8}
          className={cn("m-auto text-gray3 opacity-0 hover:opacity-100")}
        />
      </ActionButton>
    </div>
  );
};
