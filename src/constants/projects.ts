import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Pegasus Digital",
    description:
      "Design and build agency website in Next.js, with pages for services, work and enquiries. I also implemented the Free Website Check, which uses the Google PageSpeed Insights API to check a page on mobile or desktop and show visitors practical areas to improve.",
    image: "/images/pegasus-digital.webp",
    categories: ["ui", "frontend"],
    tools: ["Website", "Next.js", "TypeScript", "API Integration", "UX/UI Design"],
    figmaUrl: "https://www.figma.com/design/alOye0Z0FIKU0xSzp1Uoj2/Pegasus-Digital?node-id=0-1&t=9FZm5pMCbfO4YolP-1",
    liveUrl: "https://pegasusdigital.co.nz/",
    type: "client",
  },
  {
    title: "Mac Auto Services",
    description:
      "Rebuilt the website for a Christchurch automotive workshop using React. The new site makes it easier to find information about WOFs, servicing and repairs, read customer reviews, and send a booking enquiry.",
    image: "/images/mac-auto-service.webp",
    categories: ["ui", "frontend"],
    tools: ["Website", "React JS", "Website Redesign", "UX/UI Design"],
    liveUrl: "https://www.macautoservices.co.nz/",
    type: "client",
  },
  {
    title: "Burst Digital",
    description:
      "Built Burst Digital's Webflow site from start to finish, handling research, UX/UI design, client communication, and final deployment.",
    image: "/images/burst-digital.webp",
    categories: ["ui", "frontend"],
    tools: ["Website", "Figma", "Webflow", "UX/UI Design", "Content Management System"],
    figmaUrl:
      "https://www.figma.com/design/8TWY5frdsBzTcz9T71V70E/Burst-Digital---New-Website?node-id=5999-10563&t=1m4YsZmjpHYH3Xlk-1",
    liveUrl: "https://www.burstdigital.co.nz/",
    type: "client",
  },
  {
    title: "Autistic Innovations",
    description:
      "Designed and built a website in Hostinger Website Builder for a Christchurch-based autism coaching service. The site introduces the support available to autistic adults and the people around them, with clear paths to explore the services and get in touch.",
    image: "/images/autistic-innovations.webp",
    categories: ["ui", "frontend"],
    tools: ["Website", "Hostinger Website Builder", "UX/UI Design"],
    liveUrl: "https://www.autisticinnovations.co.nz/",
    type: "client",
  },
  {
    title: "Filtration Station",
    description:
      "Designed and custom coded an installation landing page within Filtration Station's Shopify store. It explains how the service works, shows what customers can expect from a fixed-price quote, and gives Auckland homeowners a clear way to enquire about an installation.",
    image: "/images/filtration-station.webp",
    categories: ["ui", "frontend"],
    tools: ["Landing Page", "Figma", "Shopify Custom Coding"],
    figmaUrl: "https://www.figma.com/design/zYK3ram6msyUMuUS1TSd4W/Filtration-Station?node-id=5-2&t=1Yf4GNFcujN3xbgM-1",
    liveUrl: "https://www.filtrationstation.co.nz/pages/installation-services",
    type: "client",
  },
  {
    title: "Gee Wiz",
    description:
      "Contracted by Burst Digital, I designed and built this high-converting landing page to attract pub owners and drive quiz night bookings. The design focuses on clear hierarchy, engaging copy, and conversion-driven CTAs - turning quiet midweek nights into packed tables for venues across New Zealand.",
    image: "/images/gee-quiz.webp",
    categories: ["ui", "frontend"],
    tools: ["Landing Page", "UX/UI Design", "Figma", "Photoshop", "Wix"],
    figmaUrl: "https://www.figma.com/design/GaHqwPaIQNWqaL5LoMil3b/Gee-Quiz?node-id=0-1&t=IAbQfEP1ghkgFLOM-1",
    liveUrl: "https://www.geequiz.co.nz/landing-page",
    type: "client",
  },
  {
    title: "INNLIST Holiday Homes",
    description:
      "Designed in Figma and hand-coded within Rocketspark using HTML5, CSS3 and JavaScript to overcome platform limitations. The result is a fast, conversion-focused landing page that the client now wants to add to their main website.",
    image: "/images/innlist-landing.webp",
    categories: ["ui", "frontend"],
    tools: ["Landing Page", "Figma", "HTML5", "CSS3", "JavaScript", "Rocketspark"],
    figmaUrl: "https://www.figma.com/design/68U2xaWzZczOKnVhySL8gi/InnList?node-id=146-323&t=byFEtjXBP0z1gFSv-1",
    liveUrl: "https://www.innlist.co.nz/landing-page/",
    type: "client",
  },
  {
    title: "Tilyard Plumbing",
    description:
      "Custom coded landing page within Tilyard Plumbing's Wix website. The pages give visitors a focused route from learning about a service to getting in touch, while working within the client's existing site.",
    image: "/images/tilyard-plumbing.webp",
    categories: ["ui", "frontend"],
    tools: ["Landing Page", "Figma", "Wix Custom Coding"],
    figmaUrl: "https://www.figma.com/design/2mw1ctGSXtzq8w87UB0geG/Tilyards-Landing-Page?node-id=0-1&t=l62HspUhYGrUi56M-1",
    liveUrl: "https://www.tilyardplumbing.co.nz/landing-page",
    type: "client",
  },
  {
    title: "Travel Crush NZ",
    description:
      "A travel blog built in WordPress and Elementor, featuring dynamic posts, pages, and archives designed for users to easily document and share their overseas adventures. ",
    image: "/images/travelcrushnz.webp",
    categories: ["frontend", "backend"],
    tools: ["Blog", "UX/UI Design", "Figma", "WordPress", "Elementor"],
    liveUrl: "https://travelcrushnz.free.nf/",
    type: "personal",
  },
  {
    title: "Zentry Award Winnning Website Clone",
    description: "My clone of the award-winning Zentry website, which earned Awwwards Site of the Month recognition.",
    image: "/images/award-winning-website.webp",
    categories: ["ui", "frontend", "backend"],
    tools: ["Figma", "Photoshop", "React JS", "Tailwind CSS", "GSAP", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/Vader1970/award-winning-website/tree/main",
    liveUrl: "https://award-winning-website-dans.vercel.app/",
    type: "personal",
  },
  {
    title: "Splyt (Awwwards Recreation)",
    description:
      "A creative website recreation inspired by Splyt on Awwwards. Developed with React, GSAP, and Tailwind CSS, showcasing fluid motion design and interactive storytelling.",
    image: "/images/dans-attempt-spylt.webp",
    categories: ["ui", "frontend"],
    tools: ["Figma", "React JS", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com/Vader1970/dans-gsap-awwwards",
    figmaUrl: "https://www.figma.com/design/ev4W8rPVLuphqlz2QVYzn7/Splyt?node-id=0-1&t=pyd9LhosOoWggkKm-1",
    liveUrl: "https://dans-gsap-awwwards.vercel.app",
    type: "personal",
  },
  {
    title: "Velvet Pour (Awwwards Recreation)",
    description:
      "An immersive cocktail website recreation inspired by Velvet Pour on Awwwards. Built with React, GSAP, and Tailwind CSS, featuring smooth scroll animations and cinematic interactions.",
    image: "/images/velvet-pour.webp",
    categories: ["ui", "frontend"],
    tools: ["Figma", "React JS", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com/Vader1970/gsap_cocktails",
    figmaUrl: "https://www.figma.com/design/ZoxkCZj3hsPlll5fcJatW2/Mojito?node-id=0-1&t=KV9vYkWU8spffxVI-1",
    liveUrl: "https://dans-gsap-cocktails.vercel.app",
    type: "personal",
  },
  {
    title: "Apple iPhone 15 Clone",
    description:
      "A detailed recreation of the Apple iPhone 15 Pro website, combining GSAP animations with Three.js 3D effects for a dynamic user experience.",
    image: "/images/iphone.webp",
    categories: ["ui", "frontend", "backend"],
    tools: ["Figma", "Photoshop", "React JS", "Three JS", "GSAP", "Tailwind CSS", "JavaScript", "Netlify"],
    githubUrl: "https://github.com/Vader1970/dans-iphone-15pro-clone",
    liveUrl: "https://dans-iphone-pro15-clone.netlify.app/",
    type: "personal",
  },
  // {
  //   title: "Star Wars Memorabilia",
  //   description:
  //     "Built to catalogue my own 3,000-piece Star Wars collection, from vintage to modern memorabilia. Still in progress, but once complete it will let any collector customise categories, track valuations via eBay, and manage treasures with a built-in CMS. (Full access available on request.)",
  //   image: "/images/star-wars-memorabilia.webp",
  //   categories: ["ui", "frontend", "backend"],
  //   tools: ["React JS", "Next JS", "Cloudflare", "Supabase", "Tailwind CSS", "TypeScript", "API's"],
  //   githubUrl: "https://github.com/Vader1970/star-wars-collectors",
  //   liveUrl: "https://star-wars-collectors.vercel.app/",
  //   type: "personal",
  // },
  {
    title: "AI Resume Analyzer",
    description:
      "AI-powered Resume Analyzer with React, React Router, and Puter.js! Create job listings, upload candidate resumes, and use AI to automatically evaluate and match resumes to job requirements.",
    image: "/images/resume-ai.webp",
    categories: ["ui", "frontend", "backend"],
    tools: ["Figma", "React JS", "React Router", "Puter.js", "Tailwind CSS", "JavaScript", "API's", "AI Agents"],
    githubUrl: "https://github.com/Vader1970/ai-resume-analyzer",
    figmaUrl: "https://www.figma.com/design/2pwYUeQffkNrgtkn9IcMVm/AI-Resume-Analyzer?node-id=0-1&t=0XyfV1zYjzXSPDKA-1",
    liveUrl: "https://your-ai-resume-analyzer.vercel.app/",
    type: "personal",
  },
  {
    title: "Brainwave",
    description:
      "A modern landing page featuring sleek parallax effects and a clean bento box layout designed to engage visitors visually.",
    image: "/images/brainwave.webp",
    categories: ["ui", "frontend"],
    tools: ["Figma", "Photoshop", "React JS", "GSAP", "Tailwind CSS", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/Vader1970/dans-brainwaze/tree/main",
    liveUrl: "https://dans-brainwaze.vercel.app/",
    type: "personal",
  },
  // {
  //   title: "Next JS and React JS Component Library",
  //   description:
  //     "A comprehensive library of 1,307 copy-and-paste React and Next.js components, paired with matching Figma assets for rapid app development.",
  //   image: "/images/components-library.webp",
  //   categories: ["frontend", "backend"],
  //   tools: ["UX/UI Design", "Figma", "Next JS", "React JS", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel"],
  //   githubUrl: "https://github.com/Vader1970/components-library/tree/main",
  //   liveUrl: "https://nextjs-components-library.vercel.app/",
  //   type: "client",
  // },
];
