# Project Duplication Guide - Complete Platform Recreation

## Executive Summary

This document provides a complete guide to duplicating this Next.js sales platform for a different brand. The platform includes a CMS, authentication, leaderboard, education platform, incentives management, reviews, projects map, and comprehensive admin controls.

---

## 🎯 Quick Decision: Copy Files vs Start Fresh

**RECOMMENDATION: COPY THE FILES**

### Why Copying is Better:
- ✅ **10x Faster**: Get running in hours instead of weeks
- ✅ **Less Error-Prone**: All logic, components, and integrations already work
- ✅ **Proven Codebase**: Battle-tested code with working features
- ✅ **Easy Customization**: Just update configs, branding, and data

### What You'll Need to Change After Copying:
1. Environment variables (`.env` file)
2. Supabase project connection
3. Brand assets (logos, images, videos, colors)
4. Google Sheets connection (for leaderboard)
5. Brand-specific content in CMS
6. Domain/deployment settings

---

## 📋 Technology Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety throughout
- **Tailwind CSS** - Utility-first styling

### Backend & Database
- **Supabase** - PostgreSQL database with real-time capabilities
  - Authentication (email/password, password reset)
  - Row Level Security (RLS) policies
  - Storage for images/videos
- **Google Sheets API** - Leaderboard data source

### Key Libraries
- **@supabase/ssr** - Server-side auth helpers
- **Framer Motion** - Animations
- **Mapbox GL** - Interactive maps for projects
- **Recharts** - Data visualization
- **Resend** - Email service
- **Google APIs** - Sheets integration

---

## 📁 Project Structure

```
myaveyo/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Public homepage
│   ├── globals.css               # Global styles
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── cms/                  # CMS content endpoints
│   │   ├── edu/                  # Education platform endpoints
│   │   ├── admin/                # Admin-only endpoints
│   │   ├── leaderboard/          # Leaderboard data
│   │   ├── incentives/           # Incentives management
│   │   ├── reviews/              # Reviews management
│   │   ├── projects/             # Projects data
│   │   ├── map/                  # Map data
│   │   └── upload/               # File upload handling
│   ├── admin/                    # Admin dashboard pages
│   │   ├── page.tsx              # Admin home
│   │   ├── cms/                  # CMS management
│   │   ├── edu/                  # Course/lesson management
│   │   ├── incentives/           # Incentive management
│   │   └── reviews/              # Review management
│   ├── user/                     # Authenticated user pages
│   │   ├── page.tsx              # User dashboard
│   │   ├── edu/                  # Learning platform
│   │   ├── incentives/           # View incentives
│   │   ├── projects/             # Projects view
│   │   └── leaderboard/          # Leaderboard view
│   ├── login/                    # Public login page
│   ├── signup/                   # Public signup page
│   ├── forgot-password/          # Password reset request
│   ├── reset-password/           # Password reset form
│   ├── reviews/                  # Public reviews page
│   ├── stats/                    # Public stats page
│   ├── incentives/               # Public incentives page
│   └── brand/                    # Brand guidelines page
│
├── components/                   # Reusable React components
│   ├── admin/                    # Admin-specific components
│   │   ├── AdminLayout.tsx       # Admin page wrapper
│   │   ├── AdminSidebar.tsx      # Admin navigation
│   │   ├── TopBar.tsx            # Admin top bar
│   │   ├── CMSContentArea.tsx    # CMS editor
│   │   ├── EditModal.tsx         # Generic edit modal
│   │   └── IncentiveForm.tsx     # Incentive form
│   ├── edu/                      # Education components
│   │   ├── CourseCard.tsx        # Course display
│   │   ├── LessonListItem.tsx    # Lesson row
│   │   ├── GoogleDriveVideo.tsx  # Video player
│   │   ├── LessonNotes.tsx       # Notes interface
│   │   └── ProgressTracker.tsx   # Progress bar
│   ├── leaderboard/              # Leaderboard components
│   │   ├── Top3Card.tsx          # Top performers
│   │   └── UserRankRow.tsx       # Leaderboard row
│   ├── incentives/               # Incentive components
│   ├── map/                      # Map components
│   │   └── MapWithPins.tsx       # Mapbox integration
│   ├── projects/                 # Project components
│   ├── Navbar.tsx                # Main navigation
│   ├── Button.tsx                # Styled button
│   ├── Card.tsx                  # Card component
│   └── ...                       # Other shared components
│
├── lib/                          # Utility functions & configs
│   ├── supabase-server.ts        # Server-side Supabase client
│   ├── supabase-browser.ts       # Client-side Supabase client
│   ├── supabase.ts               # Shared Supabase utilities
│   ├── googleSheets.ts           # Google Sheets integration
│   ├── email.ts                  # Email utilities (Resend)
│   ├── analytics.ts              # Analytics tracking
│   ├── admin-pages.ts            # Admin page configurations
│   ├── types/                    # TypeScript type definitions
│   │   ├── incentive.ts
│   │   ├── review.ts
│   │   └── stats.ts
│   └── data/                     # Data fetching utilities
│       ├── incentives.ts
│       ├── leaderboard.ts
│       ├── me.ts
│       └── projects.ts
│
├── database/                     # Database schemas & migrations
│   ├── cms_schema.sql            # CMS tables & seed data
│   └── migrations/               # Database migrations
│       ├── 20251114_edu_tables.sql         # Education platform
│       ├── 20251007_project_locations.sql  # Project geocoding
│       └── 20251007_podio_geocode_jobs.sql # Geocoding jobs
│
├── docs/                         # Documentation
│   └── GOOGLE_SHEETS_SETUP.md    # Google Sheets setup guide
│
├── public/                       # Static assets
│   ├── images/                   # Images, logos, icons
│   └── videos/                   # Video files
│
├── middleware.ts                 # Auth middleware (protects /user/*)
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── vercel.json                   # Vercel deployment config
├── .env.example                  # Environment variables template
└── README.md                     # Project documentation
```

