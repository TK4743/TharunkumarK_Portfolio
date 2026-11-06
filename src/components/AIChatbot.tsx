import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Sparkles,
  Bot,
  User,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { GITHUB_STATS } from '../contributionData';

export interface AIChatbotProps {
  gitStats?: {
    followers?: number;
    repos?: number;
    commits?: number;
    loading?: boolean;
    error?: boolean;
  };
}

interface QAPair {
  id: string;
  category: string;
  keywords: string[];
  phrases?: string[];
  priority?: number;
  answer: (commits: string, repos: number | string) => string;
}

const QA_DATABASE: QAPair[] = [
  // 1. Profile / Introduction
  {
    id: 'profile',
    category: 'About Tharun',
    keywords: ['who', 'tharun', 'tharunkumar', 'about', 'bio', 'intro', 'introduction', 'background', 'profile', 'developer'],
    phrases: ['who is tharun', 'tell me about yourself', 'about tharun', 'who are you', 'professional background'],
    priority: 1.2,
    answer: (commits, repos) =>
      `Tharunkumar K is a Lead Full-Stack Architect & AI Systems Developer from Dharapuram, Tamil Nadu, currently pursuing a B.Tech in Information Technology at V.S.B. Engineering College, Karur (Batch 2024 – 2028, CGPA: 8.5 / 10).\n\nKey Highlights:\n• 2× Hackathon Winner: 1st Place National Winner at CODE THUGS 2K26 🥇 & 3rd Prize at Neural Minds Hackathon 🥉.\n• National Finalist: India Innovates 2026 (Public CRM) & Odoo × NMIT Bangalore 2026 (Work Suite HRMS).\n• 2× Smart India Hackathon (SIH) Top 50 Internal Nominee: VSBEC IT Vault (2026) & Smart Helmet IoT System (2025).\n• #1 Ranked GitHub Developer @ VSBEC: Over ${commits}+ verified commits and ${repos}+ repositories with published GitHub Marketplace Actions.\n• Institutional Impact: Lead architect of VSBEC IT Vault, adopted daily by 365+ students across 6 departmental sections.`
  },

  // 2. Hackathons & Honors
  {
    id: 'hackathons',
    category: 'Hackathons & Awards',
    keywords: ['hackathon', 'hackathons', 'award', 'awards', 'prize', 'prizes', 'winner', 'won', 'competition', 'achievements', 'honors', 'trophy'],
    phrases: ['hackathon winner', 'what hackathons', 'hackathon awards', 'code thugs', 'neural minds', 'sih', 'smart india hackathon'],
    priority: 1.8,
    answer: (commits, repos) =>
      `Tharunkumar K has a proven track record in high-stakes competitive hackathons:\n\n🥇 CODE THUGS 2K26 — National 1st Place Winner\n• Award: ₹5,000 Cash Prize & Championship Trophy at Jai Shriram Engineering College, Tiruppur.\n• Project: GOAT Code Editor — real-time collaborative cloud IDE with custom WebRTC peer voice mesh and 13+ language compilation.\n\n🥉 NEURAL MINDS HACKATHON — 3rd Prize Winner\n• Award: ChatGPT Go Subscription & Honors (AI 8-Hour Hackathon by AIML Dept, VSBEC).\n• Project: FINDORA AI — campus lost & found intelligence network with Google Gemini 2.5 Flash multimodal correlation.\n\n🇮🇳 INDIA INNOVATES 2026 — National Finalist\n• Project: Public CRM — citizen grievance redressal platform with geo-tagging, photo verification, and automated 72h SLA escalation to municipal bodies.\n\n🇮🇳 ODOO × NMIT BANGALORE 2026 — National Finalist\n• Project: Work Suite HRMS — enterprise workforce management with 2-tier RBAC, automated payroll calculation, and biometric attendance.\n\n🏛️ SMART INDIA HACKATHON (SIH 2025 & 2026) — Top 50 Nominee\n• Shortlisted Top 50 out of 300+ campus teams in both editions (VSBEC IT Vault for SIH 2026; Smart Helmet IoT System for SIH 2025) and officially nominated to submit on the central SIH portal.\n\n🏆 Best GitHub Profile @ VSBEC: Recognized with Rank #1 campus profile (${commits}+ commits, ${repos}+ repos).`
  },

  // 3. Top Projects Overview
  {
    id: 'projects_overview',
    category: 'Projects',
    keywords: ['projects', 'project', 'portfolio', 'apps', 'work', 'built', 'systems', 'creations'],
    phrases: ['top projects', 'best projects', 'what did you build', 'all projects', 'project list'],
    priority: 1.1,
    answer: () =>
      `Tharun has architected and deployed several production-grade engineering platforms:\n\n1. GOAT Code Editor (National 1st Place 🥇):\n• In-browser collaborative IDE with WebRTC peer audio mesh, Monaco editor kernel, and 13+ languages sandboxed execution via Piston API.\n\n2. VSBEC IT Vault (SIH 2026 Top 50 Nominee):\n• Enterprise governance suite adopted by 365+ daily students across 6 departmental sections with 3-tier proof audit, LeetCode GraphQL velocity sync, and proctored Monaco IDE.\n\n3. FINDORA AI (Neural Minds 3rd Prize 🥉):\n• Multimodal campus lost & found intelligence network powered by Google Gemini 2.5 Flash, zero-knowledge verification challenge, and Telegram bot (@findoravsb_bot).\n\n4. Smart Helmet IoT System (SIH 2025 Top 50 Nominee):\n• Dual-unit rider safety system with IR proximity (helmet wear), MQ-3 alcohol sensor, IR eye-blink sensor, and RF 433MHz wireless ignition cutoff (<500ms).\n\n5. Work Suite HRMS (Odoo × NMIT Finalist):\n• Enterprise workforce operations platform with 2-tier RBAC, automated payroll/tax calculation, and biometric attendance.\n\n6. Aura (Offline AI Workstation):\n• 100% Offline Multimodal RAG workstation in Electron shell with Spring Boot, Ollama (Llama-3), CLIP embeddings, and ChromaDB.\n\n7. CampusConnect (Neura Global Flagship):\n• Collegiate placement platform with 5-stage live interview funnels and Cloudinary document vault, adopted by 500+ students.\n\nType any project name (e.g., "GOAT", "VSBEC Vault", "Smart Helmet", "FINDORA") for in-depth architectural details!`
  },

  // 4. Project: GOAT Code Editor
  {
    id: 'project_goat',
    category: 'GOAT Code Editor',
    keywords: ['goat', 'goat code editor', 'goat ce', 'pair programming', 'code editor', 'editor', 'webrtc', 'audio mesh', 'piston'],
    phrases: ['goat code editor', 'tell me about goat', 'goat project', 'code thugs project'],
    priority: 2.5,
    answer: () =>
      `🐐 GOAT Code Editor — National 1st Place Winner at CODE THUGS 2K26 🥇\n\n• Architecture: Decoupled React 19 & Monaco Editor client interacting via Socket.io with an Express 5 backend, deployed on Render via IaC Blueprint.\n• Real-Time Sync: Keystroke synchronization with race-condition-safe counter-based edit gating (remoteChangeDepth) and live peer cursor decorations.\n• WebRTC Voice Mesh: Full-duplex browser audio mesh built from scratch with SDP Offer/Answer negotiation, ICE relay, and live Voice Activity Detection (VAD) via Web Audio API.\n• Sandboxed Compilation: In-browser execution for 13+ programming languages via Piston API v2 with AI neural fallback.\n• AI Assistant: Integrated Llama 3.1 70B via OpenRouter for code explanation, refactoring, and unit test generation.\n• Tech Stack: React 19, TypeScript 5.8, Vite 6.2, Socket.io 4.8, Monaco Editor, Express 5.2, PostgreSQL 16.\n• GitHub: https://github.com/Tharun4743/GOAT-CE\n• Live Demo: https://goatcode-editor.onrender.com`
  },

  // 5. Project: VSBEC IT Vault / Task Manager
  {
    id: 'project_vsbec',
    category: 'VSBEC IT Vault',
    keywords: ['vsbec', 'vault', 'it vault', 'taskmanager', 'task manager', 'academic task manager', 'institutional', '365'],
    phrases: ['vsbec it vault', 'task manager project', 'vsbec task manager', 'it task manager', '365 students'],
    priority: 2.5,
    answer: () =>
      `🏛️ VSBEC IT Vault — Institutional Governance & Coding Assessment Ecosystem\n\n• Real-World Adoption: Actively adopted by 365+ daily students and faculty across 6 departmental sections (II IT & III IT) at VSB Engineering College, Karur.\n• Hackathon Recognition: Shortlisted Top 50 out of 300+ campus teams in SIH 2026 Internal Hackathon and officially nominated on the central SIH portal.\n• 3-Tier Proof Verification: Student Coordinator Peer Review → Class Advisor Validation → HOD Oversight with Cloudinary image proof compression.\n• Automated Velocity Tracking: Real-time commit and problem synchronization via LeetCode GraphQL and GitHub REST APIs.\n• Proctored Monaco Assessment IDE: Sandboxed compiler for C, C++, Java 17, and Python 3 with webcam Picture-in-Picture proctoring and anti-cheat exam lockdown.\n• High Performance: In-memory pre-indexed RAM directory cache achieving sub-0.01ms student lookups across 35 PostgreSQL tables.\n• Tech Stack: React 19, TypeScript, Node.js 20+, Express, 35 PostgreSQL relational tables, Telegram Bot, 3-node Brevo email failover pool.\n• GitHub: https://github.com/Tharun4743/taskmanager\n• Live Portal: https://it-taskmanager.vercel.app/`
  },

  // 6. Project: FINDORA AI
  {
    id: 'project_findora',
    category: 'FINDORA AI',
    keywords: ['findora', 'findora ai', 'lost and found', 'lost property', 'gemini', 'zero-knowledge', 'telegram bot'],
    phrases: ['findora ai', 'tell me about findora', 'lost and found project', 'neural minds project'],
    priority: 2.5,
    answer: () =>
      `🔍 FINDORA AI — Autonomous Campus Lost & Found Intelligence Network\n\n• Award: 3rd Prize Winner at Neural Minds 8-Hour AIML Hackathon 🥉 (awarded ChatGPT Go Subscription).\n• Multimodal AI Correlation: Fusion scoring (Visual 35%, Text 30%, Category 15%, Spatial 10%, Time 10%) powered by Google Gemini 2.5 Flash.\n• Zero-Knowledge Verification: Automated challenge-response ownership verification using Levenshtein distance and anti-hammering velocity throttling to eliminate fraudulent handovers.\n• Tamper-Proof Camera: In-browser WebRTC camera capture with client-side HTML5 Canvas optical GPS coordinates and timestamp watermarking.\n• Notifications: Real-time broadcast alerts via Telegram Bot API (@findoravsb_bot) and Brevo SMTP 1-time handover PINs.\n• Tech Stack: React 19, TypeScript, Express, Supabase (PostgreSQL), Google Gemini 2.5 Flash, Cloudinary CDN.\n• GitHub: https://github.com/Tharun4743/findora-ai\n• Live Demo: https://findoravsbec.vercel.app`
  },

  // 7. Project: Smart Helmet IoT Safety System
  {
    id: 'project_helmet',
    category: 'Smart Helmet IoT System',
    keywords: ['helmet', 'smart helmet', 'iot safety', 'ignition', 'alcohol', 'drowsiness', 'arduino', 'rf 433mhz', 'interlock', 'rider'],
    phrases: ['smart helmet', 'smart helmet project', 'helmet safety', 'sih 2025 project', 'iot helmet'],
    priority: 2.5,
    answer: () =>
      `⛑️ Smart Helmet IoT Safety System — Proactive Rider Protection Platform\n\n• Hackathon Recognition: Shortlisted Top 50 out of 300+ campus teams in SIH 2025 Internal Hackathon and nominated on the central SIH portal.\n• Dual-Unit Hardware: Links a sensor-equipped helmet with motorcycle ignition receiver circuitry via low-latency RF 433MHz wireless telemetry.\n• Multi-Sensor Safety Circuit:\n  1. IR Proximity Sensor: Proactively verifies helmet wear compliance before ignition can engage.\n  2. MQ-3 Alcohol Sensor: Detects rider breath alcohol PPM and immediately inhibits ignition.\n  3. IR Eye-Blink Sensor: Monitors prolonged driver eyelid closure (drowsiness) and triggers buzzer + ignition cutoff within 500ms.\n• Failsafe Protection: Automatic ignition shutdown if RF communication is lost or tampered with for >5 seconds.\n• Tech Stack: Arduino microcontrollers, C/C++ firmware, RF 433MHz transceiver, MQ-3 gas sensor, IR sensors, 5V relays, 16x2 I²C LCD display.\n• GitHub: https://github.com/Tharun4743/AGILE-INNOVATORS-smart-helmet-`
  },

  // 8. Project: Work Suite HRMS
  {
    id: 'project_worksuite',
    category: 'Work Suite HRMS',
    keywords: ['worksuite', 'work suite', 'hrms', 'payroll', 'attendance', 'odoo', 'nmit', 'leave'],
    phrases: ['work suite hrms', 'work suite', 'hrms project', 'odoo hackathon project'],
    priority: 2.4,
    answer: () =>
      `💼 Work Suite HRMS — Enterprise Workforce Operations Platform\n\n• Recognition: Qualified as National On-Site Finalist at the Odoo × NMIT Bangalore Hackathon 2026 🇮🇳.\n• Multi-Level RBAC: Strict privilege partitioning across Admin, HR Manager, and Staff roles.\n• Automated Payroll: Automated monthly wage calculation with configurable tax withholding tables and pay slip generation.\n• Attendance & Leave State Machine: Biometric punch-in emulation and multi-stage leave approvals.\n• Analytical Dashboard: Real-time workforce headcounts, payroll expense charts, and departmental KPI metrics.\n• Tech Stack: React, TypeScript, Node.js, Express, PostgreSQL, Tailwind CSS.\n• GitHub: https://github.com/Tharun4743/WorkSuite-HRMS\n• Live Demo: https://worksuite-hrms.onrender.com`
  },

  // 9. Project: Aura (Offline Multimodal RAG)
  {
    id: 'project_aura',
    category: 'Aura Offline RAG',
    keywords: ['aura', 'rag', 'offline rag', 'chromadb', 'ollama', 'electron', 'spring boot', 'llama-3', 'clip', 'vosk', 'whisper'],
    phrases: ['aura project', 'offline rag', 'aura rag', 'offline ai workstation'],
    priority: 2.4,
    answer: () =>
      `🛡️ Aura — 100% Offline Multimodal RAG Workstation\n\n• Sovereign Air-Gapped AI: Operates with 100% zero external network connectivity or cloud APIs for defense and enterprise data privacy.\n• Multimodal Ingestion: Local PDF text extraction (Apache PDFBox), local visual indexing using Hugging Face CLIP embeddings, and offline speech-to-text via Vosk and Whisper.\n• Local Vector Storage: ChromaDB vector database integrated with local Llama-3 running on Ollama for grounded chat retrieval.\n• Desktop Shell: Decoupled React frontend and Spring Boot Java backend compiled into an Electron desktop executable with bundled JRE.\n• Tech Stack: React, Spring Boot, Java, SQLite, ChromaDB, Ollama (Llama-3), CLIP, Electron.\n• GitHub: https://github.com/Tharun4743/SIH25231`
  },

  // 10. Project: CampusConnect
  {
    id: 'project_campusconnect',
    category: 'CampusConnect',
    keywords: ['campusconnect', 'campus connect', 'tpo', 'placement portal', 'recruitment portal'],
    phrases: ['campus connect', 'campusconnect project', 'neura global project'],
    priority: 2.4,
    answer: () =>
      `🎓 CampusConnect — Enterprise Placement Governance Ecosystem\n\n• Origin: Built during Tharun's internship at Neura Global for collegiate Training & Placement Offices (TPOs).\n• Real-World Impact: Deployed in production, rolled out to 500+ students, cutting administrative paperwork by 80% and removing interview scheduling clashes.\n• Live 5-Stage Funnel: Bi-directional WebSocket tracker displaying candidate progress (Applied → Shortlisted → Technical → HR → Offered).\n• Document Vault: In-browser Cloudinary viewer for student resumes and verified marksheets.\n• Hardened Security: Same-Origin CSRF Guard and customized COOP/COEP headers for Google OAuth 2.0 Single Sign-On.\n• Tech Stack: React 19, TypeScript, Node.js, Express, Socket.IO 4.8, Supabase PostgreSQL, Cloudinary CDN.\n• GitHub: https://github.com/Tharun4743/CampusConnect\n• Live Portal: https://campusconnect-yg4h.onrender.com/`
  },

  // 11. Technical Skills Overview
  {
    id: 'skills_overview',
    category: 'Technical Skills',
    keywords: ['skills', 'skill', 'stack', 'tech stack', 'technologies', 'technology', 'languages', 'tools', 'proficiency'],
    phrases: ['technical skills', 'main skills', 'what are your skills', 'tech stack', 'technologies you know', 'programming languages'],
    priority: 2.0,
    answer: () =>
      `Tharun's core technical proficiencies across engineering domains:\n\n💻 Programming Languages:\nTypeScript, JavaScript, Python, Java, C, C++, SQL\n\n🎨 Frontend Engineering:\nReact 19, Next.js 15, Tailwind CSS v4, Framer Motion, Vite, Monaco Editor, HTML5, CSS3\n\n⚙️ Backend & Architecture:\nNode.js (20+), Express.js 5, Prisma ORM, Java Spring Boot, RESTful APIs, NextAuth.js, Socket.io (WebSockets), WebRTC audio mesh\n\n🗄️ Databases & Storage:\nPostgreSQL 16, Supabase (with RLS), Neon Serverless, MongoDB, MySQL, SQLite, ChromaDB vector store, Cloudinary CDN\n\n☁️ DevOps & Tools:\nGit, GitHub, Render (IaC Blueprint), Netlify, Vercel, Docker, Arduino IDE, Salesforce Trailhead, Ollama\n\n🤖 AI / ML & IoT:\nGoogle Gemini 2.5 Flash, Ollama (Llama-3), CLIP vision embeddings, Whisper/Vosk STT, Arduino, RF 433MHz, MQ-3 gas sensor`
  },

  // 12. Backend Skills Specifically
  {
    id: 'skills_backend',
    category: 'Backend Technologies',
    keywords: ['backend', 'server', 'node', 'express', 'spring boot', 'prisma', 'rest', 'api', 'apis', 'websockets', 'socket.io', 'serverless'],
    phrases: ['backend tech', 'backend stack', 'what backend', 'backend technologies', 'server side'],
    priority: 2.2,
    answer: () =>
      `Tharun's backend engineering stack emphasizes speed, type safety, and fault-tolerant architecture:\n\n• Runtimes & Frameworks: Node.js (20+), Express.js 5, and Java Spring Boot.\n• Real-Time Systems: Socket.io 4.8 WebSockets (for live room cursors, chat, and interview funnels) and WebRTC peer signaling mesh.\n• ORM & Data Layer: Prisma ORM and raw SQL query tuning with PostgreSQL 16.\n• Architecture: Decoupled RESTful APIs, state machines (leave approvals & payroll), and in-memory RAM caching for sub-0.01ms directory lookups.\n• Resilient Services: 3-node Brevo HTTPS transactional email failover pools with automated quota telemetry, Cloudinary CDN asset pipelines, and Telegram Bot webhook daemons.`
  },

  // 13. Frontend Skills Specifically
  {
    id: 'skills_frontend',
    category: 'Frontend Technologies',
    keywords: ['frontend', 'react', 'next.js', 'nextjs', 'tailwind', 'ui', 'ux', 'css', 'framer', 'vite'],
    phrases: ['frontend tech', 'frontend stack', 'what frontend', 'frontend technologies', 'ui stack'],
    priority: 2.2,
    answer: () =>
      `Tharun builds ultra-responsive, accessible user interfaces following clean Task-Manager & Linear design aesthetics:\n\n• Core Frameworks: React 19, Next.js 15 (App Router & SSR), and TypeScript 5.8.\n• Styling & UI Systems: Tailwind CSS v4, custom CSS variables, and Framer Motion for high-frame-rate physics animations.\n• Complex Components: Monaco Editor kernel integration (custom theme tokens, live caret sync, language execution models), and Web Audio API synthesized phone ringtones.\n• Media Capture: WebRTC in-browser video/camera with client-side HTML5 Canvas optical GPS/timestamp watermarking.`
  },

  // 14. Databases Specifically
  {
    id: 'skills_databases',
    category: 'Databases & Storage',
    keywords: ['database', 'databases', 'sql', 'postgres', 'postgresql', 'supabase', 'neon', 'mongodb', 'sqlite', 'chromadb'],
    phrases: ['what database', 'database tech', 'database stack', 'which databases'],
    priority: 2.2,
    answer: () =>
      `Tharun's database and persistence expertise:\n\n• Relational Databases: PostgreSQL 16 (designed 35-table enterprise schemas with complex constraints and indices), Supabase (PostgreSQL with strict Row-Level Security policies), Neon Serverless PostgreSQL, MySQL, and SQLite.\n• NoSQL & Caching: MongoDB, pre-indexed in-memory RAM directory caches (<0.01ms response times).\n• Vector Databases: ChromaDB for local vector embeddings and semantic search in RAG pipelines.\n• Media & Asset Storage: Cloudinary CDN for secure image proof compression and encrypted document storage.`
  },

  // 15. Internships & Work Experience
  {
    id: 'internships',
    category: 'Internships & Experience',
    keywords: ['intern', 'interns', 'internship', 'internships', 'experience', 'work experience', 'company', 'companies', 'job', 'neura', 'pega', 'infosys'],
    phrases: ['where do you intern', 'work experience', 'internship details', 'neura global', 'infosys springboard', 'pega internship'],
    priority: 2.1,
    answer: () =>
      `Tharun has completed three specialized engineering internships:\n\n1. 🏢 Neura Global (Startup) — Fullstack Development Intern (Jun 2026 – Jul 2026):\n• Architected CampusConnect, a campus placement portal for the college's TPO cell using React, Node.js, TypeScript, Supabase, and Socket.IO.\n• Integrated Cloudinary document vault and rolled out platform to 500+ students, cutting administrative paperwork by 80% and removing interview scheduling collisions.\n\n2. 🏛️ Pegasystems Worldwide India × SmartBridge — Pega System Developer Intern (Aug 2026 – Sep 2026):\n• Completed the rigorous 60-Hour National Internship Program in Pega enterprise architecture.\n• Developed scalable case lifecycle automation workflows and enterprise data models (Issued Certificate ID: PEGA-SW-NIP-2026-578).\n\n3. 💻 Infosys Springboard — Software Development Intern (Nov 2025 – Jan 2026):\n• Completed the Infosys Springboard 6.0 program under industry mentors.\n• Architected StarWall, an employee recognition dashboard, gaining professional version control discipline and collaborative Agile development habits.`
  },

  // 16. Education & Academics
  {
    id: 'education',
    category: 'Education & Academics',
    keywords: ['education', 'college', 'degree', 'study', 'studies', 'cgpa', 'gpa', 'marks', 'school', '12th', 'batch', 'vsb'],
    phrases: ['college cgpa', 'what is your cgpa', 'where do you study', 'which college', 'education background', 'expected graduation'],
    priority: 2.0,
    answer: () =>
      `Tharunkumar K's academic record:\n\n🎓 Undergraduate Degree:\n• Institution: V.S.B. Engineering College, Karur, Tamil Nadu\n• Degree: Bachelor of Technology (B.Tech) in Information Technology\n• Academic Batch: 2024 – 2028 (Expected Graduation: May 2028)\n• Current CGPA: 8.5 / 10\n\n🏫 Higher Secondary Education (12th Grade):\n• Institution: Sindhu Matriculation Higher Secondary School, Tamil Nadu\n• Period: 2023 – 2024\n• Score: 84.66%\n\n📍 Hometown: Dharapuram, Tamil Nadu, India.`
  },

  // 17. Contact & Socials
  {
    id: 'contact',
    category: 'Contact & Socials',
    keywords: ['contact', 'email', 'phone', 'reach', 'touch', 'hire', 'message', 'call', 'mail', 'connect', 'social', 'socials'],
    phrases: ['how to contact', 'get in touch', 'email address', 'phone number', 'contact info', 'how can i reach'],
    priority: 2.1,
    answer: () =>
      `You can reach Tharunkumar K directly through:\n\n• 📧 Email: tharunkumark42007@gmail.com\n• 📱 Phone: +91 87609 64830\n• 💼 LinkedIn: https://www.linkedin.com/in/tharunkumark4743/\n• 🐙 GitHub: https://github.com/Tharun4743\n• 🧩 LeetCode: https://leetcode.com/u/Tharunkumar__K/\n• 🌐 GeeksforGeeks: https://www.geeksforgeeks.org/profile/tharunkumark4743\n• 📍 Location: Dharapuram, Tamil Nadu, India`
  },

  // 18. Resume / CV
  {
    id: 'resume',
    category: 'Resume / CV',
    keywords: ['resume', 'cv', 'curriculum', 'vitae', 'biodata', 'document'],
    phrases: ['download resume', 'view resume', 'show resume', 'where is your resume', 'link to resume'],
    priority: 2.3,
    answer: () =>
      `📄 Tharunkumar K's Verified Resume:\n\nYou can view and download his complete technical resume via Google Drive:\n🔗 https://drive.google.com/drive/folders/1zdLQ8EoEC8X73fFAJjSJr-Ros_xckIyW\n\nIt contains detailed architecture breakdowns of his production engineering platforms, verified internship certificates, hackathon honors, and technical competencies.`
  },

  // 19. GitHub Analytics & Open Source
  {
    id: 'github_stats',
    category: 'GitHub Profile',
    keywords: ['github', 'commits', 'repos', 'repositories', 'git', 'open source', 'contributions', 'rank'],
    phrases: ['github stats', 'how many commits', 'best github profile', 'github account', 'github profile'],
    priority: 2.0,
    answer: (commits, repos) =>
      `Tharun holds the #1 Developer GitHub Profile at V.S.B. Engineering College:\n\n• Commits: ${commits}+ verified Git contributions.\n• Repositories: ${repos}+ active codebases across fullstack, AI, and embedded IoT.\n• Published Author: Published creator of the GitHub Profile Visualizer action workflow on the official GitHub Marketplace.\n• GitHub Profile: https://github.com/Tharun4743`
  },

  // 20. LeetCode & Competitive Coding
  {
    id: 'coding_profiles',
    category: 'Coding Profiles',
    keywords: ['leetcode', 'geeksforgeeks', 'gfg', 'competitive', 'dsa', 'algorithms', 'problem solving', 'problems'],
    phrases: ['leetcode profile', 'geeksforgeeks profile', 'competitive coding', 'dsa practice'],
    priority: 2.1,
    answer: () =>
      `Tharun is an active competitive programmer and algorithmic problem solver:\n\n• LeetCode: https://leetcode.com/u/Tharunkumar__K/\n• GeeksforGeeks: https://www.geeksforgeeks.org/profile/tharunkumark4743\n• He also engineered an automated LeetCode GraphQL daemon inside VSBEC IT Vault that tracks daily coding velocity and problem streak consistency across student cohorts.`
  },

  // 21. Leadership & Campus Roles
  {
    id: 'leadership',
    category: 'Leadership & Roles',
    keywords: ['leadership', 'coordinator', 'lead', 'role', 'roles', 'responsibilities', 'mantri', 'ambassador', 'symposium'],
    phrases: ['student coordinator', 'campus roles', 'leadership roles', 'geeksforgeeks campus mantri'],
    priority: 2.0,
    answer: () =>
      `Tharun actively leads departmental and campus technical initiatives:\n\n• Department Student Coordinator (2024 – Present): Appointed Student Coordinator for the IT Department at VSB Engineering College; directs departmental task digitization, peer mentoring, and technical symposiums.\n• SIH 2026 IT Department Coordinator: Mentoring 15+ student teams, evaluating problem statements, and overseeing institutional SIH portal submissions.\n• GeeksforGeeks Campus Mantri (Jan – Jul 2026): Conducted technical bootcamps, coding workshops, and competitive programming sessions for 200+ students.\n• Fun Quest Event Coordinator: Spearheaded event planning and operations for 150+ symposium participants, achieving a 9.8 / 10 participant rating.`
  },

  // 22. Certifications & Badges
  {
    id: 'certifications',
    category: 'Certifications',
    keywords: ['certification', 'certifications', 'certificate', 'certificates', 'badge', 'badges', 'licenses', 'google cloud', 'cisco', 'salesforce', 'tata', 'tcs'],
    phrases: ['what certifications', 'show certificates', 'google cloud badges', 'cisco badge'],
    priority: 2.0,
    answer: () =>
      `Tharun holds recognized industry certifications and technical badges:\n\n• Pegasystems Worldwide India × SmartBridge: Pega 60-Hour Certification (ID: PEGA-SW-NIP-2026-578)\n• CODE THUGS 2K26: Gold Certificate (National 1st Place Winner)\n• NEURAL MINDS HACKATHON: 3rd Prize Certificate (AIML Dept, VSBEC)\n• Infosys Springboard 6.0: Software Development Internship Completion Certificate\n• Google Cloud Badges:\n  - Responsible AI: Applying AI Principles with Google Cloud\n  - Prompt Design in Agent Platform\n  - Introduction to Large Language Models\n  - Prompt Design in Vertex AI Skill Badge\n• Cisco Networking Academy: Introduction to IoT\n• Trailhead by Salesforce: Salesforce Administrator Explorer\n• Forage: Tata GenAI Powered Data Analytics Job Simulation\n• TCS iON: Career Edge — Young Professional\n• FutureSkills Prime NASSCOM: Introduction to IoT and Digital Transformation`
  }
];

