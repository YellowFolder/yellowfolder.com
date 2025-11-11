# Post-Deployment Checklist

**Status:** Ready to Execute
**Deployment Date:** October 25, 2025

---

## 2️⃣ VERCEL CONFIGURATION VERIFICATION

### Check Vercel Dashboard

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Find your "yellowfolder.com" project

2. **Check Deployment Status:**
   - Look at "Deployments" tab
   - Your latest commit (93a4461) should appear
   - Status should show "Building..." then "Ready"
   - **Expected time:** 2-5 minutes

3. **Verify Environment Variables:**

   Go to: **Settings → Environment Variables**

   ✅ **Required Variables (Server-Side Only):**
   ```
   FRESHDESK_KEY_PROD = your_actual_freshdesk_api_key
   FRESHDESK_BASE_URL = https://yellowfolder.freshdesk.com
   ```

   ✅ **Optional Variables (Client-Safe):**
   ```
   NEXT_PUBLIC_FRESHCHAT_TOKEN = your_freshchat_token
   ```

   ⚠️ **REMOVE if present (SECURITY RISK):**
   ```
   ❌ NEXT_PUBLIC_FRESHDESK_KEY_PROD (DELETE THIS!)
   ❌ NEXT_PUBLIC_FRESHDESK_BASE_URL (DELETE THIS!)
   ```

4. **Check Build Logs:**
   - Click on latest deployment
   - View "Building" logs
   - Look for errors
   - Should end with "✓ Build Completed"

---

## 3️⃣ POST-DEPLOYMENT TESTING CHECKLIST

### Phase 1: Basic Site Verification (5 minutes)

#### Test 1: Site is Live
```bash
curl -I https://yellowfolder.com
```
**Expected:** `HTTP/2 200`
**Status:** [ ] Pass [ ] Fail

#### Test 2: Open Graph Image Loads
```bash
curl -I https://yellowfolder.com/static/images/yf-og-image.png
```
**Expected:** `HTTP/2 200` + `Content-Type: image/png`
**Status:** [ ] Pass [ ] Fail

#### Test 3: Sitemap Loads
```bash
curl https://yellowfolder.com/sitemap.xml | head -20
```
**Expected:** XML with 11 URLs
**Status:** [ ] Pass [ ] Fail

#### Test 4: Robots.txt Loads
```bash
curl https://yellowfolder.com/robots.txt
```
**Expected:** Contains "Sitemap: https://yellowfolder.com/sitemap.xml"
**Status:** [ ] Pass [ ] Fail

---

### Phase 2: Page Verification (10 minutes)

Visit each page in browser and verify:
- [ ] https://yellowfolder.com - Home page loads
- [ ] https://yellowfolder.com/about-us - About page loads
- [ ] https://yellowfolder.com/contact - Contact page loads
- [ ] https://yellowfolder.com/pricing - Pricing calculator works
- [ ] https://yellowfolder.com/services - Services page loads
- [ ] https://yellowfolder.com/schedule-a-yellow-folder-demo - Demo form loads
- [ ] https://yellowfolder.com/weekly-training - Training schedule loads
- [ ] https://yellowfolder.com/record-request - Record request form loads
- [ ] https://yellowfolder.com/help - Help page loads
- [ ] https://yellowfolder.com/privacy-policy - Privacy policy loads
- [ ] https://yellowfolder.com/request-success - Success page loads

**For EACH page, verify:**
1. **Title in browser tab** - Should be custom title (not just "YellowFolder")
2. **Page loads without errors** - No console errors (F12)
3. **Meta tags present** - Right-click → "View Page Source" → Check for og:image

---

### Phase 3: SEO Meta Tag Verification (10 minutes)

#### Home Page Deep Check:

1. Visit: https://yellowfolder.com
2. Right-click → "View Page Source"
3. Search for these tags (Ctrl+F):

**Required Tags:**
- [ ] `<title>YellowFolder - Cloud-Based Student Records`
- [ ] `<meta name="description"`
- [ ] `<link rel="canonical" href="https://yellowfolder.com/"`
- [ ] `<meta property="og:image" content="https://yellowfolder.com/static/images/yf-og-image.png"`
- [ ] `<meta property="twitter:card" content="summary_large_image"`
- [ ] `<script type="application/ld+json"` (Schema.org)

**Quick Check Other Pages:**
- [ ] /about-us has unique title
- [ ] /services has og:image meta tag
- [ ] /pricing has canonical URL

---

### Phase 4: Social Media Testing (15 minutes)

#### Facebook Sharing Debugger

1. **Go to:** https://developers.facebook.com/tools/debug/
2. **Enter URL:** `https://yellowfolder.com`
3. **Click:** "Debug"
4. **Verify:**
   - [ ] Image appears (yellow branded 1200x630)
   - [ ] Title: "YellowFolder - Cloud-Based Student Records..."
   - [ ] Description appears
   - [ ] No errors shown

