export interface Project {
  title: string;
  description: string;
  image: string;
  categories: string[];
  tools: string[];
  liveUrl: string;
  githubUrl?: string;
  figmaUrl?: string;
  type: "personal" | "client";
}
