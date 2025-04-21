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
    description: "Next, I create a clear roadmap that covers the sitemap, technical details, and content strategy.",
  },
  {
    icon: <Palette className='w-6 h-6' />,
    title: "UX/UI Design",
    description:
      "Then, I design wireframes and high-fidelity mock-ups that focus on great user experience while staying true to your brand.",
  },
  {
    icon: <Code className='w-6 h-6' />,
    title: "Development",
    description:
      "I write clean, efficient code using modern tools and best practices to ensure your site runs smoothly.",
  },
  {
    icon: <Check className='w-6 h-6' />,
    title: "Testing",
    description:
      "Before launch, I thoroughly test across devices and browsers to make sure everything works perfectly.",
  },
  {
    icon: <RefreshCw className='w-6 h-6' />,
    title: "Maintenance",
    description:
      "After launch, I provide ongoing support, updates, and monitoring to keep your site secure, fast, and up to date.",
  },
];
