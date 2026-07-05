/* Single source of truth for all portfolio content */

export const PROFILE = {
  name: "Chirayu Batra",
  role: "Software Engineer",
  focus: "GenAI · Agentic AI · Full-Stack",
  tagline:
    "I design, build and ship production-grade AI systems and full products — end to end, idea to production.",
  location: "Bengaluru, India",
  email: "chirayubatra1104@gmail.com",
  phone: "+91 88514 35787",
  links: {
    github: "https://github.com/ChirayuBatra99",
    linkedin: "https://www.linkedin.com/in/ChirayuBatra",
    leetcode: "https://leetcode.com/chirayubatra1104",
  },
};

export const STATS = [
  { value: "53%", label: "LLM cost reduction" },
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
    title: "iSober",
    subtitle: "Quit Addictions",
    year: "Live · Google Play",
    blurb:
      "A self-initiated consumer app that helps people quit addictions by tracking progress, building healthier habits and staying motivated. I owned the entire product lifecycle — ideation, UI/UX (Figma), frontend, backend, database, deployment, DevOps, Play Store publishing and marketing.",
    highlights: [
      "End-to-end product ownership — solo",
      "Auth, API design & state management",
      "Cloud deployment, analytics & release management",
      "Live app maintained for real users",
    ],
    stack: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase"],
    accent: "#b6ff2e",
    link: "#",
  },
  {
    index: "02",
    title: "VIT Carpool",
    subtitle: "Campus ride-sharing platform",
    year: "Full-Stack · MERN",
    blurb:
      "A full-stack carpooling platform for VIT Chennai students to create trips, discover rides, bid for seats and coordinate travel. OTP-based auth, FCM push notifications, Firebase Storage for profile media and Redux state management — architected across a separate frontend and backend.",
    highlights: [
      "OTP auth: /auth/request-otp · /auth/verify-otp",
      "Bidding engine: /bids/place-bid · /bids/get-bids-of-month",
      "FCM multicast via firebase-admin + tokens in Mongo",
      "Reusable UI: LocationDropDown, TravellersGrid, WindowCell",
    ],
    stack: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB"],
    accent: "#b06bff",
    link: "#",
  },
];

export const EXPERIENCE = [
  {
    company: "Tricon Infotech",
    role: "Associate Software Engineer — GenAI",
    period: "Sep 2025 — Present",
    points: [
      "Designed and deployed production-grade AI agents with LangGraph — state management, memory, conditional routing, tool orchestration and RAG workflows.",
      "Architected a table-aware context retrieval system, cutting prompt size by 87% and inference cost by 53% with no quality loss.",
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
  "‘Top Coder’ Award — VIT University",
  "Reduced enterprise LLM costs by 53%",
  "MERN Stack Internship Program — Ethnus",
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
