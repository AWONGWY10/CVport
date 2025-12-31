import { ExperienceItem, SkillItem, AppShowcase, CXNode } from './types';

export const PERSONAL_INFO = {
  name: "Wong Wai Yain",
  role: "Product Owner / Product Manager",
  location: "Bukit Mertajam, Penang",
  phone: "019-558 7393",
  email: "wongwaiyain@hotmail.com",
  summary: "Product Owner with 5+ years of hands-on experience building loyalty, rewards, and customer engagement products integrated with POS systems. Expert in translating complex business needs into intuitive product requirements and managing end-to-end delivery.",
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
    role: "Product Owner / Product Manager",
    company: "Web Bytes Sdn Bhd",
    period: "Oct 2020 – Present",
    description: [
      "Own and deliver mobile and web-based loyalty and customer engagement products used by merchants across F&B and retail.",
      "Manage and prioritise the product backlog, plan sprints, and work day-to-day with engineering teams.",
      "Design and maintain loyalty-related features including points, stamps, vouchers, and member tiers.",
      "Introduced and own structured product documentation practices (PRDs, feature papers, user flows).",
      "Apply basic knowledge of Postman and SQL for technical validation and troubleshooting."
    ]
  },
  {
    id: 'macro-po',
    role: "Programme Owner – Developer Relations",
    company: "Macro Kiosk Berhad",
    period: "2019 – 2020",
    description: [
      "Led and introduced a new revenue stream through the Developer Relations Programme (BOLD.Up).",
      "Defined portal structure, onboarding experience, and documentation requirements."
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { category: "Product Management", skills: ["Backlog Management", "Sprint Planning", "Requirement Gathering", "Stakeholder Management"] },
  { category: "Technical", skills: ["Loyalty Logic", "POS Integration", "Basic SQL", "API Testing (Postman)"] },
  { category: "Design & Tools", skills: ["User Flow Design", "Adobe XD", "Figma", "Jira/Confluence"] }
];

export const APPS_DATA: AppShowcase[] = [
  {
    name: "llaollao Club",
    description: "The official loyalty app for llaollao Malaysia. Collect points, redeem frozen yogurt, and climb tiers.",
    iosLink: "https://apps.apple.com/my/app/myllaollaoclub/id1499925477",
    androidLink: "https://play.google.com/store/apps/details?id=com.webbytes.llaollao",
    color: "bg-green-500",
    icon: "ice-cream"
  },
  {
    name: "Al-Ikhsan Sports",
    description: "Sports retail loyalty. Integrated w/ POS for seamless earning and redemption of sports gear rewards.",
    iosLink: "https://apps.apple.com/sg/app/al-ikhsan-sports/id6747497015",
    androidLink: "https://play.google.com/store/apps/details?id=com.alikhsan.app_al_ikhsan",
    color: "bg-black",
    icon: "activity"
  },
  {
    name: "Mydin Rewards",
    description: "Massive scale hypermarket loyalty program. Features catalogue redemptions and member achievements.",
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
