import {
  Code,
  Database,
  Brain,
  Server,
  Globe,
  BarChart3,
  Cpu,
  Cloud,
  GitBranch,
  AppWindow,
  BugPlay,
  Terminal,
  Send,
  type LucideIcon,
} from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

export const resumeUrl = 'mailto:dinesh.raama@gmail.com?subject=Resume%20request';
export const photoUrl = `${baseUrl}images/portfolio-monogram.svg`;
export const email = 'dinesh.raama@gmail.com';
export const linkedin = 'https://www.linkedin.com/in/drama123/';
export const github = 'https://github.com/dk18234';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  category: string;
  group: 'Data Science' | 'Full Stack';
  image: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Webhook Recovery Lab",
    "description": "A durable webhook inbox with duplicate protection, retries, and recovery after worker crashes.",
    "longDescription": "Built a Java 21 and Spring Boot service that persists accepted events in PostgreSQL before acknowledgement. Fenced worker leases, bounded retries, dead-letter replay, and an atomic credit ledger protect the business effect during duplicate delivery and crash recovery. Integration tests verify concurrent deliveries, stale workers, rollback, reconciliation, and application restart against PostgreSQL. Explore six failure scenarios in the labelled browser simulation, or download the complete backend and run it locally with Docker Compose.",
    "technologies": [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Flyway",
      "JUnit",
      "Docker Compose"
    ],
    "github": "https://github.com/dk18234/webhook-recovery-lab",
    "category": "Backend Reliability",
    "group": "Full Stack",
    "image": `${baseUrl}images/webhook-recovery-lab.svg`,
    "demo": "https://dk18234.github.io/webhook-recovery-lab/"
  },
  {
    "id": 2,
    "title": "TraceLens AI Investigator",
    "description": "An evidence-grounded AI investigator that explains backend failures with cited findings and hybrid runbook retrieval.",
    "longDescription": "Built a Java 21 and Spring Boot investigation service with real local language-model and embedding inference through Ollama. The model selects bounded read tools, retrieves operational runbooks with keyword and semantic search, and generates evidence-linked draft explanations. PostgreSQL persists immutable incident revisions, deduplicated requests, and leased background jobs. Backend rules independently constrain classification, advice, and recovery eligibility; instruction-like logs are quarantined before model input. Includes a read-only bridge to Webhook Recovery Lab, actual-model evaluation on eight synthetic incidents, and a public demo of recorded AI sessions. Run the complete application locally to ask new questions.",
    "technologies": ["Java 21", "Spring Boot", "PostgreSQL", "Ollama", "Local LLMs", "Hybrid Retrieval", "Docker Compose"],
    "github": "https://github.com/dk18234/tracelens-ai",
    "category": "Applied AI / Backend",
    "group": "Full Stack",
    "image": `${baseUrl}images/tracelens-ai.svg`,
    "demo": "https://dk18234.github.io/webhook-recovery-lab/tracelens/"
  },
  {
    "id": 3,
    "title": "Relay Dataset Transfers",
    "description": "Resumable research dataset transfers with durable checkpoints, concurrent chunks, and independently verified SHA-256 integrity.",
    "longDescription": "Built a Java 21 and Spring Boot transfer service that records immutable chunk receipts in PostgreSQL and resumes only missing parts after interruption. Incoming chunk checksums and an independent complete-object SHA-256 check gate download. Local and S3 storage adapters share the protocol; the S3 adapter uses native multipart copy. Packaged-process tests force-kill the application twice, reject corrupt bytes, and verify byte-identical downloads, including a 128 MiB file under a 96 MiB Java heap limit. S3 adapter verification uses an emulator, not a production AWS benchmark. Includes a streaming CLI, Docker Compose, failure drills, and an interactive browser sandbox using actual bytes in IndexedDB.",
    "technologies": ["Java 21", "Spring Boot", "PostgreSQL", "Amazon S3 SDK", "SHA-256", "Streaming I/O", "Docker Compose"],
    "github": "https://github.com/dk18234/relay-transfer",
    "category": "Storage / Backend Reliability",
    "group": "Full Stack",
    "image": `${baseUrl}images/relay-transfer.svg`,
    "demo": "https://dk18234.github.io/relay-transfer/"
  },
  {
    "id": 4,
    "title": "Boundary API Compatibility",
    "description": "A developer workbench that catches incompatible OpenAPI changes and shows validated counterexamples before release.",
    "longDescription": "Built a shared TypeScript comparison engine for a browser worker, CLI, and local operator API. Directional rules distinguish accepted requests from permitted responses, covering scalar types, enums, required fields, bounds, object contracts, operations, and internal references. Findings include source locations and concrete values validated against both schemas. Consumer fixtures preserve request compatibility and track candidate response provenance; unsupported assertions require review instead of silently passing CI. Includes actual loopback HTTP replay, deterministic JSON/Markdown reports, a token-protected isolated API, a nonroot Docker setup, automated contract and HTTP tests, and a beginner reverse-engineering guide. The public workbench runs the actual engine locally on custom JSON or YAML specifications.",
    "technologies": [
      "TypeScript",
      "Node.js",
      "OpenAPI",
      "Web Workers",
      "Contract Testing",
      "GitHub Actions",
      "Docker"
    ],
    "github": "https://github.com/dk18234/boundary-api-checker",
    "category": "Developer Tools / API Reliability",
    "group": "Full Stack",
    "image": `${baseUrl}images/boundary-api-checker.svg`,
    "demo": "https://dk18234.github.io/boundary-api-checker/"
  },
  {
    "id": 5,
    "title": "Strata Fair Compute Scheduler",
    "description": "Fair research-job scheduling with atomic CPU/GPU reservations, worker leases, and recovery after a worker crashes.",
    "longDescription": "Built a shared TypeScript scheduling policy for an interactive lab and a durable Node.js queue backed by SQLite WAL. Weighted declared-resource service, group quotas, and an aging guard determine admission while transactional reservations prevent oversubscription. Independent HTTP worker processes renew bounded leases and execute verified synthetic CPU challenges; expired attempts are requeued with fresh ownership tokens so stale workers cannot commit late results. Reproducible experiments compare a group with 100 jobs to one with 2, and an OS-process drill force-kills both a worker and the queue server before verifying recovery and stale-result rejection. CPU/GPU units are logical scheduling budgets, not a production cluster or GPU runtime. Includes Docker Compose, CLI tools, tests, failure drills, and a beginner learning guide.",
    "technologies": [
      "TypeScript",
      "Node.js",
      "SQLite WAL",
      "Fair Scheduling",
      "Worker Leases",
      "Concurrency Testing",
      "Docker Compose"
    ],
    "github": "https://github.com/dk18234/strata-scheduler",
    "category": "Distributed Systems / Research Computing",
    "group": "Full Stack",
    "demo": "https://dk18234.github.io/strata-scheduler/",
    "image": `${baseUrl}images/strata-scheduler.svg`
  },
  {
    "id": 6,
    "title": "Engineering Portfolio Website",
    "description": "A responsive React portfolio that brings six engineering case studies, runnable demos, and source code into one place.",
    "longDescription": "Adapted a supplied website design into a personalized React and TypeScript engineering portfolio. Centralized project, experience, education, and contact data support six detailed project cards, animated filters, project dialogs, mobile navigation, and resume access. The original layout, visual styling, fonts, and animation language are retained. Vite builds support both root and GitHub Pages subpath hosting; deployment automation and portfolio checks verify project completeness and asset paths. The repository includes the complete website source, implementation notes, and a beginner learning path. Built with AI assistance; original template design is credited rather than claimed as original work.",
    "technologies": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "GitHub Pages"
    ],
    "github": "https://github.com/dk18234/dinesh-rama-portfolio",
    "category": "Frontend Engineering / Portfolio",
    "group": "Full Stack",
    "demo": "https://dk18234.github.io/dinesh-rama-portfolio/",
    "image": `${baseUrl}images/engineering-portfolio.svg`
  }
];