5. **If image doesn't appear:**
   - Click "Scrape Again" (may need to click 2-3 times)
   - Wait 30 seconds between clicks
   - Facebook caches for 7 days

6. **Test other key pages:**
   - [ ] /about-us
   - [ ] /services
   - [ ] /contact

#### Twitter Card Validator

1. **Go to:** https://cards-dev.twitter.com/validator
2. **Enter URL:** `https://yellowfolder.com`
3. **Click:** "Preview card"
4. **Verify:**
   - [ ] Card type: "summary_large_image"
   - [ ] Image displays
   - [ ] Title and description visible
   - [ ] Looks professional

#### LinkedIn Post Inspector

1. **Go to:** https://www.linkedin.com/post-inspector/
2. **Enter URL:** `https://yellowfolder.com`
3. **Click:** "Inspect"
4. **Verify:**
   - [ ] Image preview appears
   - [ ] Title and description visible
   - [ ] Preview looks good

---

### Phase 5: Form Functionality Testing (15 minutes)

⚠️ **IMPORTANT:** Only test if you have valid Freshdesk credentials in Vercel env vars!

#### Test Contact Form

1. Visit: https://yellowfolder.com/contact
2. Fill out form with test data
3. Submit
4. **Expected:**
   - [ ] Redirects to /request-success
   - [ ] No console errors
   - [ ] Check Freshdesk for new ticket

#### Test Demo Form

1. Visit: https://yellowfolder.com/schedule-a-yellow-folder-demo
2. Fill out form
3. Submit
4. **Expected:**
   - [ ] Redirects to /request-success
   - [ ] Ticket created in Freshdesk

#### Test Training Form

1. Visit: https://yellowfolder.com/weekly-training
2. Click "Register" on any training session
3. Fill out form
4. Submit
5. **Expected:**
   - [ ] Redirects to /request-success
   - [ ] Ticket created in Freshdesk

#### Test Record Request Form

1. Visit: https://yellowfolder.com/record-request
2. Fill out form
3. Submit
4. **Expected:**
   - [ ] Redirects to /request-success
   - [ ] Ticket created in Freshdesk

**If Forms Fail:**
- Check Vercel environment variables are set
- Check Vercel deployment logs for errors
- Verify Freshdesk API key is valid

---

### Phase 6: Google Search Console Setup (20 minutes)

#### Add Property

1. **Go to:** https://search.google.com/search-console
2. **Click:** "Add Property"
3. **Enter:** `https://yellowfolder.com`
4. **Choose verification method:**
   - **Option A (Recommended):** HTML tag in head
   - **Option B:** DNS TXT record
   - **Option C:** HTML file upload

#### Submit Sitemap

1. **Go to:** "Sitemaps" in left sidebar
2. **Enter:** `https://yellowfolder.com/sitemap.xml`
3. **Click:** "Submit"
4. **Wait:** Processing may take hours to days
5. **Expected Status:** "Success" (eventually)

#### Request Indexing (Priority Pages)

Use the "URL Inspection" tool to request indexing:

1. **Enter URL:** `https://yellowfolder.com`
2. **Click:** "Test live URL"
3. **Click:** "Request Indexing"
4. **Repeat for:**
   - [ ] /services
   - [ ] /pricing
   - [ ] /contact
   - [ ] /schedule-a-yellow-folder-demo

---

### Phase 7: Mobile Responsiveness (10 minutes)

#### Chrome DevTools Mobile Testing

1. Open: https://yellowfolder.com
2. Press F12 (DevTools)
3. Click device icon (toggle device toolbar)
4. Test on:
   - [ ] iPhone SE (375x667)
   - [ ] iPhone 14 Pro (393x852)
   - [ ] iPad (768x1024)
   - [ ] Galaxy S20 (360x800)

**For each device, check:**
- [ ] Navigation works
- [ ] Forms are usable
- [ ] Text is readable
- [ ] Images load properly
- [ ] No horizontal scrolling

---

### Phase 8: Performance Check (Optional)

#### Google PageSpeed Insights

1. **Go to:** https://pagespeed.web.dev/
2. **Enter:** `https://yellowfolder.com`
3. **Run test** for Mobile and Desktop
4. **Review scores:**
   - Performance: Target >90
   - Accessibility: Target >90
   - Best Practices: Target >90
   - SEO: Target 100

**Note:** Don't worry if initial scores are lower - they improve over time with caching.

---

## Troubleshooting Guide

### Issue: Vercel Deployment Failed

**Check:**
1. Vercel build logs for error messages
2. package.json dependencies are valid
3. No syntax errors in code
4. All required files committed

**Solution:**
- Fix errors in code
- Commit and push again
- Redeploy from Vercel dashboard

---

### Issue: OG Image Not Showing

**Symptoms:** Image doesn't appear in Facebook/Twitter preview

**Solutions:**
1. **Verify image exists:**
   ```bash
   curl -I https://yellowfolder.com/static/images/yf-og-image.png
   ```
   Should return `HTTP/2 200`

