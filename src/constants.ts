import { Project, CertificationItem, SkillCategory, AchievementItem, VsbStudentProfile, ShowcaseCriteria } from './type';

import profileImg from './assets/TharunKumar.jpeg';
import vsbecTaskManagerImg from './assets/vsbec-task-manager.png';
import auraImg from './assets/aura-ai.png';
import smartHelmetImg from './assets/smart-helmet.png';
import goatCodeEditorImg from './assets/goat.png';
import campusConnectImg from './assets/campus-connect.jpeg';
import worksuiteLogo from './assets/worksuite-logo.png';
import findoraAiImg from './assets/findora-ai.jpg';

export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  primaryName: 'Tharunkumar K',
  title: 'Building Intelligent Software Solutions | Full Stack & AI Systems Developer',
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
  aboutBio:
    'Full stack developer who enjoys building things end-to-end – frontend, backend, and everything in between. Comfortable with React, Next.js, Node.js, TypeScript, and PostgreSQL, with recent experience at Neura Global. Learn fast, work well with teams, and like solving problems that actually matter.',
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
    title: 'National Internship Program — Pega (60-Hour Certification)',
    issuer: 'Pegasystems Worldwide India × SmartBridge',
    year: 'Sep 2026',
    link: 'https://drive.google.com/drive/folders/1B2cRnGk_3-DKSCx9gTSd_ybJQvXpW03q',
    type: 'CERTIFICATE'
  },
  {
    title: 'CODE THUGS 2K26 — National Hackathon 1st Place',
    issuer: 'Jai Shriram Engineering College, Tiruppur',
    year: 'Feb 2026',
    link: 'https://drive.google.com/file/d/1RM_8iWXypnQ0CvaeaCzXWX5uVw4A0VLd/view?usp=sharing',
    type: 'GOLD CERTIFICATE'
  },
  {
    title: 'NEURAL MINDS HACKATHON — 3rd Prize (Code the Future with AI)',
    issuer: 'Neural Minds Club, V.S.B. Engineering College',
    year: 'Sep 2026',
    link: 'https://drive.google.com/file/d/1mI8bbUEFykJpHsZlhoF9bNw83lBxEfJ8/view?usp=sharing',
    type: 'CERTIFICATE'
  },
  {
    title: 'Best Performer — Photography / Videography Themes',
    issuer: 'V.S.B. Engineering College, Karur',
    year: 'Oct 2024',
    link: 'https://drive.google.com/file/d/1CbwPlA8tM-_7GbKkllZ_i5WwYHPzfsSW/view?usp=sharing',
    type: 'CERTIFICATE'
  },
  {
    title: 'Poster Presentation — ECO-CLUB 2K24',
    issuer: 'Dept of Civil & Chemical Engg, VSBEC',
    year: 'Oct 2024',
    link: 'https://drive.google.com/file/d/10yzCbfSM5uRddDbqMuJS0gl24bMfNpbg/view?usp=sharing',
    type: 'CERTIFICATE'
  },
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
    type: 'COURSE'
  }
];

