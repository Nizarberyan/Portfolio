import { PersonalInfo, CareerExperience, EducationItem, SkillCategory, Project, Citation } from '../types/portfolio';
import { getWikiUrl } from './wikipediaLinks';

export const personalInfo: PersonalInfo = {
  name: "Nizar Beriane",
  nativeName: "نزار بريان",
  disambiguation: "full-stack developer",
  birthPlace: "Tangier",
  birthCountry: "Morocco",
  occupation: "Full-stack developer",
  education: "YouCode Morocco (UM6P), Advanced Full-Stack Development, 2024–2026",
  knownFor: [
    "Real-time & geolocation systems",
    "AI/ML feature integration",
    "Cross-platform mobile delivery",
    "High-throughput backend design"
  ],
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Professional working" },
    { language: "French", proficiency: "Intermediate" }
  ],
  email: "nizarberiane@proton.me",
  github: "https://github.com/Nizarberyan",
  linkedin: "https://linkedin.com/in/nizar-beriane",
  resumeUrl: "/Nizar_Beriane_Resume.pdf",
  introLede: [
    "Full-stack developer based in Tangier, Morocco, specializing in TypeScript, high-fidelity React Native applications, and scalable Node.js backends.",
    "Known for owning products end-to-end — from real-time architecture and AI integration to shipping cross-platform mobile experiences — with a focus on measurable outcomes."
  ]
};

