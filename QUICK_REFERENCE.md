# CLBR Platform - Quick Reference Card

## Essential Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (localhost:3000)
npm run build           # Build for production
npm start               # Run production build locally

# Git
git status              # Check changes
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push origin master  # Push to GitHub
```

## Required Environment Variables

**CRITICAL - Add these to `.env.local` before running:**

```env
# Supabase (3 variables)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Google Sheets (5 variables)
GOOGLE_PROJECT_ID=your-project-id
GOOGLE_PRIVATE_KEY_ID=xxx
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
GOOGLE_CLIENT_EMAIL=xxx@xxx.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=xxx

# Google Sheets Config (3 variables)
GOOGLE_SHEETS_LEADERBOARD_ID=spreadsheet_id_here
GOOGLE_SHEETS_GID=0
GOOGLE_SHEETS_RANGE='Sheet1'!A:AH

# Mapbox (1 variable)
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=pk.xxx

# Optional: Resend
RESEND_API_KEY=re_xxx
```

## Setup Order

1. ✅ **Project Setup** - DONE
2. ⏳ **Supabase** - Create project, run migrations, create admin
3. ⏳ **Google Sheets** - Create service account, share spreadsheet
4. ⏳ **Mapbox** - Get access token
5. ⏳ **Test Locally** - `npm run dev`
6. ⏳ **Deploy** - Push to GitHub, deploy to Vercel
7. ⏳ **Content** - Add courses, lessons, incentives, reviews
8. ⏳ **Branding** - Replace logos, colors, images

## Important Routes

### Public
- `/` - Homepage
- `/login` - Login page
- `/signup` - Signup page
- `/reviews` - Reviews page
- `/stats` - Statistics page
- `/incentives` - Incentives page

### User Dashboard
- `/user` - User dashboard
- `/user/edu` - Education platform
- `/user/leaderboard` - Leaderboard
- `/user/map` - Projects map
- `/user/incentives` - View incentives
- `/user/profile` - User profile

### Admin Dashboard
- `/admin` - Admin home
- `/admin/cms/home` - Edit homepage content
- `/admin/edu` - Manage courses/lessons
- `/admin/incentives` - Manage incentives
- `/admin/reviews` - Manage reviews

## Database Migrations

Run this file in Supabase SQL Editor:
- `database/ALL_MIGRATIONS.sql` - All migrations in one file

Creates:
- `cms_content` - CMS content
- `reviews` - Video reviews
- `courses` - Education courses
- `lessons` - Course lessons
- `lesson_progress` - User progress
- `lesson_notes` - User notes
- `regions` - Regional variations
- `incentives` - Incentive campaigns
- `project_locations` - Map locations
- `geocode_jobs` - Geocoding queue

## Supabase Storage Buckets

Create these buckets (make public):
- `images` - For photos, thumbnails, icons
- `videos` - For video files

## Admin User Setup

In Supabase Authentication > Users:
1. Create user with email/password
2. Edit "Raw user meta data"
3. Set to: `{"role": "admin"}`
4. Save

## Common Issues

**Can't access /admin:**
- Check user has `"role": "admin"` in metadata
- Log out and log back in

**Google Sheets not loading:**
- Verify service account has access to sheet
- Check GOOGLE_PRIVATE_KEY has `\n` characters

**Supabase errors:**
- Check all 3 env variables are correct
- Ensure project is not paused (free tier)

**Build errors:**
- Check Node.js version: `node -v` (need 18+)
- Delete node_modules: `rm -rf node_modules && npm install`

## File Locations

**Setup Docs:**
- `CLBR_SETUP_GUIDE.md` - Full setup guide
- `SETUP_CHECKLIST.md` - Progress tracker
- `PROJECT_DUPLICATION_GUIDE.md` - Complete reference
- `.env.local` - Your credentials (never commit!)

**Database:**
- `database/ALL_MIGRATIONS.sql` - Run in Supabase
- `database/cms_schema.sql` - CMS tables
- `database/migrations/` - Individual migrations

**Config:**
- `package.json` - Dependencies
- `tailwind.config.js` - Colors, fonts
- `next.config.js` - Next.js config
- `middleware.ts` - Route protection

## Deployment to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy CLBR platform"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin master

# 2. In Vercel Dashboard
# - Import repository
# - Add ALL env vars from .env.local
# - Deploy

# 3. Test production
# - Visit Vercel URL
# - Test login
# - Test admin access
```

## Brand Customization

**Colors** - Edit `tailwind.config.js`:
```javascript
colors: {
  'dark': '#0D0D0D',        // Main dark bg
  'card-dark': '#121212',    // Card bg
  // Add custom colors
}
```

**Logos to Replace:**
- `/public/aveyoSalesLogo.svg`
- `/public/images/logo.svg`
- `/public/images/logo-white.svg`

**Icons to Replace (in /public/images/):**
- dashboard-icon.png
- CMS-icon.png
- leaderboard-icon.png
- brand-icon.png
- incentives-icon.png
- reviews-icon.png
- projects-icon.png
- EDU-icon.png

**CMS Content:**
- Login as admin
- Go to `/admin/cms/home`
- Update all sections
- Change "Aveyo" to "CLBR"

## Support

📖 **Full Documentation:**
- See `CLBR_SETUP_GUIDE.md`
- See `PROJECT_DUPLICATION_GUIDE.md`

🔧 **Troubleshooting:**
- See "Troubleshooting" section in `CLBR_SETUP_GUIDE.md`

---

**Ready to Start?**
1. Fill in `.env.local` with your credentials
2. Run `npm install`
3. Run `npm run dev`
4. Visit http://localhost:3000

Good luck! 🚀
