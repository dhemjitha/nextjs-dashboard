# NextJS Dashboard Crash Course by nextjs/org

ACME Dashboard is a comprehensive financial management platform built with Next.js, designed to provide businesses with real-time insights into their financial performance. This full-stack application leverages the power of Next.js App Router, Prisma ORM, and PostgreSQL to deliver a seamless user experience with robust data management capabilities. As my first Next.js project, ACME Dashboard represents a significant learning journey into modern web development practices, server components, and database integration, all within a responsive and intuitive interface.

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/3a580a1587984b6a2006f4ad7b6cd9da67ff52f7e7f75a978c517fe6530f91b3.jpg?versionId=7e6a24c47b6322e4f7b6c5accec55f2e)

# 🤔 Problem space

## Problems to solve/Requirements to Create

As a developer new to Next.js and full-stack development, I needed to create a comprehensive dashboard application that would help me understand modern web development practices while building something practical and functional.

### 👉 Problem: Learning curve of Next.js App Router and server components

**Problem statement**

Traditional React applications rely heavily on client-side rendering and state management. However, Next.js introduces a new paradigm with server components and the App Router architecture. As a developer new to these concepts, understanding when to use server vs. client components, how data fetching works, and how to structure an application with the App Router presented a significant learning challenge.

**Current solution**

Before this project, I was familiar with traditional React applications that use client-side rendering exclusively. The mental model shift required for Next.js development, particularly understanding server components and the App Router, was substantial.

**How do we know it is a problem**

- User feedback: Personal struggle with understanding the new concepts and architecture.
- Metrics: Initial development time was slower than expected due to the learning curve.
- Evidence: Documentation research and multiple iterations were needed to properly implement features.

### 👉 Problem: Database integration with Prisma ORM and PostgreSQL

**Problem statement**

As my first time working with Prisma ORM and PostgreSQL databases, integrating these technologies into a Next.js application presented challenges in schema design, migrations, and efficient querying patterns.

**Current solution**

Prior to this project, I had limited experience with database ORMs and primarily used simpler data storage solutions without the robustness of a relational database.

**How do we know it is a problem**

- User feedback: Initial confusion about Prisma schema design and migration workflows.
- Metrics: Database queries were not optimized, leading to slower performance.
- Evidence: Debugging logs showed inefficient database access patterns.


## Why solve these problems?

Addressing these problems is crucial for developing modern, efficient web applications that provide excellent user experiences. Learning Next.js, Prisma, and PostgreSQL is essential for creating production-ready applications that can scale and perform well.

**Reason 1**: Next.js App Router and server components provide significant performance benefits and improved developer experience once mastered.

**Reason 2**: Proper database integration with Prisma and PostgreSQL ensures data integrity, type safety, and efficient querying capabilities.

**User Satisfaction Matrix**

- Current State: Initial development was slower due to the learning curve, with some performance issues related to database queries and rendering optimizations.
- Desired State: After solving these problems, development will be more efficient with a clear understanding of Next.js patterns, and the application will perform optimally with proper database integration.


## Goals

### Company objective 🎯

💡 To create a modern, responsive financial dashboard application that demonstrates Next.js capabilities while providing practical experience with full-stack development, server components, and database integration.

### Project goals

- **Project goal:** Master Next.js App Router architecture and server components to build a performant and SEO-friendly application.
- **Project goal:** Implement proper database integration with Prisma ORM and PostgreSQL to ensure efficient data management.
- **Project goal:** Create a responsive and intuitive UI using modern design principles to provide an excellent user experience.
- **Project goal:** Implement authentication and protected routes to ensure data security and user privacy.


## User Stories

### User type: Dashboard User

The Dashboard User needs to quickly access financial metrics, manage invoices, and track customer information.

**Goals:** Monitor revenue, track pending vs. paid invoices, and manage customer data efficiently.

**Needs:** Intuitive interface, quick access to key metrics, and efficient data management tools.

**Other characteristic:** Values visual data representation and responsive design.

### User type: Admin

The Admin manages user access and maintains system integrity.

**Goals:** Ensure proper authentication and data security for all users.

**Needs:** User management capabilities and system monitoring tools.

**Other characteristic:** Prioritizes security and data integrity.


# 🌟 Design space 

## UI Design

The UI design for ACME Dashboard focuses on clarity, accessibility, and efficient information display. The layout prioritizes important financial metrics with cards and charts, while the navigation system provides easy access to different sections of the application.

**Admin Flow:**

- Login → Access admin dashboard 
- Manage users and permissions → Monitor system performance
- Navigate to Invoices/Customers → View detailed information
- Perform actions (create, update, delete)

## Low-fidelity Wireframe

### Design Concept

The core design concept for ACME Dashboard centers on providing clear, actionable financial insights through an intuitive interface. The dashboard presents key metrics at a glance, with easy navigation to more detailed views for invoices and customer management.

**For admins:**

The admin dashboard provides tools for user management and system monitoring, ensuring the application runs smoothly and securely and provides a quick overview of financial performance, with cards showing total revenue, pending vs. paid invoices, and customer statistics. Navigation is simple and intuitive, allowing admins to quickly access the information they need.

## Design system 🎨

For ACME Dashboard, I utilized Tailwind CSS to maintain consistency and ensure a seamless user experience across all pages and interactions. Here's why the design system was necessary and how I utilized it in the project


# Development Phase 

## Technology Stack Selection

### 1. Frontend - Next.js with React

