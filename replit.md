# Microjob Marketplace Platform

## Project Overview
A comprehensive microjob marketplace platform built with Next.js frontend and Go backend. The platform supports job posting, worker matching, payments, admin management, and real-time messaging.

## Recent Changes
- **2025-09-04**: Successfully imported and configured the project for Replit environment
- **2025-09-04**: Fixed Next.js configuration for proper host handling in Replit proxy environment
- **2025-09-04**: Set up mock wallet API endpoints for frontend functionality
- **2025-09-04**: Configured PostgreSQL database with initial table structure
- **2025-09-04**: Fixed Go backend compilation issues and service dependencies

## Current Status
### ✅ Working Components
- **Frontend (Next.js)**: Fully functional on port 5000
- **Database**: PostgreSQL setup with base tables and indexes
- **Admin Interface**: Accessible and functional
- **Wallet System**: Mock API endpoints working correctly
- **User Authentication**: Frontend auth system operational
- **API Routes**: Next.js API routes serving mock data

### 🔧 In Progress  
- **Go Backend**: Has compilation issues with missing model definitions but foundational structure is complete
- **Real Backend Integration**: Currently using mock APIs, Go backend needs model fixes

### 🎯 Architecture
- **Frontend**: Next.js 14.2.16 with TypeScript, Tailwind CSS, Radix UI
- **Backend**: Go with Fiber framework, PostgreSQL, Redis
- **Database**: PostgreSQL with comprehensive schema
- **Deployment**: Configured for Replit autoscale deployment

## User Preferences
- Prioritize getting the application functional quickly
- Use mock/development data when backend is not available
- Focus on frontend user experience
- Maintain clean, working codebase

## Project Structure
- `/app`: Next.js app router with pages and API routes
- `/components`: React components organized by feature
- `/lib`: Utility functions and API clients
- `/backend`: Go backend server with services and models
- `/scripts`: Database setup and migration scripts
- `/public`: Static assets and images

## Environment Setup
- Frontend runs on port 5000 (required for Replit proxy)
- Backend configured for port 8080 (when functional)
- Database: Local PostgreSQL instance
- Cache: Redis for session and data caching

## Key Features
- Multi-role user system (admin, employer, worker)
- Job posting and application system
- Wallet and payment processing
- Real-time messaging
- Admin dashboard with comprehensive management tools
- Marketplace for services
- Review and rating system
- Dispute resolution system