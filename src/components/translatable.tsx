"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useMeasure, useMouse } from "react-use";

type Props = {
  className?: string;
  children: React.ReactNode;
};
export const Translatable = ({ className = "", children }: Props) => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const elementRef = useRef<HTMLDivElement>(null);
  const { elX, elY } = useMouse(elementRef);
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    if (elX >= 0 && elY >= 0 && elX <= width && elY <= height) {
      setTranslateX(((elX - width / 2) * 15) / width);
      setTranslateY(((elY - height / 2) * 30) / height);
    } else {
      setTranslateX(0);
      setTranslateY(0);
    }
  }, [elX, elY, width, height]);

  return (
    <div ref={ref}>
      <div ref={elementRef} className={cn("w-max h-max", className)}>
        <div
          style={{ transform: `translate(${translateX}%, ${translateY}%)` }}
          className={cn("max-md:hidden")}
        >
          {children}
        </div>
        <div className={cn("md:hidden")}>{children}</div>
      </div>
    </div>
  );
};
