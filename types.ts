import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  color: string;
  category: 'Web' | 'Security' | 'Simulation' | 'AI' | 'Mobile';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
  color: string;
  type: 'Tech' | 'University' | 'Community';
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ReactNode;
}

export enum SectionType {
  HERO = 'hero',
  MIND = 'mind',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}