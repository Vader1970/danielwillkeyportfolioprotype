import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"), {
  // Add a loading state
  loading: () => <p className='text-center py-10'>Loading About section...</p>,
  // SSR is enabled by default, which is suitable here.
});

const Process = dynamic(() => import("@/components/Process"), {
  loading: () => <p className='text-center py-10'>Loading Process section...</p>,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p className='text-center py-10'>Loading Projects section...</p>,
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Projects />
    </>
  );
}
