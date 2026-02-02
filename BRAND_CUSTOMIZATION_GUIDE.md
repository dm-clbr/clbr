# CLBR Brand Customization Guide

This guide walks you through customizing the platform with CLBR branding.

## Overview

The platform currently has Aveyo branding. You'll need to replace:
1. Brand colors
2. Logos and icons
3. Images and videos
4. Text content (via CMS)
5. Typography (optional)

---

## Step 1: Update Brand Colors

### 1.1 Edit Tailwind Config

File: `tailwind.config.js`

Current colors:
```javascript
colors: {
  'dark': '#0D0D0D',        // Main dark background
  'card-dark': '#121212',   // Card backgrounds
  'white': '#FFFFFF',       // Text and accents
}
```

**Action:** Replace with your CLBR brand colors:

```javascript
colors: {
  'dark': '#YOUR_DARK_COLOR',
  'card-dark': '#YOUR_CARD_BG_COLOR',
  'white': '#FFFFFF',
  // Add additional brand colors:
  'clbr-primary': '#YOUR_PRIMARY_COLOR',
  'clbr-secondary': '#YOUR_SECONDARY_COLOR',
  'clbr-accent': '#YOUR_ACCENT_COLOR',
}
```

### 1.2 Update Global CSS (Optional)

File: `app/globals.css`

You can add custom CSS variables here for more dynamic theming.

---

## Step 2: Replace Logos

### Main Logos to Replace

| Current File | What It Is | Dimensions | Format |
|--------------|------------|------------|--------|
| `/public/aveyoSalesLogo.svg` | Main brand logo | Flexible | SVG |
| `/public/images/logo.svg` | Navigation logo | ~200x50px | SVG |
| `/public/images/logo-white.svg` | White version | ~200x50px | SVG |
| `/public/images/horizontal-logo.svg` | Horizontal logo | Flexible | SVG |
| `/public/logo.svg` | Favicon logo | Flexible | SVG |

**Action:**
1. Prepare your CLBR logo in SVG format
2. Create variations: regular, white, horizontal
3. Replace the files listed above
4. Keep the same filenames for easy compatibility

OR

Update file references throughout the codebase to point to your new logo files.

---

## Step 3: Replace Icons

### Admin Dashboard Icons

All located in `/public/images/`:

- `dashboard-icon.png` - Dashboard menu item
- `CMS-icon.png` - CMS menu item
- `leaderboard-icon.png` - Leaderboard menu item
- `brand-icon.png` - Brand menu item
- `incentives-icon.png` - Incentives menu item
- `reviews-icon.png` - Reviews menu item
- `projects-icon.png` - Projects menu item
- `EDU-icon.png` - Education menu item
- `admin-icon.png` - Admin indicator
- `user-icon.png` - User profile
- `logout-icon.svg` - Logout button

**Recommended Dimensions:** 64x64px or 128x128px
**Format:** PNG with transparency, or SVG

**Action:**
1. Create consistent icon set for CLBR
2. Use the same visual style across all icons
3. Replace each file with your version
4. Keep filenames the same

### Additional Icons

- `map-icon.png` - Map feature
- `msg-icon.png` - Messaging
- `wiki-icon.png` - Wiki/docs
- `store-icon.png` - Store
- `X-icon.png` - Close/dismiss

---

## Step 4: Replace Images

### Homepage Images

Located in `/public/images/`:

| File | Used For | Suggested Size |
|------|----------|---------------|
| `unlmtd.png` | "The Culture" block | 800x600px |
| `presentation.png` | "The Training" block | 800x600px |
| `WEBSITE PHOTO.png` | "The Lifestyle" block | 800x600px |
| `growth.png` | "The Growth" block | 800x600px |
| `donny-hammond.jpeg` | Sales section large image | 1200x800px |
| `Alpha Aveyo-4.jpeg` | Sales section bottom | 1200x800px |
| `team.jpg` | Team photo | 1200x800px |
| `forest-aveyo.png` | Background/hero | 1920x1080px |

### Other Images

- `favicon.png` & `favicon@4x.png` - Browser favicon
- `TomKarenHead.png` - Leadership photos
- `Personality1.png`, `Personality2.png` - Team personalities
- Consumer photos: `consumer photos-29.jpeg`, etc.
- Project photos: `provo solar photos-11.jpeg`, etc.

**Action:**
1. Take/gather high-quality photos of CLBR team, culture, projects
2. Optimize images for web (compress, reasonable file sizes)
3. Replace files maintaining similar aspect ratios
4. Update filenames in CMS content if changed

---

## Step 5: Replace Videos

### Hero Video

**File:** `/public/videos/aveyoWEB1a.mp4`
**Current:** Aveyo team/culture montage
**Specs:** 1920x1080, ~15-30 seconds, <50MB

**Action:**
1. Create a compelling CLBR brand video
2. Show team, culture, success stories
3. Optimize for web (H.264 codec, compressed)
4. Replace `/public/videos/aveyoWEB1a.mp4`

OR

Update the CMS to point to new video path:
- Go to `/admin/cms/home`
- Edit hero section
- Change `background_video` field

### Other Videos

- `/public/videos/Intro.mp4` - Intro video
- `/public/videos/aveyo-cool-bg.mp4` - Background video
- `/public/intro-web.mp4` - Web intro

Replace or remove as needed.

---

## Step 6: Update CMS Content

### 6.1 Login as Admin

Go to: `/admin/cms/home`

### 6.2 Hero Section

Update these fields:
- `welcome_text`: "WELCOME"
- `main_heading`: "Your Career, Your Pace"
- `sub_heading`: Change "Your Aveyo." to "Your CLBR."
- `description`: Update with CLBR messaging
- `cta_primary`: Change "JOIN AVEYO" to "JOIN CLBR"
- `cta_secondary`: "LOGIN"
- `copyright`: Change "© 2025 MYAVEYO" to "© 2025 CLBR"

