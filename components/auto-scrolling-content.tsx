"use client"

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap
} from "framer-motion";

type Props = {
  children: JSX.Element;
  baseVelocity?: number;
};

const AutoScrollingContent = ({
  children,
  baseVelocity = -10,
}: Props) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => wrap(-150, -355, v) + "%");

  useAnimationFrame((_, delta) => {
    let moveBy = baseVelocity * delta / 1000
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div>
      <motion.div style={{ x }} className="flex">
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
};

export default AutoScrollingContent;