---

## 🗄️ Database Schema Overview

### Core Tables

#### 1. **cms_content** - Content Management System
Stores dynamic content for different pages/sections.

**Columns:**
- `id` (UUID) - Primary key
- `section_key` (TEXT) - Unique identifier (e.g., 'hero', 'sales', 'inside_blocks')
- `content` (JSONB) - Flexible JSON content
- `is_published` (BOOLEAN) - Published status
- `created_at` / `updated_at` (TIMESTAMP)

**Default Sections:**
- `hero` - Homepage hero section
- `inside_blocks` - "On The Inside" expandable blocks
- `sales` - Sales section content
- `home_stats` - Homepage statistics

#### 2. **reviews** - Video Reviews
Customer and rep testimonial videos.

**Columns:**
- `id` (UUID) - Primary key
- `title` (TEXT) - Review title
- `description` (TEXT) - Review description
- `video_url` (TEXT) - Video file URL
- `thumbnail_url` (TEXT) - Thumbnail image
- `type` (TEXT) - 'customer' or 'rep'
- `featured` (BOOLEAN) - Featured status
- `customer_name` / `rep_name` (TEXT) - Reviewer name
- `location` (TEXT) - Location
- `date_recorded` (DATE) - Recording date
- `status` (TEXT) - 'active', 'inactive', or 'pending'
- `created_at` / `updated_at` (TIMESTAMP)

#### 3. **incentives** - Incentive Programs
Time-based incentive campaigns (implied from types, needs to be created).

**Columns:**
- `id` (UUID) - Primary key
- `title` (TEXT) - Incentive name
- `description` (TEXT) - Details
- `background_image_url` (TEXT) - Card background
- `background_video_url` (TEXT) - Optional video background
- `live_status` (TEXT) - 'coming_up', 'live', or 'done'
- `category` (TEXT) - Category label
- `category_color` (TEXT) - Hex color
- `start_date` / `end_date` (DATE) - Date range
- `sort_order` (INTEGER) - Display order
- `is_published` (BOOLEAN)
- `created_at` / `updated_at` (TIMESTAMP)

#### 4. **courses** - Education Courses
Training courses (Closer, Setter, etc.).

**Columns:**
- `id` (UUID) - Primary key
- `title` (TEXT) - Course name
- `description` (TEXT) - Course overview
- `slug` (TEXT) - URL-friendly identifier
- `sort_order` (INTEGER) - Display order
- `is_published` (BOOLEAN)
- `created_at` / `updated_at` (TIMESTAMP)

#### 5. **lessons** - Course Lessons
Individual video lessons within courses.

**Columns:**
- `id` (UUID) - Primary key
- `course_id` (UUID) - Foreign key to courses
- `title` (TEXT) - Lesson name
- `description` (TEXT) - Lesson details
- `video_url` (TEXT) - Google Drive video URL
- `duration_minutes` (INTEGER) - Length
- `region` (TEXT) - Regional variation (e.g., 'california', 'illinois')
- `sort_order` (INTEGER) - Display order
- `is_published` (BOOLEAN)
- `created_at` / `updated_at` (TIMESTAMP)

#### 6. **lesson_progress** - User Progress Tracking
Tracks which lessons users have completed.

**Columns:**
- `id` (UUID) - Primary key
- `user_id` (UUID) - Foreign key to auth.users
- `lesson_id` (UUID) - Foreign key to lessons
- `completed` (BOOLEAN)
- `completed_at` (TIMESTAMP)
- `created_at` / `updated_at` (TIMESTAMP)
- **UNIQUE constraint**: (user_id, lesson_id)

#### 7. **lesson_notes** - User Lesson Notes
User-created notes for each lesson.

**Columns:**
- `id` (UUID) - Primary key
- `user_id` (UUID) - Foreign key to auth.users
- `lesson_id` (UUID) - Foreign key to lessons
- `content` (TEXT) - Note text
- `created_at` / `updated_at` (TIMESTAMP)

#### 8. **regions** - Regional Variations
Manage different regional content (e.g., state-specific training).

**Columns:**
- `id` (UUID) - Primary key
- `name` (TEXT) - Region name
- `slug` (TEXT) - URL-friendly identifier
- `sort_order` (INTEGER)
- `is_active` (BOOLEAN)
- `created_at` / `updated_at` (TIMESTAMP)

**Default Regions:**
- California
- Illinois

#### 9. **project_locations** - Geocoded Project Addresses
Cached geocoding results for map display.

**Columns:**
- `project_id` (UUID) - Project identifier
- `address_hash` (TEXT) - Hashed address
- `lat` / `lng` (DOUBLE PRECISION) - Coordinates
- `updated_at` (TIMESTAMP)
- **PRIMARY KEY**: (project_id, address_hash)

