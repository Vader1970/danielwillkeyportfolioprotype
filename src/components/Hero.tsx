"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimatedText from "@/components/animation/AnimatedText";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMounted } from "@/hooks/use-mounted";

// Define the Hero component
export default function Hero() {
  // Determine if the device is mobile
  const isMobile = useIsMobile();
  // Track if component has mounted (prevents hydration mismatch)
  const mounted = useMounted();
  // State for tracking mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State for tracking window size
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Effect to handle window resize and mouse movement
  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listeners based on device type
    let isMouseMoveListenerActive = false;
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      isMouseMoveListenerActive = true;
    }
    window.addEventListener("resize", handleResize);

    // Remove event listeners on cleanup
    return () => {
      if (isMouseMoveListenerActive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // Function to calculate movement based on mouse position
  const calculateMovement = (axis: "x" | "y", intensity = 0.02) => {
    // Return 0 if on mobile or window size is not set
    if (isMobile || windowSize.width === 0 || windowSize.height === 0) {
      return 0;
    }
    const center = axis === "x" ? windowSize.width / 2 : windowSize.height / 2;
    const position = axis === "x" ? mousePosition.x : mousePosition.y;
    // Ensure mousePosition is valid before calculating
    if (typeof position !== "number" || isNaN(position)) {
      return 0;
    }
    return (position - center) * intensity;
  };

  // Static animation properties for mobile devices
  const mobileAnimateProps = { x: 0, y: 0 };

  // Render the Hero section
  return (
    <section id='home' className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradients - render consistently to avoid hydration mismatch */}
      <div className='absolute inset-0 overflow-hidden'>
        {mounted && !isMobile ? (
          <>
            <motion.div
              className='absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]'
              animate={{
                x: calculateMovement("x", -0.05),
                y: calculateMovement("y", -0.05),
              }}
              transition={{ type: "spring", damping: 50 }}
            />
            <motion.div
              className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]'
              animate={{
                x: calculateMovement("x", 0.03),
                y: calculateMovement("y", 0.03),
              }}
              transition={{ type: "spring", damping: 50 }}
            />
          </>
        ) : (
          <>
            <div className='absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]' />
            <div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]' />
          </>
        )}
      </div>

      <div className='container-width z-10 px-4 text-center'>
        <motion.h1
          className='text-xl md:text-2xl font-light mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I&apos;m
        </motion.h1>

        <motion.div
          className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className='gradient-text'>Daniel Wilkey</span>
        </motion.div>

        <motion.h2
          className='text-xl md:text-3xl text-light/80 mt-4 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatedText text='UX/UI Designer & Web Developer' immediate={true} />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className='mt-12'
        >
          <Link
            href='#about'
            className='glass-morph inline-flex items-center px-6 py-3 rounded-full text-light hover:bg-white/20 transition-all duration-300'
          >
            View My Resume
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className='ml-2'>
              <ChevronDown size={16} />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        style={{ marginBottom: mounted && isMobile ? "80px" : "0" }}
      >
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className='text-light/60' size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
