 INSA Camp Pulse
INSA Summer Camp Blog Platform
Table of Contents
Overview

Key Features

Technology Stack

Project Structure

Installation Guide

Testing Suite

Documentation

Author & License

Overview
INSA Camp Pulse is a modern, full-stack daily learning log, progress tracker, and technical Q&A platform designed for students and trainers at the INSA Summer Camp. The platform streamlines technical communication and knowledge sharing during intensive coding sessions.

Students can submit structured daily reflection posts, interact via threaded comments, and seek technical assistance through a dedicated Q&A forum board where trainers and post authors can mark verified solutions.

Key Features
Daily Progress Feed
Students publish daily coding logs tagged with active camp days (Day 1 to Day 30)

Posts can be categorized with technology tags (NextJS, MongoDB, Prisma)

Real-time feed updates and chronological organization

Verified Q&A Forum
Dedicated help desk for technical queries

Advanced search filters: Unanswered, Most Voted, Resolved

Official answer acceptance by trainers or question authors

Solution verification system for quality assurance

Role-Based Access Control (RBAC)
Distinct permissions for STUDENT, TRAINER, and ADMIN roles

Visual UI badges indicating user roles

JWT-based authentication with custom role assertions

Server Actions (Next.js 16)
Type-safe backend mutations integrated with Prisma ORM

React Server Components for optimal performance

Seamless client-server communication

Dark Glassmorphism UI
Custom OLED-dark aesthetic optimized for low eyestrain

Glassmorphism design tokens for modern visual experience

Responsive design for all screen sizes

Technology Stack
Domain	Technology	Purpose
Framework	Next.js 16	React 19 App Router with dynamic async params
Language	TypeScript	End-to-end type safety across the application
Database	MongoDB	Document database with native ObjectId mappings
Data Layer	Prisma ORM	Object-Document Mapper for database operations
Authentication	NextAuth.js	JWT session strategy with role assertions
Styling	Tailwind CSS	Custom CSS variables and glassmorphism tokens
Testing	Vitest / Playwright	Unit testing and E2E browser automation
Project Structure
text
INSA_Daily_Activity/
└── insa/
    ├── prisma/
    │   ├── schema.prisma          # MongoDB models with @db.ObjectId
    │   └── seed.ts                # Database seeding script
    ├── src/
    │   ├── app/
    │   │   ├── (auth)/            # Authentication routes
    │   │   ├── api/               # API route handlers
    │   │   ├── post/[id]/         # Individual post details
    │   │   ├── profile/           # User profile page
    │   │   ├── questions/         # Q&A forum board
    │   │   ├── globals.css        # Global styling and tokens
    │   │   ├── layout.tsx         # Root application layout
    │   │   └── page.tsx           # Main feed/dashboard
    │   ├── actions/               # React Server Actions
    │   │   ├── post-actions.ts    # Post creation and reactions
    │   │   └── qa-actions.ts      # Q&A resolution actions
    │   ├── components/            # Reusable UI components
    │   ├── lib/                   # Infrastructure configuration
    │   ├── types/                 # TypeScript type definitions
    │   └── utils/                 # Utility functions
    ├── next.config.ts             # Next.js configuration
    ├── package.json               # Dependencies and scripts
    ├── tsconfig.json              # TypeScript configuration
    └── .env.example               # Environment variables template
Installation Guide
Prerequisites
Node.js v18.17.0 or higher

npm or pnpm package manager

MongoDB instance (local or MongoDB Atlas cloud cluster)

Setup Instructions
Clone the Repository

bash
git clone https://github.com/Kenenisa1/INSA_Daily_Activity.git
cd INSA_Daily_Activity/insa
Install Dependencies

bash
npm install
Configure Environment Variables

Create a .env file in the insa/ directory:

env
# MongoDB Connection String
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/insa_camp_db?retryWrites=true&w=majority"

# NextAuth Security Settings
NEXTAUTH_SECRET="your-32-character-secret-key"
NEXTAUTH_URL="http://localhost:3000"
Sync Database Schema

bash
npx prisma db push
Seed Test Data

bash
npx prisma db seed
Start Development Server

bash
npm run dev
Access Application

Open http://localhost:3000 in your browser

Testing Suite
Unit Tests
bash
npm run test:unit
Tests Zod schemas for validation

Validates server action functionality

Checks utility functions and helpers

End-to-End Tests
bash
npm run test:e2e
Full browser automation with Playwright

Tests critical user journeys

Validates authentication flows

Checks CRUD operations

Documentation
Comprehensive technical documentation is available in the docs/ folder:

SRS: Software Requirements Specification document

SAD: System Architecture Document (Next.js 16 + MongoDB)

API Spec: Complete server action payload contracts

Database Spec: Detailed Prisma schema documentation

Author & License
Author
Kenenisa Mieso

GitHub: Kenenisa1

LinkedIn: Kenenisa Mieso

Role: Full-Stack MERN / Next.js Developer

Institution: Arba Minch University & INSA Summer Camp

License
Distributed under the MIT License. See LICENSE file for details.

Support
For issues, questions, or contributions:

Submit issues via GitHub Issues

Contact the author directly

Refer to documentation in the docs/ folder

Last Updated: July 2026
