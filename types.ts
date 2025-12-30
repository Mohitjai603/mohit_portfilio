
export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  techStack: string[];
  platforms: string[];
  description: string;
  responsibilities: string[];
  image?: string;
  androidUrl?: string;
  iosUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}
