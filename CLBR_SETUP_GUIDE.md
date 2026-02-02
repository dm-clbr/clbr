# CLBR Platform Setup Guide

This guide will help you set up the CLBR sales platform from scratch.

## Current Status

✅ Project files copied and configured
✅ Git repository initialized
✅ package.json updated with CLBR branding
✅ .env.local template created

## Next Steps

Follow these phases in order:

---

## Phase 1: Supabase Setup ⚠️ CRITICAL

### 1.1 Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in details:
   - **Organization**: Create new or use existing
   - **Project Name**: "CLBR Platform"
   - **Database Password**: **SAVE THIS PASSWORD SECURELY!**
   - **Region**: Choose closest to your users (e.g., US West)
   - **Pricing Plan**: Free tier is fine to start
5. Click "Create new project" (takes ~2 minutes)

### 1.2 Get API Credentials

Once project is ready:

1. Click on your project
2. Go to **Project Settings** (gear icon in sidebar)
3. Click **API** in the left menu
4. Copy these three values:

   **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   → Put in `.env.local` as `NEXT_PUBLIC_SUPABASE_URL`

   **anon public**: `eyJhbGc...` (long string)
   → Put in `.env.local` as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

   **service_role secret**: `eyJhbGc...` (long string, different from above)
   → Put in `.env.local` as `SUPABASE_SERVICE_ROLE_KEY`

### 1.3 Run Database Migrations

