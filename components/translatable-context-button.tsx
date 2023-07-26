"use client";

import { useState } from "react";
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

  const handleRef = (element: HTMLButtonElement) => {
    if (element) {
      setTop(element.offsetTop);
      setLeft(element.offsetLeft);
      setWidth(element.offsetWidth);
      setHeight(element.offsetHeight);
    }
  };

  return (
    <Button
      ref={handleRef}
      className={`${className}`}
      onMouseMove={(e) => {
        if (e.clientX < left + width / 2 && e.clientY < top + height / 2) {
          setTranslateX(((e.clientX - left - width) / width) * 20);
          setTranslateY(((e.clientY - top - height) / height) * 20);
          return;
        }
        if (e.clientX < left + width && e.clientY < top + height / 2) {
          setTranslateX(((e.clientX - left - width / 2) / width) * 40);
          setTranslateY(((e.clientY - top - height) / height) * 20);
          return;
        }
        if (e.clientX < left + width / 2 && e.clientY < top + height) {
          setTranslateX(((e.clientX - left - width) / width) * 20);
          setTranslateY(((e.clientY - top - height / 2) / height) * 40);
          return;
        }
        if (e.clientX < left + width && e.clientY < top + height) {
          setTranslateX(((e.clientX - left - width / 2) / width) * 40);
          setTranslateY(((e.clientY - top - height / 2) / height) * 40);
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
