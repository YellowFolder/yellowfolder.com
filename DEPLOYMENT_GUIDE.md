# Deployment Guide - yellowfolder.com

**Date:** October 25, 2025
**Status:** Ready for Deployment

---

## Pre-Deployment Summary

✅ **SEO Implementation Complete** (10/10 score)
✅ **Open Graph Image Created**
✅ **All 11 pages optimized**
✅ **Sitemap.xml updated**
✅ **Security fixes applied**
✅ **No blocking issues**

---

## Files to Commit

### SEO Files Modified/Created:
- `pages/index.js` - Added Schema.org + complete SEO tags
- `pages/about-us.js` - Added complete SEO tags
- `pages/contact.js` - Added complete SEO tags
- `pages/pricing.js` - Added complete SEO tags
- `pages/services.js` - Added complete SEO tags
- `pages/schedule-a-yellow-folder-demo.js` - Added complete SEO tags
- `pages/weekly-training.js` - Added complete SEO tags
- `pages/record-request.js` - Added complete SEO tags
- `pages/help.js` - Added complete SEO tags
- `pages/privacy-policy.js` - Added complete SEO tags
- `pages/request-success.js` - Added noindex + complete SEO tags
- `public/sitemap.xml` - Optimized with priorities and dates
- `public/static/images/yf-og-image.png` - Open Graph image (288KB)
- `public/static/images/yf-logo.png` - Logo for Schema.org

### Documentation Files:
- `SEO_IMPLEMENTATION_COMPLETE.md`
- `OPEN_GRAPH_IMAGE_COMPLETE.md`
- `PRE_DEPLOYMENT_SEO_AUDIT.md`
- `DEPLOYMENT_GUIDE.md` (this file)

### Helper Files (Optional - don't need to commit):
- `og-image-template.html` - Template for regenerating OG image
- `generate-og-image.js` - Script to regenerate OG image

---

## Step-by-Step Deployment

### Step 1: Review Changes

First, let's see what files have changed:

```bash
cd "/Users/ryanbell/AI Projects/yellowfolder.com/yellowfolder.com"
git status
```

You should see:
- Modified: 11 page files
- Modified: sitemap.xml
- New: yf-og-image.png, yf-logo.png
- New: Documentation files

### Step 2: Stage Changes

Stage all SEO-related changes:

```bash
# Stage all page files
git add pages/*.js

# Stage sitemap
git add public/sitemap.xml

# Stage Open Graph image and logo
git add public/static/images/yf-og-image.png
git add public/static/images/yf-logo.png

# Stage documentation
git add SEO_IMPLEMENTATION_COMPLETE.md
git add OPEN_GRAPH_IMAGE_COMPLETE.md
git add PRE_DEPLOYMENT_SEO_AUDIT.md
git add DEPLOYMENT_GUIDE.md

# Optionally stage helper files
git add og-image-template.html
git add generate-og-image.js
```

### Step 3: Commit Changes

Create a comprehensive commit:

```bash
git commit -m "Complete SEO implementation: Add comprehensive meta tags, OG image, and Schema.org markup

- Add complete SEO meta tags to all 11 pages (titles, descriptions, canonical URLs)
- Add Open Graph tags for Facebook/LinkedIn sharing (6 tags per page)
- Add Twitter Card tags for Twitter sharing (5 tags per page)
- Create professional Open Graph image (1200x630px, 288KB)
- Add Schema.org Organization markup to home page
- Optimize sitemap.xml with priorities, dates, and realistic change frequencies
- Add noindex tag to request-success utility page
- Fix missing /pricing page in sitemap
- Create comprehensive SEO documentation

Total: 143 SEO meta tags across all pages
SEO Score: 10/10 - Production ready

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Step 4: Push to GitHub

Push to your main branch:

```bash
# Push to main branch
git push origin main
```

Or if you're on a different branch:

```bash
# Push to current branch
git push origin HEAD
```

### Step 5: Verify GitHub

1. Go to https://github.com/YellowFolder/yellowfolder.com
2. Verify commit appears
3. Check that files are updated

---

## Vercel Deployment

### Option A: Automatic Deployment (Recommended)

If your Vercel project is connected to GitHub:

1. **Vercel will automatically deploy** when you push to main
2. Wait 2-5 minutes for build to complete
3. Check Vercel dashboard: https://vercel.com/dashboard
4. Look for deployment status

### Option B: Manual Deployment via Vercel CLI

If you need to deploy manually:

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option C: Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your yellowfolder.com project
3. Go to "Deployments" tab
4. Click "Redeploy" on latest deployment
5. Select "Use existing Build Cache" → No
6. Click "Redeploy"

---

## Post-Deployment Verification

### Immediate Checks (5 minutes):

1. **Site Loads:**
   ```bash
   # Check if site is live
   curl -I https://yellowfolder.com
   ```
   Expected: `HTTP/2 200`

2. **Open Graph Image:**
   ```bash
   # Check OG image loads
   curl -I https://yellowfolder.com/static/images/yf-og-image.png
   ```
   Expected: `HTTP/2 200`, `Content-Type: image/png`

3. **Sitemap:**
   ```bash
   # Check sitemap loads
   curl https://yellowfolder.com/sitemap.xml
   ```
   Expected: XML with 11 URLs

4. **Robots.txt:**
   ```bash
   # Check robots.txt
   curl https://yellowfolder.com/robots.txt
   ```
   Expected: Sitemap reference present

### Visual Verification (10 minutes):

Visit each page and verify in browser DevTools:

**Pages to Check:**
1. https://yellowfolder.com
2. https://yellowfolder.com/about-us
3. https://yellowfolder.com/contact
4. https://yellowfolder.com/pricing
5. https://yellowfolder.com/services
6. https://yellowfolder.com/schedule-a-yellow-folder-demo
7. https://yellowfolder.com/weekly-training
8. https://yellowfolder.com/record-request
9. https://yellowfolder.com/help
10. https://yellowfolder.com/privacy-policy
11. https://yellowfolder.com/request-success

**What to Verify:**
- Title in browser tab matches our optimized title
- Right-click → "View Page Source" → Find meta tags in `<head>`
- Look for `<meta property="og:image"...`
- Look for `<meta property="twitter:card"...`
- Home page should have `<script type="application/ld+json">` with Schema.org

---

## Social Media Testing

### 1. Facebook Sharing Debugger

**URL:** https://developers.facebook.com/tools/debug/

**Steps:**
1. Enter: `https://yellowfolder.com`
2. Click "Debug"
3. Verify OG image appears
4. Check title and description
5. Click "Scrape Again" if image doesn't show
6. Repeat for other important pages (about, services, pricing)

