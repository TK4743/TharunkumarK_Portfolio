import { Project, CertificationItem, SkillCategory, AchievementItem, VsbStudentProfile, ShowcaseCriteria } from './type';

import profileImg from './assets/TharunKumar.jpeg';
import vsbecTaskManagerImg from './assets/vsbec-task-manager.png';
import campusConnectImg from './assets/campus-connect.jpeg';
import auraImg from './assets/aura-ai.png';
import chatboxImg from './assets/chatbox-ai.png';
import smartHelmetImg from './assets/smart-helmet.png';
import goatCodeEditorImg from './assets/goat.png';

export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  primaryName: 'Tharunkumar K',
  title: 'Software Developer | Full Stack & AI Systems Developer | 2× Hackathon Winner',
  college: 'V.S.B. Engineering College, Karur',
  collegeFull: 'V.S.B. Engineering College, Karur, Tamil Nadu',
  department: 'Information Technology',
  degree: 'B.Tech Information Technology',
  profileImage: profileImg,
  email: 'tharunkumark42007@gmail.com',
  phone: '+91 87609 64830',
  location: 'Dharapuram, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/tharunkumark4743/',
  github: 'https://github.com/Tharun4743',
  leetcode: 'https://leetcode.com/u/Tharunkumar__K/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tharunkumark4743',
  resume: 'https://drive.google.com/drive/folders/1zdLQ8EoEC8X73fFAJjSJr-Ros_xckIyW',
  profileSummary:
    '2× Hackathon Winner | CODE THUGS 2K26 🥇 | Neural Minds 🥉 | India Innovates 2026 & Odoo × NMIT 2026 Finalist 🇮🇳 | SIH 2025 & 2026 Top 50 | Best GitHub profile @VSB ENGINEERING COLLEGE | Full Stack & AI Developer. Experienced in engineering production web applications, distributed systems, and AI-powered platforms using React 19, TypeScript, Node.js, and PostgreSQL. Creator of VSBEC IT Vault (adopted by 365+ daily students), GOAT Code Editor (1st Place National Winner at Code Thugs 2K26), and published GitHub Marketplace Actions.'
};

