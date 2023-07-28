"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const TranslatableContextButton = ({ className = "", children }: Props) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref.current) {
      setTop(ref.current.offsetTop);
      setLeft(ref.current.offsetLeft);
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return (
    <Button
      ref={ref}
      className={`${className} bg-transparent hover:bg-gray/50 hover:cursor-none`}
      onMouseMove={(e) => {
        if (e.clientX < left + width / 2 && e.clientY < top + height / 2) {
          setTranslateX(((e.clientX - left - width) / width) * 10);
          setTranslateY(((e.clientY - top - height) / height) * 10);
          return;
        }
        if (e.clientX < left + width && e.clientY < top + height / 2) {
          setTranslateX(((e.clientX - left - width / 2) / width) * 20);
          setTranslateY(((e.clientY - top - height) / height) * 10);
          return;
        }
        if (e.clientX < left + width / 2 && e.clientY < top + height) {
          setTranslateX(((e.clientX - left - width) / width) * 10);
          setTranslateY(((e.clientY - top - height / 2) / height) * 20);
          return;
        }
        if (e.clientX < left + width && e.clientY < top + height) {
          setTranslateX(((e.clientX - left - width / 2) / width) * 20);
          setTranslateY(((e.clientY - top - height / 2) / height) * 20);
        }
      }}
      onMouseLeave={() => {
        setTranslateX(0);
        setTranslateY(0);
      }}
    >
      <div style={{ transform: `translate(${translateX}%, ${translateY}%)` }}>
        {children}
      </div>
    </Button>
  );
};

export default TranslatableContextButton;
