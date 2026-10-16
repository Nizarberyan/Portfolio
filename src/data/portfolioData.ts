import { PersonalInfo, CareerExperience, EducationItem, SkillCategory, Project, Citation } from '../types/portfolio';
import { getWikiUrl } from './wikipediaLinks';

export const personalInfo: PersonalInfo = {
  name: "Nizar Beriane",
  nativeName: "نزار بريان",
  disambiguation: "mobile developer",
  birthPlace: "Tangier",
  birthCountry: "Morocco",
  occupation: "Mobile developer",
  education: "YouCode Morocco (UM6P), Advanced Full-Stack Development, 2024–2026",
  knownFor: [
    "Cross-platform mobile apps (React Native & Flutter)",
    "Real-time & geolocation systems",
    "Fluid UI animations (Reanimated & Skia)",
    "On-device storage (SQLite & Drizzle ORM)",
    "Full-stack TypeScript & Go backends"
  ],
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Professional working" },
    { language: "French", proficiency: "Intermediate" }
  ],
  email: "nizarberiane@proton.me",
  phone: "+212 628 204 623",
  website: "https://nizarberiane.dev",
  github: "https://github.com/Nizarberyan",
  linkedin: "https://linkedin.com/in/nizar-beriane",
  resumeUrl: "/Nizar_Beriane_Resume_Mobile.pdf",
  introLede: [
    "Mobile developer based in Tangier, Morocco, specializing in cross-platform applications with React Native and Flutter, and the TypeScript backends behind them.",
    "Shipped a real-time carpooling app to 500+ active users and a Flutter booking app used by 15+ local businesses. Experienced with real-time and geolocation features, interactive animations, and on-device data storage."
  ]
};

