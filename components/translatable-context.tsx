"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const TranslatableContext = ({ className = "", children }: Props) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setTop(ref.current.getBoundingClientRect().top + window.scrollX);
      setLeft(ref.current.getBoundingClientRect().left + window.scrollY);
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <div
      ref={ref}
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
      onMouseMove={(e) => {
        setTranslateX(((e.pageX - left - width / 2) / width) * 20);
        setTranslateY(((e.pageY - top - height / 2) / height) * 20);
      }}
      onMouseLeave={() => {
        setTranslateX(0);
        setTranslateY(0);
      }}
    >
      <div style={{ transform: `translate(${translateX}%, ${translateY}%)` }}>
        {children}
      </div>
    </div>
  );
};

export default TranslatableContext;
