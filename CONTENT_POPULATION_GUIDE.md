# CLBR Content Population Guide

This guide helps you populate the platform with courses, lessons, incentives, reviews, and leaderboard data.

---

## Prerequisites

Before populating content, ensure:
- [ ] All external services are configured
- [ ] Admin user is created and working
- [ ] Can access `/admin` dashboard
- [ ] Development server is running

---

## Part 1: Education Platform Content

### 1.1 Understanding the Structure

- **Courses**: Top-level categories (e.g., "Closer", "Setter")
- **Lessons**: Individual video lessons within a course
- **Regions**: Geographic variations (California, Illinois, etc.)

### 1.2 Add Lessons to Existing Courses

Two courses are pre-seeded: "Closer" and "Setter"

#### Step-by-Step:

1. **Prepare Videos:**
   - Upload to Google Drive
   - Set sharing to "Anyone with the link can view"
   - Copy shareable link

2. **Access Admin:**
   - Go to `/admin/edu`
   - You'll see "Closer" and "Setter" courses
   - Click "Manage Lessons" for the course

3. **Add Lesson:**
   - Click "Add Lesson"
   - Fill in form:
     - **Title**: "Introduction to Closing" (descriptive)
     - **Description**: Brief overview of what the lesson covers
     - **Video URL**: Paste Google Drive link
     - **Duration**: Length in minutes
     - **Region**: "California" or "Illinois" (if regional variation)
     - **Sort Order**: Number (1, 2, 3...) for sequence
     - **Published**: Check to make visible

4. **Save:**
   - Click "Create Lesson"
   - Verify it appears in lesson list

#### Example Lesson Structure:

**Closer Course:**
1. Introduction to Solar Sales
2. Understanding Customer Needs
3. Product Knowledge
4. Objection Handling
5. Closing Techniques
6. Follow-up Best Practices

**Setter Course:**
1. Lead Generation Basics
2. Phone Scripts & Cold Calling
3. Qualifying Prospects
4. Appointment Setting
5. CRM Management
6. Territory Planning

### 1.3 Add New Courses (Optional)

If you need additional courses beyond Closer/Setter:

1. Go to `/admin/edu`
2. Click "Create Course"
3. Fill in:
   - **Title**: Course name
   - **Description**: What the course covers
   - **Slug**: URL-friendly identifier (e.g., "advanced-sales")
   - **Sort Order**: Display order
   - **Published**: Make visible

---

## Part 2: Incentives Management

### 2.1 Understanding Incentive Fields

- **Title**: Name of incentive (e.g., "Q1 Vacation Trip")
- **Description**: Details about the incentive
- **Category**: Type (e.g., "Trip", "Cash Bonus", "Recognition")
- **Category Color**: Hex color for visual distinction
- **Live Status**: 
  - `coming_up` - Not yet active
  - `live` - Currently active
  - `done` - Completed
- **Start/End Date**: When incentive runs
- **Background Image/Video**: Visual for the card
- **Sort Order**: Display sequence
- **Published**: Visibility toggle

### 2.2 Create Incentives

1. **Prepare Assets:**
   - Background image (1200x800px recommended)
   - OR background video
   - Upload to Supabase Storage `images` bucket

2. **Access Admin:**
   - Go to `/admin/incentives`
   - Click "Create Incentive"

3. **Fill Form:**
   ```
   Title: "Top Performer Hawaii Trip"
   Description: "Top 10 closers in Q1 win an all-expenses-paid trip to Hawaii"
   Category: "Trip"
   Category Color: #FF5733 (hex color)
   Live Status: "live"
   Start Date: 2025-01-01
   End Date: 2025-03-31
   Background Image URL: https://your-supabase.supabase.co/storage/v1/object/public/images/hawaii.jpg
   Sort Order: 1
   Published: ✓
   ```

4. **Save & View:**
   - Click "Create"
   - View at `/incentives` (public) or `/user/incentives` (user view)

### 2.3 Example Incentives

1. **Monthly Cash Bonus**
   - Category: "Cash Bonus"
   - Color: #4CAF50 (green)
   - Status: live
   - Description: "$500 bonus for top 5 reps"

2. **Quarterly Trip**
   - Category: "Trip"
   - Color: #2196F3 (blue)
   - Status: coming_up
   - Description: "Cancun trip for top 10"

