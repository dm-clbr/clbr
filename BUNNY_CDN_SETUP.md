# Bunny.net CDN Setup Guide

This guide will help you upload your large video files to Bunny.net and configure the CDN URLs.

## Why Bunny.net?

- ✅ Extremely affordable ($0.01/GB)
- ✅ Fast global CDN delivery
- ✅ No file size limits
- ✅ Easy to use dashboard
- ✅ Built-in video optimization

## Videos to Upload

You need to upload these two videos from your local `public/videos/` folder:

1. **CLBRHeroFINAL.mp4** (165 MB) - Used in the hero section background
2. **CLBRhype.mp4** (85 MB) - Used in the video showcase section

## Step-by-Step Setup

### 1. Create a Bunny.net Account

1. Go to [bunny.net](https://bunny.net)
2. Sign up for a free account
3. Verify your email

### 2. Create a Storage Zone

1. In the Bunny.net dashboard, click **Storage** in the left sidebar
2. Click **Add Storage Zone**
3. Configure:
   - **Name**: `clbr-videos` (or any name you prefer)
   - **Region**: Choose closest to your audience (e.g., US or Europe)
   - **Replication**: Optional (for faster global delivery)
4. Click **Add Storage Zone**

### 3. Create a Pull Zone (CDN)

1. Click **CDN** in the left sidebar
2. Click **Add Pull Zone**
3. Configure:
   - **Name**: `clbr-videos-cdn` (or any name you prefer)
   - **Origin URL**: Your storage zone URL (it will auto-populate)
   - **Enable Storage Zone**: Select the storage zone you just created
4. Click **Add Pull Zone**

### 4. Upload Your Videos

1. Go to **Storage** → Select your `clbr-videos` zone
2. Click **Upload Files**
3. Upload these two files:
   - `CLBRHeroFINAL.mp4`
   - `CLBRhype.mp4`
4. Wait for upload to complete

### 5. Get Your CDN URLs

After upload, your video URLs will be in this format:

```
https://[your-cdn-name].b-cdn.net/CLBRHeroFINAL.mp4
https://[your-cdn-name].b-cdn.net/CLBRhype.mp4
```

**Example:**
```
https://clbr-videos-cdn.b-cdn.net/CLBRHeroFINAL.mp4
https://clbr-videos-cdn.b-cdn.net/CLBRhype.mp4
```

### 6. Update Environment Variables

1. Copy your CDN URLs
2. Open `.env.local` in your project
3. Replace the placeholder URLs:

```bash
# Replace these with your actual Bunny.net CDN URLs
NEXT_PUBLIC_VIDEO_HERO_URL=https://your-cdn-name.b-cdn.net/CLBRHeroFINAL.mp4
NEXT_PUBLIC_VIDEO_HYPE_URL=https://your-cdn-name.b-cdn.net/CLBRhype.mp4
```

### 7. Update Vercel Environment Variables

**IMPORTANT:** You also need to add these to Vercel:

1. Go to your [Vercel Dashboard](https://vercel.com)
2. Select your CLBR project
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:
   - **Name**: `NEXT_PUBLIC_VIDEO_HERO_URL`
     **Value**: `https://your-cdn-name.b-cdn.net/CLBRHeroFINAL.mp4`
   - **Name**: `NEXT_PUBLIC_VIDEO_HYPE_URL`
     **Value**: `https://your-cdn-name.b-cdn.net/CLBRhype.mp4`
5. Click **Save**
6. Redeploy your site (Vercel → Deployments → click the three dots → Redeploy)

## Testing

### Local Testing
1. Restart your dev server: `npm run dev`
2. Visit `http://localhost:3000`
3. Check that both videos load correctly

### Production Testing
1. After redeploying on Vercel, visit your live site
2. Check both videos in:
   - Hero section (background video)
   - Video showcase section

## Fallback Behavior

The code includes fallbacks to local files:
- If CDN URL fails, it will try `/videos/CLBRHeroFINAL.mp4`
- This ensures development works even without Bunny.net setup

## Cost Estimate

Bunny.net pricing is very affordable:
- **Storage**: $0.01/GB/month
- **Bandwidth**: $0.01/GB (varies by region)
- **Example**: 250 MB of videos + 100 GB bandwidth = ~$1.25/month

## Troubleshooting

### Videos not loading?
1. Check that CDN URLs are correct in `.env.local` and Vercel
2. Make sure videos are uploaded to Bunny.net storage
3. Check browser console for errors
4. Verify Pull Zone is connected to Storage Zone

### Videos loading slowly?
1. Enable replication in Bunny.net for faster global delivery
2. Consider enabling video optimization in Bunny.net settings

### CORS errors?
1. In Bunny.net, go to Pull Zone settings
2. Enable CORS headers if needed

## Support

- Bunny.net Documentation: [docs.bunny.net](https://docs.bunny.net)
- Bunny.net Support: Available 24/7 in dashboard

---

**Note:** Keep your local video files in `public/videos/` for development. They're gitignored and won't be pushed to GitHub.
