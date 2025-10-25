# Quick Start: Testing Freshdesk Forms (5 Minutes)

**Goal:** Verify all 4 forms work correctly with Freshdesk API before deploying to production.

---

## Step 1: Get Your Freshdesk API Key (1 min)

1. Go to https://yellowfolder.freshdesk.com
2. Log in
3. Click your profile (top right) → Profile Settings
4. Scroll to "Your API Key" → Click "Show"
5. **Copy the API key**

---

## Step 2: Update Environment File (30 seconds)

Edit `.env.development`:

```bash
# Replace "changeme" with your actual API key
FRESHDESK_KEY_PROD="paste_your_api_key_here"
FRESHDESK_BASE_URL="https://yellowfolder.freshdesk.com"

# FreshChat token (if you have one)
NEXT_PUBLIC_FRESHCHAT_TOKEN="your_freshchat_token_or_leave_as_changeme"
```

**Save the file.**

---

## Step 3: Restart Dev Server (10 seconds)

```bash
# Kill current server (Ctrl+C if running)
npm run dev
```

Wait for:
```
✓ Ready in 2.5s
- Local: http://localhost:3000
```

---

## Step 4: Test Each Form (2 min)

### Training Form
1. Open: http://localhost:3000/weekly-training
2. Fill out form (use your real email to verify)
3. Click "Register"
4. Should redirect to `/request-success` ✅

### Contact Form
1. Open: http://localhost:3000/contact
2. Fill out form
3. Click "Submit"
4. Should redirect to `/request-success` ✅

### Demo Form
1. Open: http://localhost:3000/schedule-a-yellow-folder-demo
2. Fill out form
3. Click "Submit"
4. Should redirect to `/request-success` ✅

### Record Request Form
1. Open: http://localhost:3000/record-request
2. Fill out form
3. Click "Submit"
4. Should redirect to `/request-success` ✅

---

## Step 5: Verify Tickets in Freshdesk (1 min)

1. Go back to https://yellowfolder.freshdesk.com
2. Click "Tickets" in menu
3. **You should see 4 new tickets:**
   - Training request
   - Contact request
   - Demo request
   - Record request

4. **Click each ticket to verify:**
   - ✅ Subject is correct
   - ✅ Description has your form data
   - ✅ Assigned to correct group
   - ✅ Custom fields populated (district, record series, etc.)

---

## Step 6: Clean Up (30 seconds)

1. In Freshdesk, select your test tickets
2. Click "Actions" → "Delete" or "Mark as Spam"
3. This keeps your ticket queue clean

---

## ✅ Success Checklist

If all tests passed:
- ✅ All 4 forms submit successfully
- ✅ All redirect to success page
- ✅ All create tickets in Freshdesk
- ✅ Tickets have correct data
- ✅ No errors in browser console (F12)
- ✅ No errors in terminal logs

**You're ready to deploy!** 🚀

---

## ❌ Troubleshooting

### Forms don't submit
- Check `.env.development` has correct API key
- Restart dev server (`npm run dev`)
- Check browser console (F12) for errors

### Tickets not appearing in Freshdesk
- Check Freshdesk BASE_URL is correct
- Go to Tickets → All Tickets → Remove filters
- Search for your email address

### "Too many requests" error
- You hit rate limit (10/hour)
- Wait 1 hour or restart dev server

---

## Need More Details?

See `TESTING_FRESHDESK_INTEGRATION.md` for:
- Security verification steps
- Testing with curl/Postman
- Rate limiting tests
- Error handling verification
- Production deployment checklist

---

## Next: Deploy to Production

1. **Set Vercel environment variables:**
   - Go to Vercel dashboard
   - Project Settings → Environment Variables
   - Add:
     - `FRESHDESK_KEY_PROD` = your API key
     - `FRESHDESK_BASE_URL` = https://yellowfolder.freshdesk.com
     - `NEXT_PUBLIC_FRESHCHAT_TOKEN` = your FreshChat token

2. **Deploy:**
   ```bash
   git add .
   git commit -m "Phase 2 security fixes complete - all forms secured"
   git push
   ```

3. **Test in production:**
   - Fill out each form on production site
   - Verify tickets created in Freshdesk
   - Check for any errors

**Done!** ✅
