# URL Redirects Documentation

This document outlines all 301 redirects configured for yellowfolder.com to fix Google Search Console 404 errors and prevent duplicate content issues.

---

## WWW to Non-WWW Redirect

**Purpose:** Consolidate all traffic to the non-www version to prevent duplicate content penalties.

**Configuration:**
- All `www.yellowfolder.com/*` → `yellowfolder.com/*`
- Permanent 301 redirect
- Preserves all URL paths

**Examples:**
```
https://www.yellowfolder.com/about-us → https://yellowfolder.com/about-us
https://www.yellowfolder.com/contact → https://yellowfolder.com/contact
https://www.yellowfolder.com/pricing → https://yellowfolder.com/pricing
```

---

## Legacy HTML File Extensions

**Purpose:** Handle old static HTML URLs that Google still has indexed.

### `/index.html` → `/`
- Old homepage URL with .html extension
- Redirects to clean root URL

### `/privacy-policy.html` → `/privacy-policy`
- Old privacy policy with .html extension
- Redirects to current clean URL

---

## Old URL Mappings

### Demo & Training Pages

**`/demo` → `/schedule-a-yellow-folder-demo`**
- Old short demo URL
- Redirects to full demo request page
- Preserves conversion funnel

**`/free-yellowfolder-webinar` → `/weekly-training`**
- Old webinar signup URL
- Redirects to current training registration page

### Pricing Pages

**`/pricing-calculator` → `/pricing`**
- Old pricing calculator tool URL
- Redirects to main pricing page

**`/pricing-guide` → `/pricing`**
- Old pricing guide URL
- Redirects to main pricing page

### Service Pages

**`/principal` → `/services`**
- Old principal-specific page
- Redirects to general services page

**`/student-records` → `/services`**
- Old student records page
- Redirects to general services page
- Services page covers all record types

---

## Blog Redirects

**Purpose:** Handle old blog URLs that no longer exist.

**`/blog/*` → `/`**
- All blog posts redirect to homepage
- No blog section currently exists
- Catchall for any blog URL pattern

**Example:**
```
/blog/security-101-with-yellowfolder → /
/blog/any-other-post → /
```

---

## Complete Redirect List

| Old URL | New Destination | Reason |
|---------|----------------|--------|
| `www.yellowfolder.com/*` | `yellowfolder.com/*` | Prevent duplicate content |
| `/index.html` | `/` | Legacy HTML extension |
| `/privacy-policy.html` | `/privacy-policy` | Legacy HTML extension |
| `/demo` | `/schedule-a-yellow-folder-demo` | Shortened URL mapping |
| `/pricing-calculator` | `/pricing` | Old tool URL |
| `/pricing-guide` | `/pricing` | Old guide URL |
| `/principal` | `/services` | Old audience-specific page |
| `/student-records` | `/services` | Old record type page |
| `/free-yellowfolder-webinar` | `/weekly-training` | Old webinar URL |
| `/blog/*` | `/` | Blog no longer exists |

---

## Testing Redirects

### Local Testing (Development):
```bash
# Start dev server
npm run dev

# Test redirects (these won't work exactly in dev, but will in production)
curl -I http://localhost:3000/demo
curl -I http://localhost:3000/pricing-calculator
curl -I http://localhost:3000/blog/test
```

### Production Testing:
Once deployed, test with:
```bash
# Should return 308 (temporary redirect in dev) or 301 (permanent in production)
curl -I https://yellowfolder.com/demo
curl -I https://yellowfolder.com/pricing-calculator
curl -I https://www.yellowfolder.com/about-us
```

---

## Google Search Console Actions

After deploying these redirects:

1. **Request Re-Indexing**
   - Go to Google Search Console
   - URL Inspection tool
   - Enter each old URL
   - Click "Request Indexing"

2. **Monitor 404 Errors**
   - Check Coverage report weekly
   - Verify 404 errors decrease
   - Add new redirects as needed

3. **Update Sitemap**
   - Sitemap already points to correct URLs
   - No changes needed to `/public/sitemap.xml`

4. **Canonical URLs**
   - All pages should have canonical tags pointing to non-www version
   - Already configured in site-wide meta tags

---

## Implementation Details

**File:** `next.config.js`
**Method:** Next.js `redirects()` configuration
**Redirect Type:** 301 Permanent Redirects
**Execution:** Server-side (not client-side JavaScript)

**Benefits:**
- ✅ SEO-friendly (search engines follow 301s)
- ✅ Fast (handled at server level)
- ✅ Preserves link equity
- ✅ No JavaScript required
- ✅ Works for all user agents (bots, browsers, curl, etc.)

---

## Future Maintenance

If you need to add more redirects:

1. Edit `next.config.js`
2. Add to the `redirects()` array
3. Test locally with `npm run dev`
4. Commit and deploy
5. Test in production
6. Update this documentation

**Example:**
```javascript
{
  source: '/old-url',
  destination: '/new-url',
  permanent: true, // 301 redirect
},
```

---

## Expected Results

After deployment:
- ✅ All 404 errors in Google Search Console should resolve
- ✅ Duplicate content warnings should disappear
- ✅ Users/bots accessing old URLs will reach correct pages
- ✅ Link equity preserved through 301 redirects
- ✅ No broken links for users

**Timeline:**
- Immediate: Redirects work for all new requests
- 1-2 weeks: Google re-crawls and updates index
- 1 month: Most 404 errors cleared from Search Console

---

## Support Resources

- [Next.js Redirects Documentation](https://nextjs.org/docs/api-reference/next.config.js/redirects)
- [Google 301 Redirect Best Practices](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Canonical URL Guidelines](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

---

Last Updated: 2025-11-11