**Why Next.js?**

- **Hybrid Rendering:** Next.js combines server-side and client-side rendering for optimal performance and SEO benefits.
- **App Router Architecture:** Provides intuitive file-based routing with nested layouts and loading states.
- **Server Components:** Reduces client-side JavaScript and improves performance by rendering components on the server.
- **Built-in API Routes:** Simplifies backend functionality without requiring a separate server setup.

**Why React?**

- **Component-Based Architecture:** Enables reusable UI components, making the frontend modular and maintainable.
- **React Server Components:** Next.js 13+ leverages React's server components for improved performance and reduced client-side JavaScript.
- **Strong Ecosystem:** With a large and active community, React provides a wealth of libraries, tools, and tutorials.

### 2. Database - PostgreSQL with Prisma ORM

**Why PostgreSQL?**

- **Relational Structure:** Perfect for financial data with complex relationships between entities.
- **ACID Compliance:** Ensures data integrity for financial transactions and records.
- **Scalability:** Handles growing data needs efficiently with robust performance.

**Why Prisma ORM?**

- **Type Safety:** Provides TypeScript integration for error prevention during development.
- **Intuitive API:** Simplifies database operations with a clean, declarative syntax.
- **Migrations:** Manages database schema changes reliably and safely.
- **Query Optimization:** Generates efficient SQL queries automatically.

### 3. Authentication - NextAuth.js

**Why NextAuth.js?**

- **Flexible Authentication:** Supports multiple authentication providers and strategies.
- **Secure Sessions:** Handles session management securely with JWT or database sessions.
- **Easy Integration:** Seamlessly integrates with Next.js applications.

### 4. Styling - Tailwind CSS

**Why Tailwind CSS?**

- **Utility-First Approach:** Provides low-level utility classes for building custom designs without leaving HTML.
- **Performance:** Results in smaller CSS bundles compared to traditional CSS frameworks.
- **Responsive Design:** Makes it easy to create responsive layouts with built-in breakpoint utilities.

## High-Level Architecture Diagram

The architecture of ACME Dashboard follows a layered approach with clear separation between UI components, data fetching, and database access:

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/24470ae3cccf4fb4e62229d760723451e7fb27bace66d94923a419df35ddaf35.jpg?versionId=7e6a24d0ef5f02f2fef499565bc37097)- **UI Layer:** Next.js Server and Client Components
- **Data Access Layer:** Server Actions and API Routes
- **Database Layer:** Prisma ORM with PostgreSQL

## Key Features of the Software

### 1. Authentication System

**Decision:** Implemented secure authentication using NextAuth.js with credential provider.

**Implementation:**

- Integrated **NextAuth.js** for secure user authentication and session management.
- Created protected routes to ensure only authenticated users can access sensitive data.
- Implemented role-based access control to differentiate between regular users and administrators.

### 2. Dashboard with Key Metrics

**Decision:** Developed a comprehensive dashboard that displays key financial metrics and recent activity.

**Implementation:**

- Used server components to fetch and aggregate financial data efficiently.
- Created responsive cards and charts to display revenue, invoice status, and customer statistics.
- Implemented real-time updates for the most recent transactions and activities.

### 3. Invoice Management

**Decision:** Built a complete invoice management system with CRUD operations.

**Implementation:**

- Created a responsive table for viewing and filtering invoices by status, date, and customer.
- Implemented form validation for creating and updating invoices.
- Used server actions for handling form submissions and database operations.
- Designed a detailed view for individual invoices with printing capabilities.

### 4. Customer Management

**Decision:** Developed a customer management system to track customer information and transactions.

**Implementation:**

- Built a searchable and sortable customer directory with pagination.
- Created detailed customer profiles showing contact information and transaction history.
- Implemented forms for adding and updating customer information with validation.

### 5. Responsive Design

**Decision:** Ensured the application is fully responsive and works well on all device sizes.

**Implementation:**

- Used Tailwind CSS's responsive utilities to create layouts that adapt to different screen sizes.
- Implemented a collapsible sidebar for mobile navigation.
- Optimized tables and charts for smaller screens to ensure good usability on mobile devices.


# Challenges Faced and Solutions 

### Problem 1:

**Understanding Next.js App Router and Server Components**

**Challenge:**

As a first-time Next.js developer, grasping the mental model of the App Router and server/client component separation was challenging. Understanding when to use "use client" directives and how data flows between server and client components required a significant learning curve.

### Solution 1:

To solve this, I implemented a structured learning approach:

- **Methodical Documentation Study:** Thoroughly studied the Next.js documentation and examples to understand the core concepts.
- **Component Boundaries:** Created clear separation between server and client components with proper "use client" directives where needed.
- **Data Flow Patterns:** Established consistent patterns for data fetching and state management, using server components for data fetching and client components for interactivity.

### Problem 2:

**Prisma ORM and PostgreSQL Integration**

**Challenge:**

Setting up and managing the database with Prisma presented challenges with schema design, migrations, and deployment in a serverless environment.

### Solution 2:

I addressed these challenges through:

- **Schema-First Approach:** Designed a complete database schema before implementation, focusing on entity relationships and data integrity.
- **Migration Strategy:** Used Prisma's migration system to manage schema changes safely throughout development.
- **Connection Pooling:** Implemented proper connection management for the serverless environment to prevent connection exhaustion.
- **Type Safety:** Leveraged Prisma's generated types for type-safe database access throughout the application.
