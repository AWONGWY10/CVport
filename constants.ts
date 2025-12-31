import { ExperienceItem, SkillItem, AppShowcase, CXNode } from './types';

export const PERSONAL_INFO = {
  name: "Wong Wai Yain",
  role: "Product Owner / Product Manager",
  location: "Penang, Malaysia",
  phone: "019-558 7393",
  email: "wongwaiyain@hotmail.com",
  summary: "Product Owner / Product Manager with 5+ years of hands-on experience building and scaling products including mobile apps. Strong at translating business needs into clear product requirements, managing end-to-end delivery with engineering teams, and balancing client expectations with technical constraints. Comfortable working closely with developers, designers, operations, and clients to ship practical, revenue-impacting features in fast-moving environments.",
  achievements: [
    "Successfully launched high-retention mobile applications.",
    "Built a no-code automation builder from scratch.",
    "Integrated complex systems with major retail networks.",
    "Institutionalized structured PRD and backlog grooming processes."
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'webbytes',
    role: "Product Owner",
    company: "Web Bytes Sdn Bhd",
    period: "Oct 2020 – Present",
    description: [
      "Own the product lifecycle for multiple mobile applications and web platforms used by major retail and F&B brands across Malaysia.",
      "Work closely with frontend and backend engineers to plan sprints, groom backlogs, and deliver features on schedule.",
      "Act as the key bridge between clients, business teams, and engineers, translating business goals into clear functional and technical requirements.",
      "Lead sprint ceremonies including backlog grooming, sprint planning, stand-ups, and UAT sign-off.",
      "Use SQL to validate data, investigate production issues, and support faster issue resolution for clients.",
      "Collaborate with designers using Figma and Adobe XD to produce wireframes and prototypes for new features.",
      "Produce clear product documentation and feature briefs to align internal teams and external stakeholders."
    ]
  },
  {
    id: 'macro-po',
    role: "Programme Owner",
    company: "MACRO KIOSK Berhad",
    period: "2019 – 2020",
    description: [
      "Led the launch of “BOLD.Up”, a Developer Relations programme introducing a new revenue stream for the company.",
      "Owned the product roadmap for the Developer Portal, working closely with engineering teams from concept to launch.",
      "Defined functional requirements, user flows, and content structure to ensure a smooth developer onboarding experience.",
      "Partnered with marketing teams to align product messaging and drive adoption of APIs and platform tools."
    ]
  },
  {
    id: 'macro-ba',
    role: "Analyst",
    company: "MACRO KIOSK Berhad",
    period: "2018 – 2019",
    description: [
      "Conducted market research on SaaS products, tech startups, and co-working spaces to identify growth opportunities.",
      "Performed company and partnership analysis, supporting leadership decisions with data-backed insights.",
      "Supported project planning and progress tracking to ensure delivery against business milestones."
    ]
  },
  {
    id: 'teratai',
    role: "Admin Assistant",
    company: "Teratai Gateway Sdn. Bhd",
    period: "Jun 2015 – Aug 2015",
    description: [
      "Maintained inventory and accounting records using SQL Accounting software.",
      "Prepared and processed invoices, delivery orders, and operational documentation."
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { 
    category: "Product Management", 
    skills: ["Sprint Planning", "Backlog Prioritization", "User Stories", "Roadmap Planning", "Stakeholder Management", "Product Documentation"] 
  },
  { 
    category: "Technical & Tools", 
    skills: ["SQL (Data Validation & Troubleshooting)", "POSTMAN", "Excel"] 
  },
  { 
    category: "UI/UX", 
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"] 
  },
  {
    category: "Languages",
    skills: ["English", "Chinese", "Bahasa Malaysia"]
  }
];

export const APPS_DATA: AppShowcase[] = [
  {
    name: "llaollao Club",
    description: "Successfully launched the official mobile application for llaollao Malaysia, driving significant user engagement and digital revenue.",
    iosLink: "https://apps.apple.com/my/app/myllaollaoclub/id1499925477",
    androidLink: "https://play.google.com/store/apps/details?id=com.webbytes.llaollao",
    color: "bg-green-500",
    icon: "ice-cream"
  },
  {
    name: "Al-Ikhsan Sports",
    description: "High-impact retail application integrated with POS for seamless omnichannel user experiences across hundreds of outlets.",
    iosLink: "https://apps.apple.com/sg/app/al-ikhsan-sports/id6747497015",
    androidLink: "https://play.google.com/store/apps/details?id=com.alikhsan.app_al_ikhsan",
    color: "bg-black",
    icon: "activity"
  },
  {
    name: "Mydin Rewards",
    description: "Enterprise-scale loyalty and rewards platform for one of Malaysia's largest hypermarket chains.",
    iosLink: "https://apps.apple.com/my/app/mydin-rewards/id6478905253",
    androidLink: "https://play.google.com/store/apps/details?id=my.mydin.meriah",
    color: "bg-blue-600",
    icon: "shopping-cart"
  }
];

export const CX_NODES: CXNode[] = [
  { id: '1', type: 'trigger', label: 'User Event', subLabel: 'Interaction Trigger', x: 50, y: 50 },
  { id: '2', type: 'condition', label: 'Logic Split', subLabel: 'Requirement Check', x: 250, y: 50 },
  { id: '3', type: 'action', label: 'Feature Delivery', subLabel: 'User Value', x: 450, y: 0 },
  { id: '4', type: 'action', label: 'Data Record', subLabel: 'System Update', x: 450, y: 100 },
  { id: '5', type: 'wait', label: 'Wait Delay', subLabel: 'Scheduled Task', x: 650, y: 0 },
  { id: '6', type: 'action', label: 'Notification', subLabel: 'External Sync', x: 850, y: 0 },
];
