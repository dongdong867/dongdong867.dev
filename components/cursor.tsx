"use client";

import { useRef } from "react";
import { useMouse } from "react-use";

const Cursor = () => {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  const positionLock = document.getElementById("cursor")?.classList.contains("lock")

  return (
    <div
      id="cursor"
      ref={ref}
      style={{
        width: "40px",
        height: "40px",
        left: positionLock ? "" : docX + "px",
        top: positionLock ? "" : docY + "px",
      }}
      className={`
        absolute
        -translate-x-1/2 -translate-y-1/2
        bg-gray-400/30
        rounded-full
        pointer-events-none
        z-50
        transition-[width,height,transform] duration-200 ease-in-out
      `}
    />
  );
};

export default Cursor;