2. **Clear social media cache:**
   - Facebook: Use "Scrape Again" button
   - Twitter: Wait 30 minutes for cache to expire
   - LinkedIn: Use Post Inspector "Inspect" again

3. **Check meta tags:**
   - View page source
   - Verify og:image URL is absolute (not relative)
   - Ensure https:// (not http://)

---

### Issue: Forms Not Working

**Symptoms:** Forms submit but don't create tickets, or show errors

**Check:**
1. **Vercel environment variables:**
   - Go to Vercel → Settings → Environment Variables
   - Verify `FRESHDESK_KEY_PROD` is set
   - Verify `FRESHDESK_BASE_URL` is set

2. **Check API logs:**
   - Vercel → Deployments → Latest → Functions tab
   - Look for API route errors
   - Check for authentication failures

3. **Test API directly:**
   ```bash
   curl -X POST https://yellowfolder.com/api/training \
     -H "Content-Type: application/json" \
     -d '{"email":"test@test.com"}'
   ```
   Should return 200 or 400 (not 500)

**Solutions:**
- Add missing environment variables in Vercel
- Verify Freshdesk API key is valid
- Check Freshdesk API permissions

---

### Issue: Sitemap Not Indexing

**Symptoms:** Google Search Console shows sitemap errors or "Couldn't fetch"

**Check:**
1. **Sitemap loads:**
   ```bash
   curl https://yellowfolder.com/sitemap.xml
   ```

2. **Sitemap is valid XML:**
   - Should start with `<?xml version="1.0"`
   - All URLs should be absolute (https://yellowfolder.com/...)
   - No XML syntax errors

3. **robots.txt references sitemap:**
   ```bash
   curl https://yellowfolder.com/robots.txt
   ```
   Should contain: `Sitemap: https://yellowfolder.com/sitemap.xml`

**Solutions:**
- Fix XML syntax if broken
- Resubmit sitemap in Search Console
- Wait 24-48 hours for indexing

---

### Issue: Pages Not Indexing

**Symptoms:** Pages don't appear in Google Search after 2+ weeks

**Check:**
1. **Search Console coverage:**
   - Look for "Excluded" or "Error" status
   - Check for specific error messages

2. **No noindex tags on pages:**
   - Only /request-success should have noindex
   - All other pages should be indexable

3. **Sitemap includes all pages:**
   - Check sitemap.xml has all 11 URLs
   - All URLs are accessible

**Solutions:**
- Request indexing manually via URL Inspection
- Fix any errors shown in Search Console
- Wait 2-4 weeks for natural crawling

---

## Success Criteria

### Immediate (Day 1):
- [ ] All pages load successfully (no 404s or 500s)
- [ ] OG image loads and displays in social debuggers
- [ ] Sitemap submitted to Google Search Console
- [ ] Forms work (if Freshdesk credentials configured)
- [ ] No console errors on any page
- [ ] Mobile site is responsive

### Week 1:
- [ ] Google Search Console property verified
- [ ] Sitemap processed (may show "Pending" initially)
- [ ] At least home page appears in URL Inspection as "indexable"
- [ ] Social sharing works on Facebook/Twitter/LinkedIn
- [ ] Forms creating tickets in Freshdesk

### Month 1:
- [ ] All 11 pages indexed in Google
- [ ] 50+ impressions in Search Console
- [ ] CTR >2% from organic search
- [ ] No critical errors in Search Console
- [ ] Social shares generating traffic

---

## Monitoring Schedule

### Daily (Week 1):
- Check Vercel Analytics for traffic
- Monitor error rates in Vercel logs
- Verify forms are working

### Weekly (Month 1):
- Review Google Search Console metrics
- Check indexing status of all pages
- Monitor organic search traffic
- Review any crawl errors

### Monthly (Ongoing):
- Deep dive into Search Console data
- Analyze keyword rankings
- Review CTR trends
- Check for new opportunities

---

## Quick Reference Commands

```bash
# Check if site is live
curl -I https://yellowfolder.com

# Check OG image
curl -I https://yellowfolder.com/static/images/yf-og-image.png

# View sitemap
curl https://yellowfolder.com/sitemap.xml | head -30

# View robots.txt
curl https://yellowfolder.com/robots.txt

# Test API endpoint (training)
curl -X POST https://yellowfolder.com/api/training \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","firstName":"Test","lastName":"User"}'
```

---

## Documentation References

- **Deployment Guide:** `DEPLOYMENT_GUIDE.md`
- **SEO Implementation:** `SEO_IMPLEMENTATION_COMPLETE.md`
- **OG Image Guide:** `OPEN_GRAPH_IMAGE_COMPLETE.md`
- **Pre-Deployment Audit:** `PRE_DEPLOYMENT_SEO_AUDIT.md`

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Google Search Console:** https://search.google.com/search-console
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Inspector:** https://www.linkedin.com/post-inspector/

---

**Status:** Ready to test after Vercel deployment completes! 🚀

**Estimated testing time:** 60-90 minutes for complete verification
