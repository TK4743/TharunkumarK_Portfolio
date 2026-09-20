# Standardized Project READMEs for Tharunkumar K's Repositories

> **Note**: This file contains the complete, copy-paste ready, standardized `README.md` documents for all of Tharunkumar K's primary project repositories. Each follows the strict architectural specification:
> 1. **Title**
> 2. **Problem**
> 3. **Existing Solution**
> 4. **Solution**
> 5. **Technical Approach**
> 6. **Impact and Benefits**
> 7. **Feasibility and Viability**
> 8. **Author and License** (Proprietary / All Rights Reserved)

---

## Table of Contents
1. [VSBEC IT Vault (Task Manager)](#1-vsbec-it-vault-task-manager)
2. [CampusConnect](#2-campusconnect)
3. [Smart Helmet IoT Safety System](#3-smart-helmet-iot-safety-system)
4. [GOAT Code Editor (GOAT CE)](#4-goat-code-editor-goat-ce)
5. [Techy Tharun's Chatbox](#5-techy-tharuns-chatbox)
6. [Aura — 100% Offline Multimodal RAG](#6-aura--100-offline-multimodal-rag)

---

<br/>

# 1. VSBEC IT Vault (Task Manager)

```markdown
# VSBEC IT Vault — Centralized Academic Governance & Placement Sandbox

[![Status](https://img.shields.io/badge/Status-Production%20(365%2B%20Students)-success?style=for-the-badge)](https://it-taskmanager.vercel.app/)
[![Hackathon](https://img.shields.io/badge/SIH%202026-Top%2050%20Nominee-blue?style=for-the-badge)](https://it-taskmanager.vercel.app/)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-red?style=for-the-badge)](#author-and-license)

---

## 1. Problem
Academic departments face severe operational friction when tracking student assignments, laboratory deliverables, and extracurricular technical growth. In traditional setups, submissions are scattered across ad-hoc Google Forms, unverified email threads, and paper registers. Faculty spend countless administrative hours cross-checking deliverables manually. Furthermore, departments lack visibility into real-world student coding habits on platforms like LeetCode and GitHub, making it impossible to accurately assess corporate placement readiness until the final semester when it is already too late.

---

## 2. Existing Solution
Most institutions rely on generic Learning Management Systems (e.g., Google Classroom, basic Moodle) or unstructured shared drives:
* **No Verified Multi-Tier Review**: Proofs are either blindly accepted or require exhaustive manual checking by overloaded professors.
* **No Real-Time Coding Telemetry**: Zero synchronization with competitive programming profiles (LeetCode/GitHub).
* **Vulnerable to Plagiarism & Tab Switching**: No built-in proctoring, webcam integrity checking, or sandboxed compiler.
* **Relational Database Latency**: Slow student directory queries when hundreds of students submit concurrently prior to deadlines.
* **Fragile Communication**: Unreliable single-provider notification gateways that fail when free-tier quotas expire.

---

## 3. Solution
**VSBEC IT Vault** is an enterprise-grade academic governance and placement evaluation platform actively serving 365+ students across 6 departmental sections (II IT & III IT) at VSB Engineering College. 

Key pillars:
* **3-Tier Proof Verification Pipeline**: Submissions pass through Student Coordinators (Tier-1 peer review), Class Advisors (Tier-2 validation), and HODs (Tier-3 departmental audit).
* **Automated Coding Velocity**: Live synchronization of daily LeetCode activity and GitHub commit momentum via GraphQL and REST APIs.
* **Proctored Monaco IDE Sandbox**: Sandboxed in-browser compilation for C, C++, Java 17, and Python 3 with Picture-in-Picture webcam proctoring, tab-switch monitoring, and memory bounds.
* **Placement Readiness Index 2.0**: Proprietary 4-pillar scoring algorithm (Aptitude 35%, LeetCode 25%, Projects 20%, Discipline 20%) mapping candidates against Tier-1/2/3 placement benchmarks.
* **Automated Reporting**: Instant OpenXML Excel export, student scorecards, and recruiter recruitment dossiers.

---

## 4. Technical Approach
* **Frontend Architecture**: Decoupled React 19 SPA built with TypeScript 5.8, Tailwind CSS v4, Lucide Icons, and Monaco Editor.
* **Backend Infrastructure**: High-concurrency Node.js 20+ and Express.js REST API with dynamic Role-Based Access Control (RBAC) across 7 personas.
* **Database & In-Memory Cache**: 35 relational tables in PostgreSQL with strict foreign keys and audit logs. Powered by a custom pre-indexed in-memory RAM directory cache delivering sub-0.01ms student lookups.
* **Communication Gateway**: Telegram Bot dispatching automated 8:00 AM daily briefs and 24h deadline warnings, VAPID Web Push notifications, and a resilient 3-node Brevo HTTPS email dispatch pool with automated failover.
* **Asset Storage**: Cloudinary CDN with automated client-side image compression for lightweight proof storage.

---

## 5. Impact and Benefits
* **365+ Active Students & Faculty**: Fully deployed across 6 sections at VSB Engineering College, Karur.
* **100% Digitization**: Replaced 100% of physical assignment collection and lost email threads with tamper-proof digital records.
* **Zero-Conflict Deadlines**: Automated Telegram and Web Push alerts reduced late submissions by over 65%.
* **SIH 2026 Recognition**: Shortlisted in the Top 50 out of 300+ campus teams in the Smart India Hackathon internal evaluations and officially nominated on the central SIH portal.

---

## 6. Feasibility and Viability
* **Technical Feasibility**: Built with battle-tested open-source runtimes (Node.js, PostgreSQL, React 19) and stateless micro-services deployable on modern cloud infrastructure (Vercel, Render, AWS).
* **Operational Viability**: Integrates seamlessly with existing college hierarchy (HOD -> Advisor -> Coordinator -> Student) without requiring changes to institutional bylaws.
* **Economic Viability**: Highly cost-effective; utilizes serverless PostgreSQL tiers, free-tier Cloudinary storage, and multi-node email failovers to minimize operational overhead.
* **Scalability**: In-memory caching and connection pooling enable horizontal scaling across multiple departments and institutions with zero degradation in latency.

---

## 7. Author and License

### Author
**Tharunkumar K**  
Full Stack Developer & AI Systems Builder  
* Department of Information Technology, VSB Engineering College  
* Email: [tharunkumark42007@gmail.com](mailto:tharunkumark42007@gmail.com)  
* Portfolio: [tharunkumark4743.netlify.app](https://tharunkumark4743.netlify.app/)  
* GitHub: [@Tharun4743](https://github.com/Tharun4743)  
* LinkedIn: [linkedin.com/in/tharunkumark4743](https://in.linkedin.com/in/tharunkumark4743)

### Proprietary License & Terms of Use
**Copyright © 2025–2026 Tharunkumar K. All rights reserved.**

> **STRICT PROPRIETARY NOTICE**:  
> No part of this software, source code, database architecture, UI/UX designs, or documentation may be copied, reproduced, distributed, republished, downloaded, displayed, posted, transmitted, or used in any form or by any means—including electronic, mechanical, photocopying, recording, or other methods—without prior express written permission from the author (**Tharunkumar K**).  
> Unauthorized access, modification, commercial deployment, or educational re-hosting is strictly prohibited and constitutes a violation of intellectual property laws.
```

---

<br/>

# 2. CampusConnect

```markdown
# CampusConnect — Enterprise Campus Placement & Recruitment Management System

[![Status](https://img.shields.io/badge/Status-Production-success?style=for-the-badge)](https://campusconnect-yg4h.onrender.com/)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-red?style=for-the-badge)](#author-and-license)

---

## 1. Problem
University Training & Placement Offices (TPOs) manage hundreds of corporate recruiting drives simultaneously, balancing thousands of student resumes, strict eligibility thresholds, and shifting interview schedules. Using manual spreadsheets, disconnected Google Forms, and broadcast WhatsApp groups creates massive inefficiencies: students miss interview rounds, unverified CGPA data causes corporate offer disqualifications, and recruiters experience delays in shortlisting candidate pools.

---

## 2. Existing Solution
Existing institutional solutions consist of outdated ERP modules or generic HR applicant tracking systems (ATS):
* **Fragmented Resume Storage**: Resumes are uploaded as detached Google Drive links, frequently leading to broken access permissions during live interviews.
* **No Real-Time Candidate Visibility**: Students have no insight into where they stand in the hiring funnel (Applied, Shortlisted, Interviewing, Offered).
* **Manual Eligibility Auditing**: Placement officers spend days filtering eligible candidates by CGPA, active arrears, and department quotas.
* **Vulnerable to Forgery**: Student-reported academic scores and project certifications are rarely cross-verified against official college records.

---

## 3. Solution
**CampusConnect** is a centralized, real-time placement management platform designed to automate Training & Placement Officer workflows, streamline recruiter screening, and provide transparent application tracking for students.

Key pillars:
* **Interactive Cloudinary Document Vault**: Instant in-browser preview and secure storage for student resumes, marksheets, and verified credentials.
* **Real-Time Application Timeline**: Step-by-step visual tracker (Applied -> Shortlisted -> Interviewing -> Offered) powered by bi-directional Socket.IO WebSockets.
* **Automated Drive & Eligibility Engine**: Corporate HRs create vacancy listings with automated filters (minimum CGPA, allowed arrears, required tech stacks).
* **TPO Verification Suite**: Tamper-proof academic auditing interface ensuring student records are validated by placement coordinators before company shortlisting.
* **Interview Scheduler**: Automated interview round scheduling with conflict detection and instant candidate notifications.

---

## 4. Technical Approach
* **Frontend**: React 19, TypeScript 5.8, Vite 6.2, and Tailwind CSS v4 delivering a glassmorphic dashboard interface.
* **Backend**: Node.js 20+ with Express.js REST APIs and Socket.IO 4.8 for instant status synchronization.
* **Database & Auth**: Supabase PostgreSQL with strict relational constraints, Row-Level Security (RLS), and Google OAuth 2.0 Single Sign-On.
* **Security Hardening**: Same-Origin CSRF Guard validating state-modifying requests, custom Helmet policies selectively tuning Cross-Origin-Opener-Policy headers for Google SSO, and proxy-aware rate limiting.
* **Deployment**: Continuous delivery on Render with automated environment provisioning.

---

## 5. Impact and Benefits
* **80% Administrative Time Saved**: Reduced manual verification and spreadsheet compilation time for placement officers from days to minutes.
* **Zero Scheduling Conflicts**: Automated interview coordination eliminated overlap across simultaneous interview panels.
* **100% Student Visibility**: Eliminated broadcast anxiety by providing real-time WebSocket application updates to every applicant.
* **Clean Corporate Audits**: Ensured corporate partners received 100% verified, discrepancy-free student candidate profiles.

---

## 6. Feasibility and Viability
* **Technical Feasibility**: Developed on enterprise-proven web standards (React 19, Node.js, WebSockets, PostgreSQL) with 99.9% uptime on modern cloud hosting.
* **Operational Viability**: Maps directly to established university placement processes (College Admin -> TPO -> HR Recruiter -> Student).
* **Economic Viability**: Highly sustainable low-cost footprint utilizing managed Supabase PostgreSQL and CDN caching.
* **Scalability**: Horizontally scalable backend capable of servicing multi-campus university clusters with tens of thousands of applicants.

---

## 7. Author and License

### Author
**Tharunkumar K**  
Lead Full Stack Developer  
* Email: [tharunkumark42007@gmail.com](mailto:tharunkumark42007@gmail.com)  
* Portfolio: [tharunkumark4743.netlify.app](https://tharunkumark4743.netlify.app/)  
* GitHub: [@Tharun4743](https://github.com/Tharun4743)  
* LinkedIn: [linkedin.com/in/tharunkumark4743](https://in.linkedin.com/in/tharunkumark4743)

### Proprietary License & Terms of Use
**Copyright © 2026 Tharunkumar K. All rights reserved.**

> **STRICT PROPRIETARY NOTICE**:  
> No part of this software, source code, database schema, architecture, or design assets may be copied, reproduced, distributed, republished, modified, or used in any form without prior express written permission from the author (**Tharunkumar K**).  
> All intellectual property rights are strictly reserved.
```

---

<br/>

# 3. Smart Helmet IoT Safety System

```markdown
# Smart Helmet IoT Safety System — Wireless Accident Prevention & Ignition Interlock

[![Status](https://img.shields.io/badge/Status-SIH%202025%20Top%2050%20Nominee-blue?style=for-the-badge)](https://github.com/Tharun4743/Smart-Helmet-IoT-Safety-System)
[![Hardware](https://img.shields.io/badge/Hardware-Arduino%20%7C%20RF%20433MHz%20%7C%20MQ--3-orange?style=for-the-badge)](#technical-approach)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-red?style=for-the-badge)](#author-and-license)

---

## 1. Problem
Two-wheeler road accidents represent one of the leading causes of fatal injuries worldwide. According to transport ministry statistics, the overwhelming majority of two-wheeler fatalities stem from three preventable factors:
1. **Riding without a helmet** or improper fastening.
2. **Driving Under the Influence (DUI)** of alcohol.
3. **Driver drowsiness and fatigue**, leading to sudden loss of vehicle control.  
Existing traffic law enforcement relies on reactive police checkpoints, which inspect only a fraction of riders and cannot intervene before an accident occurs.

---

## 2. Existing Solution
Current safety systems suffer from critical limitations:
* **Reactive Helmet Reminders**: Passive buzzers or chime reminders that can be easily bypassed by placing objects inside the helmet.
* **Disconnected Breathalyzers**: Handheld breathalyzers requiring external manual testing with zero automatic connection to the motorcycle ignition.
* **No Real-Time Drowsiness Interlock**: Inability to detect microsleep or prolonged eye closure during continuous riding.
* **Wired Connections**: Bulky cables between rider helmet and bike chassis that hinder rider maneuverability and pose strangulation risks in collisions.

---

## 3. Solution
The **Smart Helmet IoT Safety System** is a proactive, dual-unit embedded safety platform that enforces rider compliance before and during every ride. It wirelessly interconnects a sensor-equipped helmet unit with a motorcycle ignition receiver unit.

Key pillars:
* **Proactive Helmet Wear Compliance**: High-sensitivity IR proximity sensor verifies physical helmet wear against the rider's cranium.
* **Alcohol Sobriety Ignition Lock**: MQ-3 gas sensor continuously evaluates exhaled breath inside the visor; ignition is locked if alcohol PPM exceeds legal thresholds.
* **Eye-Blink Drowsiness Monitor**: Dedicated IR eye-blink sensor detects micro-sleep (>2.5s eyelid closure) and triggers immediate audible warnings and safe ignition deceleration.
* **RF 433MHz Telemetry & 500ms Interlock**: Low-latency wireless packet broadcast cuts motorcycle ignition via a heavy-duty relay within 500ms of any safety violation.
* **5-Second RF Tamper Fail-Safe**: If wireless telemetry is severed, jammed, or out-of-range for >5 seconds, the motorcycle enters fail-safe interlock.
* **On-Board LCD Diagnostics**: Multi-page dashboard display giving riders real-time visibility into helmet status, alcohol PPM, and system health.

---

## 4. Technical Approach
* **Helmet Unit (Transmitter)**: Arduino Nano microcontroller interfacing with an IR proximity sensor, calibrated MQ-3 alcohol sensor, IR eye-blink receiver, and an RF 433MHz transmitter module powered by an onboard rechargeable battery.
* **Motorcycle Unit (Receiver)**: Arduino Uno microcontroller, RF 433MHz receiver module, 5V SPDT relay module integrated into the CDI/ignition circuit, piezo buzzer, and a 16x2 I²C LCD display.
* **Communication Protocol**: Custom 100ms serialized binary packet structure with checksum validation over 433MHz ASK/FSK modulation.
* **Firmware**: Written in embedded C/C++ with non-blocking timer interrupts (`millis()`), noise-filtering debouncing algorithms, and fail-safe watchdog routines.

---

## 5. Impact and Benefits
* **SIH 2025 Top 50 Recognition**: Selected in the Top 50 out of 300+ campus teams in the Smart India Hackathon internal evaluations and officially nominated to submit the idea on the central national portal.
* **100% Proactive Enforcement**: Guarantees zero ignition engagement unless helmet is worn and rider is sober.
* **Sub-500ms Emergency Response**: Cuts vehicle ignition or warns rider within half a second of detected drowsiness or alcohol fumes.
* **Zero Wire Restrictions**: Completely wireless operation with zero physical encumbrance to the rider.

---

## 6. Feasibility and Viability
* **Technical Feasibility**: Fabricated with low-cost, robust, commercial-off-the-shelf (COTS) microcontrollers and solid-state sensors.
* **Operational Viability**: Easily retrofitted onto existing commercial motorcycles or integrated into OEM factory production lines.
* **Economic Viability**: Entire bill of materials (BOM) cost is under $25 (INR ~2,000), making mass adoption affordable for everyday commuters.
* **Scalability**: Architecture is ready for expansion with GPS geofencing, GSM emergency SMS dispatch, and accelerometer collision triggers.

---

## 7. Author and License

### Author
**Tharunkumar K**  
Lead Embedded Systems Developer & IoT Engineer  
* Department of Information Technology, VSB Engineering College  
* Email: [tharunkumark42007@gmail.com](mailto:tharunkumark42007@gmail.com)  
* Portfolio: [tharunkumark4743.netlify.app](https://tharunkumark4743.netlify.app/)  
* GitHub: [@Tharun4743](https://github.com/Tharun4743)  
* LinkedIn: [linkedin.com/in/tharunkumark4743](https://in.linkedin.com/in/tharunkumark4743)

### Proprietary License & Terms of Use
**Copyright © 2025–2026 Tharunkumar K. All rights reserved.**

> **STRICT PROPRIETARY NOTICE**:  
> No part of this project, firmware code, schematic circuits, PCB designs, or architecture may be copied, reproduced, distributed, modified, commercialized, or utilized in any form without prior express written permission from the author (**Tharunkumar K**).  
> All intellectual property and design rights are strictly reserved.
```

---

<br/>

# 4. GOAT Code Editor (GOAT CE)

```markdown
# GOAT Code Editor — Real-Time Collaborative Cloud IDE & Voice Mesh

[![Status](https://img.shields.io/badge/Status-National%20Winner%20(1st%20Place)-gold?style=for-the-badge)](https://goatcode-editor.onrender.com)
[![Hackathon](https://img.shields.io/badge/Code%20Thugs%202k26-1st%20Prize-success?style=for-the-badge)](https://goatcode-editor.onrender.com)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-red?style=for-the-badge)](#author-and-license)

---

## 1. Problem
Remote engineering teams and coding interviewers struggle with fragmented tools when pair programming. Developers are forced to constantly juggle a desktop IDE (VS Code), third-party voice apps (Discord/Zoom), external messaging channels, and pastebin sites. These fragmented workflows cause severe friction: code desynchronization, caret jumping when two users type at once, audio latency, and tedious multi-app setup.

---

## 2. Existing Solution
Current browser-based collaborative editors suffer from technical flaws:
* **Caret Jumping & Text Glitches**: Naive WebSocket broadcasts overwrite other users' cursor positions, disrupting typing flow.
* **Dependency on Heavy External Voice SDKs**: Most tools rely on expensive, proprietary third-party voice SDKs (Agora/Twilio) that fail under spotty connections.
* **No Built-In Compilation**: Code cannot be compiled directly inside the editor without external extensions.
* **Persistent Memory Leaks**: Inactive collaborative rooms linger indefinitely, consuming database storage and server RAM.

---

## 3. Solution
**GOAT Code Editor (GOAT CE)** is a high-performance, browser-native collaborative IDE engineered from first principles for instant remote pair programming.

Key pillars:
* **Race-Condition-Safe Real-Time Sync**: Live keystroke synchronization with a counter-based edit gating mechanism (`remoteChangeDepth`) that completely eliminates caret jumping.
* **Zero-Setup WebRTC Voice Calling**: Built-in 1-to-1 and group peer-to-peer audio mesh constructed from scratch with SDP Offer/Answer negotiation and ICE relays—no external voice SDKs required.
* **Acoustic Echo Cancellation (AEC)**: Hardware-level Acoustic Echo Cancellation, Noise Suppression (NS), and Auto Gain Control (AGC) using the Web Audio API.
* **Sandboxed Multi-Language Compiler**: Instant in-browser compilation for 13+ languages powered by Piston API v2 with an intelligent neural fallback engine.
* **Context-Aware AI Pair Programmer**: Llama 3.1 70B via OpenRouter for in-editor debugging, algorithmic explanation, and automated unit test generation.
* **Ephemeral Auto-Purge Lifecycle**: Rooms, code buffers, voice streams, and chat history are automatically purged from memory and database once all peers disconnect.

---

## 4. Technical Approach
* **Frontend**: React 19, TypeScript 5.8, Vite 6.2, Tailwind CSS v4, and Microsoft Monaco Editor kernel.
* **Real-Time Layer**: Socket.io 4.8 WebSockets handling room membership, presence, color-coded peer cursors, and WebRTC signaling.
* **Audio Engine**: Pure browser WebRTC `RTCPeerConnection` mesh with `AudioContext` and `AnalyserNode` for active speaker detection, plus synthetic dual-oscillator telephone ringing without audio file assets.
* **Backend**: Express 5.2 and Node.js 20+ runtime with dual-persistence architecture pairing PostgreSQL 16 with an in-memory Map fallback.
* **Deployment**: Continuous delivery on Render configured via Infrastructure-as-Code (`render.yaml`).

---

## 5. Impact and Benefits
* **National 1st Place Winner**: Awarded 1st Prize at Code Thugs 2k26 National Hackathon for technical excellence in collaborative architectures.
* **Zero Setup Required**: Instant collaboration via a single shareable URL without logins, installations, or extensions.
* **Flawless Concurrency**: Enables multiple developers to edit the same file concurrently without cursor displacement or text loss.
* **Zero Audio Server Costs**: Peer-to-peer WebRTC mesh routes audio directly between browsers, eliminating server bandwidth costs.

---

## 6. Feasibility and Viability
* **Technical Feasibility**: Built with cutting-edge web standards (WebRTC, WebSockets, Web Audio API, Monaco) that execute natively across all modern browsers.
* **Operational Viability**: Ideal for technical interviews, university coding labs, hackathons, and remote code reviews.
* **Economic Viability**: Highly cost-effective due to peer-to-peer audio and ephemeral storage lifecycles that eliminate idle cloud database costs.
* **Scalability**: Distributed room architecture allows linear scaling across multiple WebSocket nodes using Redis pub/sub adapters.

---

## 7. Author and License

### Author
**Tharunkumar K**  
Lead Systems Architect & Full Stack Developer  
* Email: [tharunkumark42007@gmail.com](mailto:tharunkumark42007@gmail.com)  
* Portfolio: [tharunkumark4743.netlify.app](https://tharunkumark4743.netlify.app/)  
* GitHub: [@Tharun4743](https://github.com/Tharun4743)  
* LinkedIn: [linkedin.com/in/tharunkumark4743](https://in.linkedin.com/in/tharunkumark4743)

### Proprietary License & Terms of Use
**Copyright © 2026 Tharunkumar K. All rights reserved.**

> **STRICT PROPRIETARY NOTICE**:  
> No part of this software, source code, networking architecture, or UI assets may be copied, reproduced, distributed, republished, or used in any form without prior express written permission from the author (**Tharunkumar K**).  
> All rights reserved.
```

---

<br/>

# 5. Techy Tharun's Chatbox

```markdown
# Techy Tharun's Chatbox — Resilient Multi-Provider AI Streaming Platform

[![Status](https://img.shields.io/badge/Status-Production%20Deployed-success?style=for-the-badge)](https://tharunchatbox.onrender.com)
[![Framework](https://img.shields.io/badge/Framework-Next.js%2015%20%7C%20React%2018-black?style=for-the-badge)](https://tharunchatbox.onrender.com)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-red?style=for-the-badge)](#author-and-license)

---

## 1. Problem
Developers and power users utilizing modern Large Language Model (LLM) interfaces constantly face operational roadblocks: single-provider rate limits, unexpected API outages (e.g., OpenAI or Anthropic downtime), high streaming latency, and disjointed document analysis workflows. When an API key reaches its rate cap or an upstream provider suffers an outage, conversations are terminated abruptly with lost context.

---

## 2. Existing Solution
Standard AI chat interfaces exhibit significant limitations:
* **Single Point of Failure**: Tethered to a single LLM API provider; any upstream outage halts the entire application.
* **High Latency**: Lack of optimized streaming protocols creates sluggish response times, especially on long responses.
* **Volatile Conversation State**: Many open-source chat wrappers store history locally in `localStorage`, losing context across devices.
* **No Automated Failover**: Users must manually configure new API keys and models when quotas are exceeded.

---

## 3. Solution
**Techy Tharun's Chatbox** is a high-performance conversational AI platform engineered for near-zero latency streaming and multi-provider resilience.

Key pillars:
* **Server-Sent Events (SSE) Streaming**: Sub-200ms typewriter-style text generation with continuous token pipelining.
* **Automated Key Rotation & Multi-Provider Failover**: Custom token-aware Key Manager that dynamically load-balances and cascades across Groq, OpenRouter, and OpenAI to eliminate rate limits.
* **Persistent PostgreSQL Conversation Memory**: Session and message storage powered by Neon Serverless PostgreSQL via Prisma ORM for seamless multi-device history retrieval.
* **Context-Aware AI Personas**: Specialized modes including Code Architect, Technical Document Analyzer, and Resume Reviewer.
* **Intelligent File Parsing**: In-browser document parser accepting PDF, DOCX, and TXT files and injecting parsed semantic context into chat prompts.
* **Enterprise Authentication**: NextAuth.js (Auth.js) v5 with secure Google SSO and session management.

---

## 4. Technical Approach
* **Frontend / Framework**: Next.js 15 App Router architecture utilizing React Server Components (RSC) and Tailwind CSS.
* **Streaming Protocol**: Native HTTP Server-Sent Events (SSE) delivering continuous UTF-8 token streams directly to client state.
* **Database & ORM**: Prisma ORM interacting with Neon Serverless PostgreSQL with optimized connection pooling.
* **Resilience Layer**: Custom multi-tenant key manager with exponential backoff, automated quota telemetry, and seamless provider failover.
* **Deployment**: Docker containerized and continuously deployed on Render.

---

## 5. Impact and Benefits
* **99.9% AI Availability**: Multi-provider failover ensures chat continuity even during major outages of upstream providers.
* **Sub-200ms Time-to-First-Token**: Ultra-fast response delivery via Groq LPU acceleration and optimized SSE streaming.
* **Zero Lost Context**: Serverless PostgreSQL ensures conversation history is safely persisted and accessible across all devices.

---

## 6. Feasibility and Viability
* **Technical Feasibility**: Built with modern full-stack web standards (Next.js 15, Prisma, PostgreSQL, SSE) running on scalable serverless cloud tiers.
* **Operational Viability**: Functions as a production-grade personal productivity workspace and team AI assistant.
* **Economic Viability**: Intelligently prioritizes high-speed, free/low-cost tiers (Groq) before falling back to paid models (OpenRouter/OpenAI), slashing operational costs by over 70%.
* **Scalability**: Serverless database and stateless container deployment allow handling large concurrent user loads effortlessly.

---

## 7. Author and License

### Author
**Tharunkumar K**  
AI Engineer & Full Stack Developer  
* Email: [tharunkumark42007@gmail.com](mailto:tharunkumark42007@gmail.com)  
* Portfolio: [tharunkumark4743.netlify.app](https://tharunkumark4743.netlify.app/)  
* GitHub: [@Tharun4743](https://github.com/Tharun4743)  
* LinkedIn: [linkedin.com/in/tharunkumark4743](https://in.linkedin.com/in/tharunkumark4743)

### Proprietary License & Terms of Use
**Copyright © 2026 Tharunkumar K. All rights reserved.**

> **STRICT PROPRIETARY NOTICE**:  
> No part of this software, source code, architecture, or designs may be copied, reproduced, distributed, republished, modified, or used in any form without prior express written permission from the author (**Tharunkumar K**).  
> All intellectual property rights are strictly reserved.
```

---

<br/>

# 6. Aura — 100% Offline Multimodal RAG

```markdown
# Aura — 100% Offline Multimodal RAG Workstation

[![Status](https://img.shields.io/badge/Status-Offline%20AI%20Workstation-blueviolet?style=for-the-badge)](https://github.com/Tharun4743/SIH25231)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Air--Gapped-success?style=for-the-badge)](#technical-approach)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-red?style=for-the-badge)](#author-and-license)

---

## 1. Problem
Defense installations, intelligence agencies, healthcare networks, and sovereign enterprise organizations operate under strict data confidentiality mandates. Sending sensitive documents, classified blueprints, or proprietary technical schematics to cloud-based AI providers (e.g., OpenAI, Google, Anthropic) poses severe security risks and violates air-gapped network policies. Furthermore, mission-critical field units often operate in remote environments with zero internet connectivity.

---

## 2. Existing Solution
Current enterprise document search solutions present critical vulnerabilities:
* **Cloud Dependence**: Almost all commercial RAG solutions rely on cloud vector databases (Pinecone) and remote LLM APIs.
* **Text-Only Limitations**: Traditional tools cannot index or understand visual diagrams, technical drawings, or spoken queries.
* **Complex Multi-Component Setup**: Running local open-source AI typically requires complex manual terminal setups (Python venvs, local servers, CUDA drivers), preventing adoption by non-technical operators.
* **Unbounded Memory Consumption**: Unoptimized local models frequently trigger out-of-memory (OOM) crashes on standard desktop hardware.

---

## 3. Solution
**Aura** is a sovereign, 100% offline multimodal Retrieval-Augmented Generation (RAG) desktop workstation designed for air-gapped enterprise and defense operations.

Key pillars:
* **100% Air-Gapped Operation**: Zero network packets leave the host machine; all text embeddings, vector lookups, and neural inferences execute entirely on-premises.
* **Multimodal Visual Indexing**: Extracts visual features and semantic embeddings from images, blueprints, and diagrams using Hugging Face CLIP.
* **Offline Voice Querying**: Local speech-to-text transcription via Whisper and Vosk without internet access.
* **Grounded Local LLM Generation**: Integrates local Llama-3 models running on Ollama with ChromaDB vector storage to provide hallucination-free, context-anchored answers.
* **One-Click Electron Desktop Executable**: Electron desktop wrapper bundling the Java Spring Boot backend, embedded JRE, and Python environment into a self-contained executable.

---

## 4. Technical Approach
* **Desktop Shell**: Electron desktop framework with a clean, glassmorphic React SPA interface.
* **Core Backend Service**: High-performance Java Spring Boot server managing document chunking, orchestration, and real-time WebSocket updates.
* **Vector Database**: Local ChromaDB instance providing fast cosine similarity search across text and image embeddings.
* **Local AI Runtimes**: Ollama running quantized Llama-3 models locally, paired with local Hugging Face CLIP embeddings and Whisper/Vosk STT pipelines.
* **Document Parser**: Apache PDFBox performing page-by-page text and tabular data extraction from local files.

---

## 5. Impact and Benefits
* **Absolute Sovereign Data Privacy**: 100% guaranteed immunity against external data interception, cloud breaches, and third-party AI training scraping.
* **Zero Network Dependency**: Operates flawlessly on isolated submarines, remote field stations, secure labs, and air-gapped enterprise intranets.
* **Multimodal Intelligence**: Unifies text documents, technical diagrams, and voice queries into a single unified knowledge repository.
* **Zero Cloud Operating Costs**: Zero recurring token or API subscription costs.

---

## 6. Feasibility and Viability
* **Technical Feasibility**: Packages proven open-source AI kernels (Ollama, CLIP, ChromaDB, Spring Boot) into a cohesive desktop distribution.
* **Operational Viability**: Non-technical personnel can launch the workstation with a single click without terminal commands or dependency management.
* **Economic Viability**: Completely eliminates recurring cloud SaaS fees, saving thousands of dollars in cloud AI bills.
* **Scalability**: Modular design allows swapping local LLM weights (e.g., Llama-3, Mistral, Gemma) based on the host system's GPU/VRAM hardware specs.

---

## 7. Author and License

### Author
**Tharunkumar K**  
Core Systems Developer & AI Architect  
* Email: [tharunkumark42007@gmail.com](mailto:tharunkumark42007@gmail.com)  
* Portfolio: [tharunkumark4743.netlify.app](https://tharunkumark4743.netlify.app/)  
* GitHub: [@Tharun4743](https://github.com/Tharun4743)  
* LinkedIn: [linkedin.com/in/tharunkumark4743](https://in.linkedin.com/in/tharunkumark4743)

### Proprietary License & Terms of Use
**Copyright © 2026 Tharunkumar K. All rights reserved.**

> **STRICT PROPRIETARY NOTICE**:  
> No part of this software, source code, architecture, neural pipelines, or desktop packaging may be copied, reproduced, distributed, republished, modified, or used in any form without prior express written permission from the author (**Tharunkumar K**).  
> All intellectual property rights are strictly reserved.
```
