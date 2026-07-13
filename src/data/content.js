/* Single source of truth for all portfolio content */

import carpoolImg from "../assets/carpool.png";
import isoberImg from "../assets/isober.png";

export const PROFILE = {
  name: "Chirayu Batra",
  role: "Software Engineer",
  focus: "Agentic AI · Full-Stack · Mobile Apps",
  tagline:
    "I design, build and ship production-grade AI systems and full products end to end, idea to production.",
  location: "Bengaluru, India",
  email: "chirayubatra1104@gmail.com",
  phone: "+91 88514 35787",
  links: {
    github: "https://github.com/ChirayuBatra99",
    linkedin: "https://www.linkedin.com/in/ChirayuBatra",
    leetcode: "https://leetcode.com/chirayubatra1104",
  },
};

export const PLAY_STORE = {
  developer:
    "https://play.google.com/store/apps/developer?id=Chirayu%27s+Star+Studio&hl=en_IN",
};

export const STATS = [
  // { value: "53%", label: "LLM cost reduction" },
  { value: "20+", label: "AI agents shipped." },
  { value: "550+", label: "DSA problems solved" },
  { value: "2", label: "Apps shipped to Play Store" },
  { value: "8.27", label: "CGPA / 10" },
];

export const SKILLS = [
  {
    group: "AI & LLM Engineering",
    items: [
      "LangGraph",
      "LangChain",
      "Agentic AI",
      "RAG",
      "Advanced RAG",
      "Prompt Engineering",
      "Context Engineering",
      "Tool Calling",
      "MCP Servers",
      "Vector Databases",
      "LangSmith",
    ],
  },
  {
    group: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs"],
  },
  {
    group: "Frontend & Mobile",
    items: ["React.js", "React Native", "Next.js", "TypeScript", "Redux"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQL", "DynamoDB", "Snowflake"],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "AWS S3",
      "DynamoDB",
      "Firebase Storage",
      "Firebase Cloud Messaging",
    ],
  },
];

export const PROJECTS = [
  {
    index: "01",
    title: "Carpool VIT",
    subtitle: "Campus ride-sharing platform",
    year: "Live · Google Play",
    blurb:
      "A full-stack carpooling platform for VIT Chennai students to create trips, discover rides, bid for seats and coordinate travel. OTP-based auth, FCM push notifications, Firebase Storage for profile media and Redux + Zustand state management - architected across a separate frontend and backend.",
    highlights: [
      "OTP based authentication, real time messaging through sockets, group chats",
      "Firebase notifications and Firebase storage bucket",
      "Architected backend, database designs, reusable frontend components",
      "Firebase bucket media uploads, Zustand and Redux for state management",
      "React Native frontend, Node.js backend",
      "Inbuilt light/dark modes, inbuilt notification controls",
      "Deployed on AWS EC2",
      "Managed Play Store, figma, frontend, backend, deployments, releases all by myself.",
    ],
    stack: ["React Native", "Node.js", "MongoDB", "socket.io", "AWS EC2", "Firebase", "Redux", "Zustand"],
    accent: "#ffffff",
    image: carpoolImg,
    link: "https://play.google.com/store/apps/details?id=com.carpoolchirayu&hl=en_IN",
  },
  {
    index: "02",
    title: "iSober",
    subtitle: "Quit Addictions",
    year: "Live · Google Play",
    blurb:
      "A self-initiated consumer app that helps people quit addictions by tracking progress, building healthier habits and staying motivated. I owned the entire product lifecycle - ideation, UI/UX (Figma), frontend, Play Store publishing and marketing.",
    highlights: [
      "End-to-end product ownership -> solo",
      "State management, Figma, development, release management",
      "Inbuilt self help features like ToDo, Journaling, Focus, streaks, goal setting, etc",
      "Live app maintained for real users",
      "100+ downloads on Play Store till date."
    ],
    stack: ["React Native", "TypeScript", "useContext", "Redux", "Play Store"],
    accent: "#b6ff2e",
    image: isoberImg,
    link: "https://play.google.com/store/apps/details?id=com.smokingnfroundcircleapp&hl=en_IN",
  },
];

export const EXPERIENCE = [
  {
    company: "Tricon Infotech",
    role: "Associate Software Engineer — GenAI",
    period: "Sep 2025 — Present",
    points: [
      "Designed and deployed production-grade AI agents with LangGraph - state management, memory, conditional routing, tool orchestration and RAG workflows.",
      "In a self designed POC, architected a table-aware context retrieval system, cutting system prompt size by 87% and LLM inference cost by 53% with no quality loss in an existing production project",
      "Built reusable AI services with LangChain, FastAPI & Python for image generation, PPT generation, Outlook integration and streaming.",
      "Engineered natural-language-to-SQL analytics agents with automated query execution, chart generation and tabular insights.",
    ],
  },
  {
    company: "Tricon Infotech",
    role: "Full-Stack + GenAI Intern",
    period: "Jun 2025 — Aug 2025",
    points: [
      "Delivered end-to-end product features with React.js, FastAPI, DynamoDB, LangChain & LangSmith for enterprise applications.",
      "Built full-stack APIs and UI components independently, shipping production-ready features into an existing internal platform.",
    ],
  },
  {
    company: "Sifars",
    role: "Full-Stack Developer Intern",
    period: "Aug 2023 — Dec 2023",
    points: [
      "Delivered features across three full-stack products using React.js, Node.js, Express.js, MongoDB & TypeScript.",
      "Contributed to call-recording software, Jira–Clockify automation and a company website migration across multiple teams.",
    ],
  },
];

export const ACHIEVEMENTS = [
  "450+ DSA problems solved on LeetCode",
  "100+ DSA problems solved on GeeksForGeeks",
  "‘Top Coder’ Award - VIT University",
  "Reduced existing enterprise LLM agent inference costs by 53% by a self-designed POC",
  "MERN Stack Internship Program - Ethnus",
  "2 apps 'Play Store' published"
];

/* 5–6 mentors — swap the `img` placeholders when assets arrive */
export const MENTORS = [
  { name: "Mentor One", role: "Role / Title", img: "" },
  { name: "Mentor Two", role: "Role / Title", img: "" },
  { name: "Mentor Three", role: "Role / Title", img: "" },
  { name: "Mentor Four", role: "Role / Title", img: "" },
  { name: "Mentor Five", role: "Role / Title", img: "" },
  { name: "Mentor Six", role: "Role / Title", img: "" },
];
