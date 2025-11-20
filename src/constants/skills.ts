import { Code, /* Figma, */ Layout, Server, Users } from "lucide-react";
import FigmaIcon from "@/components/icons/FigmaIcon";
import { SkillCategory } from "@/types/skills";

export const skills: SkillCategory[] = [
  {
    category: "UX/UI Design",
    icon: FigmaIcon,
    items: [
      "User Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Accessibility",
      "Responsive Design",

      "Interaction Design",
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
      "Framer Motion",
      "GSAP",
      "WordPress",
    ],
  },
  {
    category: "Backend & Data",
    icon: Server,
    items: ["Node.js", "MongoDB", "Supabase", "APIs", "CMS Integration", "Strapi", "Express", "E-commerce", "Version Control", "Database Administration"],
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