#### 10. **geocode_jobs** - Geocoding Job Queue
Background jobs for geocoding addresses.

**Columns:**
- `id` (UUID) - Primary key
- `project_id` (UUID) - Project to geocode
- `address` (TEXT) - Full address
- `status` (TEXT) - Job status
- `attempts` (INTEGER) - Retry count
- `created_at` / `processed_at` (TIMESTAMP)
- `last_error` (TEXT) - Error message

#### 11. **podio_data** (External Integration)
Integration with Podio project management system (if used).

### Authentication Tables (Supabase Built-in)
- `auth.users` - User accounts
  - Standard Supabase auth table
  - Custom metadata: `role` field ('admin' or regular user)

### Row Level Security (RLS)
All tables have RLS enabled with policies:
- **Public**: Can view published content
- **Authenticated Users**: Can view all published content, manage own data
- **Admins**: Can manage all content (checked via `raw_user_meta_data->>'role' = 'admin'`)

---

## 🔐 Environment Variables Setup

### Required Environment Variables

Create a `.env.local` file (use `.env.example` as template):

```env
# ============================================
# SUPABASE CONFIGURATION
# ============================================
# Get these from your new Supabase project dashboard
# Project Settings > API

NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# ============================================
# GOOGLE SHEETS API (for Leaderboard)
# ============================================
# See docs/GOOGLE_SHEETS_SETUP.md for detailed setup
# These come from Google Cloud Console > Service Account JSON

GOOGLE_PROJECT_ID=your-google-project-id
GOOGLE_PRIVATE_KEY_ID=your-private-key-id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----"
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=your-client-id

# ============================================
# GOOGLE SHEETS LEADERBOARD CONFIGURATION
# ============================================
# Your Google Sheets spreadsheet ID (from URL)
# Format: docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit

GOOGLE_SHEETS_LEADERBOARD_ID=your-spreadsheet-id-here
GOOGLE_SHEETS_GID=0
GOOGLE_SHEETS_RANGE='Sheet1'!A:AH

# ============================================
# MAPBOX (for Projects Map)
# ============================================
# Get from https://www.mapbox.com/

NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-token-here

# ============================================
# EMAIL SERVICE (Optional - for notifications)
# ============================================
# Get from https://resend.com/

RESEND_API_KEY=your-resend-api-key

# ============================================
# ANALYTICS (Optional)
# ============================================

NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

### Environment Variable Categories

#### 1. **Supabase** (REQUIRED)
- Primary database and authentication
- Get from: Supabase Dashboard > Project Settings > API

#### 2. **Google Sheets** (REQUIRED for Leaderboard)
- Powers leaderboard data
- Requires Google Cloud service account
- See detailed setup: `docs/GOOGLE_SHEETS_SETUP.md`

#### 3. **Mapbox** (REQUIRED for Projects Map)
- Interactive maps with project pins
- Free tier available: mapbox.com

#### 4. **Resend** (Optional)
- Transactional emails
- Used for password resets, notifications
- Can be disabled if not needed

#### 5. **Analytics** (Optional)
- Vercel Analytics integration
- Usage tracking

---

## 🚀 Step-by-Step Duplication Process

### Phase 1: Initial Setup (30 minutes)

#### Step 1.1: Copy Project Files
```bash
# On your local machine
cd /path/to/parent/directory
cp -r myaveyo newbrand-platform
cd newbrand-platform

# Remove git history (optional - start fresh)
rm -rf .git
git init
```

#### Step 1.2: Update Project Metadata
Edit `package.json`:
```json
{
  "name": "newbrand-campus",  // Change this
  "version": "0.1.0",
  "private": true,
  // ... rest stays the same
}
```

#### Step 1.3: Install Dependencies
```bash
npm install
```

### Phase 2: Supabase Setup (45 minutes)

#### Step 2.1: Create New Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create new organization (or use existing)
3. Create new project:
   - **Name**: "NewBrand Platform"
   - **Database Password**: Save this securely
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free tier is fine to start

#### Step 2.2: Get API Credentials
1. Go to Project Settings > API
2. Copy these values:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` `secret` key → `SUPABASE_SERVICE_ROLE_KEY`

#### Step 2.3: Run Database Migrations
In Supabase Dashboard > SQL Editor, run these SQL files **in order**:

**Migration 1: CMS & Reviews**
```sql
-- Copy and paste contents of database/cms_schema.sql
-- This creates cms_content and reviews tables
```

**Migration 2: Geocoding (if using projects/map)**
```sql
-- Copy and paste contents of database/migrations/20251007_podio_geocode_jobs.sql
-- Copy and paste contents of database/migrations/20251007_project_locations.sql
```

**Migration 3: Education Platform**
```sql
-- Copy and paste contents of database/migrations/20251114_edu_tables.sql
-- This creates courses, lessons, progress, notes tables
```

**Migration 4: Incentives Table** (needs to be created)
```sql
-- Incentives table (this will need to be created based on the type definition)
CREATE TABLE incentives (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  background_image_url TEXT NOT NULL,
  background_video_url TEXT,
  live_status TEXT CHECK (live_status IN ('coming_up', 'live', 'done')) NOT NULL DEFAULT 'coming_up',
  category TEXT NOT NULL,
  category_color TEXT NOT NULL DEFAULT '#3B82F6',
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_incentives_live_status ON incentives(live_status);
CREATE INDEX idx_incentives_published ON incentives(is_published);
CREATE INDEX idx_incentives_dates ON incentives(start_date, end_date);

ALTER TABLE incentives ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published incentives" ON incentives
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can do anything with incentives" ON incentives
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.raw_user_meta_data->>'role' = 'admin'
    )
  );
```

