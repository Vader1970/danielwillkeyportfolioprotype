import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
// import About from "@/components/About"; // Removed static import

const About = dynamic(() => import("@/components/About"), {
  // Add a loading state
  loading: () => <p className='text-center py-10'>Loading About section...</p>,
  // SSR is enabled by default, which is suitable here.
});

export default function Home() {
  return (
    <>
      <Hero />
      <About /> {/* Dynamically imported component with loading state */}
    </>
  );
}
