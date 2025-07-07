# The Elements Art Portfolio Application

## Overview

This is a full-stack web application built for "The Elements Art" - a Vienna-based abstract art portfolio. The application features a modern React frontend with shadcn/ui components and an Express.js backend, designed to present artwork in a clean, minimalist black and white aesthetic. The site showcases the artist's philosophy of space, balance, simplicity, and presence through abstract compositions.

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
- **Hero Section**: Immersive landing area with philosophy-based keywords and Vienna location
- **Gallery**: Grid-based artwork display with lightbox functionality showcasing actual artist paintings
- **Philosophy Section**: Detailed presentation of artist's philosophy (Space, Balance, Simplicity, Presence)
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
- July 07, 2025. Updated for "The Elements Art" brand with:
  - Artist's actual paintings from Vienna
  - Philosophy-based content (Space, Balance, Simplicity, Presence)
  - Black and white minimalist aesthetic
  - Vienna location integration
  - Static asset serving for uploaded artwork images
- July 07, 2025. Major UI/UX improvements:
  - Auto-hiding navigation bar with scroll animation
  - Video background on hero section
  - Blurred lightbox backgrounds for artwork viewing
  - Instagram and email social icons integration
  - Contact form configured for theelementsart@gmail.com
  - Philosophical quote about abstract art meaning
- July 07, 2025. Content Management System & Deployment Setup:
  - Created JSON-based content management system
  - Set up Netlify and Vercel deployment configurations
  - Added easy artwork gallery management
  - Created comprehensive deployment documentation
  - Implemented automatic content loading from config files
- July 07, 2025. Complete Deployment Preparation:
  - Fixed Netlify build configuration with proper entry point resolution
  - Created automated deployment scripts and GitHub Actions workflow
  - Copied all assets to public directory for deployment
  - Created comprehensive documentation (README.md, DEPLOYMENT_READY.md)
  - Verified all deployment configurations for Netlify and Vercel
  - Set up proper .gitignore and project structure for GitHub
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Brand: The Elements Art
Location: Vienna, Austria
Contact: theelementsart@gmail.com, @theelements.art (Instagram)
Design: Minimalist black/white, video backgrounds, auto-hiding navigation
Philosophy: "Abstract art comes from what it inspires within you- your feelings, thoughts, and personal response. The space between the artwork and your experience is where the art truly lives."
Artwork: EARTH + FIRE (2025, available), WATER + AIR (2025, available), WATER + EARTH (2024, sold)
```