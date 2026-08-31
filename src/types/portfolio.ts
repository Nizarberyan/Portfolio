export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  citationId: number;
  featured?: boolean;
  category: 'Full-Stack' | 'Backend / Systems' | 'AI / SaaS' | 'Mobile & Audio';
}

export interface CareerExperience {
  role: string;
  company: string;
  companyWikiUrl?: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
  citationId: number;
}

export interface EducationItem {
  degree: string;
  institution: string;
  institutionWikiUrl?: string;
  partner?: string;
  period: string;
  location: string;
  summary: string;
  focusAreas: string[];
  citationId: number;
}

export interface Citation {
  id: number;
  author?: string;
  title: string;
  publisher?: string;
  date?: string;
  url: string;
  accessDate?: string;
  quote?: string;
  type: 'repo' | 'article' | 'demo' | 'credential';
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    wikiUrl: string;
    description: string;
    level?: string;
  }[];
}

export interface PersonalInfo {
  name: string;
  nativeName?: string;
  disambiguation: string;
  birthPlace: string;
  birthCountry: string;
  occupation: string;
  education: string;
  knownFor: string[];
  languages: { language: string; proficiency: string }[];
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  introLede: string[];
}