3. **Annual Recognition**
   - Category: "Recognition"
   - Color: #FF9800 (orange)
   - Status: done
   - Description: "President's Club winners"

---

## Part 3: Reviews Management

### 3.1 Understanding Review Types

- **Customer Reviews**: Testimonials from satisfied customers
- **Rep Reviews**: Success stories from sales reps

### 3.2 Prepare Video Content

**Option A: Supabase Storage**
1. Upload videos to Supabase Storage `videos` bucket
2. Get public URL
3. Create thumbnail images (640x360px)
4. Upload thumbnails to `images` bucket

**Option B: External Hosting**
- Use YouTube, Vimeo, or other video host
- Get embed URL or direct link

### 3.3 Add Reviews

1. **Access Admin:**
   - Go to `/admin/reviews`
   - Click "Add Review"

2. **Fill Form:**
   ```
   Title: "Amazing Experience with CLBR"
   Description: "Sarah shares how CLBR solar transformed her home"
   Video URL: https://your-supabase.../video.mp4
   Thumbnail URL: https://your-supabase.../thumb.jpg
   Type: "customer"
   Featured: ✓ (shows on homepage)
   Customer Name: "Sarah Johnson"
   Rep Name: (leave empty for customer reviews)
   Location: "Austin, TX"
   Date Recorded: 2025-01-15
   Status: "active"
   ```

3. **Save:**
   - Click "Create Review"
   - View at `/reviews`

### 3.4 Review Best Practices

1. **Video Quality:**
   - Good lighting and audio
   - 1-3 minutes length
   - Authentic, not scripted
   - HD resolution (1080p)

2. **Thumbnails:**
   - Clear image of speaker
   - Good composition
   - Consistent style across all reviews

3. **Mix Content:**
   - 60% customer testimonials
   - 40% rep success stories
   - Feature diverse people and locations

---

## Part 4: Leaderboard Data

### 4.1 Understand Column Structure

Your Google Sheet should have these columns:

| Column | Header | Data Type | Example |
|--------|--------|-----------|---------|
| A | Rep Name | Text | "John Smith" |
| N | Total TSS 2025 | Number | 150 |
| P | Closer TSS 2025 | Number | 100 |
| R | Setter TSS 2025 | Number | 50 |
| T | Total TSI 2025 | Number | 2500000 |
| V | Closer TSI 2025 | Number | 1800000 |
| X | Setter TSI 2025 | Number | 700000 |

**TSS** = Total Sales (or similar metric)
**TSI** = Total Sales Income (or similar metric)

### 4.2 Populate Spreadsheet

1. **Open Your Google Sheet:**
   - The one you shared with service account
   - Should be named in your `.env.local`

2. **Add Header Row:**
   - Row 1 should have column headers
   - Match the structure above

3. **Add Rep Data:**
   - Start from Row 2
   - Add each sales rep
   - Include all metrics
   - Update regularly (daily/weekly)

4. **Format Numbers:**
   - Use plain numbers (no $ signs)
   - No commas in numbers
   - Integer or decimal format

### 4.3 Example Data:

| Rep Name | Total TSS | Closer TSS | Setter TSS | Total TSI | Closer TSI | Setter TSI |
|----------|-----------|------------|------------|-----------|------------|------------|
| John Smith | 250 | 180 | 70 | 4200000 | 3100000 | 1100000 |
| Jane Doe | 240 | 200 | 40 | 4000000 | 3500000 | 500000 |
| Mike Johnson | 220 | 150 | 70 | 3800000 | 2700000 | 1100000 |

### 4.4 Test Leaderboard

1. Visit `/user/leaderboard`
2. Data should load from your sheet
3. Should auto-update on refresh
4. Check sorting and filtering work

---

## Part 5: Homepage CMS Content

### 5.1 Access CMS

Go to `/admin/cms/home`

### 5.2 Update Sections

#### Hero Section
```json
{
  "welcome_text": "WELCOME",
  "main_heading": "Your Career, Your Pace",
  "sub_heading": "Your CLBR.",
  "description": "Join CLBR and transform your sales career",
  "cta_primary": "JOIN CLBR",
  "cta_secondary": "LOGIN",
  "background_video": "/videos/aveyoWEB1a.mp4",
  "copyright": "© 2025 CLBR"
}
```