export const EDUCATION = [
  {
    institution: 'VSB Engineering College, Karur, Tamil Nadu',
    degree: 'B.Tech Information Technology',
    period: '2024 - 2028',
    details: 'Expected Graduation: May 2028 | CGPA: 8.5 / 10'
  },
  {
    institution: 'Sindhu Matriculation Higher Secondary School, Tamil Nadu',
    degree: 'Higher Secondary (12th Grade)',
    period: '2023 - 2024',
    details: 'Score: 84.66%'
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'SQL']
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Vite', 'HTML5', 'CSS3']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'Prisma ORM', 'REST APIs', 'NextAuth.js', 'Spring Boot']
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'Supabase', 'Neon Serverless', 'MongoDB', 'MySQL', 'SQLite']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Render', 'Netlify', 'Arduino IDE', 'Salesforce', 'Cloudinary', 'Ollama', 'ChromaDB']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Infosys Internship Completion Certificate',
    issuer: 'Infosys Springboard',
    year: '2024',
    link: 'https://drive.google.com/file/d/1Q9M6APOGYKO0_jYrKBAO4fAwTFEZJigy/view?usp=drive_link',
    type: 'CERTIFICATE'
  },
  {
    title: 'Tata - GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    year: 'Jun 2025',
    link: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_RxeDd9TgPqW92wdDx_1750820862922_completion_certificate.pdf',
    type: 'CERTIFICATE'
  },
  {
    title: 'TCS iON Career Edge — Young Professional',
    issuer: 'TCS iON',
    year: '2025',
    link: '#',
    type: 'CERTIFICATE'
  },
  {
    title: 'Responsible AI: Applying AI Principles with Google Cloud',
    issuer: 'Google Cloud',
    year: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/17907581?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Prompt Design in Agent Platform',
    issuer: 'Google',
    year: 'Jun 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/16663518?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    year: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/17907465?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google',
    year: 'Jun 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb',
    type: 'BADGE'
  },
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    year: 'Nov 2025',
    link: 'https://www.credly.com/badges/e0e38f42-909d-46a0-8a23-4cbb658ceb2b/linked_in_profile',
    type: 'BADGE'
  },
  {
    title: 'Salesforce Administrator Explorer',
    issuer: 'Trailhead by Salesforce',
    year: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1IgkTkYQ-dfhashY-7-R6soyY7YQhw4zI/view?usp=drive_link',
    type: 'BADGE'
  },
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'FutureSkills Prime — NASSCOM',
    year: 'Mar 2026',
    link: 'https://drive.google.com/file/d/1R8eAyLXAUdxyRK_hDgUBgikkULJLSBje/view?usp=drive_link',
    type: 'GOLD CERTIFICATE'
  }
];
export const PROJECTS: Project[] = [
  {
    title: 'FINDORA AI',
    description:
      'Autonomous Campus Lost & Found Intelligence Network with multimodal correlation and zero-knowledge ownership verification. 3rd Prize Winner at 8-Hour AIML Hackathon.',
    longDescription:
      'FINDORA AI is an institutional-grade, privacy-first Lost & Found intelligence network and multimodal correlation ecosystem engineered for smart university campuses.\n\nSecured 3rd Prize in the 8-Hour Hackathon conducted by the Department of Artificial Intelligence & Machine Learning at VSB Engineering College (awarded ChatGPT Go Subscription). The platform solves campus lost property chaos by automating item reporting, semantic matching, and fraud-proof ownership claims.\n\nIt features an AI-driven multimodal hybrid correlation pipeline (Visual 35%, Text 30%, Category 15%, Spatial 10%, Time 10%) powered by Google Gemini 2.5 Flash to automatically detect matching lost-and-found reports. To prevent fraudulent handovers, FINDORA AI implements a zero-knowledge blind verification protocol with Levenshtein distance matching and dynamic anti-hammering velocity limiters.\n\nThe system includes in-browser WebRTC camera capture with client-side HTML5 Canvas optical GPS/timestamp watermarking, Supabase PostgreSQL persistence, Cloudinary secure CDN storage, and instant automated campus broadcasts via Telegram Bot API (@findoravsb_bot) and Brevo SMTP secret OTP handovers.',
    date: 'Sep 2026',
    link: 'https://findoravsbec.vercel.app',
    githubLink: 'https://github.com/Tharun4743/findora-ai',
    tags: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Node.js 20+',
      'Express.js',
      'Supabase (PostgreSQL)',
      'Google Gemini 2.5 Flash',
      'Cloudinary CDN',
      'Telegram Bot API',
      'Brevo SMTP'
    ],
    category: 'fullstack',
    status: '3rd Prize Winner',
    realWorldImplementation:
      'Awarded 3rd Prize in the 8-Hour Hackathon at VSB Engineering College (AIML Dept). Deployed live on Vercel with real-time Telegram Bot integration (@findoravsb_bot) and Supabase backend.',
    image: 'https://raw.githubusercontent.com/Tharun4743/findora-ai/main/frontend/src/assets/findora_logo.jpg',
    problem:
      'Campus lost and found workflows rely on disorganized noticeboards, unverified social media posts, and vulnerable manual handovers susceptible to false claims and lack of privacy.',
    solution:
      'FINDORA AI unifies campus lost property reporting with multimodal AI correlation (Gemini 2.5 Flash), zero-knowledge blind ownership verification challenges, optical tamper-proof camera watermarking, and instant Telegram broadcasts.',
    features: [
      'Multimodal Hybrid Matching: Fusion correlation combining visual analysis (35%), text embeddings (30%), category taxonomy (15%), and spatio-temporal telemetry (20%)',
      'Zero-Knowledge Blind Verification: Automated challenge-response protocol with Levenshtein distance scoring and anti-fraud velocity throttling',
      'Tamper-Proof WebRTC Camera: Live in-browser capture with HTML5 Canvas GPS and timestamp optical watermarking',
      'Multi-Tier Role Portals: Tailored interfaces for Students, Campus Desk Officers, and Departmental Administrators',
      'Instant Campus Broadcasts: Real-time event dispatches via Telegram Bot API (@findoravsb_bot) and Brevo SMTP 1-time handover PINs'
    ],
    challenges:
      'Preventing fraudulent claim attempts and false positives on similar-looking items. Solved by engineering a multi-factor correlation algorithm blending visual attributes with spatial-temporal proximity and private question-answer verification barriers.',
    architecture:
      'Full-stack architecture featuring React 19 / TypeScript SPA, Express REST API gateway, Supabase PostgreSQL database, Cloudinary CDN vault, Google Gemini 2.5 Flash AI, and Telegram Bot webhook relay.',
    myRole: 'Lead Full-Stack Architect & AI Engineer',
    impact:
      'Built and delivered within 8 hours during the VSBEC AIML Department Hackathon, winning 3rd Prize and ChatGPT Go subscription.',
    keyLearnings:
      'Mastered Gemini multimodal visual feature extraction, zero-knowledge verification design, WebRTC canvas watermarking, and automated Telegram bot integration.'
  },
  {
    title: 'VSBEC IT Vault',
    description:
      'Institutional governance, real-time coding competency tracking, and corporate recruitment ecosystem. SIH 2026 Internal Hackathon Top 50 (Official SIH Portal Nominee).',
    longDescription:
      'The VSBEC IT Vault (Academia-Industry Integrated Platform & IT Task Manager) is an enterprise-grade institutional governance and placement readiness ecosystem engineered for the Department of Information Technology at VSB Engineering College, Karur.\n\nShortlisted in the SIH 2026 Internal Hackathon as Top 50 out of 300+ campus teams and officially nominated to submit the project proposal on the central Smart India Hackathon (SIH) portal. Adopted by 365+ students across 6 departmental sections (II IT-A/B/C & III IT-A/B/C), the platform digitizes 100% of departmental submissions through a rigorous 3-tier proof verification pipeline (Student Coordinator Peer Review → Class Advisor Validation → HOD Oversight) backed by Cloudinary image proof compression.\n\nIt features automated LeetCode GraphQL and GitHub REST API daemon synchronization for daily coding velocity tracking, a multi-compiler sandboxed Monaco IDE assessment suite (C, C++, Java 17, Python 3) with anti-cheat webcam PIP proctoring, an algorithmic Placement Readiness Index 2.0, and multi-channel instant broadcasting via Telegram Bot webhooks, VAPID Web Push, and a 3-node Brevo email failover pool.\n\nPowered by 35 relational PostgreSQL tables with row-level integrity and an in-memory pre-indexed RAM cache delivering sub-0.01ms directory lookups, the platform is actively deployed in production on Vercel.',
    date: 'Production Deployed',
    link: 'https://it-taskmanager.vercel.app/',
    githubLink: 'https://github.com/Tharun4743/taskmanager',
    tags: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Node.js 20+',
      'Express.js',
      'PostgreSQL (35 Tables)',
      'Monaco IDE',
      'LeetCode GraphQL',
      'Telegram Bot API',
      
      'Cloudinary',
      'Brevo Email Pool'
    ],
    category: 'fullstack',
    status: 'SIH 2026 Top 50',
    realWorldImplementation:
      'Shortlisted in the SIH 2026 Internal Hackathon (Top 50 out of 300+ teams) with official SIH portal submission. Actively adopted by 365+ students across 6 departmental sections at VSB Engineering College for centralized academic governance, LeetCode habit tracking, and corporate coding assessments.',
    image: vsbecTaskManagerImg,
    problem:
      'Departmental task submissions and coding progress were previously fragmented across manual paperwork, unverified Google Form links, and untracked external platforms without institutional oversight or corporate alignment.',
    solution:
      'VSBEC IT Vault provides a centralized digital intelligence vault with a 3-tier proof verification pipeline, automated LeetCode/GitHub momentum synchronization, an isolated multi-language Monaco IDE assessment sandbox with webcam proctoring, and a Placement Readiness Index (0–100%).',
    features: [
      '3-Tier Proof Verification Pipeline: Peer review by Student Coordinators, validation by Class Advisors, and departmental audit by HOD',
      'Automated Coding Habit Tracking: Real-time velocity and commit synchronization via LeetCode GraphQL and GitHub REST APIs',
      'Sandboxed Multi-Compiler Assessment Suite: In-browser execution for C, C++, Java 17, and Python 3 with memory/time boundaries (4-6s timeouts) and infinite loop traps',
      'Anti-Cheat Security & Exam Lockdown: Webcam Picture-in-Picture proctoring, snapshot capture, tab-switch penalties, and full-screen enforcement',
      'Placement Readiness Index 2.0: 4-pillar algorithmic evaluation (Aptitude 35%, LeetCode 25%, Projects 20%, Task Discipline 20%) mapping candidates against Tier-1/2/3 criteria',
      'Multi-Node Communication Infrastructure: Telegram Bot with automated 8:00 AM summaries, 24h deadline alerts, VAPID Web Push, and 3-node Brevo email failover pool',
      'In-Memory RAM Directory Cache: Pre-indexed memory cache achieving sub-0.01ms student lookups and eliminating relational bottlenecks',
      'Automated Export Engine: Generates OpenXML Excel (.xlsx) reports, student scorecards, and automated candidate recruitment dossiers'
    ],
    roleStructure: [
      {
        role: 'Supreme Admin',
        description: 'Global institutional governance, department orchestration, class creation, and system configuration.'
      },
      {
        role: 'Head of Department (HOD)',
        description: 'Department-wide authority over staff, classes, task approvals, circulars, and analytical heatmaps.'
      },
      {
        role: 'Class Advisor / Faculty',
        description: 'Section-scoped governance, student directory administration, task creation, and final submission validation.'
      },
      {
        role: 'Staff / Subject Faculty',
        description: 'Course and subject-specific assignment distribution, test management, and academic assessment.'
      },
      {
        role: 'Student Coordinator',
        description: 'Tier-1 peer review command center for inspecting and pre-verifying classmate submissions.'
      },
      {
        role: 'Student / Candidate',
        description: 'Task proof submissions, coding habit tracker, sandboxed assessments, placement rating, and 1-click resume export.'
      },
      {
        role: 'Industry Partner / Recruiter',
        description: 'Corporate recruitment desk, candidate screening, custom coding test creator, and scorecard analytics.'
      }
    ],
    architecture:
      'Decoupled React 19 & TypeScript SPA frontend styled with Tailwind CSS v4, communicating with an Express.js & Node.js 20+ backend. Persisted across 35 relational PostgreSQL tables with strict row-level security, optimized with an in-memory pre-indexed RAM cache (<0.01ms lookups), Cloudinary CDN for proof compression, and Telegram/Brevo/VAPID communication gateways.',
    challenges:
      '1. Real-time Multi-tenant Data Isolation: Strict section, class, and department scoping across 7 distinct personas solved via dynamic middleware authorization and row-level relational constraints.\n\n2. High-volume Directory Latency: Resolved by engineering an in-memory pre-indexed RAM directory cache achieving sub-0.01ms response times.\n\n3. Zero-loss Communication Delivery: Overcame SMTP port throttling and single-provider rate limits by building a 3-node Brevo HTTPS dispatch pool with automated credit telemetry and instant failover.',
    myRole: 'Full-Stack Architect & Lead Developer',
    impact:
      'Shortlisted in the Top 50 out of 300+ teams in the SIH 2026 Internal Hackathon and officially nominated for idea submission on the central SIH portal. Adopted by 365+ enrolled students and faculty across 6 departmental sections (II IT & III IT) at VSB Engineering College, Karur.\n\nDigitized 100% of departmental task submissions, automated daily LeetCode/GitHub momentum tracking, and deployed an anti-cheat proctored Monaco IDE sandbox for corporate recruiting assessments.',
    keyLearnings:
      'Engineered multi-tier RBAC authorization models, constructed isolated language runtime sandboxes, implemented in-memory directory caching strategies, and architected resilient multi-node transactional communication pools.'
  },
  {
    title: 'CampusConnect',
    description:
      'Enterprise-grade campus placement platform automating Training & Placement Officer (TPO) workflows, recruiter engagement, and student interview pipelines.',
    longDescription:
      'CampusConnect is an enterprise-grade placement management platform designed to automate Training & Placement Officer (TPO) workflows, eliminate recruitment friction, and guide students into career opportunities.\n\nThe platform integrates students, corporate recruiters, and placement officers into a unified digital ecosystem featuring automated job drive management, multi-filter student screening, and real-time interview scheduling.\n\nBuilt with React 19, Vite 6, Tailwind CSS v4, TypeScript, Node.js, Express, and Supabase PostgreSQL, it features an interactive Document Vault backed by Cloudinary for storing verified credentials, alongside bi-directional real-time application tracking powered by Socket.IO.\n\nHardened with Same-Origin CSRF Guard, custom Helmet policies for Google SSO, and proxy-aware rate limiting, CampusConnect is deployed on Render via Infrastructure-as-Code.',
    date: 'June 2026',
    githubLink: 'https://github.com/Tharun4743/CampusConnect',
    link: 'https://campusconnect-yg4h.onrender.com/',
    tags: [
      'React 19',
      'TypeScript 5.8',
      'Vite 6.2',
      'Tailwind CSS v4',
      'Node.js 20+',
      'Express',
      'Supabase (PostgreSQL)',
      'Socket.IO',
      'Cloudinary',
      'Google OAuth'
    ],
    category: 'fullstack',
    status: 'Production',
    image: campusConnectImg,
    problem:
      'Campus placement offices face manual paperwork overload, untracked resume archives, delayed student status visibility, and complex interview coordination across multiple corporate recruiting partners.',
    solution:
      'CampusConnect centralizes placement governance with an interactive Cloudinary Document Vault, real-time Socket.IO application timelines, multi-filter candidate screening for HRs, and automated TPO invite pipelines.',
    features: [
      'Interactive Document Vault: Secure cloud storage and instant preview for academic transcripts, resumes, and certificates via Cloudinary',
      'Real-Time Application Tracker: Step-by-step visual timeline tracking candidates across Applied, Shortlisted, Interviewing, and Offered stages',
      'Profile Verification Pipeline: TPO verification tools ensuring candidate academic records, CGPA, and credentials remain tamper-proof',
      'Recruiter Drive & Multi-Filter Screening: Vacancy creation with automatic eligibility filtering by CGPA, arrears history, and core skills',
      'Interview Scheduler & Selection Desk: Automated scheduling tool with instant candidate notification dispatches and offer management',
      'Administrative Moderation Desk: Comprehensive audit logging, account access moderation, and database seeding utilities'
    ],
    challenges:
      '1. Secure Single Sign-On with Strict Headers: Configured custom Helmet policies to selectively bypass Cross-Origin-Opener-Policy headers for Google Identity Services SSO without compromising security.\n\n2. CSRF & Proxy Defense: Built a Same-Origin CSRF Guard validating state-modifying requests and implemented proxy-aware rate limiting (trust proxy) to prevent IP collision on load balancers.',
    architecture:
      'Decoupled React 19 SPA frontend and RESTful Express.js API backend with bi-directional Socket.IO WebSockets for live status updates, backed by Supabase PostgreSQL and Cloudinary cloud storage CDN.',
    myRole: 'Lead Full Stack Developer',
    impact:
      'Streamlined placement workflows for 500+ students, reducing manual data entry by 80% and decreasing interview scheduling conflicts to zero.',
    keyLearnings:
      'Mastered WebSocket synchronization for real-time application pipelines, structured RBAC using Supabase PostgreSQL, and implemented production defense-in-depth security.'
  },
  {
    title: 'GOAT Code Editor',
    description:
      'High-performance browser-based collaborative IDE featuring multi-user code synchronization, WebRTC voice calling (1-to-1 & group mesh), Monaco editor kernel, and AI assistant.',
    longDescription:
      'GOAT Code Editor (GOAT CE) is a high-performance browser-based collaborative IDE designed for seamless remote pair programming. It replaces fragmented workflows by providing a single shareable workspace with VS Code–grade Monaco editor, live peer cursors, multi-participant WebRTC voice calling, sandboxed code execution for 13+ languages, and a context-aware AI assistant.\n\nEngineered from first principles, it won 1st Place Nationally at Code Thugs 2k26 for technical complexity in collaborative architectures and is continuously deployed on Render via an Infrastructure-as-Code (IaC) render.yaml Blueprint.',
    date: 'Jun 2026',
    link: 'https://goatcode-editor.onrender.com',
    githubLink: 'https://github.com/Tharun4743/GOAT-CE',
    tags: [
      'React 19',
      'TypeScript 5.8',
      'Vite 6.2',
      'Socket.io 4.8',
      'WebRTC Audio Mesh',
      'Monaco Editor',
      'Node.js',
      'Express 5.2',
      'PostgreSQL 16',
      'Piston API v2',
      'OpenRouter (Llama 3.1 70B)'
    ],
    category: 'fullstack',
    status: 'National Winner (1st Place)',
    image: goatCodeEditorImg,
    problem:
      'Remote pair programmers struggle with copy-pasting snippets across chat tools, caret desynchronization during concurrent edits, and juggling separate apps for voice communication.',
    solution:
      'GOAT Code Editor unifies real-time code synchronization, peer cursors, browser-native WebRTC voice calling, and sandboxed compilation in a single zero-setup, ephemeral collaborative workspace URL.',
    features: [
      'Real-Time Multi-User Collaboration: Live keystroke synchronization with race-condition-safe counter-based edit gating (remoteChangeDepth)',
      'Live Presence & Cursor Tracking: Color-coded peer cursor and selection decorations in Monaco Editor with active typing indicators',
      '1-to-1 & Group WebRTC Voice Calling: Full-duplex browser audio mesh built from scratch with SDP Offer/Answer negotiation, ICE relay, and live speaker detection',
      'Hardware Acoustic Echo Cancellation: Browser-native AEC, Noise Suppression (NS), and Auto Gain Control (AGC) at the media stream level',
      'Synthesized Telephone Ringtone: Dual oscillator nodes from Web Audio API producing realistic ringing with zero audio assets',
      'Sandboxed Multi-Language Compiler: In-browser execution for 13+ languages via Piston API v2 with AI neural fallback engine',
      'Ephemeral Auto-Purge Lifecycle: Instant memory and database purge of rooms, code, voice streams, and chat once all peers disconnect',
      'Context-Aware AI Assistant: Llama 3.1 70B via OpenRouter for code explanation, refactoring, and automated unit test generation',
      'Code Timeline Snapshots: Save up to 20 code states per room with instant timeline rollback'
    ],
    challenges:
      '1. Monaco Caret Jumping During Concurrent Edits: Gated local vs remote editor events with a remoteChangeDepth integer counter (rather than a simple boolean flag), restoring exact caret coordinates instantly.\n\n2. Native WebRTC Audio Mesh Without 3rd-Party SDKs: Implemented complete SDP Offer/Answer negotiation, ICE candidate handling, and Voice Activity Detection (VAD) via Web Audio API AnalyserNode.\n\n3. High-Availability Persistence: Built a dual-persistence architecture pairing PostgreSQL 16 with a transparent in-memory Map fallback to maintain full room functionality during database disconnects.',
    architecture:
      'Decoupled React 19 & Monaco Editor client interacting via WebSockets (Socket.io) with an Express 5 backend. Peer-to-peer audio routed through WebRTC mesh, sandboxed runs via Piston API, and dual storage combining PostgreSQL 16 and in-memory Map cache.',
    myRole: 'Lead Full Stack & Systems Architect',
    impact:
      'Won 1st Place Winner at Code Thugs 2k26 (National Hackathon) for technical complexity in collaborative architectures, deploying a production-ready real-time editor serving developers globally.',
    keyLearnings:
      'Mastered WebRTC peer mesh networking from first principles, Web Audio API synthesis, fine-grained Monaco editor text model concurrency, and fault-tolerant dual-store architectures.'
  },
  {
    title: "Techy Tharun's Chatbox",
    description:
      'High-performance, multi-model AI conversation platform featuring Server-Sent Events (SSE) streaming, automated key rotation fallback, and persistent chat history.',
    longDescription:
      "Techy Tharun's Chatbox is a high-performance, conversational AI assistant engineered for near-zero latency streaming and multi-model resilience.\n\nBuilt as a secure full-stack Next.js 15 application, it utilizes Server-Sent Events (SSE) to deliver instantaneous typewriter-style responses. It incorporates a custom token-aware Key Manager that automatically load-balances and rotates across Groq, OpenRouter, and OpenAI to eliminate rate limits.\n\nWith persistent conversation memory stored in Neon Serverless PostgreSQL via Prisma ORM, context-aware AI personas, file attachment parsing, and NextAuth.js v5 Google SSO, it delivers an intuitive, glassmorphic chat experience tailored for developers and technical workflows.",
    date: 'Feb 2026 - Apr 2026',
    githubLink: 'https://github.com/Tharun4743/Tharun-s-Chatbox',
    link: 'https://tharunchatbox.onrender.com',
    tags: [
      'Next.js 15',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Prisma ORM',
      'Neon PostgreSQL',
      'NextAuth.js v5',
      'Groq',
      'OpenRouter',
      'OpenAI'
    ],
    category: 'fullstack',
    status: 'Production Deployed',
    image: chatboxImg,
    problem:
      'Standard AI interfaces suffer from high streaming latency, rigid single-provider rate limits, clunky document uploads, and lack of persistent conversation memory.',
    solution:
      "Techy Tharun's Chatbox integrates Server-Sent Events (SSE) typewriter streaming, multi-provider token-aware key rotation (Groq -> OpenRouter -> OpenAI), document attachment parsing, and PostgreSQL chat storage.",
    features: [
      'Live SSE Streaming Responses: Server-Sent Events delivering instant, typewriter-style text generation with sub-200ms latency',
      'Multi-Provider Fallback Logic: Token-aware Key Manager rotating across Groq, OpenRouter, and OpenAI to bypass rate limits and outages',
      'Context-Aware AI Personas: Specialized modes including Code Assistant, Document Analyzer, and Resume Reviewer',
      'Intelligent File Context: Direct document uploads (PDF, DOCX, TXT) parsed and referenced directly within conversational context',
      'Persistent PostgreSQL Chat Memory: Session storage in Neon PostgreSQL via Prisma ORM for seamless history retrieval',
      'Enterprise Security & Google SSO: One-click authentication powered by NextAuth.js (Auth.js) v5 with secure session management'
    ],
    challenges:
      'Handling persistent SSE streaming connections across serverless environments and avoiding rate limit bottlenecks. Solved by architecting an automated provider-rotating Key Manager with parallelized token dispatch.',
    architecture:
      'Next.js 15 App Router architecture utilizing Server Components, Prisma ORM with Neon Serverless PostgreSQL, and load-balanced API routing across Groq, OpenRouter, and OpenAI.',
    myRole: 'AI Engineer & Full-Stack Architect',
    impact:
      'Achieved sub-200ms latency on AI streaming responses with 99.9% uptime through automated provider failover, serving as a reliable personal productivity tool.',
    keyLearnings:
      'Deepened expertise in Server-Sent Events (SSE) streaming protocols, multi-tenant serverless PostgreSQL optimizations, and multi-provider AI resilience engineering.'
  },
  {
    title: 'Aura — Offline Multimodal RAG',
    description:
      '100% Offline Multimodal Retrieval-Augmented Generation (RAG) System developed for resource-constrained environments. Features local document processing, multimodal vision indexing, and voice transcription.',
    longDescription:
      'Aura is a military-grade, 100% offline multimodal Retrieval-Augmented Generation (RAG) workstation built for sovereign, air-gapped enterprise and defense environments.\n\nThe platform enables local page-by-page document ingestion (PDF, plaintext), local visual indexing using Hugging Face CLIP embeddings, and offline speech-to-text transcription via Vosk and Whisper.\n\nIt integrates local Llama-3 models running on Ollama with ChromaDB vector storage, ensuring grounded, context-anchored chat generation without transmitting any data over external networks.\n\nWrapped in an Electron desktop shell packaging a Spring Boot Java backend, local JRE, and Python environment, Aura provides absolute data privacy and zero-latency local intelligence.',
    date: '2026',
    githubLink: 'https://github.com/Tharun4743/SIH25231',
    tags: ['React', 'Spring Boot', 'Java', 'SQLite', 'ChromaDB', 'Ollama', 'Electron'],
    category: 'fullstack',
    status: 'Offline AI Workstation',
    image: auraImg,
    problem:
      'Enterprise and defense environments requiring intelligent document and visual asset retrieval cannot rely on cloud-based LLM APIs due to strict data privacy, air-gapped network policies, and latency constraints.',
    solution:
      'Aura provides a 100% offline, sovereign multimodal RAG workstation packaged in an Electron shell, running local LLMs via Ollama, local CLIP vision embeddings, and offline STT for complete on-premises privacy.',
    features: [
      'Document Processing: Local page-by-page text extraction from PDF and plaintext documents via Apache PDFBox',
      'Multimodal Vision: Visual feature extraction and semantic indexing of local image materials using Hugging Face CLIP',
      'Voice Transcription: Vocal queries transcribed locally via Python speech-to-text translators (Whisper/Vosk)',
      'Grounded Retrieval (RAG): Integrates with local Llama-3 running on Ollama for context-anchored chat generation',
      'Glassmorphic Desktop Wrapper: Compiled as an Electron shell packaging the JRE, Python environment, and Spring Boot server into a one-click executable'
    ],
    challenges:
      'Orchestrating multiple local LLMs and vector databases in a fully air-gapped desktop environment without relying on external APIs. Solved by bundling a local JRE and Python environment into a self-contained Electron installer.',
    architecture:
      'Decoupled React SPA frontend and RESTful Spring Boot Java API backend, sharing real-time event updates via WebSockets, all wrapped in an Electron desktop shell.',
    myRole: 'Core Systems Developer',
    impact:
      'Enabled completely air-gapped, privacy-preserving document and vision querying, making it suitable for secure enterprise and military deployment environments.',
    keyLearnings:
      'Learned to orchestrate local LLMs and vector databases within an Electron desktop shell and optimized Java Spring Boot for local low-memory environments.'
  },
  {
    title: 'Smart Helmet IoT Safety System',
    description:
      'Dual-unit rider safety system preventing accidents via IR helmet wear detection, MQ-3 alcohol sensing, and eye-blink drowsiness monitoring with RF ignition interlock. SIH 2025 Top 50.',
    longDescription:
      'The Smart Helmet IoT Safety System is an embedded rider safety platform engineered to proactively eliminate motorcycle accidents through real-time hardware sensing and wireless ignition interlocking.\n\nLead embedded developer on the dual-unit rider safety system. Shortlisted in the SIH 2025 Internal Hackathon as Top 50 out of 300+ campus teams and officially nominated to submit the idea proposal on the central Smart India Hackathon (SIH) portal.\n\nThe dual-unit system links a sensor-equipped helmet with a motorcycle ignition receiver circuit via low-latency RF 433MHz wireless communication. It continuously monitors helmet wearing compliance (IR proximity sensor), rider alcohol levels (MQ-3 sensor), and driver drowsiness (IR eye-blink sensor), automatically cutting bike ignition within 500ms under unsafe conditions. Built with Arduino microcontrollers, C/C++ firmware, relays, and an I²C LCD status display, it incorporates a 5-second RF fail-safe signal protection for real-world environmental reliability.',
    date: 'Sep 2025 - Oct 2025',
    githubLink: 'https://github.com/Tharun4743/Smart-Helmet-IoT-Safety-System',
    driveLink: 'https://drive.google.com/drive/folders/1kYhyoOx9-Tr4WyOJkmUz7K4PDDpmaHEr?usp=drive_link',
    tags: [
      'Arduino',
      'C / C++',
      'RF 433MHz',
      'MQ-3 Alcohol Sensor',
      'IR Proximity Sensor',
      'Eye-Blink Sensor',
      'Relay Interlock',
      'IoT Safety'
    ],
    category: 'iot',
    status: 'SIH 2025 Top 50',
    image: smartHelmetImg,
    problem:
      'Two-wheeler accidents frequently result in fatalities due to helmet non-compliance, driving under the influence (DUI), and unnoticed driver drowsiness.',
    solution:
      'The Smart Helmet links rider sensors (IR proximity, MQ-3 alcohol, eye-blink drowsiness) via RF 433MHz to an ignition-interlock circuit that automatically blocks bike ignition under unsafe conditions within 500ms.',
    features: [
      'Proactive Helmet Compliance Check: IR proximity sensor verifies helmet is worn before ignition can engage',
      'Alcohol Sobriety Interlock: MQ-3 gas sensor detects alcohol vapors in breath and immediately inhibits ignition',
      'Driver Drowsiness Alert: IR eye-blink sensor monitors prolonged eyelid closure and triggers an audible buzzer and ignition cutoff',
      'Continuous RF Telemetry: Helmet transmitter broadcasts safety packet every 100ms via RF 433MHz to bike unit',
      'RF Fail-Safe Protection: Automatic ignition interlock if RF communication is lost or tampered with for >5 seconds',
      'Multi-Page LCD Dashboard: Real-time status display showing helmet wear, alcohol PPM, drowsiness, and ignition state'
    ],
    challenges:
      'Ensuring microsecond-level synchronization between the helmet transmitter and motorcycle receiver over noisy RF 433MHz channels. Solved by implementing an optimized 100ms transmission packet with checksum validation and a 5-second failsafe timeout.',
    architecture:
      'Dual-unit embedded hardware system utilizing Arduino microcontrollers, RF 433MHz transmitter/receiver modules, 5V relay module for ignition interlock, active piezoelectric buzzer, and 16x2 I²C LCD display.',
    myRole: 'Lead Embedded Developer (Dual-Unit Rider Safety System)',
    impact:
      'Lead embedded developer on the dual-unit rider safety system. Shortlisted as Top 50 out of 300+ teams in the SIH 2025 Internal Hackathon and officially nominated to submit on the central SIH portal. Proved sub-500ms ignition cutoff response time to proactively safeguard motorcycle riders.',
    keyLearnings:
      'Navigated embedded hardware constraints, noise filtering in analog gas sensors, RF transceiver packet stability, and failsafe design in life-critical systems.'
  },
  {
    title: 'Work Suite HRMS',
    description:
      'Enterprise workforce operations suite featuring two-level RBAC, automated payroll tax calculations, biometric attendance tracking, and leave request state machines. National Finalist at Odoo × NMIT Hackathon 2026.',
    longDescription:
      'Work Suite HRMS is an enterprise workforce operations platform engineered for mid-to-large business automation. Selected as a National Finalist for the 24-hour on-campus Grand Finale at NMIT Bangalore during the Odoo × NMIT Bangalore Hackathon 2026.\n\nThe system unifies employee directory management, automated monthly payroll calculations with tax withholding tables, biometric attendance logging, and multi-tier leave approval state machines. Built with modular Node.js, Express, and PostgreSQL with robust session encryption and role-based access control (Admin, HR, Employee).',
    date: 'Oct 2026',
    link: 'https://worksuite-hrms.onrender.com',
    githubLink: 'https://github.com/Tharun4743/WorkSuite-HRMS',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Tailwind CSS',
      'RBAC',
      'Payroll Automation'
    ],
    category: 'fullstack',
    status: 'Odoo × NMIT Finalist',
    problem:
      'Small and medium enterprises struggle with fragmented spreadsheets for daily attendance, manual error-prone payroll deductions, and delayed multi-level employee leave authorizations.',
    solution:
      'Work Suite HRMS digitizes the entire employee lifecycle with strict RBAC permissions, one-click tax-compliant payroll generation, and transparent leave approval workflows.',
    features: [
      'Automated Payroll Engine: Configurable tax withholding brackets and instant pay slip calculations',
      'Multi-Level RBAC: Strict privilege partitioning across Admin, HR Manager, and Staff roles',
      'Attendance & Leave State Machine: Biometric punch-in emulation and multi-stage leave approvals',
      'Analytical HR Dashboard: Real-time workforce headcounts, payroll expense charts, and department metrics'
    ],
    architecture:
      'Decoupled React & Tailwind frontend communicating via authenticated REST endpoints with an Express.js backend backed by relational PostgreSQL.',
    myRole: 'Lead Full-Stack Architect',
    impact:
      'Qualified as National On-Site Finalist at the Odoo × NMIT Bangalore Hackathon 2026 out of nationwide competing developer teams.'
  },
  {
    title: 'GitHub Profile Visualizer',
    description:
      'Published GitHub Marketplace Action and CLI suite generating 3D isometric contribution skylines, commit velocity telemetry, and skill radars in pure zero-dependency SVG.',
    longDescription:
      'GitHub Profile Visualizer is a published GitHub Marketplace Action and developer telemetry engine. It parses public GitHub user activity and generates rich, high-resolution SVG telemetry cards including 3D isometric contribution skylines, commit velocity graphs, language distribution matrixes, and skill radar diagrams.\n\nEngineered with zero native binary dependencies to run seamlessly in GitHub Actions CI/CD runners, Docker containers, or local developer workstations.',
    date: '2026',
    link: 'https://github.com/marketplace/actions/github-profile-visualizer',
    githubLink: 'https://github.com/Tharun4743/Github-profile-visualizer',
    tags: [
      'Node.js',
      'TypeScript',
      'GitHub Actions',
      'SVG Engine',
      'GitHub REST API',
      'CI/CD'
    ],
    category: 'fullstack',
    status: 'Marketplace Action',
    problem:
      'Standard GitHub profile README cards rely on third-party hosted services that frequently hit rate limits, suffer downtime, or fail to render properly.',
    solution:
      'GitHub Profile Visualizer runs as a native GitHub Action directly within the user repository, rendering and committing static self-hosted SVGs with zero runtime API dependency.',
    features: [
      '3D Isometric Contribution City: Transforms daily git contribution heatmaps into 3D isometric architectural skylines',
      'Pure SVG Generation: Renders pixel-perfect, scalable vector graphics without canvas or headless browser dependencies',
      '13-in-1 Telemetry Suite: Commit velocity, activity streams, languages breakdown, and achievement badges',
      'Zero-Config Workflow: Single YAML workflow integration directly on GitHub Actions'
    ],
    architecture:
      'TypeScript execution pipeline parsing GitHub GraphQL & REST APIs, computing commit geometry, and rendering pure XML/SVG output.',
    myRole: 'Author & Maintainer',
    impact:
      'Published on the official GitHub Marketplace and adopted by student developers and open-source engineers to power GitHub profile telemetry.'
  },
  {
    title: 'EdgeGuard — Automotive CAN Bus IDS',
    description:
      'On-device Controller Area Network (CAN Bus 2.0B) intrusion detection system with sub-5ms LightGBM edge inference neutralizing DoS bus floods, fuzzing, and spoofing.',
    longDescription:
      'EdgeGuard is an automotive cybersecurity platform engineered to protect modern vehicle Controller Area Networks (CAN Bus 2.0B) against physical and remote cyber attacks. Utilizing lightweight LightGBM decision models trained on real vehicle telemetry, EdgeGuard runs on embedded in-vehicle hardware to identify anomalous message frequencies, payload entropy spikes, and frame spoofing within 5ms without requiring internet connectivity.',
    date: '2026',
    githubLink: 'https://github.com/Tharun4743/EdgeGuard',
    tags: [
      'Python',
      'SocketCAN',
      'LightGBM',
      'Machine Learning',
      'Automotive Security',
      'CAN Bus 2.0B'
    ],
    category: 'fullstack',
    status: 'Vehicle Cybersecurity',
    problem:
      'Automotive CAN bus protocols lack authentication and encryption by design, leaving connected vehicles vulnerable to malicious frame injection, throttle tampering, and denial-of-service bus flooding.',
    solution:
      'EdgeGuard provides sub-5ms real-time edge anomaly detection inspecting CAN ID timing deltas and payload entropy directly on-device with zero cloud reliance.',
    features: [
      'Sub-5ms Inference: Edge-optimized LightGBM model evaluating frame inter-arrival timing anomalies',
      'SocketCAN Linux Daemon: Direct hardware interface with virtual and physical CAN transceivers',
      'Attack Classification: Detects DoS bus floods, diagnostic fuzzing attacks, and impersonation spoofing',
      'Security Operations Dashboard: Real-time NSOC telemetry interface for vehicle fleet telematics'
    ],
    architecture:
      'Python SocketCAN daemon interfacing with kernel network stack, running optimized LightGBM inference pipelines with alert streaming.',
    myRole: 'Lead Security Systems Engineer',
    impact:
      'Demonstrated 99.4% precision in catching synthetic CAN injection attacks with zero latency degradation to safety-critical vehicle ECUs.'
  },
  {
    title: 'MuleGuard — Anti-Money Laundering Graph System',
    description:
      'Financial crime detection engine using Neo4j and D3.js graph topologies to identify money mule smurfing rings, circular transaction loops, and high-velocity layering.',
    longDescription:
      'MuleGuard is a financial forensics platform designed for fraud investigation units and regulatory compliance teams. It models transactional records into dynamic directed graph topologies using Neo4j and D3.js to detect complex money laundering patterns—including smurfing rings, high-velocity fund layering, and circular transaction loops—that evade conventional rule-based relational databases.',
    date: '2026',
    githubLink: 'https://github.com/Tharun4743/Muleguard',
    tags: [
      'React',
      'Node.js',
      'Neo4j',
      'Graph Algorithms',
      'D3.js',
      'FinTech',
      'Fraud Detection'
    ],
    category: 'fullstack',
    status: 'Fraud Forensics',
    problem:
      'Financial fraudsters split illegal proceeds across dozens of intermediary "money mule" bank accounts within minutes, creating dispersed transaction trails that evade traditional relational database queries.',
    solution:
      'MuleGuard converts transactions into multi-hop graph structures, executing Cypher graph queries and velocity heuristics to uncover coordinated laundering rings instantly.',
    features: [
      'Interactive Graph Topology: D3.js visualization mapping money flow velocity between bank accounts and entities',
      'Smurfing Detection: Algorithmic identification of split deposits aggregating into centralized destination vaults',
      'Circular Loop Tracing: Cycle detection algorithms spotting self-funding and wash-trading schemes',
      'Risk Scorecard: Multi-factor risk scores based on transaction velocity, account age, and node centrality'
    ],
    architecture:
      'React and D3.js visualization interface connected via REST APIs to a Node.js backend executing Cypher graph queries on Neo4j.',
    myRole: 'Full-Stack & Graph Systems Developer',
    impact:
      'Accelerated mule network discovery time from hours of manual CSV collation to instantaneous graphical visualization.'
  },
  {
    title: 'Smart Public Service CRM',
    description:
      'Citizen grievance redressal portal with automated SLA tracking, geo-tagging, public status verification, and administrative escalation workflows.',
    longDescription:
      'Smart Public Service CRM is a civic engagement and municipal task governance platform designed to eliminate bottlenecks in citizen grievance redressal. Citizens can submit civic infrastructure complaints with GPS coordinates and photo evidence, while municipal officers manage resolution workflows governed by strict automated SLA escalation timers.',
    date: '2026',
    githubLink: 'https://github.com/Tharun4743/Public-CRM',
    tags: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Leaflet GIS',
      'SLA Escalation',
      'Civic Tech'
    ],
    category: 'fullstack',
    status: 'Civic Governance',
    problem:
      'Civic complaints filed with municipal bodies suffer from lack of transparency, misplaced physical paperwork, and no accountability for resolving public infrastructure issues.',
    solution:
      'Smart Public Service CRM provides a public tracking portal with geo-tagged incident mapping, transparent status lifecycles, and automatic escalation when resolution SLAs expire.',
    features: [
      'Geo-Tagged Complaint Registration: Citizens pin issues on interactive Leaflet maps with image uploads',
      'Automated SLA Escalation: Unresolved tickets automatically escalate to higher zonal authorities upon SLA breach',
      'Public Transparency Tracker: Real-time ticket lifecycle status (Submitted, Assigned, In Progress, Resolved)',
      'Administrative Analytics: Zonal heatmap displaying infrastructure grievance clusters and department resolution rates'
    ],
    architecture:
      'React frontend with Leaflet mapping, Express.js REST API, and PostgreSQL database tracking ticket state transitions.',
    myRole: 'Lead Full-Stack Developer',
    impact:
      'Built a complete civic accountability prototype delivering automated escalation and public status tracking.'
  }
];

