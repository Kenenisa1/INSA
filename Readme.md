<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=180&section=header&text=⚡%20INSA%20Camp%20Pulse&fontSize=42&fontColor=fff&animation=fadeIn" width="100%"/>
</p>

> **INSA Summer Camp Blog & Technical Knowledge-Sharing Platform**  
> A full-stack daily learning log, progress tracker, and Q&A platform engineered for students and trainers at the INSA Summer Camp.

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-16%20App%20Router-black?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Document%20DB-green?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/NextAuth.js-v4-purple?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

---

###  Overview

**INSA Camp Pulse** streamlines technical communication and collaborative learning during the intensive INSA Summer Camp program. 

Students publish structured daily reflection logs tagged by active camp days and tech stacks, interact through threaded comments, and post technical challenges to a Q&A forum where trainers and authors verify solutions.

---

###  Key Capabilities

* **📅 Daily Progress Feed:** Log daily engineering reflections tagged by camp day (`Day 1` to `Day 30`) and tech stack (`#NextJS`, `#MongoDB`, `#Prisma`).
* **❓ Verified Q&A Forum:** Dedicated help desk featuring resolution filters (`Unanswered`, `Most Voted`, `Resolved`) and official answer acceptance by instructors or question authors.
* **🔐 Role-Based Access Control (RBAC):** Distinct permissions and UI scopes for `STUDENT`, `TRAINER`, and `ADMIN` roles powered by NextAuth JWT claims.
* **⚡ Type-Safe Mutations:** Next.js 16 React Server Actions integrated directly with Prisma ORM and React Server Components.
* **🌙 Dark Glassmorphism UI:** Custom dark aesthetic optimized specifically to reduce eyestrain during prolonged coding sessions.

---

### 🛠️ Technical Arsenal & Architecture

#### 🌐 Core Framework & Languages
![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

#### ⚙️ Backend, Data & Auth
![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma_ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

---

### System Specification Summary

| Domain | Technology | Implementation Details |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16** | App Router architecture, async dynamic route parameters, and Server Actions |
| **Language** | **TypeScript 5.0** | Strict end-to-end type contracts across DB models, server actions, and UI components |
| **Database** | **MongoDB** | High-performance document store utilizing native `@db.ObjectId` mappings |
| **Data Access** | **Prisma ORM** | Type-safe Object-Document Mapping (ODM) targeting MongoDB |
| **Authentication** | **NextAuth.js** | Stateless JWT session strategy enriched with custom role attributes |
| **Styling** | **Tailwind CSS** | Custom dark glassmorphic design token system (`globals.css`) |
| **Testing** | **Vitest / Playwright** | Unit validation, integration test scripts, and E2E browser automation |

---

###  Repository Directory Architecture

### text
INSA_Daily_Activity/
└── insa/
    ├── prisma/
    │   ├── schema.prisma          # MongoDB Prisma models (@db.ObjectId)
    │   └── seed.ts                # Database seed script for development
    ├── src/
    │   ├── app/                   # Next.js 16 App Router
    │   │   ├── (auth)/            # Unauthenticated routes (login/register)
    │   │   ├── api/               # REST API route handlers & NextAuth handler
    │   │   ├── post/[id]/         # Post detail view (Async params handling)
    │   │   ├── profile/           # User activity & profile dashboard
    │   │   ├── questions/         # Q&A discussion board
    │   │   ├── globals.css        # Global CSS variables & dark design tokens
    │   │   ├── layout.tsx         # Root layout wrapper
    │   │   └── page.tsx           # Main activity feed
    │   ├── actions/               # React Server Actions
    │   │   ├── post-actions.ts    # createPostAction(), toggleReactionAction()
    │   │   └── qa-actions.ts      # resolveAnswerAction()
    │   ├── components/            # Reusable React UI components
    │   ├── lib/                   # System infrastructure (db.ts, auth.ts)
    │   └── types/                 # Custom TypeScript interfaces & module augments
    ├── next.config.ts             # Next.js 16 framework configuration
    └── package.json

---

###  Getting Started

#### 1.  Prerequisites

Ensure your local development environment meets the following baseline requirements:

| Requirement | Minimum Version | Notes |
| :--- | :--- | :--- |
| **Node.js** | `v18.17.0`+ | LTS release recommended |
| **Package Manager** | `npm` / `pnpm` | Comes bundled with Node.js |
| **Database** | MongoDB `v6.0`+ | Local MongoDB instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) |

---

#### 2.  Installation & Local Setup

**bash**
# 1. Clone the repository
git clone [https://github.com/Kenenisa1/INSA_Daily_Activity.git](https://github.com/Kenenisa1/INSA_Daily_Activity.git)
cd INSA_Daily_Activity/insa

# 2. Install project dependencies
npm install

# 3. Configure your environment file (.env)
cp .env.example .env

> ** Environment Variable Setup**  
> Populate your `.env` file in the `insa/` directory with your database connection string and secret keys:

env
# MongoDB Connection String
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/insa_camp_db?retryWrites=true&w=majority"

# Authentication Security Settings
NEXTAUTH_SECRET="your-32-character-production-secret-key"
NEXTAUTH_URL="http://localhost:3000"

bash
### 4. Push Prisma schema to MongoDB
npx prisma db push

# 5. Seed initial mock data (Users, Posts, Q&A)
npx prisma db seed

# 6. Launch the development server
npm run dev
Visit http://localhost:3000 in your browser to view the application live!

### Quality Assurance & Test Suite
Run the full testing pipeline using the following standard commands:

**Bash**
# Execute unit & integration tests (Zod schemas, Server Actions)
npm run test:unit

# Execute End-to-End (E2E) browser automation tests
npm run test:e2e

# Run linting check across all TypeScript & App Router files
npm run lint
## Project System Documentation
Comprehensive architecture design documents are available inside the /docs directory:

**[SRS] Software Requirements Specification**: Detailed breakdown of functional, non-functional, and user constraints.

**[SAD] System Architecture Document**: Next.js 16 App Router design topology, MongoDB document schemas, and security boundaries.

**[API Spec] Interface Specification**: Complete contract details for Server Actions, REST API route handlers, and NextAuth claims.

**[DB Spec] Database Specification**: Prisma schema layout, embedded document strategies, and MongoDB index optimization.

### Author & Acknowledgments
 ## License
This project is open-source software licensed under the MIT License.

## Plaintext
**MIT License**

**Copyright (c) 2026 Kenenisa Mieso**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
