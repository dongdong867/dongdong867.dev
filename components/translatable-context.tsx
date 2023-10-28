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

  const elementRef = useRef(null);
  const { elX, elY } = useMouse(elementRef);
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  useEffect(() => {
    if (elX >= 0 && elY >= 0 && elX <= width && elY <= height) {
      setTranslateX(((elX - width / 2) * 10) / width);
      setTranslateY(((elY - height / 2) * 10) / height);
    } else {
      setTranslateX(0);
      setTranslateY(0);
    }
  }, [elX, elY, width, height]);

  return (
    <div
      onMouseEnter={() => {
        document.getElementById("cursor")?.classList.add("opacity-0");
      }}
      onMouseLeave={() => {
        document.getElementById("cursor")?.classList.remove("opacity-0");
      }}
      className="flex flex-col"
    >
      <div ref={elementRef} className="w-max h-max">
        <div ref={ref}>
          <div
            className={`
              ${className}
              w-max h-max
              inline-flex 
              items-center justify-center 
              rounded-md
              bg-transparent 
              hover:bg-gray/50 
              hover:cursor-none
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
    </div>
  );
};

export default TranslatableContext;
