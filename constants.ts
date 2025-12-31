import { ExperienceItem, SkillItem, AppShowcase, CXNode } from './types';

export const PERSONAL_INFO = {
  name: "Wong Wai Yain",
  role: "Product Owner / Product Manager",
  location: "Bukit Mertajam, Penang",
  phone: "019-558 7393",
  email: "wongwaiyain@hotmail.com",
  summary: "Product Owner / Product Manager with 5+ years of hands-on experience building and scaling loyalty, and customer engagement products including mobile apps integrated with POS systems. Strong at translating business needs into clear product requirements, managing end-to-end delivery with engineering teams, and balancing client expectations with technical constraints.",
  achievements: [
    "Successfully launched llaollao Club app with high user retention.",
    "Built a no-code CX Builder from scratch.",
    "Integrated loyalty systems with major retail POS networks.",
    "Introduced structured PRD processes in engineering teams."
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'webbytes',
    role: "Product Owner",
    company: "Web Bytes Sdn Bhd",
    period: "Oct 2020 – Present",
    description: [
      "Own the product lifecycle for multiple mobile loyalty applications and web platforms used by retail and F&B brands across Malaysia.",
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
    skills: ["SQL (Data Validation)", "POSTMAN", "Excel", "System Analysis"] 
  },
  { 
    category: "UI/UX", 
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"] 
  }
];

export const APPS_DATA: AppShowcase[] = [
  {
    name: "llaollao Club",
    description: "The official loyalty app for llaollao Malaysia. Collect points, redeem frozen yogurt, and climb tiers through a gamified experience.",
    iosLink: "https://apps.apple.com/my/app/myllaollaoclub/id1499925477",
    androidLink: "https://play.google.com/store/apps/details?id=com.webbytes.llaollao",
    color: "bg-green-500",
    icon: "ice-cream"
  },
  {
    name: "Al-Ikhsan Sports",
    description: "Sports retail loyalty. Integrated w/ POS for seamless earning and redemption of sports gear rewards across hundreds of outlets.",
    iosLink: "https://apps.apple.com/sg/app/al-ikhsan-sports/id6747497015",
    androidLink: "https://play.google.com/store/apps/details?id=com.alikhsan.app_al_ikhsan",
    color: "bg-black",
    icon: "activity"
  },
  {
    name: "Mydin Rewards",
    description: "Massive scale hypermarket loyalty program. Features catalogue redemptions, member achievements, and cross-brand partner vouchers.",
    iosLink: "https://apps.apple.com/my/app/mydin-rewards/id6478905253",
    androidLink: "https://play.google.com/store/apps/details?id=my.mydin.meriah",
    color: "bg-blue-600",
    icon: "shopping-cart"
  }
];

export const CX_NODES: CXNode[] = [
  { id: '1', type: 'trigger', label: 'Wait Event', subLabel: 'Purchase > RM50', x: 50, y: 50 },
  { id: '2', type: 'condition', label: 'Is Member VIP?', subLabel: 'Check Tier', x: 250, y: 50 },
  { id: '3', type: 'action', label: 'Issue Voucher', subLabel: 'RM20 Reward', x: 450, y: 0 },
  { id: '4', type: 'action', label: 'Issue Points', subLabel: '2x Multiplier', x: 450, y: 100 },
  { id: '5', type: 'wait', label: 'Wait Delay', subLabel: '3 Days', x: 650, y: 0 },
  { id: '6', type: 'action', label: 'Send Email', subLabel: 'Thank You + Survey', x: 850, y: 0 },
];
