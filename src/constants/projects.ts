import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Brainwave",
    description: "A modern landing page with sleek parallax effects and bento box layouts",
    image: "/images/brainwave.webp",
    categories: ["ui", "frontend"],
    tools: ["Figma", "React JS", "GSAP", "Tailwind CSS"],
    githubUrl: "https://github.com/Vader1970/dans-brainwaze/tree/main",
    liveUrl: "https://dans-brainwaze.vercel.app/",
    type: "personal",
  },
  {
    title: "Apple iPhone 15 Clone",
    description: "Recreating the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    image: "/images/iphone.webp",
    categories: ["ui", "frontend", "backend"],
    tools: ["React JS", "Three JS", "GSAP", "Tailwind CSS"],
    githubUrl: "https://github.com/Vader1970/dans-iphone-15pro-clone",
    liveUrl: "https://dans-iphone-pro15-clone.netlify.app/",
    type: "personal",
  },
  {
    title: "Burst Digital",
    description:
      "Built Burst Digital's modern Webflow site end-to-end, from research and UI/UX design to client liaison and deployment.",
    image: "/images/burst-digital.webp",
    categories: ["ui", "frontend"],
    tools: ["Figma", "Webflow", "Framer Motion"],
    liveUrl: "https://www.burstdigital.co.nz/",
    type: "client",
  },

  {
    title: "Zentry Award Winnning Website Clone",
    description: "My clone of the award winning website Zentry that became an Awwwards Site Of The Month",
    image: "/images/award-winning-website.webp",
    categories: ["ui", "frontend", "backend"],
    tools: ["React JS", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com/Vader1970/award-winning-website/tree/main",
    liveUrl: "https://award-winning-website-dans.vercel.app/",
    type: "personal",
  },

  {
    title: "Next JS and React JS Component Library",
    description:
      "A library of 1,307 copy and paste React/Next.js components with matching Figma assets for rapid modern web app development.",
    image: "/images/components-library.webp",
    categories: ["frontend", "backend"],
    tools: ["Next.js", "React Js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/Vader1970/components-library/tree/main",
    liveUrl: "https://nextjs-components-library.vercel.app/",
    type: "personal",
  },
  {
    title: "Chance Voight Investment Corporation",
    description: "UI/UX Designer and Web Developer for Chance Voight Investment Partners.",
    image: "/images/chance-voight.webp",
    categories: ["ui"],
    tools: [
      "Figma",
      "UX/UI Design",
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "Aynalytics",
      "Node JS",
      "API's",
      "Supabase",
      "Resend",
    ],
    liveUrl: "https://www.chancevoight.com/",
    type: "client",
  },
];
