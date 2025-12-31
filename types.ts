export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillItem {
  category: string;
  skills: string[];
}

export interface AppShowcase {
  name: string;
  description: string;
  iosLink?: string;
  androidLink?: string;
  color: string;
  icon: string;
}

export interface CXNode {
  id: string;
  type: 'trigger' | 'action' | 'condition' | 'wait';
  label: string;
  subLabel?: string;
  x: number;
  y: number;
}