export const LEADERSHIP = [
  {
    title: 'Fullstack Development Intern',
    organization: 'Neura Global (Startup)',
    period: '06/2026 - 07/2026',
    description:
      'Built Campus Connect, a placement portal for the college’s TPO cell using React, Node.js, TypeScript, and Supabase. | Added real-time status updates with Socket.IO and a document vault (Cloudinary) so students could upload resumes and transcripts securely. | Rolled it out to 500+ students, cutting down manual paperwork by 80% and removing scheduling clashes for interviews.'
  },
  {
    title: 'Software Development Intern',
    organization: 'Infosys Springboard',
    period: '11/2025 - 01/2026',
    description:
      'Completed the Infosys Springboard 6.0 program, working alongside mentors on real project workflows. | Built StarWall, an employee recognition dashboard, as part of the internship project. | Picked up debugging habits and version-control discipline from working in a proper team setup.'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Code Thugs 2k26 – 1st Place (National Winner 🥇)',
    organization: 'Code Thugs 2k26',
    year: '2026',
    type: '1ST PLACE WINNER',
    prize: '₹5,000 Cash Prize',
    category: 'hackathon',
    iconName: 'trophy',
    description:
      'Won 1st Place Winner nationally at Code Thugs 2k26 for designing, building, and deploying GOAT Code Editor — a real-time collaborative IDE featuring live cursor highlighting and in-browser compilation.'
  },
  {
    title: 'Neural Minds AI/ML Hackathon — 3rd Prize (🥉)',
    organization: 'VSB Engineering College (AIML Dept)',
    year: '2026',
    type: '3RD PRIZE WINNER',
    prize: 'ChatGPT Go Subscription',
    category: 'hackathon',
    iconName: 'award',
    description:
      'Secured 3rd Prize in the Neural Minds 8-Hour AI/ML Hackathon conducted by the Department of AI & ML at VSB Engineering College for architecting FINDORA AI — an autonomous campus lost & found intelligence network.'
  },
  {
    title: 'Best GitHub Profile & Top Developer — VSB Engineering College',
    organization: 'V.S.B. Engineering College, Karur',
    year: '2026',
    type: 'CAMPUS EXCELLENCE',
    prize: 'Rank #1 GitHub Profile in Campus',
    iconName: 'trophy',
    description:
      'Recognized for maintaining the top developer profile at V.S.B. Engineering College, Karur with 2,400+ commits, 31+ active repositories, a published GitHub Marketplace Action (GitHub Profile Visualizer), and enterprise-grade full-stack architectures.'
  },
  {
    title: 'Smart India Hackathon 2026 – Top 50 (Internal)',
    organization: 'Ministry of Education & SIH Internal Hackathon',
    year: '2026',
    type: 'TOP 50 (SIH NOMINEE)',
    category: 'hackathon',
    iconName: 'trophy',
    description:
      'Shortlisted in the Top 50 out of 300+ teams in the SIH 2026 Internal Hackathon for engineering VSBEC IT Vault and nominated to officially submit on the national SIH portal.'
  },
  {
    title: 'Smart India Hackathon 2025 – Top 50 (Internal)',
    organization: 'Ministry of Education & SIH Internal Hackathon',
    year: '2025',
    type: 'TOP 50 (SIH NOMINEE)',
    category: 'hackathon',
    iconName: 'rocket',
    description:
      'Lead embedded developer on the dual-unit rider safety system. Shortlisted in the Top 50 out of 300+ teams in the SIH 2025 Internal Hackathon and nominated to submit the idea on the official SIH portal.'
  },
  {
    title: 'Odoo × NMIT Bangalore Hackathon 2026 – Finalist',
    organization: 'Odoo × NMIT Bangalore',
    year: '2026',
    type: 'NATIONAL ON-SITE FINALIST',
    category: 'hackathon',
    iconName: 'award',
    description:
      'Shortlisted from an 8-hour preliminary hackathon and qualified for the national on-site finals at NMIT Bangalore.'
  },
  {
    title: 'India Innovates 2026 – Finalist',
    organization: 'India Innovates National Innovation Challenge',
    year: '2026',
    type: 'NATIONAL FINALIST',
    category: 'hackathon',
    iconName: 'lightbulb',
    description:
      'Advanced to the national finals following multi-stage technical evaluations and prototype demonstrations.'
  },
  {
    title: 'Department Student Coordinator',
    organization: 'VSB Engineering College (IT Dept)',
    year: '2024 – Present',
    type: 'DEPARTMENT LEAD',
    category: 'leadership',
    iconName: 'graduation',
    description:
      'Appointed Department Student Coordinator for Information Technology from 2024. Leading student technical events, academic task automation, and department activities.'
  },
  {
    title: 'SIH 2026 IT Department Coordinator',
    organization: 'VSB Engineering College',
    year: '2026',
    type: 'SIH IT LEAD',
    category: 'leadership',
    iconName: 'shield',
    description:
      'Appointed IT Department Coordinator for Smart India Hackathon (SIH) 2026. Mentoring 15+ student teams, reviewing problem statements, and managing college submission pipelines.'
  },
  {
    title: 'GeeksforGeeks Campus Mantri',
    organization: 'GeeksforGeeks Ambassador Program',
    year: 'Jan – Jul 2026',
    type: 'CAMPUS AMBASSADOR',
    category: 'ambassador',
    iconName: 'code',
    description:
      'Organized and hosted campus coding workshops, competitive programming contests, and technical bootcamps for 200+ student developers.'
  },
  {
    title: 'Fun Quest Event Coordinator',
    organization: 'National Level Technical Symposium',
    year: '2026',
    type: 'EVENT COORDINATOR',
    score: '9.8 / 10 Rating',
    category: 'leadership',
    iconName: 'star',
    description:
      'Spearheaded event planning, logistics, and execution for 150+ symposium participants, achieving an average feedback rating score of 9.8 out of 10.'
  }
];

