export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  impact: string;
}

export interface ContactLink {
  label: string;
  href: string;
  command: string;
}

export interface SiteData {
  name: string;
  title: string;
  heroSubtitle: string;
  aboutSummary: string;
  aboutDetails: { label: string; value: string }[];
  navLinks: NavLink[];
  experiences: Experience[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  projects: Project[];
  contactLinks: ContactLink[];
  resumeUrl: string;
}