#### Step 2.4: Configure Supabase Storage (for images/videos)
1. Go to Storage in Supabase Dashboard
2. Create buckets:
   - `images` - For photos, thumbnails, icons
   - `videos` - For video files (or use Google Drive)
3. Set bucket policies to public read:

```sql
-- In SQL Editor
-- Make images bucket public
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );

-- Make videos bucket public (if using Supabase storage)
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'videos' );

-- Allow authenticated uploads
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'images' );

CREATE POLICY "Authenticated users can upload videos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'videos' );
```

#### Step 2.5: Create Admin User
1. Go to Authentication > Users
2. Click "Add user" > "Create new user"
3. Enter email and password
4. After creation, click on the user
5. Go to "Raw user meta data" and add:
```json
{
  "role": "admin"
}
```
6. Save changes

### Phase 3: Google Sheets Leaderboard Setup (30 minutes)

Follow the detailed guide in `docs/GOOGLE_SHEETS_SETUP.md`. Quick summary:

#### Step 3.1: Create Google Cloud Project
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create new project
3. Enable Google Sheets API

#### Step 3.2: Create Service Account
1. Go to IAM & Admin > Service Accounts
2. Create service account
3. Generate JSON key
4. Save the JSON file securely

#### Step 3.3: Prepare Spreadsheet
1. Create Google Sheet with leaderboard data
2. Format columns (see docs/GOOGLE_SHEETS_SETUP.md for structure):
   - Column A: Rep Name
   - Column N: Total TSS 2025
   - Column P: Closer TSS 2025
   - Column R: Setter TSS 2025
   - Column T: Total TSI 2025
   - Column V: Closer TSI 2025
   - Column X: Setter TSI 2025
3. Share sheet with service account email (from JSON)
4. Copy spreadsheet ID from URL

#### Step 3.4: Add to Environment Variables
Extract from JSON and add to `.env.local`:
- `GOOGLE_PROJECT_ID`
- `GOOGLE_PRIVATE_KEY_ID`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_SHEETS_LEADERBOARD_ID`

### Phase 4: Third-Party Services (15 minutes)

#### Step 4.1: Mapbox Setup (for Projects Map)
1. Create account at [mapbox.com](https://mapbox.com)
2. Go to Account > Access tokens
3. Create new token or use default
4. Add to `.env.local` as `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`

#### Step 4.2: Resend Setup (Optional - for emails)
1. Create account at [resend.com](https://resend.com)
2. Generate API key
3. Add to `.env.local` as `RESEND_API_KEY`

### Phase 5: Brand Customization (2-4 hours)

#### Step 5.1: Update Brand Colors
Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'dark': '#0D0D0D',        // Change to your dark color
        'card-dark': '#121212',   // Change to your card background
        'white': '#FFFFFF',        // Keep or change
        // Add your brand colors:
        'brand-primary': '#YOUR_COLOR',
        'brand-secondary': '#YOUR_COLOR',
      },
    },
  },
}
```

#### Step 5.2: Replace Brand Assets
Replace files in `/public/`:

**Logos:**
- `/public/images/logo.svg` - Main logo
- `/public/images/logo-white.svg` - White version
- `/public/aveyoSalesLogo.svg` - Replace with your brand logo

**Icons:**
- All icon files in `/public/images/` with naming pattern `*-icon.png`
- Required icons:
  - `dashboard-icon.png`
  - `CMS-icon.png`
  - `leaderboard-icon.png`
  - `brand-icon.png`
  - `incentives-icon.png`
  - `reviews-icon.png`
  - `projects-icon.png`
  - `EDU-icon.png`

**Images:**
- Replace all images in `/public/images/` with your brand photos
- Keep the same filenames OR update references in CMS content

**Videos:**
- Replace `/public/videos/aveyoWEB1a.mp4` - Hero background video
- Add other promotional videos

#### Step 5.3: Update CMS Content
After running the app, login as admin and go to `/admin/cms/home`:

1. **Hero Section**: Update welcome text, headings, CTAs
2. **Inside Blocks**: Update culture/training/lifestyle/growth descriptions
3. **Sales Section**: Update copy, statistics, and images
4. **Home Stats**: Update statistics and metrics

Or directly in database:
```sql
-- Update hero section
UPDATE cms_content 
SET content = jsonb_set(content, '{main_heading}', '"Your Brand Message Here"')
WHERE section_key = 'hero';

-- Update other sections similarly
```

#### Step 5.4: Update Typography (Optional)
Edit `app/globals.css` and `tailwind.config.js` to change fonts.

Current fonts:
- **PP Telegraf** - Headings and buttons
- **Inter** - Body text

To change:
1. Import new fonts in `app/globals.css`
2. Update `tailwind.config.js` font family
3. Update references throughout components

### Phase 6: Content Population (2-6 hours)

#### Step 6.1: Add Education Content
1. Go to `/admin/edu`
2. Courses are pre-seeded (Closer, Setter)
3. For each course, click "Manage Lessons"
4. Add lessons:
   - Upload videos to Google Drive
   - Make videos shareable ("Anyone with link can view")
   - Copy Google Drive URL
   - Add lesson with title, description, video URL
   - Set sort order and publish status