export const careerExperience: CareerExperience[] = [
  {
    role: "Mobile Developer Intern",
    company: "IzyDesk",
    companyWikiUrl: "https://izydesk.fr",
    period: "2025",
    location: "Tangier, Morocco",
    summary: "IzyDesk is a custom enterprise software development agency focused on internal tools and digital solutions for B2B clients.",
    achievements: [
      "Built Resaly Pro, a salon management app now used by 15+ local businesses.",
      "Wrote the real-time booking flow in Flutter on top of a Symfony REST API.",
      "Tuned the Symfony workflows behind it, which raised team efficiency by 25%."
    ],
    skills: ["Flutter", "Dart", "Symfony", "MySQL", "REST API", "Git"],
    citationId: 1
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Advanced Full-Stack Development Program",
    institution: "YouCode Morocco (UM6P)",
    institutionWikiUrl: getWikiUrl("UM6P"),
    partner: "Simplon.co",
    period: "2024 – 2026",
    location: "Tangier / Youssoufia, Morocco",
    summary: "An intensive, project-based Software Engineering curriculum covering mobile application development, distributed architecture, and modern DevOps.",
    focusAreas: [
      "Cross-platform mobile application development in React Native and Flutter",
      "Backend systems in TypeScript, Node.js, and Go",
      "Distributed architecture and real-time messaging",
      "Modern relational and on-device databases (SQLite, PostgreSQL, MongoDB, Redis)"
    ],
    citationId: 2
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Mobile",
    skills: [
      { name: "React Native", wikiUrl: getWikiUrl("React Native"), description: "Cross-platform mobile framework for iOS and Android" },
      { name: "Expo", wikiUrl: getWikiUrl("Expo"), description: "Ecosystem featuring Expo Router and EAS Build" },
      { name: "Flutter", wikiUrl: getWikiUrl("Flutter"), description: "Multi-platform UI software development kit by Google" },
      { name: "Reanimated", wikiUrl: getWikiUrl("Reanimated"), description: "60/120 FPS animations running directly on the mobile UI thread" },
      { name: "Skia", wikiUrl: getWikiUrl("Skia"), description: "High-performance 2D vector graphics rendering engine" },
      { name: "NativeWind", wikiUrl: getWikiUrl("NativeWind"), description: "Utility-first styling for React Native powered by Tailwind CSS" },
      { name: "React Navigation", wikiUrl: getWikiUrl("React Navigation"), description: "Routing and navigation infrastructure for mobile apps" },
      { name: "Redux", wikiUrl: getWikiUrl("Redux"), description: "Predictable state container for cross-screen state management" }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", wikiUrl: getWikiUrl("TypeScript"), description: "Strict syntactical superset of JavaScript adding static typing" },
      { name: "JavaScript", wikiUrl: getWikiUrl("JavaScript"), description: "Dynamic scripting language for mobile and web development" },
      { name: "Dart", wikiUrl: getWikiUrl("Dart"), description: "Client-optimized object-oriented language behind Flutter" },
      { name: "Go", wikiUrl: getWikiUrl("Go"), description: "Statically typed, compiled language designed for concurrency and scale" },
      { name: "PHP", wikiUrl: getWikiUrl("PHP"), description: "Server scripting language for enterprise web platforms" }
    ]
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Node.js", wikiUrl: getWikiUrl("Node.js"), description: "Event-driven asynchronous JavaScript runtime" },
      { name: "NestJS", wikiUrl: getWikiUrl("NestJS"), description: "Progressive Node.js framework for scalable server-side applications" },
      { name: "Express", wikiUrl: getWikiUrl("Express"), description: "Minimalist web framework for Node.js" },
      { name: "Laravel", wikiUrl: getWikiUrl("Laravel"), description: "PHP web application framework with elegant syntax" },
      { name: "Symfony", wikiUrl: getWikiUrl("Symfony"), description: "Decoupled PHP framework for high-performance enterprise APIs" },
      { name: "PostgreSQL", wikiUrl: getWikiUrl("PostgreSQL"), description: "Open-source object-relational database system" },
      { name: "MongoDB", wikiUrl: getWikiUrl("MongoDB"), description: "Document-oriented NoSQL database system" },
      { name: "MySQL", wikiUrl: getWikiUrl("MySQL"), description: "Relational database management system" },
      { name: "SQLite", wikiUrl: getWikiUrl("SQLite"), description: "Self-contained embedded SQL database for local on-device mobile storage" },
      { name: "Drizzle", wikiUrl: getWikiUrl("Drizzle"), description: "Type-safe TypeScript ORM for on-device and backend databases" },
      { name: "Prisma", wikiUrl: getWikiUrl("Prisma"), description: "Next-generation ORM for Node.js and TypeScript" },
      { name: "Redis", wikiUrl: getWikiUrl("Redis"), description: "In-memory data structure store used as cache and message broker" }
    ]
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      { name: "Git", wikiUrl: getWikiUrl("Git"), description: "Distributed version control system" },
      { name: "Docker", wikiUrl: getWikiUrl("Docker"), description: "Platform for containerizing and isolating applications" },
      { name: "Nginx", wikiUrl: getWikiUrl("Nginx"), description: "High-performance web server, reverse proxy, and load balancer" },
      { name: "Linux", wikiUrl: getWikiUrl("Linux"), description: "Unix-like open-source operating system kernel" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ridemate",
    title: "RideMate",
    subtitle: "Cross-Platform Real-Time Carpooling App (500+ Active Users)",
    year: "2026",
    description: "A cross-platform carpooling platform serving 500+ active users, engineered with a React Native mobile application and a Next.js web app. Features real-time geolocation matching that cut wait times by 30% with 99.9% data consistency during peak hours. Features interactive maps and location tracking, push notifications, secure token storage, multi-language internationalization (i18next), and EAS builds.",
    highlights: [
      "Designed and built a carpooling platform for 500+ active users, with a React Native app and a Next.js web app.",
      "Built real-time geolocation matching that cut wait times by 30%, with 99.9% data consistency.",
      "Added maps and location, push notifications, secure token storage, multi-language support (i18next), and EAS builds.",
      "Architected the TypeScript backend with NestJS and PostgreSQL for concurrent rideshare synchronization."
    ],
    techStack: ["React Native", "Expo", "TypeScript", "NestJS", "Next.js"],
    githubUrl: "https://github.com/Nizarberyan/RideMate-mobile",
    citationId: 3,
    featured: true,
    category: "Mobile"
  },
  {
    id: "zephyr",
    title: "Zephyr Mobile",
    subtitle: "Animated Music Stats & Dashboard Mobile App",
    year: "2025–2026",
    description: "A React Native mobile analytics dashboard displaying top artists, albums, and tracks over customizable time ranges for a self-hosted music server. Features an animated, story-style Weekly Recap built with React Native Reanimated and Skia graphics, plus shareable visual cards. Optimized with local artwork caching and a data saver mode for slow mobile connections, backed by a Go (Fiber) and TimescaleDB service.",
    highlights: [
      "Built a dashboard of top artists, albums and tracks over different time ranges for a self-hosted music server.",
      "Made an animated, story-style Weekly Recap with Reanimated and Skia, plus shareable cards.",
      "Cached artwork from the user's own server and added a data saver mode for slow connections.",
      "Wrote the Go (Fiber) and TimescaleDB backend with JWT authentication."
    ],
    techStack: ["React Native", "Expo Router", "Reanimated", "Skia", "Victory Native", "Go"],
    githubUrl: "https://github.com/Nizarberyan/zephyr",
    citationId: 6,
    featured: true,
    category: "Mobile"
  },
  {
    id: "healthsphere",
    title: "HealthSphere",
    subtitle: "Offline-First Workout Tracker with SQLite & Drizzle ORM",
    year: "2025–2026",
    description: "A React Native workout logging mobile app engineered with Expo Router and NativeWind. Delivers workout tracking with list, add, detail, and delete screens, strict form validation, exercise type filters, dark mode, and smooth animations. Migrated on-device storage from AsyncStorage to SQLite with Drizzle ORM for robust offline-first persistence, with graceful loading and error states on launch.",
    highlights: [
      "Built workout logging with list, add, detail and delete screens, form validation, type filters, dark mode and animations.",
      "Moved storage from AsyncStorage to SQLite with Drizzle ORM, with loading and error states on launch.",
      "Combined stack, tab and drawer navigation into an intuitive mobile interface.",
      "Started a NestJS backend in Docker for synchronization and API services."
    ],
    techStack: ["React Native", "Expo Router", "NativeWind", "SQLite", "Drizzle ORM", "NestJS"],
    githubUrl: "https://github.com/Nizarberyan/healthsphere",
    citationId: 7,
    featured: true,
    category: "Mobile"
  },
  {
    id: "lms-api",
    title: "LMS API",
    subtitle: "High-Throughput EdTech Backend Architecture",
    year: "2026",
    description: "NestJS, MongoDB, and Docker backend for an e-learning platform, built for 10,000+ concurrent requests with sub-50ms responses and 40% less CI/CD pipeline overhead.",
    highlights: [
      "Engineered modular backend architecture supporting 10,000+ concurrent requests.",
      "Sequential module progression logic optimized for sub-50ms response times.",
      "Reduced CI/CD pipeline overhead by 40% through containerized Docker workflows."
    ],
    techStack: ["Node.js", "NestJS", "MongoDB", "Docker"],
    githubUrl: "https://github.com/Nizarberyan/lms-api",
    citationId: 4,
    featured: false,
    category: "Backend / Systems"
  },
  {
    id: "moneymind",
    title: "MoneyMind",
    subtitle: "AI Financial Analytics & Budgeting App",
    year: "2025",
    description: "Laravel budgeting app that uses Gemini AI to analyze spending, achieving 92% accuracy on personalized financial insights, with a responsive mobile-first interface.",
    highlights: [
      "Integrated Gemini AI for predictive expense analysis and personalized financial recommendations.",
      "Achieved 92% predictive accuracy across personalized user financial forecasts.",
      "Built mobile-responsive web interface using Laravel and Tailwind CSS."
    ],
    techStack: ["Laravel", "Gemini AI", "Tailwind CSS", "PHP"],
    githubUrl: "https://github.com/Nizarberyan/moneymind",
    citationId: 5,
    featured: false,
    category: "AI / SaaS"
  }
];

