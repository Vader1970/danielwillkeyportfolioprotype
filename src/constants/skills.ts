import { Code, /* Figma, */ Layout, Server, Users } from "lucide-react";
import FigmaIcon from "@/components/icons/FigmaIcon";
import { SkillCategory } from "@/types/skills";

export const skills: SkillCategory[] = [
  {
    category: "UX/UI & Design",
    icon: FigmaIcon,
    items: [
      "User Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Responsive Design",
      "Accessibility",
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
      "Shopify",
    ],
  },
  {
    category: "Backend & Data",
    icon: Server,
    items: ["Node.js", "MongoDB", "Supabase", "RESTful APIs", "CMS Integration", "Strapi"],
  },
  {
    category: "Tools & Practices",
    icon: Code,
    items: [
      "Collaboration in Agile Teams",
      "Figma",
      "Adobe Photoshop",
      "Git & GitHub",
      "Postman",
      "SEO Optimization",
      "AI Generation Tools",
      "Continuous Learning",
    ],
  },
];