export interface Skill {
  name: string;
  level: number | null;
  icon: LucideIcon;
  category: string;
}

export const skills: Skill[] = [
  { name: 'Java', level: null, icon: Code, category: 'Programming Languages' },
  { name: 'Python', level: null, icon: Code, category: 'Programming Languages' },
  { name: 'TypeScript', level: null, icon: Code, category: 'Programming Languages' },
  { name: 'JavaScript', level: null, icon: Code, category: 'Programming Languages' },
  { name: 'Bash', level: null, icon: Code, category: 'Programming Languages' },
  { name: 'PowerShell', level: null, icon: Code, category: 'Programming Languages' },
  { name: 'SQL', level: null, icon: Code, category: 'Programming Languages' },
  { name: 'PostgreSQL', level: null, icon: Database, category: 'Database' },
  { name: 'SQL Queries', level: null, icon: Database, category: 'Database' },
  { name: 'Data Validation', level: null, icon: Database, category: 'Database' },
  { name: 'Data Reconciliation', level: null, icon: Database, category: 'Database' },
  { name: 'Field Mapping', level: null, icon: Database, category: 'Database' },
  { name: 'HTML', level: null, icon: Globe, category: 'Frontend' },
  { name: 'CSS', level: null, icon: Globe, category: 'Frontend' },
  { name: 'Bootstrap 5', level: null, icon: Globe, category: 'Frontend' },
  { name: 'Stimulus', level: null, icon: Globe, category: 'Frontend' },
  { name: 'Fetch API', level: null, icon: Globe, category: 'Frontend' },
  { name: 'Turbo Streams', level: null, icon: Globe, category: 'Frontend' },
  { name: 'Spring Boot', level: null, icon: Server, category: 'Backend' },
  { name: 'Spring WebFlux', level: null, icon: Server, category: 'Backend' },
  { name: 'REST / SOAP', level: null, icon: Server, category: 'Backend' },
  { name: 'Spring Batch', level: null, icon: Server, category: 'Backend' },
  { name: 'Apache Camel', level: null, icon: Server, category: 'Backend' },
  { name: 'Skill 01', level: null, icon: Brain, category: 'AI/ML' },
  { name: 'Skill 02', level: null, icon: Cpu, category: 'AI/ML' },
  { name: 'Skill 03', level: null, icon: Cpu, category: 'AI/ML' },
  { name: 'Skill 04', level: null, icon: Cpu, category: 'AI/ML' },
  { name: 'Skill 05', level: null, icon: Brain, category: 'AI/ML' },
  { name: 'Skill 06', level: null, icon: Brain, category: 'AI/ML' },
  { name: 'Skill 07', level: null, icon: Brain, category: 'AI/ML' },
  { name: 'Amazon S3', level: null, icon: Cloud, category: 'Cloud' },
  { name: 'Linux', level: null, icon: Server, category: 'DevOps' },
  { name: 'Windows', level: null, icon: Server, category: 'DevOps' },
  { name: 'cron', level: null, icon: Server, category: 'DevOps' },
  { name: 'Task Scheduler', level: null, icon: BarChart3, category: 'DevOps' },
  { name: 'Healthchecks.io', level: null, icon: GitBranch, category: 'DevOps' },
  { name: 'JUnit', level: null, icon: AppWindow, category: 'Applications' },
  { name: 'Mockito', level: null, icon: AppWindow, category: 'Applications' },
  { name: 'Git', level: null, icon: AppWindow, category: 'Applications' },
  { name: 'GitHub', level: null, icon: BugPlay, category: 'Applications' },
  { name: 'STS', level: null, icon: GitBranch, category: 'Applications' },
  { name: 'rsync', level: null, icon: Terminal, category: 'Applications' },
  { name: 'Robocopy', level: null, icon: GitBranch, category: 'Applications' },
  { name: 'Debezium', level: null, icon: BugPlay, category: 'Applications' },
  { name: 'MutationObserver', level: null, icon: Send, category: 'Applications' },
];

