import { ProcessStep } from "@/types/process";
import { Search, FileText, Palette, Code, Check, RefreshCw } from "lucide-react";

export const processSteps: ProcessStep[] = [
  {
    icon: <Search className='w-6 h-6' />,
    title: "Project Definition",
    description:
      "Starting with a thorough understanding of your goals, audience, and requirements to establish a solid foundation.",
  },
  {
    icon: <FileText className='w-6 h-6' />,
    title: "Planning",
    description: "Creating a detailed roadmap, including sitemap, technical specifications, and content strategy.",
  },
  {
    icon: <Palette className='w-6 h-6' />,
    title: "UX/UI Design",
    description:
      "Crafting wireframes and high-fidelity mockups that emphasize user experience while aligning with your brand.",
  },
  {
    icon: <Code className='w-6 h-6' />,
    title: "Development",
    description:
      "Building with clean, efficient code using modern frameworks and best practices for optimal performance.",
  },
  {
    icon: <Check className='w-6 h-6' />,
    title: "Testing",
    description: "Rigorous quality assurance across devices and browsers to ensure everything works flawlessly.",
  },
  {
    icon: <RefreshCw className='w-6 h-6' />,
    title: "Maintenance",
    description: "Ongoing support, updates, and monitoring to keep your site secure, fast, and relevant.",
  },
];
