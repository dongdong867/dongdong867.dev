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
  wrapValue: {
    min: number,
    max: number
  }
  baseVelocity?: number;
};

const AutoScrollingContent = ({
  children,
  wrapValue,
  baseVelocity = -10,
}: Props) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => wrap(wrapValue.min, wrapValue.max, v) + "%");

  useAnimationFrame((_, delta) => {
    let moveBy = baseVelocity * delta / 1000
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div>
      <motion.div style={{ x }} className="flex">
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
};

export default AutoScrollingContent;
