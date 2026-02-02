# CLBR Platform Setup Checklist

Use this checklist to track your setup progress.

## ✅ Phase 1: Project Setup (COMPLETED)

- [x] Project files copied
- [x] `package.json` updated with "clbr-platform" name
- [x] Git repository initialized
- [x] `.env.local` template created
- [x] Database migration file consolidated (`database/ALL_MIGRATIONS.sql`)
- [x] Setup documentation created

## 📋 Phase 2: External Services Setup (YOUR ACTION REQUIRED)

### Supabase Setup

- [ ] Create account at https://supabase.com
- [ ] Create new project named "CLBR Platform"
- [ ] Copy Project URL to `.env.local` → `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Copy anon key to `.env.local` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Copy service_role key to `.env.local` → `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Open SQL Editor and run entire `database/ALL_MIGRATIONS.sql` file
- [ ] Create storage bucket: `images` (public)
- [ ] Create storage bucket: `videos` (public)
- [ ] Create admin user in Authentication > Users
- [ ] Edit admin user metadata to add: `{"role": "admin"}`
- [ ] Save admin email and password for login

### Google Cloud & Sheets Setup

- [ ] Create Google Cloud project at https://console.cloud.google.com
- [ ] Enable Google Sheets API
- [ ] Create service account
- [ ] Download JSON key file
- [ ] Extract values from JSON to `.env.local`:
  - [ ] `GOOGLE_PROJECT_ID`
  - [ ] `GOOGLE_PRIVATE_KEY_ID`
  - [ ] `GOOGLE_PRIVATE_KEY`
  - [ ] `GOOGLE_CLIENT_EMAIL`
  - [ ] `GOOGLE_CLIENT_ID`
- [ ] Create Google Sheet for leaderboard
- [ ] Share sheet with service account email
- [ ] Copy spreadsheet ID to `.env.local` → `GOOGLE_SHEETS_LEADERBOARD_ID`
- [ ] Set up columns: Rep Name (A), TSS (N), etc.

### Mapbox Setup

- [ ] Create account at https://mapbox.com
- [ ] Copy access token to `.env.local` → `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`

### Resend Setup (Optional)

- [ ] Create account at https://resend.com
- [ ] Generate API key
- [ ] Copy to `.env.local` → `RESEND_API_KEY`

## 📋 Phase 3: Local Development & Testing

- [ ] Run `npm install`
- [ ] Verify `.env.local` has all required values
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:3000 - homepage loads
- [ ] Test signup at `/signup`
- [ ] Test login at `/login` with admin credentials
- [ ] Access `/admin` dashboard (should work with admin user)
- [ ] Test `/admin/cms/home` - can view and edit CMS content
- [ ] Test `/admin/edu` - can view courses
- [ ] Test `/admin/incentives` - can create incentives
- [ ] Test `/admin/reviews` - can create reviews
- [ ] Visit `/user` dashboard - loads successfully
- [ ] Check `/user/edu` - courses display
- [ ] Check `/user/leaderboard` - data loads from Google Sheets
- [ ] Check `/user/map` - map displays (if Mapbox configured)
- [ ] Check browser console - no errors

## 📋 Phase 4: Deployment to Vercel

- [ ] Create GitHub repository
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial CLBR platform setup"`
- [ ] Run: `git remote add origin [YOUR_REPO_URL]`
- [ ] Run: `git push -u origin master`
- [ ] Go to https://vercel.com and login
- [ ] Import GitHub repository
- [ ] Add ALL environment variables from `.env.local`
- [ ] Deploy
- [ ] Visit production URL - site works
- [ ] Test login on production
- [ ] Test admin access on production

## 📋 Phase 5: Content Population

- [ ] Upload brand videos to Google Drive or Supabase
- [ ] Add lessons to Closer course via `/admin/edu`
- [ ] Add lessons to Setter course via `/admin/edu`
- [ ] Create incentive campaigns via `/admin/incentives`
- [ ] Upload review videos
- [ ] Add reviews via `/admin/reviews`
- [ ] Populate leaderboard Google Sheet with real data
- [ ] Test all content displays correctly

## 📋 Phase 6: Brand Customization

- [ ] Gather brand assets (logos, colors, images)
- [ ] Update colors in `tailwind.config.js`
- [ ] Replace `/public/aveyoSalesLogo.svg`
- [ ] Replace `/public/images/logo.svg`
- [ ] Replace all icon files in `/public/images/`
- [ ] Replace images in `/public/images/`
- [ ] Replace video in `/public/videos/`
- [ ] Update CMS content via `/admin/cms/home`
- [ ] Replace "Aveyo" references with "CLBR"
- [ ] Update copyright notices
- [ ] Rebuild and redeploy

## 📋 Phase 7: Final Review

- [ ] All features working in production
- [ ] All pages load without errors
- [ ] Authentication flows working
- [ ] Admin dashboard functional
- [ ] Content displays correctly
- [ ] Leaderboard updates
- [ ] Map displays locations
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint

# Git operations
git add .
git commit -m "Your message"
git push origin master
```

---

## Important Files

- `.env.local` - Your environment variables (NEVER commit!)
- `database/ALL_MIGRATIONS.sql` - Run this in Supabase SQL Editor
- `CLBR_SETUP_GUIDE.md` - Detailed setup instructions
- `PROJECT_DUPLICATION_GUIDE.md` - Complete reference guide
- `docs/GOOGLE_SHEETS_SETUP.md` - Google Sheets detailed guide

---

## Support & Troubleshooting

See `CLBR_SETUP_GUIDE.md` for detailed troubleshooting tips.

Common issues:
- **Supabase connection**: Check all 3 env vars are correct
- **Google Sheets not loading**: Verify service account has access
- **Admin access denied**: Check user metadata has `"role": "admin"`
- **Build errors**: Check Node.js version (18+), run `npm install`

---

## Current Status

**Last Updated:** {{DATE}}

**Setup Progress:** 
- ✅ Project structure: COMPLETE
- ⏳ External services: PENDING (your action required)
- ⏳ Local testing: PENDING (after external services)
- ⏳ Deployment: PENDING
- ⏳ Content: PENDING
- ⏳ Branding: PENDING

---

Good luck! 🚀
