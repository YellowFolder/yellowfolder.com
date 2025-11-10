# Form Security Testing Guide

Before deploying the new security features to production, follow this comprehensive testing plan.

---

## Prerequisites

1. Ensure `.env.development` has the correct `RECAPTCHA_SECRET_KEY`
2. Start the development server: `npm run dev`
3. Open browser developer console (F12) to monitor errors

---

## Test Plan Overview

You'll test all 4 forms:
- Contact Form (`/contact`)
- Demo Form (`/schedule-a-yellow-folder-demo`)
- Record Request Form (`/record-request`)
- Training Form (`/weekly-training`)

---

## 🧪 Test 1: Normal Submission (Should Work)

**Purpose:** Verify legitimate users can submit forms successfully

### Steps:
1. Navigate to a form (e.g., `/contact`)
2. Fill out ALL required fields with valid data
3. Complete the reCAPTCHA challenge (check the box)
4. Click Submit
5. **WAIT 3+ seconds** before submitting

### Expected Results:
✅ reCAPTCHA widget loads and displays checkbox
✅ Form submits successfully
✅ Redirects to `/request-success`
✅ Freshdesk ticket is created
✅ No console errors

### If it fails:
- Check browser console for errors
- Verify `RECAPTCHA_SECRET_KEY` is set in `.env.development`
- Check terminal/server logs for API errors

---

## 🧪 Test 2: Honeypot Detection (Should Block)

**Purpose:** Verify bots that fill hidden fields are blocked

### Steps:
1. Navigate to a form
2. Open browser console
3. Run this JavaScript to fill the honeypot:
   ```javascript
   document.querySelector('input[name="honeypot"]').value = 'bot test';
   ```
4. Fill out the rest of the form normally
5. Complete reCAPTCHA
6. Submit the form

### Expected Results:
❌ Form submission is blocked
❌ Error message: "Your submission could not be processed"
✅ Console shows 400 error
✅ Server logs show: `[Contact] Honeypot triggered for IP: ...`

---

## 🧪 Test 3: Missing reCAPTCHA (Should Block)

**Purpose:** Verify forms require reCAPTCHA completion

### Steps:
1. Navigate to a form
2. Fill out all required fields
3. **DO NOT** complete the reCAPTCHA challenge
4. Click Submit

### Expected Results:
❌ Form submission is blocked
❌ Error message: "Please complete the reCAPTCHA verification"
✅ Form stays on the same page
✅ No API call is made (check Network tab)

---

## 🧪 Test 4: Timing Check (Should Block)

**Purpose:** Verify instant submissions are blocked

### Steps:
1. Navigate to a form
2. **IMMEDIATELY** fill out required fields (as fast as possible)
3. Complete reCAPTCHA quickly
4. Submit within 3 seconds of page load

### Expected Results:
❌ Form submission is blocked
❌ Error message: "Please take your time to fill out the form"
✅ Console shows 400 error
✅ Server logs show: `[Contact] Submission too fast (XXXms) for IP: ...`

### To make this easier to test:
Open browser console and run:
```javascript
// This will submit the form instantly
document.querySelector('form').submit();
```

---

## 🧪 Test 5: Rate Limiting (Should Block)

**Purpose:** Verify too many submissions are blocked

### Steps:
1. Submit the same form successfully 10 times in a row
2. Try to submit an 11th time within 1 hour

### Expected Results:
✅ First 10 submissions succeed
❌ 11th submission is blocked
❌ Error message: "You have submitted too many requests. Please wait an hour before trying again"
✅ Server logs show: `[Contact] Rate limit exceeded for IP: ...`

