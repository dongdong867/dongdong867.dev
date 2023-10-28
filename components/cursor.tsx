"use client";

import { useRef } from "react";
import { useMouse } from "react-use";

const Cursor = () => {
  const ref = useRef(null);
  const state = useMouse(ref);

  return (
    <div
      id="cursor"
      ref={ref}
      style={{
        left: `${state.docX}px`,
        top: `${state.docY}px`,
      }}
      className={`absolute w-10 h-10 -translate-x-5 -translate-y-5 bg-gray-400/30 rounded-full pointer-events-none z-50`}
    />
  );
};

export default Cursor;
