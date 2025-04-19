"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

const AnimatedElement = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = false,
}: AnimatedElementProps) => {
  const directionValues = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionValues[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