export const PROJECTS: Project[] = [
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
    category: 'ai',
    status: '3rd Prize Winner',
    realWorldImplementation:
      'Awarded 3rd Prize in the 8-Hour Hackathon at VSB Engineering College (AIML Dept). Deployed live on Vercel with real-time Telegram Bot integration (@findoravsb_bot) and Supabase backend.',
    image: findoraAiImg,
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
    title: 'Smart Helmet IoT Safety System',
    description:
      'Dual-unit rider safety system preventing accidents via IR helmet wear detection, MQ-3 alcohol sensing, and eye-blink drowsiness monitoring with RF ignition interlock. SIH 2025 Top 50.',
    longDescription:
      'The Smart Helmet IoT Safety System is an embedded rider safety platform engineered to proactively eliminate motorcycle accidents through real-time hardware sensing and wireless ignition interlocking.\n\nLead embedded developer on the dual-unit rider safety system. Shortlisted in the SIH 2025 Internal Hackathon as Top 50 out of 300+ campus teams and officially nominated to submit the idea proposal on the central Smart India Hackathon (SIH) portal.\n\nThe dual-unit system links a sensor-equipped helmet with a motorcycle ignition receiver circuit via low-latency RF 433MHz wireless communication. It continuously monitors helmet wearing compliance (IR proximity sensor), rider alcohol levels (MQ-3 sensor), and driver drowsiness (IR eye-blink sensor), automatically cutting bike ignition within 500ms under unsafe conditions. Built with Arduino microcontrollers, C/C++ firmware, relays, and an I²C LCD status display, it incorporates a 5-second RF fail-safe signal protection for real-world environmental reliability.',
    date: 'Sep 2025 - Oct 2025',
    githubLink: 'https://github.com/Tharun4743/AGILE-INNOVATORS-smart-helmet-',
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
    image: worksuiteLogo,
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
    title: 'Aura — Offline Multimodal RAG',
    description:
      '100% Offline Multimodal Retrieval-Augmented Generation (RAG) System developed for resource-constrained environments. Features local document processing, multimodal vision indexing, and voice transcription.',
    longDescription:
      'Aura is a military-grade, 100% offline multimodal Retrieval-Augmented Generation (RAG) workstation built for sovereign, air-gapped enterprise and defense environments.\n\nThe platform enables local page-by-page document ingestion (PDF, plaintext), local visual indexing using Hugging Face CLIP embeddings, and offline speech-to-text transcription via Vosk and Whisper.\n\nIt integrates local Llama-3 models running on Ollama with ChromaDB vector storage, ensuring grounded, context-anchored chat generation without transmitting any data over external networks.\n\nWrapped in an Electron desktop shell packaging a Spring Boot Java backend, local JRE, and Python environment, Aura provides absolute data privacy and zero-latency local intelligence.',
    date: '2026',
    githubLink: 'https://github.com/Tharun4743/SIH25231',
    tags: ['React', 'Spring Boot', 'Java', 'SQLite', 'ChromaDB', 'Ollama', 'Electron'],
    category: 'ai',
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
    title: 'CampusConnect',
    description:
      'Enterprise campus placement and recruitment ecosystem with real-time Socket.IO interview funnels, automated eligibility filters, and Cloudinary document vault.',
    longDescription:
      'CampusConnect is an enterprise-grade placement governance and corporate recruitment management ecosystem engineered for collegiate Training & Placement Offices (TPOs).\n\nBuilt during my internship at Neura Global, the platform digitizes recruitment drives across 5-stage application funnels (Applied → Shortlisted → Technical Interview → HR Round → Offered) with bi-directional WebSocket status broadcasts.\n\nIt features an interactive Cloudinary document vault for student resumes and verified marksheets, automated candidate eligibility auditing (filtering by minimum CGPA, active arrears, and department quotas), a conflict-free multi-panel interview scheduler, and hardened security including Same-Origin CSRF Guard and customized Cross-Origin-Opener-Policy headers for Google OAuth 2.0 Single Sign-On.\n\nDeployed in production on Render with Supabase PostgreSQL, reducing manual verification and roster compiling by over 80%.',
    date: 'Jun 2026 - Jul 2026',
    link: 'https://campusconnect-yg4h.onrender.com/',
    githubLink: 'https://github.com/Tharun4743/CampusConnect',
    tags: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'Socket.IO',
      'Supabase (PostgreSQL)',
      'Tailwind CSS',
      'Cloudinary',
      'Google OAuth 2.0'
    ],
    category: 'fullstack',
    status: 'Neura Global Internship Flagship',
    image: campusConnectImg,
    problem:
      'University Training & Placement Offices manage hundreds of corporate recruiting drives with thousands of student resumes. Disconnected Google Forms, unverified spreadsheets, and broadcast messaging cause missed interview rounds, inaccurate CGPA claims, and severe corporate offer delays.',
    solution:
      'CampusConnect centralizes placement drives with real-time multi-stage interview funnels, tamper-proof academic auditing, an in-browser Cloudinary document vault, and automated eligibility verification.',
    features: [
      'Real-Time 5-Stage Funnel: Bi-directional WebSocket tracker displaying application states (Applied, Shortlisted, Interviewing, Offered)',
      'Cloudinary Document Vault: In-browser instant preview for resumes, marksheets, and verified credentials',
      'Automated Drive & Eligibility Engine: Configurable filters for minimum CGPA, maximum backlogs, and tech stack requirements',
      'Conflict-Free Interview Scheduler: Multi-panel interview scheduling with automated timetable clash detection',
      'Enterprise Security Hardening: Same-Origin CSRF Guard and customized COOP/COEP headers for Google OAuth 2.0 SSO'
    ],
    challenges:
      'Managing high-concurrency real-time WebSocket state synchronizations across simultaneous interview panels while preventing candidate tampering with academic metrics. Solved by implementing server-side Supabase Row-Level Security (RLS) policies and proxy-aware token throttling.',
    architecture:
      'Decoupled React 19 SPA communicating via authenticated REST endpoints and Socket.IO 4.8 WebSockets with a Node.js/Express backend backed by Supabase PostgreSQL and Cloudinary CDN.',
    myRole: 'Full-Stack Engineering Intern & Architect',
    impact:
      'Deployed in production at Neura Global, cutting administrative manual auditing by 80%, eliminating interview scheduling conflicts, and managing 500+ student profiles with zero candidate collision.',
    keyLearnings:
      'Mastered enterprise WebSocket state management, cloud document vault security, OAuth 2.0 COOP header isolation, and automated candidate eligibility pipelines.'
  }
];

