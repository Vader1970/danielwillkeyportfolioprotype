import { Code, /* Figma, */ Layout, Server, Users } from "lucide-react";
import FigmaIcon from "@/components/icons/FigmaIcon";
import { SkillCategory } from "@/types/skills";

export const skills: SkillCategory[] = [
  {
    category: "UX/UI Design",
    icon: FigmaIcon,
    items: [
      "User Research",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Accessibility",
      "Responsive Design",
    ],
  },
  {
    category: "Frontend Development",
    icon: Layout,
    items: [
      "HTML5",
      "CSS3 / SCSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Webflow",
      "WordPress",
      "Framer",
      "GSAP",
    ],
  },
  {
    category: "Backend & Data",
    icon: Server,
    items: ["Node.js", "MongoDB", "Supabase", "APIs", "CMS Integration", "Express", "E-commerce", "Version Control", "Database Administration", "Google Analytics 4", "Google Search Console"],
  },
  {
    category: "Tools & Practices",
    icon: Code,
    items: [
      "Collaboration",
      "Agile Teams",
      "Figma",
      "Adobe Photoshop",
      "Git & GitHub",
      "Postman",
      "Vercel",
      "SEO Optimization",
      "AI Generation Tools",
    ],
  },
];
