import {
  BrainCircuit,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "VISHNU VIKAS MAGGAM",
  shortName: "VISHNU VIKAS",
  role: "Computer Science Engineering Student | AI & ML Enthusiast | Developer",
  email: "vishnumaggam@gmail.com",
  phone: "+91 6037357227",
  location: "Nellore, India 524313",
  github: "https://github.com/vishnuvikas2006",
  linkedin: "https://www.linkedin.com/in/vishnu-vikas-490549217/",
  imageUrl:
  "/profile.png"
} as const;

export type Skill = {
  name: string;
  icon: LucideIcon;
  tone: "cyan" | "violet" | "lime" | "coral";
};

export const skills: Skill[] = [
  { name: "Python", icon: FileCode2, tone: "cyan" },
  { name: "AI Application Development", icon: BrainCircuit, tone: "violet" },
  { name: "Vibe Coding", icon: Lightbulb, tone: "coral" },
  { name: "HTML", icon: Braces, tone: "coral" },
  { name: "CSS", icon: Code2, tone: "cyan" },
  { name: "Git", icon: GitBranch, tone: "coral" },
  { name: "MongoDB", icon: Database, tone: "lime" },
  { name: "Core Java", icon: Code2, tone: "violet" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
] as const;
