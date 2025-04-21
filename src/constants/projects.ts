import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Brainwave",
    description:
      "A modern landing page featuring sleek parallax effects and a clean bento box layout designed to engage visitors visually.",
    image: "/images/brainwave.webp",
    categories: ["ui", "frontend"],
    tools: ["Figma", "React JS", "GSAP", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/Vader1970/dans-brainwaze/tree/main",
    liveUrl: "https://dans-brainwaze.vercel.app/",
    type: "personal",
  },
  {
    title: "Apple iPhone 15 Clone",
    description:
      "A detailed recreation of the Apple iPhone 15 Pro website, combining GSAP animations with Three.js 3D effects for a dynamic user experience.",
    image: "/images/iphone.webp",
    categories: ["ui", "frontend", "backend"],
    tools: ["React JS", "Three JS", "GSAP", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/Vader1970/dans-iphone-15pro-clone",
    liveUrl: "https://dans-iphone-pro15-clone.netlify.app/",
    type: "personal",
  },
  {
    title: "Burst Digital",
    description:
      "Built Burst Digital's Webflow site from start to finish, handling research, UX/UI design, client communication, and final deployment.",
    image: "/images/burst-digital.webp",
    categories: ["ui", "frontend"],
    tools: ["Figma", "Webflow", "Framer Motion", "CMS"],
    liveUrl: "https://www.burstdigital.co.nz/",
    type: "client",
  },

  {
    title: "Zentry Award Winnning Website Clone",
    description: "My clone of the award-winning Zentry website, which earned Awwwards Site of the Month recognition.",
    image: "/images/award-winning-website.webp",
    categories: ["ui", "frontend", "backend"],
    tools: ["React JS", "Tailwind CSS", "GSAP", "JavaScript"],
    githubUrl: "https://github.com/Vader1970/award-winning-website/tree/main",
    liveUrl: "https://award-winning-website-dans.vercel.app/",
    type: "personal",
  },

  {
    title: "Next JS and React JS Component Library",
    description:
      "A comprehensive library of 1,307 copy-and-paste React and Next.js components, paired with matching Figma assets for rapid app development.",
    image: "/images/components-library.webp",
    categories: ["frontend", "backend"],
    tools: ["Next.js", "React Js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/Vader1970/components-library/tree/main",
    liveUrl: "https://nextjs-components-library.vercel.app/",
    type: "personal",
  },
  {
    title: "Chance Voight Investment Corporation",
    description: "UI/UX Designer and Web Developer for Chance Voight Investment Corporation.",
    image: "/images/chance-voight.webp",
    categories: ["ui"],
    tools: [
      "Figma",
      "UX/UI Design",
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
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