export const LEADERSHIP = [
  {
    title: 'Pega System Developer Intern',
    organization: 'Pegasystems Worldwide India × SmartBridge',
    period: '08/2026 - 09/2026',
    description:
      'Completed 60-Hour National Internship Program in Pega enterprise architecture. | Developed scalable case lifecycle automation workflows and data models in collaboration with SmartBridge. | Issued Certificate of Completion (ID: PEGA-SW-NIP-2026-578) sponsored by Pegasystems Worldwide India.'
  },
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
    title: 'CODE THUGS 2K26 — First Place (National Winner 🥇)',
    organization: 'Jai Shriram Engineering College, Tiruppur',
    event: 'National-Level Hackathon',
    year: '2026',
    date: '6–7 February 2026',
    type: '1ST PLACE WINNER',
    prize: '₹5,000 Cash Prize & Trophy',
    category: 'hackathon',
    iconName: 'trophy',
    featured: true,
    certificateUrl: 'https://drive.google.com/file/d/1RM_8iWXypnQ0CvaeaCzXWX5uVw4A0VLd/view?usp=sharing',
    description:
      'Won 1st Place nationally at CODE THUGS 2K26, a 24-hour National-Level Hackathon organized by Jai Shriram Engineering College, Tiruppur. Architected and deployed GOAT Code Editor — a real-time collaborative cloud IDE featuring live cursor highlighting, Monaco Editor integration, and in-browser compilation.'
  },
  {
    title: 'NEURAL MINDS HACKATHON — 3rd Prize (🥉)',
    organization: 'Neural Minds Club, V.S.B. Engineering College, Karur',
    event: 'AI 8 Hours Hackathon',
    year: '2026',
    date: '26 September 2026',
    type: '3RD PRIZE WINNER',
    prize: 'ChatGPT Go Subscription & Honors',
    category: 'hackathon',
    iconName: 'award',
    teamName: 'TECH SQUAD',
    teamMembers: ['Tamilselvan S', 'Tharunkumar K', 'Ram Kishore S M'],
    certificateUrl: 'https://drive.google.com/file/d/1mI8bbUEFykJpHsZlhoF9bNw83lBxEfJ8/view?usp=sharing',
    description:
      'Theme: "Code the Future with AI". Secured 3rd Prize as Team TECH SQUAD (Tamilselvan S, Tharunkumar K, Ram Kishore S M) in the 8-Hour AI Hackathon organized by Neural Minds Club at V.S.B. Engineering College. Architected FINDORA AI — an autonomous campus lost-and-found intelligence network powered by multimodal correlation and zero-knowledge verification.'
  },
  {
    title: 'Best Performer — Photography / Videography',
    organization: 'V.S.B. Engineering College, Karur',
    event: 'Photography / Videography Themes Contest',
    year: '2024',
    date: '3 October 2024',
    type: 'BEST PERFORMER',
    prize: 'Excellence Citation',
    category: 'creative',
    iconName: 'camera',
    certificateUrl: 'https://drive.google.com/file/d/1CbwPlA8tM-_7GbKkllZ_i5WwYHPzfsSW/view?usp=sharing',
    description:
      'Awarded Best Performer for Photography and Videography Themes at V.S.B. Engineering College, Karur for creative cinematography, technical visual framing, narrative editing, and creative storytelling.'
  },
  {
    title: 'Poster Presentation — ECO-CLUB 2K24',
    organization: 'V.S.B. Engineering College, Karur',
    department: 'Civil and Chemical Engineering',
    event: 'ECO-CLUB 2K24 Poster Presentation',
    year: '2024',
    date: '19 October 2024',
    type: 'TECHNICAL PRESENTATION',
    category: 'presentation',
    iconName: 'leaf',
    certificateUrl: 'https://drive.google.com/file/d/10yzCbfSM5uRddDbqMuJS0gl24bMfNpbg/view?usp=sharing',
    description:
      'Presented research on sustainable environmental engineering and eco-friendly technological innovations during ECO-CLUB 2K24, organized by the Department of Civil and Chemical Engineering at V.S.B. Engineering College.'
  },
  {
    title: 'Best GitHub Profile & Top Developer — VSB Engineering College',
    organization: 'V.S.B. Engineering College, Karur',
    year: '2026',
    type: 'CAMPUS EXCELLENCE',
    prize: 'Rank #1 GitHub Profile in Campus',
    iconName: 'trophy',
    description:
      'Recognized for maintaining the top developer profile at V.S.B. Engineering College, Karur with 3,500+ commits, 30+ active repositories, a published GitHub Marketplace Action (GitHub Profile Visualizer), and enterprise-grade full-stack architectures.'
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
      'National Finalist at India Innovates 2026 for architecting Public CRM (Smart Public Service CRM) — a citizen relationship management and grievance redressal platform with geo-tagging, photo verification, and automated 72h SLA escalation to municipal authorities.'
  },
  {
    title: 'National Internship Program — Pega (60-Hour Completion)',
    organization: 'Pegasystems Worldwide India × SmartBridge',
    event: 'National Internship Program',
    year: '2026',
    date: '4 Aug – 3 Sep 2026',
    type: 'CERTIFICATE OF COMPLETION',
    score: 'ID: PEGA-SW-NIP-2026-578',
    category: 'leadership',
    iconName: 'graduation',
    certificateUrl: 'https://drive.google.com/drive/folders/1B2cRnGk_3-DKSCx9gTSd_ybJQvXpW03q',
    description:
      'Completed the 60-Hour National Internship Program on Pega systems, sponsored by Pegasystems Worldwide India Private Limited in collaboration with SmartBridge. Issued Certificate of Completion on 22 September 2026 (Certificate ID: PEGA-SW-NIP-2026-578).'
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
      commits: '3,500+ Commits',
      repos: '30+ Public Repositories (35+ Ecosystem)',
      achievements: '2× Hackathon Winner | SIH Top 50'
    },
    evaluationHighlights: [
      '2× Hackathon Winner (Code Thugs 2K26 🥇, Neural Minds 🥉)',
      'Rank #1 Best GitHub Profile in VSB Engineering College (3,500+ commits, 30+ repos)',
      'India Innovates 2026 & Odoo × NMIT Bangalore 2026 National Finalist 🇮🇳',
      '2x Smart India Hackathon (SIH 2025 & 2026) Top 50 Nominee',
      '365+ active campus daily users on VSBEC IT Vault platform',
      'Published author on official GitHub Marketplace (GitHub Action)',
      'Department Student Coordinator for Information Technology, VSBEC'
    ]
  }
];


