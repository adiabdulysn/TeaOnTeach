# Tea on Tech - Internal IT Ticketing System

**Tea on Tech** is a professional, modern Internal IT Helpdesk and Ticketing system designed to streamline support requests and incident management. Built with **Next.js 16**, **TypeScript**, **Ant Design**, and **Prisma ORM**.

---

## 🚀 Key Features

### 💻 Dashboard & Analytics
- **Summary Stat Cards**: Visual overview of ticket statuses (Open, Progress, Resolved, etc.).
- **Interactive Charts**: Daily ticket trends and distribution by status/priority using Recharts.
- **Recent Activities**: Quick view of the latest 5 tickets.

### 🎫 Advanced Ticketing
- **Ticket Lifecycle**: Full workflow from creation to resolution and closing.
- **Dynamic Summaries**: Real-time status counters in the ticket list page.
- **Multi-Factor Filtering**: Advanced search by 10+ criteria (Department, PIC, Priority, Date Ranges, etc.).
- **Rich Interaction**: Threaded replies with file attachment support for effective communication.

### 📂 Referential Data Management
- Normalized data structure for **Categories**, **Divisions**, **Priorities**, **Statuses**, and **Ticket Types**.
- Clean URL architecture for all administrative routes.

### 🔐 Security & Access Control
- **RBAC (Role-Based Access Control)**: Granular permissions system for Users and Roles.
- **Secure Authentication**: Session-based login with hashed passwords (Bcrypt).
- **Personalized Profile**: Dynamic user profile management with DiceBear Initials avatars and password recovery.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Styling**: Tailwind CSS + Ant Design v6+
- **Database**: MySQL via Prisma ORM
- **Visuals**: Recharts (Analytics) & Lucide/Ant-Icons
- **Assets**: DiceBear API (Dynamic Avatars)

---

## ⚙️ Preparation & Installation

### 1. Prerequisites
- Node.js (Latest LTS)
- MySQL Database

### 2. Setup Environment
Rename `.env.example` to `.env` and configure your credentials:
```env
DATABASE_URL="mysql://username:password@localhost:3306/e-ticketing"
NEXT_PUBLIC_APP_NAME="Tea on Tech"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Database Migration
```bash
npx prisma db push
```

### 5. Running the App
```bash
npm run dev
```

---

## 📁 Project Structure

- `src/app/(authenticated)`: Main application interface routes.
- `src/app/actions`: Server Actions for database transactions.
- `src/lib`: Core utility functions, Auth provider, and Prisma client.
- `public/uploads`: Storage for ticket and reply attachments.

---
© 2024 Tea on Tech Ticketing System.