#### Step 6.2: Add Incentives
1. Go to `/admin/incentives`
2. Click "Create Incentive"
3. Fill in:
   - Title and description
   - Category (e.g., "Trip", "Cash Bonus", "Recognition")
   - Category color (hex code)
   - Start and end dates
   - Background image/video
   - Sort order
4. Publish

#### Step 6.3: Add Reviews
1. Upload video files to Supabase Storage or use URLs
2. Generate thumbnails for each video
3. Go to `/admin/reviews`
4. Add reviews with:
   - Title and description
   - Video and thumbnail URLs
   - Type (customer or rep)
   - Featured status
   - Reviewer name and location
   - Recording date

#### Step 6.4: Populate Leaderboard
1. Update your Google Sheet with rep data
2. Ensure columns match expected format
3. Test API endpoint: `http://localhost:3000/api/leaderboard`

### Phase 7: Testing (1-2 hours)

#### Step 7.1: Start Development Server
```bash
npm run dev
```
Visit http://localhost:3000

#### Step 7.2: Test All Features

**Public Pages:**
- [ ] Homepage loads with correct content
- [ ] Reviews page displays videos
- [ ] Stats page shows data
- [ ] Incentives page lists active incentives

**Authentication:**
- [ ] Signup works
- [ ] Login works
- [ ] Logout works
- [ ] Password reset flow works
- [ ] Protected routes redirect to login

**User Dashboard:**
- [ ] `/user` dashboard loads
- [ ] Education platform accessible
- [ ] Can watch lessons and mark complete
- [ ] Can take notes on lessons
- [ ] Progress tracking works
- [ ] Leaderboard displays
- [ ] Projects map shows pins (if configured)
- [ ] Incentives visible

**Admin Dashboard:**
- [ ] `/admin` dashboard loads (admin user only)
- [ ] CMS editing works
- [ ] Can create/edit courses and lessons
- [ ] Can create/edit incentives
- [ ] Can create/edit reviews
- [ ] Changes publish successfully

#### Step 7.3: Check Console for Errors
- No console errors
- No failed API calls
- No missing images/assets

### Phase 8: Deployment (30 minutes)

#### Step 8.1: Connect to Vercel (Recommended)
1. Push code to GitHub:
```bash
git add .
git commit -m "Initial setup for NewBrand"
git remote add origin https://github.com/yourusername/newbrand-platform.git
git push -u origin master
```