#### On The Inside Blocks
- Update each block with CLBR culture, training, lifestyle, growth info
- Change background images
- Make descriptions authentic to CLBR

#### Sales Section
- Update heading and description
- Change statistics to CLBR metrics
- Replace images with CLBR team photos
- Update copy to reflect CLBR values

#### Home Stats
- Update 4 statistics with real CLBR data
- Adjust values, titles, descriptions
- Keep icons or change them

---

## Content Checklist

### Education Platform
- [ ] Added lessons to Closer course (recommend 6-10 lessons)
- [ ] Added lessons to Setter course (recommend 6-10 lessons)
- [ ] Uploaded videos to Google Drive with proper sharing
- [ ] Set lesson sort orders correctly
- [ ] Published all lessons
- [ ] Tested lesson playback
- [ ] Verified progress tracking works

### Incentives
- [ ] Created at least 3-5 incentives
- [ ] Mixed types (trips, bonuses, recognition)
- [ ] Set appropriate live statuses
- [ ] Uploaded background images
- [ ] Set category colors
- [ ] Published incentives
- [ ] Tested display on `/incentives`

### Reviews
- [ ] Added customer reviews (recommend 5-10)
- [ ] Added rep reviews (recommend 3-5)
- [ ] Created video thumbnails
- [ ] Marked featured reviews
- [ ] Set all to "active" status
- [ ] Tested video playback
- [ ] Verified display on `/reviews`

### Leaderboard
- [ ] Populated Google Sheet with rep data
- [ ] Correct column headers (A, N, P, R, T, V, X)
- [ ] Data formatted correctly (no $ or commas)
- [ ] At least 10-20 reps for good display
- [ ] Tested data loads on `/user/leaderboard`
- [ ] Verified sorting works

### CMS Content
- [ ] Updated hero section
- [ ] Updated "On The Inside" blocks
- [ ] Updated sales section
- [ ] Updated home stats
- [ ] Changed all "Aveyo" to "CLBR"
- [ ] Updated copyright notices
- [ ] Replaced images
- [ ] Tested homepage display

---

## Tips for Content Quality

### Videos
1. Use consistent format (1080p, 16:9 aspect ratio)
2. Keep lessons 5-15 minutes each
3. Ensure good audio quality
4. Add intro/outro if possible
5. Test on multiple devices

### Images
1. Use high-resolution photos
2. Maintain consistent style
3. Optimize for web (compress)
4. Use descriptive filenames
5. Alt text for accessibility

### Text Content
1. Write clear, concise descriptions
2. Use active voice
3. Be authentic to CLBR brand
4. Proofread for errors
5. Keep consistent tone

### Data
1. Keep leaderboard updated regularly
2. Use real, accurate metrics
3. Celebrate top performers
4. Ensure data privacy

---

## Testing After Population

### Test Flow
1. **Homepage**: All content displays correctly
2. **Education**: 
   - Can view courses at `/user/edu`
   - Can watch lessons
   - Can mark lessons complete
   - Can take notes
3. **Leaderboard**: 
   - Data loads at `/user/leaderboard`
   - Sorting works
   - Top 3 displays correctly
4. **Incentives**: 
   - Display at `/incentives` and `/user/incentives`
   - Filtering by status works
   - Cards look good
5. **Reviews**: 
   - Display at `/reviews`
   - Videos play
   - Filtering works (customer vs rep)

### Mobile Testing
- Test all content on mobile devices
- Ensure videos are responsive
- Check images scale properly
- Verify text is readable

---

## Ongoing Maintenance

### Weekly Tasks
- [ ] Update leaderboard data
- [ ] Review and approve new user signups
- [ ] Check for content errors

### Monthly Tasks
- [ ] Add new lessons as needed
- [ ] Update incentive statuses
- [ ] Add new reviews
- [ ] Refresh homepage content

### Quarterly Tasks
- [ ] Review all content for accuracy
- [ ] Update statistics
- [ ] Archive old incentives
- [ ] Add new courses if needed

---

## Need Help?

Refer to:
- `/admin/edu` - Course/lesson management
- `/admin/incentives` - Incentive management
- `/admin/reviews` - Review management
- `/admin/cms/home` - Homepage content
- Google Sheet - Leaderboard data

---

Ready to populate your content? Start with education lessons, then move to incentives and reviews! 🚀
