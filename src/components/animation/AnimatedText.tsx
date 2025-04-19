"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  quickAppear?: boolean;
  immediate?: boolean;
}

export default function AnimatedText({ text, className = "", immediate = false }: AnimatedTextProps) {
  const words = text.split(" ");
  const ref = useRef<HTMLDivElement>(null);
  const [forceVisible, setForceVisible] = useState(immediate);
  const isInView = useInView(ref, {
    once: true,
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
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slowed down from 0.12
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30, // Increased from 20 for more noticeable movement
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 9, // Reduced from 12 for more bounce
        stiffness: 80, // Reduced from 100 for smoother animation
        duration: 0.6, // Added explicit duration
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
    >
      {words.map((word, index) => (
        <motion.span key={index} className='inline-block mr-2' variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