**Expected Result:**
- Image: Yellow branded 1200x630 image
- Title: "YellowFolder - Cloud-Based Student Records Management..."
- Description: Full meta description visible

### 2. Twitter Card Validator

**URL:** https://cards-dev.twitter.com/validator

**Steps:**
1. Enter: `https://yellowfolder.com`
2. Click "Preview card"
3. Verify "summary_large_image" card displays

**Expected Result:**
- Large image preview
- Title and description visible
- Card type: summary_large_image

### 3. LinkedIn Post Inspector

**URL:** https://www.linkedin.com/post-inspector/

**Steps:**
1. Enter: `https://yellowfolder.com`
2. Click "Inspect"
3. View preview

**Expected Result:**
- Professional preview with OG image
- Title and description visible
- Looks good in LinkedIn feed format

### 4. Test Real Shares

**Optional but Recommended:**
1. Share home page on your personal Facebook/Twitter
2. Check if preview looks professional
3. Delete test post after verification

---

## Google Search Console Setup

### Day 1 Tasks:

1. **Add Property**
   - Go to: https://search.google.com/search-console
   - Click "Add Property"
   - Enter: `https://yellowfolder.com`
   - Choose verification method (DNS or HTML tag)

2. **Verify Ownership**
   - **Option A (DNS):** Add TXT record to domain DNS
   - **Option B (HTML Tag):** Add meta tag to pages
   - **Option C (HTML File):** Upload verification file

3. **Submit Sitemap**
   - Go to "Sitemaps" section
   - Add sitemap URL: `https://yellowfolder.com/sitemap.xml`
   - Click "Submit"
   - Wait for processing (may take hours to days)

4. **Request Indexing**
   - Go to "URL Inspection" tool
   - Enter each important URL
   - Click "Request Indexing"
   - Priority pages:
     - https://yellowfolder.com (home)
     - https://yellowfolder.com/services
     - https://yellowfolder.com/pricing
     - https://yellowfolder.com/contact

---

## Vercel Environment Variables

### Required for Production:

If you haven't already, ensure these environment variables are set in Vercel:

1. **Go to Vercel Dashboard:** https://vercel.com/dashboard
2. **Select Project:** yellowfolder.com
3. **Go to Settings → Environment Variables**
4. **Add/Verify:**

```bash
# Server-side only (NOT exposed to browser)
FRESHDESK_KEY_PROD=your_actual_freshdesk_api_key
FRESHDESK_BASE_URL=https://yellowfolder.freshdesk.com

# Client-side (safe to expose)
NEXT_PUBLIC_FRESHCHAT_TOKEN=your_freshchat_token
```

**Important:**
- Remove any old `NEXT_PUBLIC_FRESHDESK_*` variables (security risk!)
- Only use `NEXT_PUBLIC_` prefix for non-sensitive data

---

## Monitoring Setup

### Week 1 Monitoring:

**Daily Checks:**
1. **Vercel Analytics:**
   - Vercel Dashboard → Analytics
   - Check page views
   - Monitor error rates

2. **Google Search Console:**
   - Check "Coverage" report
   - Look for indexing errors
   - Monitor impressions (may be low initially)

