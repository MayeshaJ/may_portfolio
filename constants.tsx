import React from 'react';
import { Code2, Shield, Terminal, Cpu, Database, Palette, Heart, Globe } from 'lucide-react';
import { Project, Experience, SkillCategory } from './types';

export const RESUME_DATA = {
  name: "Mayesha Jashim",
  title: "Computer Science Student",
  tagline: "Just a girlie in STEM architecting the simulations",
  education: {
    school: "Memorial University of Newfoundland",
    degree: "Bachelor's, Computer Science",
    gpa: "3.7",
    period: "May 2021 - Dec 2025",
    honors: ["Dean’s List 2024 – 2025"]
  },
  contact: {
    email: "mayesha0905@gmail.com",
    linkedin: "https://www.linkedin.com/in/mayesha-j/",
    github: "https://github.com/MayeshaJ",
    phone: "+1 (709) 690-4954"
  }
};

export const COURSES = [
  "Data Structures & Algorithms", "Software Engineering", "Intro to AI", 
  "Machine Learning", "Operating Systems", "Computer Networking",
  "Human Computer Interaction", "Nature Inspired Computing", "Data Mining",
  "Object-Oriented Programming", "Computer Architecture", "Web Programming"
];

export const PROJECTS: Project[] = [
  // {
  //   id: 'p5',
  //   title: 'Stonks: Trading Sim',
  //   description: 'A high-frequency trading simulation platform powered by Node.js. Implemented asynchronous trade logic handling real-time market data. Integrated MongoDB for persistent portfolio management and complex user authentication.',
  //   tech: ['Node.js', 'MongoDB', 'REST API', 'JavaScript', 'WebSockets'],
  //   color: 'bg-neo-green',
  //   category: 'Simulation'
  // },
  // {
  //   id: 'p4',
  //   title: 'Catch a Fish',
  //   description: 'Phishing simulation & detection platform designed to educate users on security threats. Features heuristic-based detection logic, interactive email testing, and a custom results analysis dashboard.',
  //   tech: ['Java', 'Spring Boot', 'H2 Database', 'GreenMail', 'React'],
  //   color: 'bg-neo-pink',
  //   category: 'Security'
  // },
  {
    id: 'p3',
    title: 'FeedbackFlow',
    description: 'Employee performance review portal optimizing HR workflows. Implemented multi-threading for concurrent user actions, achieving a 20% reduction in response times during peak usage.',
    tech: ['Python', 'SQL Server', 'Threading', 'Flask'],
    color: 'bg-neo-yellow',
    category: 'Web'
  },
  {
    id: 'p1',
    title: 'DocuQuery AI',
    description: 'A production-grade RAG system combining OpenAI embeddings and MS MARCO reranking. Enables users to query uploaded documents with natural language, receiving precision-scored answers with inline citations.',
    tech: ['Python', 'FastAPI', 'Next.js', 'OpenAI', 'RAG', 'NLP'],
    color: 'bg-neo-purple',
    category: 'AI'
  },
  {
    id: 'p2',
    title: 'GameLink',
    description: 'Cross-platform mobile app connecting sports enthusiasts. Integrated full Firebase Suite for real-time game sync and push notifications. Designed a FIFA-inspired UI with custom painters for dynamic player cards.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Mobile', 'iOS/Android'],
    color: 'bg-neo-orange',
    category: 'Mobile'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    role: 'Software Developer Co-op',
    company: 'Ontario Power Generation',
    location: 'Pickering, ON',
    period: 'Sep 2024 - Aug 2025',
    details: [
      'Developed scalable internal tools and data visualization suites using Python OOP, SQL Server, and Power BI, while managing deployments through Azure release cycles to modernize legacy data systems'
    ],
    color: 'bg-neo-orange',
    type: 'Tech'
  },
  {
    id: 'e2',
    role: 'Junior Digitization Assistant',
    company: 'Memorial University',
    location: 'St. John\'s, NL',
    period: 'Sep 2025 - Present',
    details: [
      'Collaborated with the Research Centre for the Study of Music, Media, and Place to preserve the School of Music\'s recorded history, transforming at-risk legacy media into a future-proof digital collection via LUNA.'
      ],
    color: 'bg-neo-purple',
    type: 'University'
  },
  {
    id: 'e3',
    role: 'Archivist Assistant',
    company: 'Memorial University',
    location: "St. John's, NL",
    period: "Sep 2022 - Aug 2024",
    details: ['Managed the organization and digitization of archival collections, maintaining accurate database inventories and processing backlogs to support the Digital Archive Initiative (DAI).'
      ],
    color: 'bg-neo-cyan',
    type: 'University'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "C/C++", "Dart", "SQL"],
    icon: <Terminal size={20} />
  },
  {
    name: "Web & Mobile",
    skills: ["React.js", "Next.js", "Node.js", "Flutter", "HTML/CSS", "Tailwind"],
    icon: <Globe size={20} />
  },
  {
    name: "Data & AI",
    skills: ["Pandas", "NumPy", "TensorFlow", "PyTorch", "NLP", "Power BI", "RAG"],
    icon: <Database size={20} />
  },
  {
    name: "Tools",
    skills: ["Git", "Azure", "Firebase", "Figma", "Postman", "Canva", "LUNA"],
    icon: <Code2 size={20} />
  }
];