**Note:** In development, you may need to restart the server to reset rate limits (they're stored in memory).

---

## 🧪 Test 6: Invalid Email (Should Block)

**Purpose:** Verify email validation works

### Steps:
1. Navigate to a form
2. Fill out all fields
3. Enter an invalid email: `notanemail`
4. Complete reCAPTCHA
5. Submit

### Expected Results:
❌ Form submission is blocked
❌ Error message: "Please provide a valid email address"
✅ Console shows 400 error

---

## 🧪 Test 7: All Forms Coverage

**Purpose:** Verify all 4 forms work correctly

### Test each form:
- [ ] Contact Form (`/contact`)
- [ ] Demo Form (`/schedule-a-yellow-folder-demo`)
- [ ] Record Request Form (`/record-request`)
- [ ] Training Form (`/weekly-training`)

For each form, run at least:
- Test 1 (Normal submission)
- Test 3 (Missing reCAPTCHA)

---

## 📊 Monitoring & Logs

### Check Server Logs For:
```
✅ Success messages:
[Contact] Ticket created successfully: 12345

❌ Security blocks:
[Contact] Honeypot triggered for IP: 127.0.0.1
[Demo] Submission too fast (2500ms) for IP: 127.0.0.1
[Training] reCAPTCHA verification failed for IP: 127.0.0.1
[RecordRequest] Rate limit exceeded for IP: 127.0.0.1
```

### Check Browser Console For:
- reCAPTCHA script loading: `https://www.google.com/recaptcha/api.js`
- 200 responses for successful submissions
- 400 responses for blocked submissions
- No JavaScript errors

---

## 🐛 Troubleshooting

### Issue: reCAPTCHA Widget Doesn't Load
**Solutions:**
- Check browser console for script loading errors
- Verify internet connection
- Check if ad blockers are interfering
- Verify site key is correct in component files

### Issue: "Failed to verify reCAPTCHA"
**Solutions:**
- Verify `RECAPTCHA_SECRET_KEY` in `.env.development`
- Check server logs for the actual error from Google
- Ensure the secret key matches the site key
- Check if localhost is allowed in reCAPTCHA admin panel

### Issue: "Submission too fast" Even When Not Fast
**Solutions:**
- Check if `formLoadTime` is being set correctly
- Clear browser cache and reload
- Verify timing logic in component (should be `Date.now() - formLoadTime`)

### Issue: Honeypot Triggers on Legitimate Users
**Solutions:**
- Verify honeypot field has `display: none` and `style={{ display: 'none' }}`
- Check that the field name is "honeypot"
- Ensure no browser autofill is filling the field

### Issue: Rate Limiting Doesn't Work
**Solutions:**
- Remember: rate limits reset on server restart (in-memory storage)
- Check that IP address is being captured correctly
- For production, consider using Redis for persistent rate limiting

---

## ✅ Pre-Deployment Checklist

Before deploying to production:

- [ ] All 4 forms tested successfully in development
- [ ] At least one successful submission per form
- [ ] Honeypot blocking verified
- [ ] reCAPTCHA verification working
- [ ] Timing checks working
- [ ] Rate limiting working
- [ ] No console errors on normal submissions
- [ ] Freshdesk tickets created successfully
- [ ] `.env.production` has `RECAPTCHA_SECRET_KEY` set
- [ ] Production reCAPTCHA keys registered for your production domain
- [ ] All team members notified about new security features

---

## 🚀 Production Deployment Notes

### Environment Variables:
Ensure your production environment has:
```
RECAPTCHA_SECRET_KEY="6Lf4gAgsAAAAAAxt4uwBdKZSOTuc1SMofqV3GsIQ"
```

### reCAPTCHA Domain Verification:
In Google reCAPTCHA Admin (https://www.google.com/recaptcha/admin):
- Verify your production domain is added to the allowed domains list
- Common domains: `yellowfolder.com`, `www.yellowfolder.com`

### Monitoring After Deployment:
1. Monitor Freshdesk ticket volume (should decrease)
2. Check server logs for bot detections
3. Watch for any legitimate user complaints
4. Review error rates in your monitoring tools

### Rollback Plan:
If issues occur:
1. Keep old code in a git branch
2. Can quickly revert by removing reCAPTCHA checks
3. Honeypot and timing checks are non-intrusive, can stay active

---

## 📞 Support

If you encounter issues:
1. Check server logs first
2. Check browser console
3. Verify environment variables
4. Test in incognito mode (eliminates browser extensions)
5. Review this guide for troubleshooting steps

**Common "False Positive" Scenarios:**
- Browser autofill filling honeypot → Ensure proper styling
- Users clicking submit too fast → Consider lowering timing threshold from 3s to 2s
- reCAPTCHA timing out → Users need to re-verify if they wait too long

---

## 📈 Success Metrics

After 1 week in production, you should see:
- 90%+ reduction in bot submissions to Freshdesk
- No increase in legitimate user complaints
- Security logs showing blocked bot attempts
- Normal conversion rates maintained

Good luck with testing! 🎉