export const citations: Citation[] = [
  {
    id: 1,
    author: "IzyDesk Engineering",
    title: "Resaly Pro: Salon Management System Flutter Mobile Client & Backend Deployment",
    publisher: "IzyDesk Technical Documentation",
    date: "2025",
    url: "https://izydesk.fr",
    accessDate: "2026-10-15",
    quote: "Flutter cross-platform client with real-time booking and Symfony REST API adopted by 15+ local businesses, raising team efficiency by 25%.",
    type: "article"
  },
  {
    id: 2,
    author: "YouCode Morocco / UM6P",
    title: "Advanced Full-Stack Software Engineering Program Specification",
    publisher: "YouCode Morocco & Simplon.co",
    date: "2024–2026",
    url: "https://youcode.ma",
    accessDate: "2026-10-15",
    quote: "Project-based Software Engineering curriculum covering mobile development, Go, Node.js, distributed systems, and DevOps.",
    type: "credential"
  },
  {
    id: 3,
    author: "Beriane, Nizar",
    title: "RideMate: Real-Time Sustainable Mobility & Carpooling App",
    publisher: "GitHub Repository",
    date: "2026",
    url: "https://github.com/Nizarberyan/RideMate-mobile",
    accessDate: "2026-10-15",
    quote: "React Native, Expo, TypeScript, NestJS, and Next.js carpooling app serving 500+ active users.",
    type: "repo"
  },
  {
    id: 4,
    author: "Beriane, Nizar",
    title: "LMS API: Modular Learning Management System Backend Architecture",
    publisher: "GitHub Repository",
    date: "2026",
    url: "https://github.com/Nizarberyan/lms-api",
    accessDate: "2026-10-15",
    quote: "Node.js, NestJS, MongoDB, and Docker backend supporting 10,000+ concurrent requests with sub-50ms responses.",
    type: "repo"
  },
  {
    id: 5,
    author: "Beriane, Nizar",
    title: "MoneyMind: Intelligent Budgeting Assistant with Gemini AI Integration",
    publisher: "GitHub Repository",
    date: "2025",
    url: "https://github.com/Nizarberyan/moneymind",
    accessDate: "2026-10-15",
    quote: "Laravel, Gemini AI, and Tailwind CSS financial analytics assistant with 92% predictive accuracy.",
    type: "repo"
  },
  {
    id: 6,
    author: "Beriane, Nizar",
    title: "Zephyr Mobile: Animated Music Stats App with Reanimated and Skia",
    publisher: "GitHub Repository",
    date: "2025–2026",
    url: "https://github.com/Nizarberyan/zephyr",
    accessDate: "2026-10-15",
    quote: "React Native, Expo Router, Reanimated, Skia, Victory Native, Go, and TimescaleDB music stats application.",
    type: "repo"
  },
  {
    id: 7,
    author: "Beriane, Nizar",
    title: "HealthSphere: Offline-First Workout Tracker with SQLite and Drizzle ORM",
    publisher: "GitHub Repository",
    date: "2025–2026",
    url: "https://github.com/Nizarberyan/healthsphere",
    accessDate: "2026-10-15",
    quote: "React Native, Expo Router, NativeWind, SQLite, Drizzle ORM, and NestJS workout logging application.",
    type: "repo"
  }
];

export const sectionsList = [
  { id: "introduction", title: "Introduction", level: 1 },
  { id: "career", title: "Career", level: 1 },
  { id: "career-izydesk", title: "IzyDesk (2025)", level: 2 },
  { id: "selected-works", title: "Selected works", level: 1 },
  { id: "mobile-projects", title: "Mobile applications", level: 2 },
  { id: "backend-projects", title: "Backend systems", level: 2 },
  { id: "technical-skills", title: "Technical skills", level: 1 },
  { id: "mobile-skills", title: "Mobile", level: 2 },
  { id: "languages-skills", title: "Languages", level: 2 },
  { id: "backend-skills", title: "Backend & data", level: 2 },
  { id: "infra-skills", title: "Tools & infrastructure", level: 2 },
  { id: "education", title: "Education", level: 1 },
  { id: "see-also", title: "See also", level: 1 },
  { id: "references", title: "References", level: 1 },
  { id: "external-links", title: "External links", level: 1 }
];
