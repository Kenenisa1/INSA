 # ⚡ INSA Camp Pulse (INSA Summer Camp Blog Platform)

[![Next.js 16](https://img.shields.io/badge/Next.js-16%20App%20Router-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Document%20DB-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-v4-purple?style=flat-square&logo=react)](https://next-auth.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> A modern, full-stack daily learning log, progress tracker, and technical Q&A platform built for students and trainers at the **INSA Summer Camp**.

---

## 📖 Overview

**INSA Camp Pulse** streamlines technical communication and knowledge sharing during the intensive INSA Summer Camp. Students submit structured daily reflection posts tagged by active camp days and tech stacks, interact via threaded comments, and seek technical assistance on the Q&A forum board where trainers and post authors mark verified solutions.

---

## ✨ Key Features

* **📅 Daily Progress Feed:** Students publish daily coding logs tagged with active camp days (e.g., `Day 1` to `Day 30`) and tech tags (`#NextJS`, `#MongoDB`, `#Prisma`).
* **❓ Verified Q&A Forum:** Dedicated help desk with search filters (`Unanswered`, `Most Voted`, `Resolved`) and official answer acceptance by trainers or question authors.
* **🔐 Role-Based Access Control (RBAC):** Distinct permissions and UI badges for `STUDENT`, `TRAINER`, and `ADMIN` powered by NextAuth.js JWT claims.
* **⚡ Server Actions (Next.js 16):** Fully type-safe backend mutations directly integrated with Prisma ORM and React Server Components.
* **🌙 Dark Glassmorphism UI:** Custom OLED-dark aesthetic optimized for low eyestrain during long coding sessions.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16** | React 19 App Router with dynamic async params and Server Actions |
| **Language** | **TypeScript** | End-to-end type safety connecting Prisma models, Zod, and UI |
| **Database** | **MongoDB** | High-performance document database with native `@db.ObjectId` mappings |
| **Data Layer** | **Prisma ORM** | Schema-driven Object-Document Mapper (ODM) |
| **Authentication** | **NextAuth.js** | JWT session strategy with custom role assertions |
| **Styling** | **Tailwind CSS** | Custom CSS variables & glassmorphism tokens |
| **Testing** | **Vitest / Playwright** | Unit, integration, and E2E browser automation suite |

---

## 📂 Repository Directory Structure

```text
INSA_Daily_Activity/
└── insa/
    ├── prisma/
    │   ├── schema.prisma          # MongoDB Prisma models (@db.ObjectId)
    │   └── seed.ts                # Database seed script
    ├── src/
    │   ├── app/                   # Next.js 16 App Router
    │   │   ├── (auth)/            # Auth routes (login/register)
    │   │   ├── api/               # API route handlers & NextAuth handlers
    │   │   ├── post/[id]/         # Post details page (async params)
    │   │   ├── profile/           # User progress profile page
    │   │   ├── questions/         # Q&A forum board page
    │   │   ├── globals.css        # Global CSS variables & tokens
    │   │   ├── layout.tsx         # Root application shell
    │   │   └── page.tsx           # Main Feed / Dashboard
    │   ├── actions/               # Next.js 16 React Server Actions
    │   │   ├── post-actions.ts    # createPostAction(), toggleReactionAction()
    │   │   └── qa-actions.ts      # resolveAnswerAction()
    │   ├── components/            # Reusable UI components
    │   ├── lib/                   # Infrastructure configs (db.ts, auth.ts)
    │   └── types/                 # Extended TypeScript interfaces
    ├── next.config.ts             # Next.js 16 configuration
    └── package.json


Getting Started
1. Prerequisites
Node.js: v18.17.0 or higher

npm or pnpm

MongoDB: Local MongoDB instance or a cloud cluster on MongoDB Atlas

2. Installation & Local Setup
Clone the Repository:
git clone [https://github.com/Kenenisa1/INSA_Daily_Activity.git](https://github.com/Kenenisa1/INSA_Daily_Activity.git)
cd INSA_Daily_Activity/insa

Install Dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env file inside the insa/ directory:

Code snippet
# MongoDB Connection String
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/insa_camp_db?retryWrites=true&w=majority"

# NextAuth Security Settings
NEXTAUTH_SECRET="your-32-character-secret-key"
NEXTAUTH_URL="http://localhost:3000"
Sync Prisma Database Schema:

Bash
npx prisma db push
Seed Initial Test Data (Tags & Accounts):

Bash
npx prisma db seed
Start the Development Server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the app.

🧪 Testing Suite
Bash
# Run unit tests for Zod schemas & server actions
npm run test:unit

# Run full End-to-End (E2E) browser tests with Playwright
npm run test:e2e
📄 Complete Project Documentation
Full technical documentations are available inside the docs/ folder:

SRS: Software Requirements Specification

SAD: System Architecture Document (Next.js 16 + MongoDB)

API Spec: Server Action Payload Contracts

Database Spec: Complete Prisma Schema

👨‍💻 Author & Acknowledgments
Developer: Kenenisa Mieso (GitHub Profile | LinkedIn)

Role: Full-Stack MERN / Next.js Developer

Institution: Arba Minch University & INSA Summer Camp

📜 License
Distributed under the MIT License. See LICENSE for details.
