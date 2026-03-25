export type SkillCategory = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  technologies: string[];
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  technologies: string[];
  highlights: string[];
  metrics?: string[];
  links?: {
    label: string;
    href: string;
  }[];
  sceneVariant: "navigation" | "aiFlow" | "fpga";
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  achievements: string[];
};

export type ActivityItem = {
  team: string;
  role: string;
  period: string;
  highlights: string[];
};