### 6.3 Inside Blocks

Update the 4 expandable blocks:
1. **The Culture** - Describe CLBR culture
2. **The Training** - CLBR training approach
3. **The Lifestyle** - Work-life balance at CLBR
4. **The Growth** - Career growth at CLBR

Update background images for each block.

### 6.4 Sales Section

Update:
- Main heading and description with CLBR messaging
- Statistics in stat cards (adjust numbers)
- Replace background logo
- Update grid images
- Change copyright to CLBR

### 6.5 Home Stats

Update the 4 statistics:
- Adjust values to match CLBR metrics
- Update titles and descriptions
- Change icons if needed

---

## Step 7: Update Typography (Optional)

### Current Fonts

- **PP Telegraf** - Headings and buttons
- **Inter** - Body text

Located in `/public/fonts/`:
- PPTelegraf-Regular.otf
- PPTelegraf-Bold.otf
- PPTelegraf-Black.otf
- etc.

### If Changing Fonts

1. **Add font files** to `/public/fonts/`

2. **Update `app/globals.css`:**

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont-Regular.otf') format('opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont-Bold.otf') format('opentype');
  font-weight: 700;
}
```

3. **Update `tailwind.config.js`:**

```javascript
fontFamily: {
  'heading': ['YourFont', 'sans-serif'],
  'body': ['Inter', 'sans-serif'],
}
```

4. **Update components** to use new font classes

---

## Step 8: Search & Replace "Aveyo"

### Find All Occurrences

Search the codebase for "Aveyo", "aveyo", "AVEYO" and replace with "CLBR", "clbr", "CLBR".

**Files to check:**
- CMS content (via admin dashboard)
- Component text
- Comments
- Documentation

**Command to find:**
```bash
grep -r "Aveyo" --exclude-dir=node_modules --exclude-dir=.next
```

---

## Step 9: Update Metadata & SEO

### 9.1 Update Site Title

File: `app/layout.tsx`

Change:
```typescript
title: "Aveyo Campus"
```

To:
```typescript
title: "CLBR Platform"
```

### 9.2 Update Meta Description

```typescript
description: "Your description of CLBR platform"
```

### 9.3 Favicon

Replace:
- `/public/images/favicon.png`
- `/public/images/favicon@4x.png`

With CLBR favicon.

---

## Checklist

### Colors & Design
- [ ] Updated colors in `tailwind.config.js`
- [ ] Tested color contrast for accessibility
- [ ] Updated any custom CSS variables

### Logos
- [ ] Replaced main logo (`aveyoSalesLogo.svg`)
- [ ] Replaced navigation logo (`logo.svg`)
- [ ] Replaced white logo variant
- [ ] Updated horizontal logo
- [ ] Updated favicon

### Icons
- [ ] Replaced all dashboard icons (8+ files)
- [ ] Replaced user/admin icons
- [ ] Maintained consistent visual style
- [ ] Verified icons display correctly

### Images
- [ ] Replaced "On The Inside" block images (4 images)
- [ ] Replaced sales section images (2 large images)
- [ ] Replaced team photos
- [ ] Replaced project/consumer photos
- [ ] Optimized all images for web

### Videos
- [ ] Replaced hero background video
- [ ] Replaced intro video
- [ ] Optimized videos for web delivery
- [ ] Tested video playback

### Content
- [ ] Updated hero section text
- [ ] Changed "Aveyo" to "CLBR" throughout
- [ ] Updated "On The Inside" blocks
- [ ] Updated sales section copy
- [ ] Updated statistics
- [ ] Updated copyright notices
- [ ] Verified CMS content

### Typography
- [ ] Kept existing fonts OR
- [ ] Added custom fonts
- [ ] Updated font references
- [ ] Tested typography across pages

### Metadata
- [ ] Updated site title
- [ ] Updated meta description
- [ ] Updated favicon
- [ ] Updated Open Graph tags (if any)

### Testing
- [ ] Viewed homepage - looks correct
- [ ] Checked all public pages
- [ ] Reviewed admin dashboard
- [ ] Tested on mobile
- [ ] Verified all images load
- [ ] Confirmed videos play
- [ ] No broken image/asset links

---

## Advanced Customization

### Custom Components

If you need to customize component appearance:

1. **Button styles**: Edit `components/Button.tsx`
2. **Card styles**: Edit `components/Card.tsx`
3. **Navbar**: Edit `components/Navbar.tsx`
4. **Admin sidebar**: Edit `components/admin/AdminSidebar.tsx`

### Custom Animations

Animations use Framer Motion. Edit:
- `hooks/useScrollAnimation.ts`
- `hooks/useCountingAnimation.ts`

### Custom Theme

For more advanced theming, consider:
1. Creating a theme context
2. Adding dark/light mode toggle
3. Creating color scheme variations

---

## Deployment After Customization

After customizing:

```bash
# 1. Test locally
npm run build
npm start

# 2. Commit changes
git add .
git commit -m "Apply CLBR branding"
git push origin master

# 3. Deploy to Vercel (auto-deploys on push)
# Or manually trigger deploy in Vercel dashboard
```

---

## Tips

1. **Consistency**: Keep visual style consistent across all assets
2. **Quality**: Use high-resolution images and logos
3. **Performance**: Optimize all images and videos
4. **Testing**: Test on different devices and browsers
5. **Backup**: Keep original assets as backup

---

## Need Help?

Refer to:
- `tailwind.config.js` - For color definitions
- `app/globals.css` - For global styles
- `/admin/cms/home` - For content editing

---

Good luck with your CLBR branding! 🎨