1. In Supabase Dashboard, click **SQL Editor** in the sidebar
2. Click **New Query**
3. Copy and paste the ENTIRE contents of `database/ALL_MIGRATIONS.sql` (I've created this for you)
4. Click **Run** (bottom right)
5. Wait for success message

If any errors occur, read the error message carefully. Most common issues:
- RLS policies already exist (safe to ignore)
- Syntax errors (make sure you copied the entire file)

### 1.4 Create Storage Buckets

1. In Supabase Dashboard, click **Storage** in the sidebar
2. Click **New bucket**
3. Create bucket named: `images`
   - Make it **public**
4. Click **New bucket** again
5. Create bucket named: `videos`
   - Make it **public**

### 1.5 Create Admin User

1. In Supabase Dashboard, click **Authentication** > **Users**
2. Click **Add user** > **Create new user**
3. Enter:
   - **Email**: Your admin email (e.g., admin@clbr.com)
   - **Password**: Strong password (save it!)
   - **Auto Confirm User**: Check this box
4. Click **Create user**
5. Click on the newly created user in the list
6. Scroll to **User Metadata** section
7. Click **Edit** on "Raw user meta data"
8. Replace the content with:
   ```json
   {
     "role": "admin"
   }
   ```
9. Click **Save**

**IMPORTANT**: This email/password is how you'll login as admin!

---

## Phase 2: Google Sheets Setup (for Leaderboard)

### 2.1 Create Google Cloud Project

1. Go to [https://console.cloud.google.com](https://console.cloud.google.com)
2. Click the project dropdown (top left)
3. Click **New Project**
4. Name: "CLBR Platform API"
5. Click **Create**
6. Wait for project creation (~30 seconds)

### 2.2 Enable Google Sheets API

1. In the Cloud Console, make sure your new project is selected
2. Click the hamburger menu (☰) > **APIs & Services** > **Library**
3. Search for "Google Sheets API"
4. Click on it
5. Click **Enable**

### 2.3 Create Service Account

1. Click hamburger menu (☰) > **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Fill in:
   - **Service account name**: "CLBR Sheets Reader"
   - **Service account ID**: (auto-filled)
4. Click **Create and Continue**
5. **Grant this service account access**: Select "Editor" role
6. Click **Continue**
7. Click **Done**

### 2.4 Generate JSON Key

1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** > **Create new key**
4. Select **JSON**
5. Click **Create**
6. **SAVE THE DOWNLOADED JSON FILE SECURELY!**

### 2.5 Extract Credentials from JSON

Open the downloaded JSON file and find these values:

```json
{
  "project_id": "xxx",           → GOOGLE_PROJECT_ID
  "private_key_id": "xxx",       → GOOGLE_PRIVATE_KEY_ID
  "private_key": "-----BEGIN...", → GOOGLE_PRIVATE_KEY (keep \n characters!)
  "client_email": "xxx@xxx.iam.gserviceaccount.com", → GOOGLE_CLIENT_EMAIL
  "client_id": "xxx"             → GOOGLE_CLIENT_ID
}
```

Copy these values to `.env.local`

**IMPORTANT for GOOGLE_PRIVATE_KEY**: Copy it EXACTLY as shown, including the quotes and \n characters!

### 2.6 Create Leaderboard Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "CLBR Leaderboard"
4. Set up columns:
   - Column A: Rep Name
   - Column N: Total TSS 2025
   - Column P: Closer TSS 2025
   - Column R: Setter TSS 2025
   - Column T: Total TSI 2025
   - Column V: Closer TSI 2025
   - Column X: Setter TSI 2025

5. **Share the spreadsheet**:
   - Click **Share** button (top right)
   - Paste the `client_email` from your JSON file (ends with @...iam.gserviceaccount.com)
   - Give it **Editor** permission
   - Uncheck "Notify people"
   - Click **Share**

6. **Get Spreadsheet ID**:
   - Look at the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part
   - Put in `.env.local` as `GOOGLE_SHEETS_LEADERBOARD_ID`

---

## Phase 3: Mapbox Setup (for Projects Map)

### 3.1 Create Mapbox Account

1. Go to [https://www.mapbox.com](https://www.mapbox.com)
2. Click **Sign up** (free tier is fine)
3. Verify your email
4. Log in

### 3.2 Get Access Token

1. Go to [https://account.mapbox.com](https://account.mapbox.com)
2. Scroll to **Access tokens**
3. Copy the **Default public token**
   - Or click **Create a token** to make a new one
4. Put in `.env.local` as `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`

---

## Phase 4: Resend Setup (Optional - for Emails)

### 4.1 Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up (free tier: 100 emails/day)
3. Verify your email

### 4.2 Get API Key

1. Go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click **Create API Key**
3. Name: "CLBR Platform"
4. Copy the key (only shown once!)
5. Put in `.env.local` as `RESEND_API_KEY`

**Note**: For production, you'll need to verify your sending domain. For testing, you can use Resend's test domain.

---

## Phase 5: Install Dependencies & Test

### 5.1 Install Node Modules

```bash
npm install
```

### 5.2 Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 5.3 Test Authentication

1. Go to http://localhost:3000/login
2. Try logging in with your admin credentials (from Supabase step)
3. Should redirect to `/user` dashboard

### 5.4 Test Admin Access

1. After logging in, go to http://localhost:3000/admin
2. You should see the admin dashboard
3. Try navigating to `/admin/cms/home`
4. Try editing some CMS content

If you can't access `/admin`:
- Check that your user has `"role": "admin"` in Supabase
- Log out and log back in
- Check browser console for errors

---

## Phase 6: Deploy to Vercel

### 6.1 Push to GitHub

```bash
git add .
git commit -m "Initial CLBR platform setup"
git remote add origin https://github.com/YOUR_USERNAME/clbr-platform.git
git push -u origin master
```

### 6.2 Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click **Add New Project**
4. Import your `clbr-platform` repository
5. **Environment Variables**: Click **Add** and paste ALL variables from `.env.local`
   - Make sure to add them for all environments (Production, Preview, Development)
6. Click **Deploy**
7. Wait for deployment to complete

### 6.3 Test Production

Visit your Vercel URL (e.g., `https://clbr-platform.vercel.app`)

---

## Phase 7: Content Population

### 7.1 Add Education Courses

1. Go to `/admin/edu`
2. Courses "Closer" and "Setter" are pre-seeded
3. Click **Manage Lessons** for each course
4. Add lessons:
   - Upload videos to Google Drive
   - Set sharing to "Anyone with link can view"
   - Copy the share link
   - Add lesson with title, description, video URL
   - Set duration and sort order
   - Publish

### 7.2 Add Incentives

1. Go to `/admin/incentives`
2. Click **Create Incentive**
3. Fill in details:
   - Title, description
   - Category name and color (hex code like #FF5733)
   - Upload background image to Supabase Storage
   - Set start/end dates
   - Set status (coming_up, live, done)
   - Publish

### 7.3 Add Reviews

1. Upload review videos to Supabase Storage (or use external URLs)
2. Go to `/admin/reviews`
3. Add reviews with:
   - Title, description
   - Video URL and thumbnail
   - Type (customer/rep)
   - Reviewer name and location
   - Featured status

### 7.4 Populate Leaderboard

1. Open your Google Sheet
2. Add rep data in the columns you set up
3. The leaderboard will automatically update on page refresh

---

## Phase 8: Brand Customization

### 8.1 Update Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'dark': '#0D0D0D',      // Your brand dark
  'card-dark': '#121212',  // Card background
  // Add more custom colors
}
```

### 8.2 Replace Logos

Replace these files in `/public/`:
- `/public/aveyoSalesLogo.svg` → Your logo
- `/public/images/logo.svg`
- `/public/images/logo-white.svg`

### 8.3 Replace Icons

Replace all icon files in `/public/images/`:
- `dashboard-icon.png`
- `CMS-icon.png`
- `leaderboard-icon.png`
- `brand-icon.png`
- `incentives-icon.png`
- `reviews-icon.png`
- `projects-icon.png`
- `EDU-icon.png`

### 8.4 Update CMS Content

1. Login as admin
2. Go to `/admin/cms/home`
3. Update all sections:
   - Hero: Change "Aveyo" to "CLBR"
   - Update all copy, images, videos
   - Update statistics
   - Modify "On The Inside" blocks

---

## Troubleshooting

### Supabase Connection Issues
- Verify all 3 env variables are correct
- Check for extra spaces or line breaks
- Ensure Supabase project is not paused

### Google Sheets Not Loading
- Verify service account has access to spreadsheet
- Check GOOGLE_PRIVATE_KEY includes \n characters
- Ensure Google Sheets API is enabled
- Check spreadsheet ID is correct

### Admin Access Denied
- Verify user metadata has `"role": "admin"` in Supabase
- Log out and log back in
- Clear browser cookies

### Build Errors
- Check Node.js version: `node -v` (should be 18+)
- Delete node_modules and run `npm install` again
- Delete .next folder and restart dev server

### Map Not Loading
- Verify NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN is set
- Check token is valid on mapbox.com
- Ensure token has map:read scope

---

## Quick Reference

### Important URLs
- Supabase Dashboard: https://supabase.com/dashboard
- Google Cloud Console: https://console.cloud.google.com
- Mapbox Account: https://account.mapbox.com
- Resend Dashboard: https://resend.com/dashboard
- Vercel Dashboard: https://vercel.com/dashboard

### Important Files
- `.env.local` - Environment variables (NEVER commit!)
- `database/ALL_MIGRATIONS.sql` - All database migrations
- `tailwind.config.js` - Brand colors
- `docs/GOOGLE_SHEETS_SETUP.md` - Detailed Google Sheets guide
- `PROJECT_DUPLICATION_GUIDE.md` - Complete reference guide

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/cms/home` - CMS editor
- `/admin/edu` - Education management
- `/admin/incentives` - Incentives management
- `/admin/reviews` - Reviews management

### User Routes
- `/user` - User dashboard
- `/user/edu` - Education platform
- `/user/leaderboard` - Leaderboard
- `/user/map` - Projects map
- `/user/incentives` - View incentives

---

## Checklist

Use this checklist to track your progress:

### Setup
- [ ] Supabase project created
- [ ] Database migrations run successfully
- [ ] Storage buckets created
- [ ] Admin user created with role metadata
- [ ] Google Cloud project created
- [ ] Google Sheets API enabled
- [ ] Service account created with JSON key
- [ ] Leaderboard spreadsheet created and shared
- [ ] Mapbox account created and token obtained
- [ ] Resend account created (optional)
- [ ] All credentials added to `.env.local`

### Testing
- [ ] `npm install` completed successfully
- [ ] Development server starts without errors
- [ ] Can login with admin credentials
- [ ] Can access `/admin` dashboard
- [ ] Can edit CMS content
- [ ] Leaderboard loads data from Google Sheets
- [ ] Map displays (if configured)

### Deployment
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added to Vercel
- [ ] Production deployment successful
- [ ] Production site accessible

### Content
- [ ] Education courses/lessons added
- [ ] Incentives created
- [ ] Reviews added
- [ ] Leaderboard populated with data

### Branding
- [ ] Colors updated in tailwind.config.js
- [ ] Logos replaced
- [ ] Icons replaced
- [ ] CMS content updated with CLBR branding

---

## Next Steps

Once everything is set up and working:

1. **Security Review**: Ensure all RLS policies are working
2. **Performance**: Optimize images and videos
3. **Analytics**: Set up tracking (Google Analytics, Mixpanel, etc.)
4. **Monitoring**: Add error tracking (Sentry, LogRocket)
5. **Backups**: Set up automated database backups
6. **Documentation**: Document any custom features or workflows
7. **Training**: Train team members on admin dashboard

---

## Need Help?

Refer to:
- `PROJECT_DUPLICATION_GUIDE.md` - Comprehensive guide
- `docs/GOOGLE_SHEETS_SETUP.md` - Google Sheets details
- `README.md` - Project overview

Good luck with your CLBR platform! 🚀
