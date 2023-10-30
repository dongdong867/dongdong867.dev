"use client";

import { useEffect, useRef, useState } from "react";
import { useMeasure, useMouse } from "react-use";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const TranslatableContext = ({ className = "", children }: Props) => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const elementRef = useRef<HTMLDivElement>(null);
  const { elX, elY } = useMouse(elementRef);
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    if (elX >= 0 && elY >= 0 && elX <= width && elY <= height) {
      setTranslateX(((elX - width / 2) * 10) / width);
      setTranslateY(((elY - height / 2) * 20) / height);
    } else {
      setTranslateX(0);
      setTranslateY(0);
    }
  }, [elX, elY, width, height]);

  return (
    <div ref={ref}>
      <div
        onMouseEnter={() => {
          const cursorElement = document.getElementById("cursor")!;
          cursorElement.classList.add(
            "opacity-50",
            "transition-[top,left]",
            "lock"
          );
          cursorElement.style.width = width + 8 + "px";
          cursorElement.style.height = height + 8 + "px";
        }}
        onMouseMove={() => {
          const cursorElement = document.getElementById("cursor")!;
          cursorElement.style.left = elementRef.current!.offsetLeft + width / 2 + "px";
          cursorElement.style.top = elementRef.current!.offsetTop + height / 2 + "px";
        }}
        onMouseLeave={() => {
          const cursorElement = document.getElementById("cursor")!;
          cursorElement.classList.remove(
            "opacity-50",
            "transition-[top,left]",
            "lock"
          );
          cursorElement.style.width = "40px";
          cursorElement.style.height = "40px";
        }}
        ref={elementRef}
        className="w-max h-max flex flex-col p-2"
      >
        <div
          className={`
              ${className}
              w-max h-max
              inline-flex 
              items-center justify-center 
              rounded-md
              bg-transparent 
            `}
        >
          <div
            style={{ transform: `translate(${translateX}%, ${translateY}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslatableContext;
