# Abstract Art Portfolio Application

## Overview

This is a full-stack web application built for showcasing abstract art in a minimalist, elegant portfolio format. The application features a modern React frontend with shadcn/ui components and an Express.js backend, designed to present artwork in a clean, artistic interface.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API endpoints
- **Data Layer**: In-memory storage with interface for future database integration
- **Validation**: Zod for request/response validation
- **Development**: Hot reload with Vite integration in development mode

### Design Philosophy
- **Minimalist aesthetic**: Clean, uncluttered interface focusing on artwork presentation
- **Responsive design**: Mobile-first approach with elegant scaling
- **Performance-focused**: Optimized loading and smooth interactions
- **Accessibility**: Built with semantic HTML and ARIA patterns

## Key Components

### Frontend Components
- **Hero Section**: Immersive landing area with mystical keywords and call-to-action
- **Gallery**: Grid-based artwork display with lightbox functionality
- **About Section**: Artist biography and philosophy presentation
- **Contact Form**: Validated form with toast notifications
- **Navigation**: Responsive navigation with smooth scrolling
- **Lightbox**: Modal image viewer with keyboard navigation

### Backend Components
- **Storage Layer**: Abstracted storage interface supporting in-memory and future database implementations
- **API Routes**: RESTful endpoints for artworks and contact form submission
- **Validation**: Zod schemas for type-safe data handling
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Flow

1. **Client Request**: Browser requests artwork data via TanStack Query
2. **API Processing**: Express server processes requests through route handlers
3. **Data Retrieval**: Storage layer retrieves artwork data from in-memory store
4. **Response**: JSON data sent back to client with proper error handling
5. **UI Update**: React components update with fetched data using optimistic updates

### Contact Form Flow
1. User fills out contact form with validation
2. Form data validated client-side using Zod schema
3. POST request sent to `/api/contact` endpoint
4. Server validates data and logs submission
5. Success/error response triggers toast notification

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration
- **@radix-ui/***: Accessible UI primitives
- **drizzle-orm**: Database ORM (prepared for future PostgreSQL integration)
- **@neondatabase/serverless**: Serverless database connectivity
- **zod**: Schema validation and type inference

### UI Dependencies
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **lucide-react**: Icon library
- **wouter**: Lightweight routing

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production
4. **Environment**: NODE_ENV determines development vs production behavior

### Database Strategy
- **Current**: In-memory storage with sample artwork data
- **Future**: PostgreSQL database with Drizzle ORM migration system
- **Schema**: Defined in `shared/schema.ts` with users and artworks tables

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required for production)
- `NODE_ENV`: Environment mode (development/production)
- `REPL_ID`: Replit-specific identifier for development features

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```