2. Go to [vercel.com](https://vercel.com)
3. Import project from GitHub
4. Configure environment variables (copy from `.env.local`)
5. Deploy

#### Step 8.2: Configure Custom Domain
1. In Vercel project settings > Domains
2. Add your domain
3. Update DNS records as instructed

#### Step 8.3: Set Production Environment Variables
In Vercel Dashboard > Settings > Environment Variables:
- Add all variables from `.env.local`
- Ensure `NEXT_PUBLIC_*` variables are present
- Verify Supabase production URLs

---

## 🎨 Feature Breakdown

### 1. **Content Management System (CMS)**
**Location**: `/admin/cms/*`, `/app/api/cms/*`

**Capabilities:**
- Edit homepage hero section
- Manage "On The Inside" expandable blocks
- Update sales section with grid layout
- Configure statistics cards
- All content stored in `cms_content` table as JSONB
- Real-time preview before publishing
- Image and video management

**Admin Pages:**
- `/admin/cms/home` - Homepage management
- `/admin/cms/incentives` - Incentives page content
- `/admin/cms/reviews` - Reviews page content

### 2. **Education Platform (EDU)**
**Location**: `/user/edu/*`, `/admin/edu/*`, `/app/api/edu/*`

**Features:**
- Course catalog (Closer, Setter, expandable)
- Video lessons hosted on Google Drive
- Progress tracking per user
- Note-taking per lesson
- "Up Next" and "Recently Completed" suggestions
- Course completion percentage
- Regional variations (California, Illinois, etc.)

**User Pages:**
- `/user/edu` - Course dashboard
- `/user/edu/[courseSlug]` - Course details with lesson list
- `/user/edu/[courseSlug]/[lessonId]` - Lesson viewer with video and notes
- `/user/edu/notes` - All user notes

**Admin Pages:**
- `/admin/edu` - Course management
- `/admin/edu/courses/[courseId]` - Lesson management

**Database Tables:**
- `courses`, `lessons`, `lesson_progress`, `lesson_notes`, `regions`

### 3. **Leaderboard**
**Location**: `/user/leaderboard`, `/app/api/leaderboard/*`

**Features:**
- Real-time rankings from Google Sheets
- Multiple metrics (TSS, TSI) for different roles (Closer, Setter)
- Top 3 spotlight cards
- Position change indicators (up/down arrows)
- Sortable by different metrics
- Avatar display
- Regional filtering (if configured)

**Data Source:**
- Google Sheets with service account access
- Columns: Name, TSS/TSI totals, role-specific metrics
- Updates on page refresh

**Configuration:**
- Edit `lib/googleSheets.ts` for column mappings
- Edit `lib/data/leaderboard.ts` for data transformations

### 4. **Incentives Management**
**Location**: `/admin/incentives`, `/user/incentives`, `/incentives`

**Features:**
- Time-based campaigns (Coming Up, Live, Done)
- Category tags with custom colors
- Background images and videos
- Sort order control
- Publish/unpublish
- Date range configuration
- Automatic status calculation

**Database:** `incentives` table

**User Views:**
- Public page: `/incentives` - All published incentives
- User dashboard: `/user/incentives` - Incentives relevant to user

**Admin:**
- `/admin/incentives` - Full CRUD management

### 5. **Reviews Management**
**Location**: `/admin/reviews`, `/reviews`

**Features:**
- Video testimonials (customer and rep reviews)
- Thumbnail generation
- Featured reviews
- Type filtering (customer/rep)
- Status management (active/inactive/pending)
- Location tagging
- Date recorded tracking

**Database:** `reviews` table

**Public Page:**
- `/reviews` - Display all active reviews with filtering

**Admin:**
- `/admin/reviews` - Full review management

### 6. **Projects & Map**
**Location**: `/user/projects`, `/app/api/projects/*`, `/app/api/map/*`

**Features:**
- Interactive Mapbox map with project pins
- Project geocoding (addresses → coordinates)
- Background geocoding job queue
- Project filtering by status
- Project statistics
- Map clustering for dense areas

**Database Tables:**
- `project_locations` - Cached geocoded addresses
- `geocode_jobs` - Background job queue
- `podio_data` - External project data (if using Podio)

**Components:**
- `components/map/MapWithPins.tsx` - Mapbox integration

**Configuration:**
- Requires `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`
- Configure in `next.config.js` for Mapbox domains

### 7. **Authentication & User Management**
**Location**: `/login`, `/signup`, `/forgot-password`, `/reset-password`

**Features:**
- Email/password authentication
- Password reset flow with email
- Admin role management
- Session persistence
- Protected routes with middleware
- User profile management

**Middleware:**
- `middleware.ts` - Protects `/user/*` routes
- Redirects unauthenticated users to `/login`

**Supabase Auth:**
- Built-in user management
- `auth.users` table
- Custom metadata for roles: `raw_user_meta_data->>'role'`

**Admin Setup:**
```sql
-- Make a user admin
UPDATE auth.users
SET raw_user_meta_data = jsonb_set(
  COALESCE(raw_user_meta_data, '{}'::jsonb),
  '{role}',
  '"admin"'
)
WHERE email = 'admin@example.com';
```

### 8. **Admin Dashboard**
**Location**: `/admin/*`

**Features:**
- Unified admin layout with sidebar navigation
- Page-specific tabs
- Icon-based navigation
- Access control (admin role required)
- Content management for all sections
- User application reviews

**Components:**
- `components/admin/AdminLayout.tsx` - Page wrapper
- `components/admin/AdminSidebar.tsx` - Left navigation
- `components/admin/TopBar.tsx` - Top bar with tabs

**Configuration:**
- `lib/admin-pages.ts` - Define pages, icons, and tabs

**Pages:**
- `/admin` - Dashboard overview
- `/admin/cms/*` - Content management
- `/admin/edu/*` - Education management
- `/admin/incentives` - Incentive management
- `/admin/reviews` - Review management
- `/admin/leaderboard` - Leaderboard admin view
- `/admin/brand` - Brand guidelines

### 9. **Analytics & Stats**
**Location**: `/stats`, `/app/api/stats/*`

**Features:**
- Homepage statistics display
- Performance metrics
- Revenue tracking
- Charts and visualizations (Recharts)
- Time period filtering

**Public Page:**
- `/stats` - Public-facing statistics page

---

## 📝 Post-Duplication Checklist

### Required Changes
- [ ] Update `package.json` with new brand name
- [ ] Create new Supabase project and add credentials to `.env`
- [ ] Run all database migrations in Supabase
- [ ] Create admin user in Supabase
- [ ] Set up Google Sheets with service account
- [ ] Add Google Sheets credentials to `.env`
- [ ] Create Mapbox account and add token to `.env`
- [ ] Replace all logo files in `/public/`
- [ ] Replace all icon files in `/public/images/`
- [ ] Update brand colors in `tailwind.config.js`
- [ ] Update CMS content via admin dashboard
- [ ] Add education course lessons
- [ ] Add incentive campaigns
- [ ] Add review videos
- [ ] Populate leaderboard Google Sheet
- [ ] Test all authentication flows
- [ ] Deploy to Vercel/hosting platform
- [ ] Configure custom domain
- [ ] Set production environment variables

### Optional Customization
- [ ] Change fonts in `globals.css` and `tailwind.config.js`
- [ ] Update email templates (if using Resend)
- [ ] Add custom analytics tracking
- [ ] Configure additional Supabase storage buckets
- [ ] Add more education courses beyond Closer/Setter
- [ ] Customize admin sidebar links
- [ ] Add new CMS sections
- [ ] Create additional user dashboard pages
- [ ] Implement additional map features
- [ ] Add more leaderboard metrics

---

## 🔧 Configuration Files Reference

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    // Node.js polyfills for client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        // ... other polyfills
      }
    }
    return config
  },
  images: {
    domains: [
      'localhost',
      'your-supabase-project.supabase.co', // Add your Supabase domain
      'lh3.googleusercontent.com', // For Google Drive thumbnails
    ],
  },
  api: {
    bodyParser: {
      sizeLimit: '50mb', // For video uploads
    },
    responseLimit: false,
  },
}

