# Overview

This is a modern full-stack web application built as a portfolio website showcasing professional experience, skills, and projects. The application features a React frontend with a sleek, responsive design and an Express.js backend with database integration capabilities. The portfolio includes sections for personal information, work experience, skills showcase, featured projects, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless)
- **Data Layer**: Storage abstraction interface with in-memory implementation for development
- **Development**: Hot module replacement and live reloading via Vite integration

## Design System
- **Component Library**: Custom implementation using Radix UI primitives
- **Theming**: CSS custom properties with light/dark mode support
- **Typography**: Multiple font families (Inter, JetBrains Mono) loaded via Google Fonts
- **Color Scheme**: Custom lavender-based palette with semantic color tokens
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Data Management
- **Schema**: Drizzle schema with Zod validation for type safety
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: PostgreSQL session store with connect-pg-simple
- **Development Storage**: In-memory storage implementation for rapid prototyping

## Build and Development
- **Monorepo Structure**: Shared types and utilities between client and server
- **Path Aliases**: TypeScript path mapping for clean imports
- **Development Mode**: Integrated Vite dev server with Express for full-stack development
- **Production Build**: ESBuild for server bundling, Vite for client optimization

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **@tanstack/react-query**: Powerful data fetching and caching library
- **drizzle-orm**: Type-safe ORM with excellent TypeScript integration
- **drizzle-zod**: Zod schema generation from Drizzle tables

## UI and Styling
- **@radix-ui/***: Comprehensive collection of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Utility for creating type-safe component variants
- **clsx**: Conditional className utility for dynamic styling

## Development Tools
- **tsx**: TypeScript execution engine for Node.js development
- **esbuild**: Fast JavaScript bundler for production server builds
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **wouter**: Minimal routing library for React applications