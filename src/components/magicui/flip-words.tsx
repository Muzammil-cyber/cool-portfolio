"use client";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          // x: 40,
          // filter: "blur(8px)",
          // scale: 2,
          position: "absolute",
        }}
        className={cn(
          "relative z-10 inline-block text-left text-neutral-900 dark:text-neutral-100",
          className,
        )}
        key={currentWord + words.indexOf(currentWord)}
      >
        {currentWord.split("").map((letter, index) => (
          <Fragment key={currentWord + index + letter}>
            <motion.span
              key={currentWord + index + letter}
              initial={{
                opacity: 0,
                y: 10,
                // filter: "blur(8px)"
              }}
              animate={{
                opacity: 1,
                y: 0,
                // filter: "blur(0px)"
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
            {letter === " " && <wbr />}
          </Fragment>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
export default FlipWords;
