export type Language = 'zh' | 'en';

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface NavLink {
  label: LocalizedString;
  path: string;
}

export interface CurriculumYear {
  year: LocalizedString; // e.g., "Freshman", "Sophomore"
  location: LocalizedString; // e.g., "Putian", "Xiamen"
  courses: LocalizedString[];
}

export interface Major {
  id: string; // Added ID for routing
  name: LocalizedString;
  description: LocalizedString;
  intro: LocalizedString; // Longer introduction
  curriculumRoadmap: CurriculumYear[]; // Detailed year-by-year
  researchAreas: LocalizedString[];
  careers: LocalizedString[]; 
  mentors: LocalizedString[];
}

export interface Department {
  id: string;
  name: LocalizedString;
  shortName: LocalizedString; // e.g., "SME", "MED"
  dean: LocalizedString;
  description: LocalizedString;
  detailedIntro: LocalizedString; // For department homepage
  majors: Major[];
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: LocalizedString;
  date: string;
  category: LocalizedString;
  summary: LocalizedString;
  imageUrl: string;
}

export interface Stat {
  label: LocalizedString;
  value: string;
  description: LocalizedString;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
