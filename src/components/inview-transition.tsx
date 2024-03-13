"use client";

import { cn } from "@/lib/utils";
import { Variant, motion } from "framer-motion";

type InviewTransitionProps = {
  offscreen?: Variant;
  onscreen?: Variant;
  className?: string;
  children: React.ReactNode;
};

export const InviewTransition = ({
  offscreen = {
    y: 20,
    opacity: 0,
  },
  onscreen = {
    y: 0,
    opacity: 1,
  },
  className,
  children,
}: InviewTransitionProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={{ offscreen, onscreen }}
      className={cn(
        "text-lg space-y-0.5 transition-all duration-50 ease-in-out",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
