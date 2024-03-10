"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";

export const ApplicationWindow = ({
  detectUpdated,
  className,
  children,
}: {
  detectUpdated?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current?.offsetWidth ?? 0);
  }, [detectUpdated]);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{
        top: 0,
        left: -width + 20,
        right: windowWidth - 20,
        bottom: windowHeight - 20,
      }}
      dragElastic={0}
      ref={ref}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
