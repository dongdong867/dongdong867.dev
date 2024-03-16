"use client";

import { cn } from "@/lib/utils";
import { Variant, motion } from "framer-motion";

type InviewTransitionProps = {
  repeat?: boolean;
  offscreen?: Variant;
  onscreen?: Variant;
  className?: string;
  children: React.ReactNode;
};

export const InviewTransition = ({
  repeat = true,
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
      viewport={{ once: !repeat }}
      className={cn(
        "space-y-0.5 transition-all duration-50 ease-in-out",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
