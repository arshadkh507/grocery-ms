# grocery-ms

grocery-ms for mub mamo

---

✅ Module 1: Requirement Engineering & Initial Setup
🎯 Goal:
Define and solidify the project's functional and technical requirements and ensure a properly working development environment.

Phase 1: Requirement Engineering
✅ Functional Requirements
You’ve already defined these in detail — great job. Organize them into feature modules:

Authentication & Roles

Staff Management

Inventory Management

POS (Point of Sale)

Sales & Reports

Loan Management

Customer Management

Invoices

Expenses

Notifications

✅ Non-Functional Requirements
Offline-first (no internet dependency)

Desktop usability

Simple local file-based storage (SQLite)

Fast startup time

Auto-updatable (future)

Phase 2: Tech Stack Decision (You're using…)
Area Stack
Frontend Next.js (React) + Tailwind + ShadCN + RTK Query
Backend Express.js + TypeScript + Better-SQLite3
Runtime Electron (with Forge)
Dev Tools ESLint, Prettier, TypeScript

✅ This stack is good for desktop/offline-first. Swapping NestJS for Express keeps it lightweight, which is smart.

Phase 3: Project Structure & Setup Validation
You have:

pgsql
Copy
Edit
POS-Shop-MS/
├── frontend/ # Next.js frontend
├── backend/ # Express.js API
├── electron/ # Electron wrapper
├── package.json # Electron root
You’ve configured:

Concurrent dev with "dev" script using concurrently

Electron launch via "start" (Electron Forge)

Next.js frontend & Express backend running independently

SQLite via Better-SQLite3 (good for local, offline use)

✅ This is correctly structured. Just make sure:

The Electron main.ts opens a window loading Next.js (via http://localhost:3000)

Your backend serves at a different port (localhost:4000)

CORS is enabled for Electron (in backend)

🚀 Roadmap: Setup + Complete Module 1 (System Setup)
Step Description Status

1. Initialize Git Repo (if not already) ✅
2. Verify each package.json runs independently ✅
3. Ensure electron/main.ts loads Next.js dev URL (localhost:3000) ⚙️
4. Setup CORS on Express backend ⚙️
5. Create shared types/interfaces (/shared/types) 🧠
6. Setup Better-SQLite3 database & schema migration logic 🧠
7. Implement initial Auth module (JWT or session) ⏳
8. Create backend routes: /auth/login, /auth/me, etc. ⏳
9. Setup RTK Query slice for /auth in frontend ⏳
10. Create login page, protected layout, role guard in frontend ⏳
11. Package with Electron (via npm run make) ⏳

---

Module 1: Authentication & Authorization Roadmap

- Admin/Employee roles
- Secure password storage
- JWT-based authentication
- Activity logging
- Password reset/change
- Session management
- Offline-capable auth system

2. Technical Setup Verification
   Your Current Stack is Correct:

Frontend: Next.js 15 + React 19 + Tailwind + ShadCN
Backend: Express.js + Better-SQLite3
Runtime: Electron 36
Dev Tools: Properly configured

✅ Module 1: Authentication and Authorization
💡 Features:
User Login/Logout

Role-based access control (Admin, Employee)

Password Management (Change password)

User Activity Logging (basic)

(Optional for now) Reset Password — will need secure reset without email/internet
