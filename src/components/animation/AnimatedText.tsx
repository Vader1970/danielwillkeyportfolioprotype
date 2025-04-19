"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  quickAppear?: boolean;
  immediate?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  immediate = false,
  quickAppear = false,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");
  const ref = useRef<HTMLDivElement>(null);
  const [forceVisible, setForceVisible] = useState(immediate);
  const isInView = useInView(ref, {
    once: once,
    margin: "0px 0px -50% 0px",
    amount: 0.01,
  });

  useEffect(() => {
    if (immediate) {
      setForceVisible(true);
    }
  }, [immediate]);

  const container = {
    hidden: { opacity: 0 },
    visible: ({ quick }) => ({
      opacity: 1,
      transition: {
        staggerChildren: quick ? 0.02 : 0.15,
        delayChildren: 0.04,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      ref={ref}
      variants={container}
      initial='hidden'
      animate={isInView || forceVisible ? "visible" : "hidden"}
      custom={{ quick: quickAppear }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className='inline-block mr-2' variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
