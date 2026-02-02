# CLBR Platform - Sales & Education Platform

A comprehensive sales platform for CLBR built with Next.js, TypeScript, and Tailwind CSS. Features include CMS, authentication, education platform, leaderboard, incentives management, reviews, and admin dashboard.

## Features

### Core Platform
- **CMS**: Dynamic content management for homepage, hero section, and marketing content
- **Authentication**: Secure user authentication with email/password and password reset
- **Admin Dashboard**: Comprehensive admin interface for content and user management
- **Row Level Security**: Supabase RLS policies for secure data access

### Education Platform
- **Course Management**: Create and manage courses (Closer, Setter, etc.)
- **Video Lessons**: Google Drive integrated video player
- **Progress Tracking**: Track lesson completion per user
- **Note Taking**: Users can take notes on each lesson
- **Regional Variations**: Support for different regional content (California, Illinois, etc.)

### Sales Features
- **Leaderboard**: Real-time rankings from Google Sheets integration
- **Incentives**: Time-based incentive campaigns with categories and statuses
- **Reviews**: Video testimonials from customers and reps
- **Projects Map**: Interactive Mapbox map with project locations
- **Statistics Dashboard**: Performance metrics and analytics

### Technical
- **Modern Design**: Dark theme with professional typography
- **Responsive Layout**: Optimized for all device sizes
- **Performance**: Built with Next.js 14 for fast loading and SEO
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework

## Quick Start

### First Time Setup

If this is your first time setting up the CLBR platform, follow these steps:

1. **Read the Setup Guide**: See `CLBR_SETUP_GUIDE.md` for complete instructions
2. **Setup External Services**: Configure Supabase, Google Sheets, and Mapbox
3. **Configure Environment**: Fill in `.env.local` with your credentials
4. **Run Migrations**: Execute `database/ALL_MIGRATIONS.sql` in Supabase SQL Editor

### Development

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env.local` (see `.env.example`)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Important Setup Files

- **`CLBR_SETUP_GUIDE.md`** - Complete step-by-step setup instructions
- **`SETUP_CHECKLIST.md`** - Track your setup progress
- **`PROJECT_DUPLICATION_GUIDE.md`** - Comprehensive platform documentation
- **`database/ALL_MIGRATIONS.sql`** - All database migrations in one file
- **`.env.local`** - Your environment variables (create from `.env.example`)

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── cms/                  # CMS content endpoints
│   │   ├── edu/                  # Education platform endpoints
│   │   ├── admin/                # Admin-only endpoints
│   │   ├── leaderboard/          # Leaderboard data
│   │   ├── incentives/           # Incentives management
│   │   └── reviews/              # Reviews management
│   ├── admin/                    # Admin dashboard pages
│   ├── user/                     # User dashboard pages
│   ├── login/                    # Authentication pages
│   └── page.tsx                  # Public homepage
├── components/                   # Reusable React components
│   ├── admin/                    # Admin-specific components
│   ├── edu/                      # Education components
│   └── ...                       # Shared components
├── lib/                          # Utility functions & configs
│   ├── supabase-server.ts        # Server-side Supabase client
│   ├── supabase-browser.ts       # Client-side Supabase client
│   ├── googleSheets.ts           # Google Sheets integration
│   └── types/                    # TypeScript type definitions
├── database/                     # Database schemas & migrations
│   ├── ALL_MIGRATIONS.sql        # Consolidated migrations
│   ├── cms_schema.sql            # CMS tables & seed data
│   └── migrations/               # Individual migration files
├── public/                       # Static assets
│   ├── images/                   # Images, logos, icons
│   └── videos/                   # Video files
├── middleware.ts                 # Auth middleware
├── CLBR_SETUP_GUIDE.md          # Setup instructions
├── SETUP_CHECKLIST.md           # Setup progress tracker
└── PROJECT_DUPLICATION_GUIDE.md # Complete documentation
```

## Design System

- **Colors**: Dark theme (#0D0D0D) with white accents
- **Typography**: PP Telegraf font family with Inter fallback
- **Border Radius**: 2px (small), 3px (default)
- **Spacing**: Consistent spacing using Tailwind's scale

## Sections

1. **Hero Section**: Welcome message with call-to-action buttons
2. **Stats Section**: Key performance metrics
3. **Incentives**: Feature cards highlighting benefits
4. **About Section**: Company culture and values
5. **Career Building**: How the program works

## Customization

The design closely follows the Figma specifications with:
- Exact color matching
- Proper typography hierarchy
- Responsive grid layouts
- Interactive hover states

## Deployment

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Maps**: Mapbox GL
- **Data Source**: Google Sheets API
- **Email**: Resend
- **Hosting**: Vercel

## Admin Routes

- `/admin` - Admin dashboard
- `/admin/cms/home` - CMS content editor
- `/admin/edu` - Education course management
- `/admin/incentives` - Incentives management
- `/admin/reviews` - Reviews management

## User Routes

- `/user` - User dashboard
- `/user/edu` - Education platform
- `/user/leaderboard` - Sales leaderboard
- `/user/map` - Projects map
- `/user/incentives` - View incentives
- `/user/reviews` - View reviews

## Support

For setup help, see:
- `CLBR_SETUP_GUIDE.md` - Step-by-step setup
- `PROJECT_DUPLICATION_GUIDE.md` - Complete reference
- `docs/GOOGLE_SHEETS_SETUP.md` - Google Sheets setup

---

Built for CLBR 🚀