module.exports = nextConfig
```

### `middleware.ts`
Protects `/user/*` routes. Modify if you need different protection rules:

```typescript
export const config = {
  matcher: ['/user/:path*'], // Add more patterns as needed
}
```

### `vercel.json`
Deployment configuration:

```json
{
  "functions": {
    "app/api/upload/route.ts": {
      "maxDuration": 60  // Increase for large uploads
    }
  }
}
```

### `tailwind.config.js`
Brand colors and design tokens:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'dark': '#0D0D0D',          // Main dark background
        'card-dark': '#121212',     // Card backgrounds
        'white': '#FFFFFF',         // Text and accents
        // Add your brand colors here
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '3px',
      },
      fontFamily: {
        'telegraf': ['PP Telegraf', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
}
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. **Supabase Connection Errors**
**Error**: `Failed to fetch` or `Invalid JWT`

**Solutions:**
- Verify `.env` variables are correct (no extra spaces)
- Check Supabase project is not paused (free tier pauses after inactivity)
- Ensure anon key and service role key are not swapped
- Clear browser cookies and try again

#### 2. **Google Sheets Not Loading**
**Error**: `Authentication failed` or `Spreadsheet not found`

**Solutions:**
- Verify service account email has access to spreadsheet
- Check `GOOGLE_PRIVATE_KEY` includes `\n` line breaks
- Ensure spreadsheet ID is correct (from URL between `/d/` and `/edit`)
- Check sheet range matches your sheet name (`'Sheet1'!A:AH`)
- Verify Google Sheets API is enabled in Google Cloud Console

#### 3. **Admin Access Issues**
**Error**: Can't access `/admin/*` pages

**Solutions:**
- Check user has `role: "admin"` in raw_user_meta_data
- Verify you're logged in as the admin user
- Check RLS policies in database (may need to disable temporarily for debugging)
- Clear browser cache and re-login

**Manually set admin role:**
```sql
UPDATE auth.users
SET raw_user_meta_data = '{"role": "admin"}'::jsonb
WHERE email = 'your-admin-email@example.com';
```

#### 4. **Video Not Playing**
**Error**: Google Drive videos show "Video unavailable"

**Solutions:**
- Ensure video sharing is set to "Anyone with the link can view"
- Check video URL format is correct
- Try opening the video URL directly in browser
- Check video hasn't exceeded Google Drive playback limits

#### 5. **Map Not Loading**
**Error**: Mapbox map shows blank or error

**Solutions:**
- Verify `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` is set correctly
- Check Mapbox token is valid and not expired
- Ensure token has required scopes (maps:read)
- Add your domain to Mapbox URL restrictions if configured

#### 6. **Images Not Displaying**
**Error**: 404 errors for images

**Solutions:**
- Check file paths start with `/` (e.g., `/images/logo.svg`)
- Verify files exist in `/public/` directory
- Check Supabase Storage bucket policies are public
- Update `next.config.js` with correct image domains

#### 7. **Build Errors**
**Error**: TypeScript or build errors

**Solutions:**
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires 18+)
- Clear `.next` folder: `rm -rf .next`
- Run `npm run build` to see detailed errors

#### 8. **Deployment Issues**
**Error**: App works locally but fails in production

**Solutions:**
- Verify all environment variables are set in Vercel/hosting
- Check `NEXT_PUBLIC_*` variables are present (required for client-side)
- Review build logs for specific errors
- Ensure Supabase URL is production URL (not localhost)

#### 9. **Authentication Loops**
**Error**: Constant redirects between `/login` and `/user`

**Solutions:**
- Clear all browser cookies for the domain
- Check middleware is not conflicting with auth flow
- Verify session cookies are being set properly
- Check `NEXT_PUBLIC_SUPABASE_URL` matches your actual Supabase URL

#### 10. **CMS Content Not Saving**
**Error**: Changes don't persist

**Solutions:**
- Check admin user has proper permissions
- Verify RLS policies allow authenticated users to UPDATE
- Check browser console for API errors
- Test API endpoint directly: `POST /api/cms/content`

---

## 🔒 Security Best Practices

### Environment Variables
- **Never commit** `.env` or `.env.local` to version control
- Use `.env.example` as template without real values
- Rotate Supabase service role key if exposed
- Keep Google service account JSON secure

### Supabase
- Use Row Level Security (RLS) on all tables
- Limit service role key usage to server-side only
- Never expose service role key to client
- Enable email confirmations for signups (optional)
- Set up rate limiting on API routes

### Admin Access
- Use strong passwords for admin accounts
- Limit number of admin users
- Audit admin actions (add logging if needed)
- Consider 2FA for production admin accounts

### File Uploads
- Validate file types on server-side
- Limit file sizes (configured in `next.config.js`)
- Scan uploads for malware (if possible)
- Use signed URLs for sensitive files

### API Routes
- Validate all inputs
- Use authentication checks on protected routes
- Rate limit public APIs
- Sanitize user-generated content (XSS prevention)

---

## 📚 Additional Resources

### Documentation Links
- **Next.js**: https://nextjs.org/docs
- **Supabase**: https://supabase.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Mapbox GL**: https://docs.mapbox.com/mapbox-gl-js
- **Google Sheets API**: https://developers.google.com/sheets/api
- **Framer Motion**: https://www.framer.com/motion/

### Project-Specific Docs
- `README.md` - Project overview
- `EDU_PLATFORM_SUMMARY.md` - Education platform details
- `docs/GOOGLE_SHEETS_SETUP.md` - Google Sheets setup guide

### Support
- Check GitHub issues for similar problems
- Review Supabase community forums
- Consult Next.js GitHub discussions

---

## 🎓 Understanding the Codebase

### Key Patterns

#### 1. **API Route Structure**
All API routes follow Next.js App Router convention:
```
app/api/[feature]/route.ts        # GET/POST for collection
app/api/[feature]/[id]/route.ts   # GET/PUT/DELETE for single item
```

#### 2. **Supabase Client Usage**
- **Server Components/API Routes**: Use `createSupabaseServer()` from `lib/supabase-server.ts`
- **Client Components**: Use `createSupabaseBrowser()` from `lib/supabase-browser.ts`
- **Never mix** server and client Supabase clients

#### 3. **Authentication Flow**
1. User submits credentials
2. API route validates with Supabase
3. Supabase sets session cookies
4. Middleware checks cookies on protected routes
5. User redirected to dashboard or login

#### 4. **CMS Pattern**
- Content stored as JSONB in `cms_content` table
- `section_key` identifies each section (e.g., 'hero', 'sales')
- Admin edits JSON directly
- Frontend fetches and renders dynamically

#### 5. **Admin Layout Pattern**
```tsx
<AdminLayout pageKey="feature">
  <PageContent />
</AdminLayout>
```
- `pageKey` determines sidebar icon and tabs
- Configured in `lib/admin-pages.ts`
- Reusable across all admin pages

### File Naming Conventions
- `page.tsx` - Page component (Next.js routing)
- `route.ts` - API route handler
- `layout.tsx` - Layout wrapper
- `[param]/` - Dynamic route segment
- `*.ts` - TypeScript utilities/types
- `*.tsx` - React components

### Component Organization
- **Smart Components** (pages): Fetch data, handle state
- **Dumb Components** (components/): Presentational only
- **Shared Components**: In `/components/`
- **Feature Components**: In `/components/[feature]/`

---

## 🚀 Next Steps After Duplication

### Immediate Tasks
1. **Test Everything**: Go through complete user and admin flows
2. **Update Content**: Replace all Aveyo-specific content with your brand
3. **Invite Users**: Start adding real users to test
4. **Monitor**: Check error logs and API performance

### Short-term Enhancements
1. **Email Templates**: Customize password reset and notification emails
2. **Analytics**: Add detailed tracking for user behavior
3. **Mobile Testing**: Ensure responsive design works on all devices
4. **Performance**: Optimize images, enable caching
5. **SEO**: Add meta tags, sitemaps, Open Graph tags

### Long-term Roadmap
1. **Additional Features**: Chat, notifications, mobile app
2. **Integrations**: CRM, payment processing, SMS notifications
3. **Advanced Analytics**: Dashboards, reports, insights
4. **Gamification**: Badges, achievements, point systems
5. **Social Features**: Teams, collaboration, messaging

---

## 📞 Contact & Support

For questions specific to this codebase:
1. Review this documentation thoroughly
2. Check existing code comments
3. Test in development environment first
4. Document any issues or improvements

---

## ✅ Final Checklist

Before going live:

### Technical
- [ ] All environment variables set
- [ ] Database migrations completed
- [ ] Admin user created
- [ ] All external services connected (Supabase, Google Sheets, Mapbox)
- [ ] Build succeeds without errors
- [ ] Deployed to production
- [ ] Custom domain configured
- [ ] SSL certificate active

### Content
- [ ] All brand assets replaced
- [ ] CMS content updated
- [ ] Education courses added
- [ ] Incentives configured
- [ ] Reviews added
- [ ] Leaderboard populated
- [ ] Legal pages added (Terms, Privacy)

### Testing
- [ ] Authentication works (signup, login, logout, reset)
- [ ] Admin dashboard accessible
- [ ] User dashboard loads
- [ ] Education platform functional
- [ ] Leaderboard displays
- [ ] Map loads (if using)
- [ ] Mobile responsive
- [ ] Cross-browser tested

### Security
- [ ] Service role key not exposed to client
- [ ] RLS policies active on all tables
- [ ] Admin users configured
- [ ] File upload limits set
- [ ] API rate limiting considered

### Launch
- [ ] Backup database
- [ ] Monitor error logs
- [ ] Test from production domain
- [ ] Invite beta testers
- [ ] Gather feedback

---

## 🎉 Conclusion

You now have a complete guide to duplicate this platform for your new brand. The key is to:

1. **Copy the files** (don't rebuild from scratch)
2. **Update configurations** (Supabase, environment variables)
3. **Customize branding** (colors, logos, content)
4. **Populate content** (courses, incentives, reviews)
5. **Test thoroughly** (all features and flows)
6. **Deploy confidently** (Vercel, environment variables)

This platform is production-ready and includes:
- ✅ Full authentication system
- ✅ Content management (CMS)
- ✅ Education platform with video lessons
- ✅ Leaderboard with Google Sheets
- ✅ Incentives management
- ✅ Reviews system
- ✅ Interactive maps
- ✅ Admin dashboard
- ✅ User dashboard
- ✅ Responsive design
- ✅ TypeScript type safety
- ✅ Row level security

**Good luck with your new brand platform! 🚀**
