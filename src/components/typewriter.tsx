"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

type TypewriterProps = {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
};

export const Typewriter = ({
  words,
  className,
  cursorClassName,
}: TypewriterProps) => {
  const splitWords = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, display: "inline" },
        { duration: 0.1, delay: stagger(0.2), ease: "easeInOut" }
      );
    }
  }, [animate, isInView]);

  const typingWords = () => {
    return (
      <motion.div ref={scope}>
        {splitWords.map((word, index) => {
          return (
            <div key={`word-${index}`}>
              {word.text.map((char, index) => {
                return (
                  <motion.span
                    initial={{ display: "hidden" }}
                    key={`char-${index}`}
                    className={cn("hidden opacity-0", word.className)}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("flex", className)}>
      {typingWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "ml-1 inline-block h-full w-0.5 rounded-full bg-blue",
          cursorClassName
        )}
      />
      &nbsp;
    </div>
  );
};
