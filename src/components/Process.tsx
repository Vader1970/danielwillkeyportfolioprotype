"use client";

import { useRef } from "react";
import AnimatedElement from "@/components/animation/AnimatedElements";
import { processSteps } from "@/constants/processSteps";
import type { ProcessStep } from "@/types/process";

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id='process' className='section-padding relative overflow-hidden' ref={containerRef}>
      <div className='container-width relative z-10'>
        <AnimatedElement delay={0.1} once>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 md:mb-12'>
            <span className='gradient-text'>My Process</span>
          </h2>
        </AnimatedElement>

        <AnimatedElement once delay={0.1}>
          <p className='text-light/80 text-center max-w-3xl mx-auto mb-16'>
            I follow a comprehensive end-to-end web development process that ensures every project is built with
            purpose, precision, and passion from start to finish.
          </p>
        </AnimatedElement>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {processSteps.map((step: ProcessStep, index: number) => (
            <AnimatedElement key={step.title} delay={0.2 + index * 0.1} once>
              <div className='glass-morph p-6 h-full card-hover transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 hover:backdrop-blur-lg group'>
                <div className='text-highlight mb-4 group-hover:text-white/90'>{step.icon}</div>
                <h3 className='text-xl font-bold mb-3 group-hover:text-white/90'>{step.title}</h3>
                <p className='text-light/70 group-hover:text-white/80'>{step.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