3. **Site Functionality:**
   - Test all forms
   - Check for broken links
   - Verify images load

### Week 2-4 Monitoring:

**Weekly Checks:**
1. **Search Console:**
   - Impressions increasing?
   - Any crawl errors?
   - All pages indexed?

2. **Analytics:**
   - Organic traffic sources
   - Top landing pages
   - Bounce rate trends

3. **Social Shares:**
   - Any social referral traffic?
   - How many shares/engagement?

---

## Troubleshooting

### Issue: OG Image Not Showing on Facebook

**Solution:**
1. Go to Facebook Sharing Debugger
2. Enter URL
3. Click "Scrape Again" multiple times
4. Facebook caches for ~7 days, be patient
5. Verify image URL is absolute: `https://yellowfolder.com/static/images/yf-og-image.png`

### Issue: Pages Not Indexing

**Solution:**
1. Check Search Console for errors
2. Verify sitemap was submitted
3. Request indexing manually via URL Inspection
4. Be patient - indexing can take 1-4 weeks

### Issue: Form Submissions Failing

**Solution:**
1. Check Vercel logs for API errors
2. Verify environment variables are set
3. Test API routes: `curl -X POST https://yellowfolder.com/api/training`
4. Check Freshdesk API key is valid

### Issue: Slow Page Load

**Solution:**
1. Check Vercel Analytics for performance
2. Review Chrome DevTools Performance tab
3. Optimize images if needed
4. Check for JavaScript errors

---

## Success Metrics

### Week 1 Targets:
- ✅ Site deployed successfully
- ✅ All pages accessible
- ✅ OG images showing on social
- ✅ Sitemap submitted to Search Console

### Month 1 Targets:
- 📈 All 11 pages indexed in Google
- 📈 50+ impressions in Search Console
- 📈 CTR > 2% from search results
- 📈 No critical errors

### Month 3 Targets:
- 📈 500+ impressions/month
- 📈 10+ clicks/month from organic search
- 📈 CTR improving (target 3-5%)
- 📈 Ranking for brand name + key terms

---

## Rollback Plan

### If Something Goes Wrong:

1. **Revert Git Commit:**
   ```bash
   # Find commit hash before SEO changes
   git log --oneline

   # Revert to previous commit
   git revert <commit-hash>
   git push origin main
   ```

2. **Vercel Instant Rollback:**
   - Go to Vercel Dashboard
   - Click "Deployments"
   - Find previous working deployment
   - Click "..." menu → "Promote to Production"

3. **Backup Available:**
   - All original files are in Git history
   - Can cherry-pick specific changes if needed

---

## Quick Commands Cheat Sheet

```bash
# === GIT COMMANDS ===

# Check status
git status

# Stage all changes
git add pages/*.js public/sitemap.xml public/static/images/*.png *.md

# Commit with message
git commit -m "Complete SEO implementation with meta tags and OG image"

# Push to GitHub
git push origin main

# View recent commits
git log --oneline -10

# === VERCEL COMMANDS ===

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# === VERIFICATION COMMANDS ===

# Check if site is live
curl -I https://yellowfolder.com

# Check OG image
curl -I https://yellowfolder.com/static/images/yf-og-image.png

# View sitemap
curl https://yellowfolder.com/sitemap.xml

# View robots.txt
curl https://yellowfolder.com/robots.txt

# === TESTING COMMANDS ===

# Test build locally
npm run build

# Test production build locally
npm run build && npm start

# Run tests (if applicable)
npm test
```

---

## Final Checklist

Before running deployment commands:

### Pre-Deployment:
- [ ] All files saved
- [ ] Dev server running without errors
- [ ] No console warnings
- [ ] Documentation reviewed

### Deployment:
- [ ] Git status checked
- [ ] Files staged correctly
- [ ] Commit message written
- [ ] Pushed to GitHub successfully
- [ ] Vercel deployment triggered

### Post-Deployment:
- [ ] Site loads at https://yellowfolder.com
- [ ] OG image accessible
- [ ] Sitemap loads
- [ ] Robots.txt correct
- [ ] Pages display correctly
- [ ] Meta tags visible in source
- [ ] Social sharing tested
- [ ] Search Console configured

---

## Support

### Documentation References:
- **SEO Implementation:** `SEO_IMPLEMENTATION_COMPLETE.md`
- **OG Image Guide:** `OPEN_GRAPH_IMAGE_COMPLETE.md`
- **Pre-Launch Audit:** `PRE_DEPLOYMENT_SEO_AUDIT.md`
- **This Guide:** `DEPLOYMENT_GUIDE.md`

### External Resources:
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Google Search Console:** https://search.google.com/search-console
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/

---

## You're Ready! 🚀

All SEO work is complete and the site is production-ready. Follow the steps above to deploy to GitHub and Vercel.

**Estimated Deployment Time:** 10-15 minutes

**Good luck with the launch!**