export const skillCategories = [
  'All', 'Programming Languages', 'Database', 'Frontend', 'Backend', 'AI/ML', 'Applications', 'Cloud', 'DevOps',
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experience: Experience[] = [
  {
    "title": "IT System Administrator",
    "company": "University of Oklahoma",
    "period": "Apr 2025 — Present",
    "description": "Backend integrations and practical automation supporting university operations and research.",
    "achievements": [
      "Developed Java and Spring Boot services to exchange recruitment data with PageUp, with mappings and processing status in PostgreSQL.",
      "Implemented Spring Batch workflows for approximately 300 legacy postings, reducing manual migration work by 60%.",
      "Added uniqueness checks, retries, failure logs, Python reconciliation, and JUnit / Mockito coverage for mapping and validation.",
      "Automated daily NMR instrument-data backups across five Linux and Windows workstations with monitored transfers and retries."
    ]
  },
  {
    "title": "Student Intern",
    "company": "OU Supercomputing Center for Education & Research",
    "period": "Apr 2024 — Dec 2024",
    "description": "Internal applications and Linux automation for a research computing environment.",
    "achievements": [
      "Co-built a TypeScript and JavaScript inventory application for approximately 500 components, backed by PostgreSQL with OU SSO and email alerts.",
      "Authored Bash checks using journalctl to detect SSSD and Kerberos keytab errors for authentication monitoring across 1,000+ nodes."
    ]
  },
  {
    "title": "Graduate Assistant · Web Developer",
    "company": "University of Oklahoma · Political Science",
    "period": "Jan 2024 — May 2024",
    "description": "Turned a research collection into a searchable, usable web archive.",
    "achievements": [
      "Created a research archive with Python, the British Library API, HTML, CSS, and JavaScript.",
      "Migrated approximately 40 GB from SharePoint to Amazon S3 and added search, filtering, and downloads."
    ]
  },
  {
    "title": "Software Developer",
    "company": "Saudi Awwal Bank · Client",
    "period": "Jan 2022 — Dec 2022",
    "description": "Java services, secure file workflows, and batch processing for banking applications.",
    "achievements": [
      "Built secure REST and SOAP APIs with Spring Boot and STS for validation and file handling.",
      "Optimized XML and CSV processing with Spring Batch and Apache Camel, improving performance by 30%.",
      "Standardized SFTP encryption across two teams and reduced manual regression testing from eight to six hours per release."
    ]
  },
  {
    "title": "Assistant System Engineer · Software Developer",
    "company": "Tata Consultancy Services",
    "period": "Oct 2020 — Dec 2021",
    "description": "Reactive APIs, status workflows, and real-time synchronization across distributed systems.",
    "achievements": [
      "Implemented polling for pending, success, and failed PDF download states, reducing related support tickets by 25%.",
      "Designed secure REST APIs and repository methods with Spring WebFlux.",
      "Integrated Debezium source and sync connectors for real-time data synchronization, cutting page load times by 25%."
    ]
  }
];

export const education = [
  {
    "degree": "Master's in Computer Science",
    "school": "University of Oklahoma, Norman, OK",
    "period": "Completed December 2024",
    "notes": [
      "GPA: 3.90 / 4.00."
    ]
  },
  {
    "degree": "B.Tech in Computer Science Engineering",
    "school": "GITAM University",
    "period": "Completed July 2020",
    "notes": [
      "GPA: 3.40 / 4.00."
    ]
  }
];

export const awards = [
  "Award / certification 01 — details to be added.",
  "Award / certification 02 — details to be added.",
  "Award / certification 03 — details to be added.",
  "Award / certification 04 — details to be added.",
  "Award / certification 05 — details to be added."
];

export const publications = ['Publication details will be added here.'];
