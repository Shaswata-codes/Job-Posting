# Job Board App

A modern full-stack job platform built with **Next.js, Prisma, PostgreSQL, TailwindCSS, and TypeScript**. The application allows users to discover job opportunities, search and filter listings, post jobs, and manage applications through a personalized dashboard.

## 🚀 Overview

This project is a full-stack **Job Board Application** designed to simplify the process of connecting job seekers with employers.

Users can browse available job opportunities, search using different filters, view detailed job information, and apply for suitable positions. Authenticated users can also post job openings and manage their listings and applications from their dashboard.

The application uses **Next.js** for both frontend and server-side functionality, with **Prisma** handling database operations and **PostgreSQL** providing the relational data layer.

## ⚙️ Tech Stack

* **Next.js 15** — Full-stack React framework
* **TypeScript** — Type-safe development
* **Prisma ORM** — Database access and relationship management
* **PostgreSQL** — Relational database
* **TailwindCSS** — UI styling
* **React Hooks** — Client-side state and interactivity
* **Authentication** — Secure user authentication and authorization

## ✨ Features

### 🔍 Job Search & Filtering

* Search jobs by keywords
* Filter jobs by employment type
* Filter by location
* Dynamic search results

### 📝 Job Posting

* Authenticated users can create job listings
* Add job title, description, type, location, and other details
* Edit and manage posted jobs

### 📄 Job Details

* Dedicated page for every job listing
* View complete job information
* Apply directly from the job details page

### 👤 User Dashboard

* View jobs posted by the user
* Track job applications
* View applicant information
* Manage job listings and applications

### 📬 Job Applications

* Apply for available positions
* Track submitted applications
* Application status management

### 🔐 Authentication & Authorization

* User authentication
* Protected routes
* Role-based access to job posting and application functionality

## 🗄️ Database

The application uses **PostgreSQL** with **Prisma ORM** to manage relationships between users, jobs, and applications.

Example relationship structure:

```text
User
 ├── Posted Jobs
 └── Applications
        │
        ▼
       Jobs
```

This allows the application to efficiently manage job listings, applicants, and application statuses.

## ⚡ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* PostgreSQL
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/job-board.git
cd job-board
```

Install dependencies:

```bash
npm install
```

Configure your environment variables in `.env`:

```env
DATABASE_URL="your_postgresql_database_url"
```

Generate the Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🖼️ Screenshots

### Home Page

<img width="1347" alt="Home" src="https://github.com/user-attachments/assets/dcde382d-f842-4493-af5e-0b956cb89b46" />

### Dashboard

<img width="1243" alt="Dashboard" src="https://github.com/user-attachments/assets/29da6fbc-6b8c-4475-88ad-a9b700461401" />

## ☁️ Deployment

The application can be deployed using **Vercel**.

Deployment steps:

1. Push the project to GitHub
2. Import the repository into Vercel
3. Configure the required environment variables
4. Connect your PostgreSQL database
5. Deploy the application

## 🔗 Resources

* Next.js
* Prisma
* PostgreSQL
* TailwindCSS
* Vercel

## 📌 Project Highlights

* Full-stack application built with Next.js
* Relational database architecture using Prisma and PostgreSQL
* Dynamic job search and filtering
* Job posting and application workflow
* User dashboard
* Authentication and authorization
* Responsive UI with TailwindCSS
* Type-safe development with TypeScript
