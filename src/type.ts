export type RoleItem = {
  role: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link?: string;
  date?: string; 
  githubLink?: string;
  driveLink?: string;
  category: 'frontend' | 'backend' | 'iot' | 'fullstack';
  features?: string[];
  challenges?: string;
  architecture?: string;
  myRole?: string;
  impact?: string;
  keyLearnings?: string;
  status?: string;
  realWorldImplementation?: string;
  problem?: string;
  solution?: string;
  roleStructure?: RoleItem[];
  image?: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  details: string; // Changed from string[] to string to match constants
};

export type CertificationItem = {
  title: string; // Changed from name to match constants
  issuer: string;
  year?: string; // Made optional as it's missing in some constants
  link?: string;
  type?: 'CERTIFICATE' | 'BADGE' | 'GOLD CERTIFICATE';
};

// NEW: Internship type
// NEW: Internship/Leadership type
export type LeadershipItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export type AchievementItem = {
  title: string;
  organization: string;
  year: string;
  description: string;
  type?: string;
  prize?: string;
  score?: string;
  category?: 'hackathon' | 'leadership' | 'ambassador';
  iconName?: 'trophy' | 'rocket' | 'lightbulb' | 'graduation' | 'shield' | 'code' | 'star' | 'award';
};

export type FeaturedRepoItem = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  highlight?: string;
};

export type VsbStudentProfile = {
  name: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl?: string;
  role: string;
  department: string;
  college: string;
  batch: string;
  description: string;
  featuredRepos: FeaturedRepoItem[];
  skills: string[];
  metrics: {
    commits?: string;
    repos?: string;
    achievements?: string;
  };
  evaluationHighlights: string[];
};

export type ShowcaseCriteria = {
  title: string;
  description: string;
  iconName: 'code' | 'fileText' | 'activity' | 'shieldCheck' | 'award';
};