export const careerExperience: CareerExperience[] = [
  {
    role: "Mobile Developer Intern",
    company: "IzyDesk",
    companyWikiUrl: "https://izydesk.fr",
    period: "May 2025 – Aug 2025",
    location: "Tangier, Morocco",
    summary: "IzyDesk is a custom enterprise software development agency focused on internal tools for B2B clients.",
    achievements: [
      "Designed the backend for Resaly Pro, a salon management system, using Symfony and PostgreSQL, achieving sub-100ms scheduling response times.",
      "Built the cross-platform mobile client in Flutter for automated scheduling and billing, boosting operational efficiency by 30%.",
      "Developed analytical dashboards via a custom REST API, saving salon managers over 5 hours weekly on manual reporting.",
      "Resaly Pro was adopted by 15+ local businesses."
    ],
    skills: ["Symfony", "PostgreSQL", "Flutter", "REST API", "Git"],
    citationId: 1
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Advanced Full-Stack Development Program",
    institution: "YouCode Morocco (UM6P)",
    institutionWikiUrl: getWikiUrl("UM6P"),
    partner: "Simplon.co",
    period: "Sep 2024 – Apr 2026",
    location: "Youssoufia, Morocco",
    summary: "An intensive, project-based Software Engineering curriculum covering full-stack development, distributed architecture, and modern DevOps.",
    focusAreas: [
      "Backend systems in Go and Node.js",
      "Distributed architecture and real-time messaging",
      "Infrastructure management with Docker and CI/CD",
      "Modern relational and NoSQL databases (PostgreSQL, MongoDB, Redis)"
    ],
    citationId: 2
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Node.js", wikiUrl: getWikiUrl("Node.js"), description: "Event-driven asynchronous JavaScript runtime" },
      { name: "NestJS", wikiUrl: getWikiUrl("NestJS"), description: "Progressive Node.js framework for scalable server-side applications" },
      { name: "Express", wikiUrl: getWikiUrl("Express"), description: "Minimalist web framework for Node.js" },
      { name: "Go", wikiUrl: getWikiUrl("Go"), description: "Statically typed, compiled language designed for concurrency and scale" },
      { name: "PHP", wikiUrl: getWikiUrl("PHP"), description: "General-purpose scripting language suited for web development" },
      { name: "Laravel", wikiUrl: getWikiUrl("Laravel"), description: "PHP web framework with expressive syntax" },
      { name: "PostgreSQL", wikiUrl: getWikiUrl("PostgreSQL"), description: "Open-source object-relational database system" },
      { name: "MongoDB", wikiUrl: getWikiUrl("MongoDB"), description: "Document-oriented NoSQL database system" }
    ]
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "TypeScript", wikiUrl: getWikiUrl("TypeScript"), description: "Strict syntactical superset of JavaScript adding static typing" },
      { name: "React", wikiUrl: getWikiUrl("React"), description: "Component-based declarative UI library" },
      { name: "Next.js", wikiUrl: getWikiUrl("Next.js"), description: "React framework with server-side rendering and static site generation" },
      { name: "React Native", wikiUrl: getWikiUrl("React Native"), description: "Framework for building cross-platform native applications" },
      { name: "Flutter", wikiUrl: getWikiUrl("Flutter"), description: "Multi-platform UI software development kit by Google" },
      { name: "Tailwind CSS", wikiUrl: getWikiUrl("Tailwind CSS"), description: "Utility-first CSS framework for web layout" },
      { name: "Redux", wikiUrl: getWikiUrl("Redux"), description: "Predictable state container for JavaScript applications" }
    ]
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker", wikiUrl: getWikiUrl("Docker"), description: "Platform for containerizing and isolating applications" },
      { name: "Nginx", wikiUrl: getWikiUrl("Nginx"), description: "High-performance web server, reverse proxy, and load balancer" },
      { name: "Redis", wikiUrl: getWikiUrl("Redis"), description: "In-memory data structure store used as cache and message broker" },
      { name: "Prisma", wikiUrl: getWikiUrl("Prisma"), description: "Type-safe next-generation ORM for Node.js and TypeScript" },
      { name: "SQLC", wikiUrl: getWikiUrl("SQLC"), description: "Compiles SQL queries into type-safe Go code" },
      { name: "Git", wikiUrl: getWikiUrl("Git"), description: "Distributed version control system" },
      { name: "Linux", wikiUrl: getWikiUrl("Linux"), description: "Unix-like open-source operating system kernel" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ridemate",
    title: "RideMate",
    subtitle: "Sustainable Mobility Ecosystem",
    year: "2026",
    description: "A full-stack carpooling platform designed to reduce carbon emissions through real-time ridesharing, serving 500+ active users. Architected the backend with NestJS and PostgreSQL to handle complex geolocation matching and data synchronization, achieving 99.9% data consistency and reducing average wait times by 30%. Client interfaces built with React Native and Next.js, fully typed with TypeScript.",
    highlights: [
      "Architected backend with NestJS and PostgreSQL for complex geolocation matching and data synchronization.",
      "Achieved 99.9% data consistency during concurrent ride-matching peaks.",
      "Reduced average passenger wait times by 30% through predictive dispatch logic.",
      "Developed client interfaces with React Native and Next.js, fully typed in TypeScript."
    ],
    techStack: ["TypeScript", "NestJS", "React Native", "Next.js", "PostgreSQL"],
    githubUrl: "https://github.com/Nizarberyan/ridemate",
    citationId: 3,
    featured: true,
    category: "Full-Stack"
  },
  {
    id: "lms-api",
    title: "LMS API",
    subtitle: "EdTech Backend Architecture",
    year: "2026",
    description: "A modular Learning Management System backend handling 10,000+ concurrent requests, with sequential module progression logic optimized for sub-50ms response times. Reduced CI/CD pipeline overhead by 40%.",
    highlights: [
      "Modular backend architecture engineered to handle 10,000+ concurrent requests.",
      "Sequential module progression logic optimized for sub-50ms response times.",
      "Reduced CI/CD pipeline overhead by 40% through containerized build optimization."
    ],
    techStack: ["Node.js", "NestJS", "MongoDB", "Docker"],
    githubUrl: "https://github.com/Nizarberyan/lms-api",
    citationId: 4,
    featured: true,
    category: "Backend / Systems"
  },
  {
    id: "moneymind",
    title: "MoneyMind",
    subtitle: "AI Financial SaaS",
    year: "2025",
    description: "An intelligent budgeting assistant integrating Gemini AI for predictive expense analysis, achieving 92% accuracy in personalized financial insights, with a mobile-responsive interface.",
    highlights: [
      "Integrated Gemini AI for predictive expense analysis and personalized financial insights.",
      "Achieved 92% predictive accuracy across personalized user financial forecasts.",
      "Built mobile-responsive web interface using Laravel and Tailwind CSS."
    ],
    techStack: ["Laravel", "Gemini AI", "Tailwind CSS", "PHP"],
    githubUrl: "https://github.com/Nizarberyan/moneymind",
    citationId: 5,
    featured: true,
    category: "AI / SaaS"
  },
  {
    id: "zephyr",
    title: "Zephyr",
    subtitle: "High-Performance Scrobble Engine",
    year: "2025–2026",
    description: "A high-performance music scrobbling engine built in Go, architected to handle concurrent, time-series data processing at scale. Uses TimescaleDB for optimized data ingestion and SQLC for type-safe, high-performance queries, achieving sub-10ms query latency. Fully containerized with Docker. Paired with Zephyr Mobile, a companion client that reads audio metadata (including FLAC and Opus formats) and syncs it to the backend with battery-efficient background processing.",
    highlights: [
      "Built in Go and architected for concurrent, time-series data processing at scale.",
      "Utilizes TimescaleDB for optimized data ingestion and SQLC for type-safe queries, achieving sub-10ms query latency.",
      "Fully containerized with Docker.",
      "Paired with Zephyr Mobile, a companion client reading audio metadata (including FLAC and Opus) with battery-efficient background syncing."
    ],
    techStack: ["Go", "TimescaleDB", "SQLC", "Docker", "React Native"],
    githubUrl: "https://github.com/Nizarberyan/zephyr",
    citationId: 6,
    featured: true,
    category: "Mobile & Audio"
  }
];