export const AIChatbot: React.FC<AIChatbotProps> = ({ gitStats = { commits: GITHUB_STATS.commits, repos: GITHUB_STATS.repos } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const safeCommits = (gitStats?.commits ?? GITHUB_STATS.commits).toLocaleString();
  const safeRepos = gitStats?.repos ?? GITHUB_STATS.repos;

  const INITIAL_MESSAGE = {
    sender: 'bot' as const,
    text: "Hello! I am Tharun's AI Portfolio Assistant. Ask me anything about his projects, skills, internships, hackathon victories, or contact information!"
  };

  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    INITIAL_MESSAGE
  ]);

  const CURATED_PROMPTS = [
    'Can you detail your top projects?',
    'What are your main technical skills?',
    'Tell me about GOAT Code Editor',
    'What is VSBEC IT Vault?',
    'Tell me about Smart Helmet',
    'Where have you interned?',
    'What hackathons did you win?',
    'What is your college CGPA?',
    'What backend tech do you use?',
    'How can I get in touch?'
  ];

  const [activePrompts, setActivePrompts] = useState<string[]>(CURATED_PROMPTS.slice(0, 4));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  const findBestAnswer = (queryText: string): string => {
    const cleanQ = queryText.toLowerCase().trim();
    let bestScore = 0;
    let selectedPair: QAPair | null = null;

    for (const pair of QA_DATABASE) {
      let score = 0;
      const weight = pair.priority || 1.0;

      // Exact phrase match gives huge priority
      if (pair.phrases) {
        for (const phrase of pair.phrases) {
          if (cleanQ.includes(phrase.toLowerCase())) {
            score += 35 * weight;
          }
        }
      }

      // Keyword token matching
      for (const kw of pair.keywords) {
        if (cleanQ.includes(kw.toLowerCase())) {
          // Longer keyword matches count for more (e.g. "smart helmet" vs "helmet")
          score += kw.length * 2 * weight;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        selectedPair = pair;
      }
    }

    if (selectedPair && bestScore >= 4) {
      return selectedPair.answer(safeCommits, safeRepos);
    }

    return `I'm not fully sure about that detail yet! You can ask me about:\n\n• Tharun's top projects (GOAT Code Editor, VSBEC IT Vault, FINDORA AI, Smart Helmet)\n• His technical skills & backend/frontend stack\n• Hackathons & awards (Code Thugs 1st Place 🥇, Neural Minds 🥉, SIH)\n• Internships at Neura Global, Pega & Infosys\n• Education, CGPA & college background\n• Contact details, resume & GitHub profile`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend ?? inputValue).trim();
    if (!query || isTyping) return;

    setInputValue('');
    setMessages(prev => [...prev, { sender: 'user', text: query }]);
    setIsTyping(true);

    const response = findBestAnswer(query);

    // Rotate quick prompts
    const remaining = CURATED_PROMPTS.filter(p => p !== query && !activePrompts.slice(0, 3).includes(p));
    if (remaining.length > 0) {
      const nextPrompt = remaining[Math.floor(Math.random() * remaining.length)];
      setActivePrompts(prev => {
        const filtered = prev.filter(p => p !== query);
        return [...filtered.slice(0, 3), nextPrompt];
      });
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
    }, 650);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setActivePrompts(CURATED_PROMPTS.slice(0, 4));
    setInputValue('');
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[90] p-4 bg-theme hover:scale-105 active:scale-95 text-white rounded-full shadow-2xl transition-all flex items-center justify-center border-4 border-white"
        style={{ boxShadow: '0 10px 30px -5px var(--theme-glow)' }}
        aria-label="Toggle AI Assistant"
      >
        <MessageSquare size={26} className={isOpen ? 'rotate-90 transition-transform' : ''} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.94 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[560px] max-h-[85vh] bg-white rounded-3xl border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col z-[90]"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-theme text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Tharunkumar K"
                    className="w-10 h-10 rounded-2xl object-cover object-top border-2 border-white/20 shadow-sm"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm leading-tight">Tharun's AI Assistant</h3>
                    <Sparkles size={13} className="text-amber-300" />
                  </div>
                  <p className="text-[11px] text-white/80 leading-tight">Ask anything &bull; Live & Accurate</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-2 hover:bg-white/15 rounded-xl transition-colors text-white/90 hover:text-white"
                  aria-label="Reset conversation"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/15 rounded-xl transition-colors text-white/90 hover:text-white"
                  aria-label="Close Assistant"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-slate-50/50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start gap-2.5 items-end'}`}
                >
                  {msg.sender === 'bot' && (
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt="Tharunkumar K"
                      className="w-6 h-6 rounded-full object-cover object-top shadow-sm flex-shrink-0 mb-1 border border-slate-200"
                    />
                  )}
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-theme text-white rounded-br-sm font-medium'
                        : 'bg-white border border-slate-200/80 text-slate-700 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start gap-2.5 items-end">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Assistant"
                    className="w-6 h-6 rounded-full object-cover object-top shadow-sm flex-shrink-0 mb-1 border border-slate-200"
                  />
                  <div className="px-4 py-3 bg-white border border-slate-200/80 rounded-2xl rounded-bl-sm text-slate-400 text-sm flex gap-1.5 items-center shadow-sm">
                    <span className="w-1.5 h-1.5 bg-theme rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-theme rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-theme rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Pills */}
            <div className="px-3 py-2 bg-slate-100/70 border-t border-slate-200/60 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-1.5">
              <AnimatePresence mode="popLayout">
                {activePrompts.map(prompt => (
                  <motion.button
                    key={prompt}
                    layout
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    onClick={() => handleSendMessage(prompt)}
                    className="flex-shrink-0 px-2.5 py-1 bg-white hover:bg-slate-50 text-[11px] font-medium text-slate-600 border border-slate-200 hover:border-theme hover:text-theme rounded-full shadow-xs transition-colors"
                  >
                    {prompt}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Interactive User Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about projects, skills, experience..."
                className="flex-1 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200 focus:border-theme focus:ring-1 focus:ring-theme rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 bg-theme text-white rounded-xl hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center flex-shrink-0 shadow-sm"
                aria-label="Send question"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

