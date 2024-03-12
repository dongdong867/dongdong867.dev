"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";

const setZIndex = (id: string) => {
  const idList = ["finder", "terminal"];
  idList.forEach((app) => {
    if (app == id) {
      const window = document.getElementById(app);
      if (window) {
        window.classList.add("z-10");
      }
    } else {
      const window = document.getElementById(app);
      if (window) {
        window.classList.remove("z-10");
      }
    }
  });
};

export const ApplicationWindow = ({
  id,
  detectUpdated,
  className,
  children,
}: {
  id: string;
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
      id={id}
      drag
      dragMomentum={false}
      dragConstraints={{
        top: 0,
        left: -width + 20,
        right: windowWidth - 20,
        bottom: windowHeight - 20,
      }}
      dragElastic={0}
      onClick={() => {
        setZIndex(id);
      }}
      onDragEnd={(_, info) => {
        if (ref.current) {
          ref.current.style.top = info.delta.x + "px";
          ref.current.style.height = info.delta.y + "px";
        }
      }}
      ref={ref}
      className={cn("absolute", className)}
    >
      {children}
    </motion.div>
  );
};
