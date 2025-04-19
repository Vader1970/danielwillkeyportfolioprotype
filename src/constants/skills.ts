import { Code, /* Figma, */ Layout, Server, Users } from "lucide-react";
import FigmaIcon from "@/components/icons/FigmaIcon";
import { SkillCategory } from "@/types/skills";

export const skills: SkillCategory[] = [
  {
    category: "UX/UI & Design",
    icon: FigmaIcon,
    items: ["Figma", "Adobe Photoshop", "Responsive Design", "Accessibility"],
  },
  {
    category: "Frontend Development",
    icon: Layout,
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Webflow",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    category: "Backend & Data",
    icon: Server,
    items: ["Node.js", "MongoDB", "Supabase", "RESTful APIs", "CMS Integration"],
  },
  {
    category: "Tools & Practices",
    icon: Code,
    items: ["GitHub (Version Control)", "Postman", "SEO Optimization", "Shopify", "AI Generation Tools"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: ["Strong Communication", "Collaboration in Agile Teams", "Continuous Learning"],
  },
];