export const citations: Citation[] = [
  {
    id: 1,
    author: "IzyDesk Engineering",
    title: "Resaly Pro: Salon Management System Backend & Mobile Client Deployment",
    publisher: "IzyDesk Technical Documentation",
    date: "August 2025",
    url: "https://izydesk.fr",
    accessDate: "2026-08-31",
    quote: "Sub-100ms response times on Symfony and PostgreSQL backend with Flutter cross-platform client adopted by 15+ businesses.",
    type: "article"
  },
  {
    id: 2,
    author: "YouCode Morocco / UM6P",
    title: "Advanced Full-Stack Software Engineering Program Specification",
    publisher: "YouCode Morocco & Simplon.co",
    date: "2024–2026",
    url: "https://youcode.ma",
    accessDate: "2026-08-31",
    quote: "Project-based Software Engineering curriculum covering Go, Node.js, distributed systems, and modern DevOps.",
    type: "credential"
  },
  {
    id: 3,
    author: "Beriane, Nizar",
    title: "RideMate: Real-Time Sustainable Mobility Ecosystem",
    publisher: "GitHub Repository",
    date: "2026",
    url: "https://github.com/Nizarberyan/ridemate",
    accessDate: "2026-08-31",
    quote: "NestJS, PostgreSQL, React Native, Next.js, and TypeScript carpooling platform.",
    type: "repo"
  },
  {
    id: 4,
    author: "Beriane, Nizar",
    title: "LMS API: Modular Learning Management System Backend Architecture",
    publisher: "GitHub Repository",
    date: "2026",
    url: "https://github.com/Nizarberyan/lms-api",
    accessDate: "2026-08-31",
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
    accessDate: "2026-08-31",
    quote: "Laravel, Gemini AI, and Tailwind CSS financial analytics assistant with 92% predictive accuracy.",
    type: "repo"
  },
  {
    id: 6,
    author: "Beriane, Nizar",
    title: "Zephyr: Concurrent Time-Series Audio Scrobble Engine and Mobile Client",
    publisher: "GitHub Repository",
    date: "2025–2026",
    url: "https://github.com/Nizarberyan/zephyr",
    accessDate: "2026-08-31",
    quote: "Go, TimescaleDB, SQLC, Docker, and React Native companion app parsing FLAC and Opus formats.",
    type: "repo"
  }
];

export const sectionsList = [
  { id: "introduction", title: "Introduction", level: 1 },
  { id: "career", title: "Career", level: 1 },
  { id: "career-izydesk", title: "IzyDesk (2025)", level: 2 },
  { id: "education", title: "Education", level: 1 },
  { id: "technical-skills", title: "Technical skills", level: 1 },
  { id: "backend-skills", title: "Backend", level: 2 },
  { id: "frontend-skills", title: "Frontend & Mobile", level: 2 },
  { id: "infra-skills", title: "Infrastructure", level: 2 },
  { id: "selected-works", title: "Selected works", level: 1 },
  { id: "project-ridemate", title: "RideMate (2026)", level: 2 },
  { id: "project-lms-api", title: "LMS API (2026)", level: 2 },
  { id: "project-moneymind", title: "MoneyMind (2025)", level: 2 },
  { id: "project-zephyr", title: "Zephyr (2025–2026)", level: 2 },
  { id: "see-also", title: "See also", level: 1 },
  { id: "references", title: "References", level: 1 },
  { id: "external-links", title: "External links", level: 1 }
];