export const SHOWCASE_CRITERIA: ShowcaseCriteria[] = [
  {
    title: 'Code Architecture & Depth',
    description: 'Original production architectures, decoupled components, and real problem-solving over boilerplate copies.',
    iconName: 'code'
  },
  {
    title: 'Documentation & Readability',
    description: 'Comprehensive READMEs with architecture diagrams, setup guides, verified problem statements, and demos.',
    iconName: 'fileText'
  },
  {
    title: 'Continuous Commit Velocity',
    description: 'Evidence of consistent, disciplined daily engineering habits and version-controlled codebase maintenance.',
    iconName: 'activity'
  },
  {
    title: 'Real-World Validation & Awards',
    description: 'Institutional adoption, national hackathon recognitions (SIH, Code Thugs, Odoo), and peer review.',
    iconName: 'award'
  }
];

export const VSB_GITHUB_PROFILES: VsbStudentProfile[] = [
  {
    name: 'Tharunkumar K',
    githubUsername: 'Tharun4743',
    githubUrl: 'https://github.com/Tharun4743',
    linkedinUrl: 'https://www.linkedin.com/in/tharunkumark4743/',
    role: 'Lead Full-Stack Architect & AI Systems Developer | 2× Hackathon Winner',
    department: 'Department of Information Technology',
    college: 'V.S.B. Engineering College, Karur',
    batch: '2024 – 2028 Batch',
    description:
      'Recognized for holding the leading student GitHub developer profile at V.S.B. Engineering College, Karur. 2× Hackathon Winner (Code Thugs 2K26 🥇, Neural Minds 🥉), India Innovates 2026 & Odoo × NMIT 2026 Finalist 🇮🇳, SIH 2025 & 2026 Top 50, lead architect of production platforms adopted across 365+ campus students, and published GitHub Marketplace Action creator.',
    featuredRepos: [
      {
        name: 'taskmanager (VSBEC IT Vault)',
        description: 'Multi-compiler Monaco IDE assessment suite, 3-tier submission pipeline, and LeetCode velocity sync adopted by 365+ students.',
        url: 'https://github.com/Tharun4743/taskmanager',
        tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Monaco IDE'],
        highlight: 'SIH 2026 Top 50 Nominee'
      },
      {
        name: 'GOAT-CE (GOAT Code Editor)',
        description: 'Collaborative in-browser pair programming IDE with custom WebRTC peer voice mesh and real-time cursor sync.',
        url: 'https://github.com/Tharun4743/GOAT-CE',
        tags: ['React 19', 'WebRTC', 'Socket.IO', 'Piston API', 'Monaco'],
        highlight: '1st Place Winner (Code Thugs 2K26 🥇)'
      },
      {
        name: 'findora-ai (FINDORA AI)',
        description: 'Campus lost & found intelligence network with Google Gemini 2.5 Flash multimodal correlation and zero-knowledge claim verification.',
        url: 'https://github.com/Tharun4743/findora-ai',
        tags: ['React 19', 'Gemini AI', 'Supabase', 'Telegram Bot API'],
        highlight: '3rd Prize Winner (Neural Minds 🥉)'
      },
      {
        name: 'github-profile-visualizer',
        description: 'Published GitHub Marketplace Action & 13-in-1 pure SVG developer telemetry suite generating 3D isometric contribution skylines.',
        url: 'https://github.com/Tharun4743/Github-profile-visualizer',
        tags: ['TypeScript', 'GitHub Actions', 'SVG Engine', 'CI/CD'],
        highlight: 'Published GitHub Marketplace Action'
      },
      {
        name: 'AGILE-INNOVATORS-smart-helmet-',
        description: 'Dual-unit rider safety system with IR helmet wear verification, MQ-3 alcohol detection, eye-blink sensor, and RF ignition interlock.',
        url: 'https://github.com/Tharun4743/AGILE-INNOVATORS-smart-helmet-',
        tags: ['Arduino', 'C/C++', 'RF 433MHz', 'IoT Hardware'],
        highlight: 'SIH 2025 Top 50 Nominee'
      },
      {
        name: 'WorkSuite-HRMS',
        description: 'Enterprise workforce operations suite with 2-tier RBAC, automated payroll tax deduction calculations, and attendance tracking.',
        url: 'https://github.com/Tharun4743/WorkSuite-HRMS',
        tags: ['React', 'Express', 'PostgreSQL', 'RBAC'],
        highlight: 'Odoo × NMIT National Finalist'
      }
    ],
    skills: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Supabase',
      'Google Gemini AI',
      'WebRTC',
      'Socket.IO',
      'Arduino C/C++',
      'Docker'
    ],
    metrics: {
      commits: '2,400+ Commits',
      repos: '31+ Public Repositories',
      achievements: '2× Hackathon Winner | SIH Top 50'
    },
    evaluationHighlights: [
      '2× Hackathon Winner (Code Thugs 2K26 🥇, Neural Minds 🥉)',
      'Rank #1 Best GitHub Profile in VSB Engineering College (2,400+ commits, 31+ repos)',
      'India Innovates 2026 & Odoo × NMIT Bangalore 2026 National Finalist 🇮🇳',
      '2x Smart India Hackathon (SIH 2025 & 2026) Top 50 Nominee',
      '365+ active campus daily users on VSBEC IT Vault platform',
      'Published author on official GitHub Marketplace (GitHub Action)',
      'Department Student Coordinator for Information Technology, VSBEC'
    ]
  }
];


