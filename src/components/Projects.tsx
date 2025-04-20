"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedElement from "@/components/animation/AnimatedElements";
import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { projects } from "@/constants/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "personal" | "client">("all");
  const constraintsRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "personal") return project.type === "personal";
    if (activeFilter === "client") return project.type === "client";
    return true; // "all" filter
  });

  return (
    <section id='projects' className='section-padding bg-dark text-light relative overflow-hidden'>
      <div className='container-width'>
        <AnimatedElement delay={0.1} once>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 md:mb-12'>
            <span className='gradient-text'>Selected Projects</span>
          </h2>
        </AnimatedElement>

        <AnimatedElement once delay={0.1}>
          <div className='flex justify-center space-x-4 mb-8'>
            {(["all", "personal", "client"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300
                  ${activeFilter === filter ? "bg-blue-500 text-white" : "bg-white/10 text-white hover:bg-white/20"}
                `}
              >
                {filter === "all" ? "All" : filter === "personal" ? "Personal" : "Client"}
              </button>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8' ref={constraintsRef}>
            {filteredProjects.map((project, index) => (
              <AnimatedElement key={project.title} delay={0.2 + index * 0.1} once>
                <motion.div
                  className='glass-morph overflow-hidden rounded-lg group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300'
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className='relative h-48 overflow-hidden'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className='object-cover object-center transition-transform duration-500 group-hover:scale-110'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                  <div className='p-6 flex flex-col flex-grow'>
                    <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                    <p className='text-light/70 mb-4 flex-grow'>{project.description}</p>
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {project.tools.map((tool) => (
                        <span key={tool} className='text-xs px-2 py-1 bg-white/10 rounded-full'>
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className='flex justify-between items-center mt-auto'>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-light/60 hover:text-highlight transition-colors duration-300'
                          aria-label='View on GitHub'
                        >
                          <GithubIcon width={20} height={20} />
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`flex items-center text-highlight hover:text-highlight/80 transition-colors duration-300 ${
                          !project.githubUrl ? "ml-auto" : ""
                        }`}
                      >
                        View Project
                        <ExternalLink size={16} className='ml-1' />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
