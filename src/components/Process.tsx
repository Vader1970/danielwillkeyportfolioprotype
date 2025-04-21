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
          <h2 className='section-heading'>
            <span className='gradient-text'>My Process</span>
          </h2>
        </AnimatedElement>

        {/* <AnimatedElement once delay={0.1}>
          <p className='text-lg text-muted-alt text-left max-w-3xl mx-auto mb-6 sm:mb-8'>
            I follow a complete web development process that brings each project to life with care, precision, and
            passion from beginning to end.
          </p>
        </AnimatedElement> */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {processSteps.map((step: ProcessStep, index: number) => (
            <AnimatedElement key={step.title} delay={0.2 + index * 0.1} once>
              <div className='card-interactive group'>
                <div className='text-highlight mb-4 group-hover:text-white/90'>{step.icon}</div>
                <h3 className='text-xl font-bold mb-3 group-hover:text-white/90'>{step.title}</h3>
                <p className='text-muted-alt group-hover:text-white/80'>{step.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
