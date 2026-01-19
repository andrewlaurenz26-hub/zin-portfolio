
export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface PortfolioData {
  name: string;
  bio: string;
  contact: {
    github: string;
    email: string;
    phone: string;
    line: string;
  };
  skills: string[];
  experience: Experience[];
  education: EducationItem[];
}
