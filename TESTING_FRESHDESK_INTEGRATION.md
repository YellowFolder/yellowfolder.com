# Testing Freshdesk API Integration

This guide explains how to safely test the Freshdesk API integration before deploying to production.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Option 1: Testing with Real Freshdesk API (Recommended)](#option-1-testing-with-real-freshdesk-api-recommended)
3. [Option 2: Using Curl/Postman for API Testing](#option-2-using-curlpostman-for-api-testing)
4. [Option 3: Browser DevTools Testing](#option-3-browser-devtools-testing)
5. [Verification Checklist](#verification-checklist)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before testing, ensure you have:
- ✅ Freshdesk account access (https://yellowfolder.freshdesk.com)
- ✅ Freshdesk API key (get from Profile Settings)
- ✅ Development server running (`npm run dev`)
- ✅ `.env.development` file with credentials

---

## Option 1: Testing with Real Freshdesk API (Recommended)

This is the most accurate way to test - it uses real API credentials but in local development only.

### Step 1: Get Your Freshdesk API Key

1. **Log into Freshdesk:**
   - Go to https://yellowfolder.freshdesk.com
   - Log in with your credentials

2. **Navigate to Profile Settings:**
   - Click your profile icon (top right)
   - Select "Profile Settings"

3. **Copy API Key:**
   - Scroll down to "Your API Key" section
   - Click "Show" to reveal your API key
   - Copy the key

### Step 2: Update `.env.development`

```bash
# Server-side only - NOT exposed to browser
FRESHDESK_KEY_PROD="your_actual_api_key_here"
FRESHDESK_BASE_URL="https://yellowfolder.freshdesk.com"

# Client-side - Can be exposed to browser (if needed)
NEXT_PUBLIC_FRESHCHAT_TOKEN="your_freshchat_token_here"
```

**Important:** Don't commit this file to git! It should already be in `.gitignore`.

### Step 3: Restart Development Server

```bash
# Kill existing server (Ctrl+C)
npm run dev
```

The server needs to restart to pick up the new environment variables.

### Step 4: Test Each Form

Open your browser and test each form:

#### A. Training Form
1. **Navigate to:** http://localhost:3000/weekly-training
2. **Fill out the form:**
   - Email: your-test-email@example.com
   - Name: Test User
   - District: Test District
   - Record Series: Select one
   - Training Session: Select one
   - Training Dates: Select 3 dates
3. **Click "Register"**
4. **Expected:** Redirect to `/request-success`

#### B. Contact Form
1. **Navigate to:** http://localhost:3000/contact
2. **Fill out the form:**
   - Email: your-test-email@example.com
   - First Name: Test
   - Last Name: User
   - State: Select one
   - How can we help?: Select one
   - Message: Test message
3. **Click "Submit"**
4. **Expected:** Redirect to `/request-success`

#### C. Demo Form
1. **Navigate to:** http://localhost:3000/schedule-a-yellow-folder-demo
2. **Fill out the form:**
   - Email: your-test-email@example.com
   - First Name: Test
   - Last Name: User
   - District: Test District
   - State: Select one
   - Main priority: Select one
   - Document storage questions: Answer
3. **Click "Submit"**
4. **Expected:** Redirect to `/request-success`

#### D. Record Request Form
1. **Navigate to:** http://localhost:3000/record-request
2. **Fill out the form:**
   - District: Test District
   - Your Name: Test User
   - Your Email: your-test-email@example.com
   - Your Phone: 555-123-4567
   - Record Series: Select one
   - Target Name: Test Record
   - Other required fields
3. **Click "Submit"**
4. **Expected:** Redirect to `/request-success`

### Step 5: Verify in Freshdesk

1. **Log into Freshdesk:** https://yellowfolder.freshdesk.com
2. **Go to Tickets:** Click "Tickets" in the main menu
3. **Find your test tickets:** Look for tickets with your test data
4. **Verify each ticket has:**
   - ✅ Correct subject line
   - ✅ Correct description/details
   - ✅ Correct priority
   - ✅ Correct group assignment
   - ✅ Correct custom fields (district, record series, etc.)
   - ✅ Correct responder (if assigned)

### Step 6: Check Server Logs

Look at your terminal where `npm run dev` is running:

```bash
# You should see logs like:
[Training] Ticket created successfully: 12345
[Contact] Ticket created successfully: 12346
[Demo] Ticket created successfully: 12347
[RecordRequest] Ticket created successfully: 12348
```

If you see errors, they'll appear here with details.

### Step 7: Clean Up Test Tickets

After testing, you can:
1. **Delete test tickets** from Freshdesk
2. **Or mark them as spam/test** to keep your Freshdesk clean

---

## Option 2: Using Curl/Postman for API Testing

Test API routes directly without using the browser forms.

### Test Training API

```bash
curl -X POST http://localhost:3000/api/training \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "district": "Test District",
    "recordSeries": "Student Records",
    "trainingSession": "Records Management 101",
    "trainingDate1": "2025-11-01T09:00:00Z",
    "trainingDate2": "2025-11-08T09:00:00Z",
    "trainingDate3": "2025-11-15T09:00:00Z"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Your training request has been submitted successfully.",
  "ticketId": 12345
}
```

### Test Contact API

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test",
    "lastName": "User",
    "state": "MI",
    "district": "Test District",
    "inquiryType": "I am interested in learning more about YellowFolder for my district",
    "message": "This is a test message"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Your email has been successfully delivered. Thank you for reaching out to us."
}
```

### Test Demo API

```bash
curl -X POST http://localhost:3000/api/demo \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test",
    "lastName": "User",
    "state": "MI",
    "district": "Test District",
    "inquiryType": "Considering YellowFolder as a records management solution",
    "howdidyouhear": "Conference",
    "documentStorageIssue": "Yes",
    "documentStorageBudget": "No"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Your demo request has been successfully submitted. Thank you for reaching out to us."
}
```

### Test Record Request API

```bash
curl -X POST http://localhost:3000/api/record-request \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "phone": "555-123-4567",
    "district": "Test District",
    "recordSeries": "Student Records",
    "targetName": "John Doe",
    "targetDOB": "2000-01-01",
    "targetCampus": "Main Campus",
    "targetLeaveDate": "2024-06-01",
    "targetStatus": "archive",
    "targetID": "12345",
    "targetTerminationDate": "2024-06-01",
    "extraInfo": "Test additional info"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Your record request has been successfully submitted. We will begin searching for your records."
}
```

---

## Option 3: Browser DevTools Testing

Use browser developer tools to inspect API calls:

### Step 1: Open DevTools
- Chrome/Edge: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- Firefox: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)

### Step 2: Go to Network Tab
- Click "Network" tab in DevTools
- Make sure "Preserve log" is checked

### Step 3: Submit a Form
- Fill out any form (e.g., http://localhost:3000/contact)
- Click Submit

### Step 4: Inspect Network Request
1. **Find the API call:**
   - Look for request to `/api/contact` (or `/api/training`, `/api/demo`, `/api/record-request`)

2. **Check Request:**
   - **Method:** Should be `POST`
   - **Headers:** Should include `Content-Type: application/json`
   - **Payload:** Should contain your form data (email, name, etc.)
   - **Important:** Should NOT contain any API keys!

3. **Check Response:**
   - **Status:** Should be `200 OK` for success
   - **Response body:** Should contain `{ "success": true, "message": "..." }`
   - If error: Status `400`, `429`, or `500` with error message

### Step 5: Check Console
- Click "Console" tab
- Look for any error messages
- Should see logs if there were issues

---

## Verification Checklist

After testing, verify the following:

### ✅ Security Checks
- [ ] Open DevTools → Sources → Search for "FRESHDESK_KEY"
  - Should find ZERO results
  - API key should NOT be visible anywhere in browser
- [ ] Check JavaScript bundles (DevTools → Sources → webpack://)
  - Should NOT contain any API keys
  - Should NOT contain FRESHDESK_BASE_URL
- [ ] Check Network tab → API calls
  - All calls should go to `/api/*` (not directly to Freshdesk)
  - Request headers should NOT contain API keys

### ✅ Functionality Checks
- [ ] Training form submits successfully
- [ ] Contact form submits successfully
- [ ] Demo form submits successfully
- [ ] Record Request form submits successfully
- [ ] All forms redirect to `/request-success` on success
- [ ] Forms show error messages on failure
- [ ] Rate limiting works (try submitting >10 times in 1 hour)

### ✅ Freshdesk Ticket Checks
For each form submission, verify in Freshdesk:
- [ ] **Training ticket** created with:
  - Subject: "Training Requested by [name] at [district] - [session]"
  - Type: "PNE Training Recommended"
  - Priority: Medium (2)
  - Group: 48000495297
  - Custom fields: district, record series

- [ ] **Contact ticket** created with:
  - Subject: "Contact Request from [email]"
  - Type: "Sales Inquiries"
  - Priority: High (1)
  - Group: 48000581041
  - Description includes state, inquiry type, message

- [ ] **Demo ticket** created with:
  - Subject: "Demo Request from [name] at [district]"
  - Type: "Sales Inquiries"
  - Priority: High (1)
  - Group: 48000495297
  - Description includes state, priority, storage questions

- [ ] **Record Request ticket** created with:
  - Subject: "Record Request for [district]"
  - Type: "Record Retrieval"
  - Priority: Medium (2)
  - Group: 48000495294
  - Responder: Christine Roblez (48011471036)
  - Description includes all target information

### ✅ Error Handling Checks
Test error scenarios:
- [ ] Submit form with invalid email → Should show error message
- [ ] Submit form with missing required fields → Should show error message
- [ ] Submit 11 forms in 1 hour → Should show rate limit error (429)
- [ ] Use wrong API credentials in `.env.development` → Should show error

---

## Troubleshooting

### Problem: "Method not allowed" (405 error)
**Cause:** API route only accepts POST requests
**Fix:** Make sure you're using POST method (not GET)

### Problem: "Too many requests" (429 error)
**Cause:** Rate limiting kicked in (>10 requests/hour from same IP)
**Fix:** Wait 1 hour, or restart dev server to reset rate limit counter

### Problem: "Missing required fields" (400 error)
**Cause:** Form data missing required fields
**Fix:** Check that all required fields are filled:
- Training: email, name, district, recordSeries, trainingSession
- Contact: email, state, inquiryType
- Demo: email, state, district, inquiryType
- Record Request: email, name, district, phone

### Problem: "Invalid email format" (400 error)
**Cause:** Email doesn't match regex pattern
**Fix:** Use valid email format (e.g., test@example.com)

### Problem: Freshdesk API returns 401 (Unauthorized)
**Cause:** Invalid or missing Freshdesk API key
**Fix:**
1. Check `.env.development` has correct `FRESHDESK_KEY_PROD`
2. Verify API key is correct (copy from Freshdesk Profile)
3. Restart dev server (`npm run dev`)

### Problem: Freshdesk API returns 400 (Bad Request)
**Cause:** Invalid data sent to Freshdesk
**Fix:**
1. Check server logs for error details
2. Verify custom field IDs are correct (cf_district, cf_record_series1, etc.)
3. Check group_id and responder_id are valid

### Problem: No tickets appearing in Freshdesk
**Possible causes:**
1. Wrong Freshdesk account (check BASE_URL)
2. Tickets going to wrong group (check group_id)
3. API credentials incorrect
4. Tickets filtered out in Freshdesk view

**Fix:**
1. Go to Freshdesk → All Tickets → Remove filters
2. Search for your test email
3. Check Spam/Trash folders in Freshdesk

### Problem: Server logs show "fetch is not defined"
**Cause:** Node.js version too old (fetch requires Node 18+)
**Fix:**
```bash
node --version  # Should be v18+
nvm use 22      # Or upgrade Node.js
```

---

## Testing Rate Limiting

To test that rate limiting works:

### Script to Test Rate Limiting

Create a test script `test-rate-limit.sh`:

```bash
#!/bin/bash

echo "Testing rate limiting - will send 12 requests"
echo "Expected: First 10 succeed, last 2 fail with 429"
echo ""

for i in {1..12}; do
  echo "Request $i:"
  curl -X POST http://localhost:3000/api/training \
    -H "Content-Type: application/json" \
    -d '{
      "email": "test@example.com",
      "name": "Test User",
      "district": "Test District",
      "recordSeries": "Student Records",
      "trainingSession": "Records Management 101",
      "trainingDate1": "2025-11-01T09:00:00Z",
      "trainingDate2": "2025-11-08T09:00:00Z",
      "trainingDate3": "2025-11-15T09:00:00Z"
    }' | jq '.message'
  echo ""
  sleep 1
done
```

Run it:
```bash
chmod +x test-rate-limit.sh
./test-rate-limit.sh
```

**Expected output:**
- Requests 1-10: Success messages
- Requests 11-12: "Too many requests. Please try again later."

---

## Production Testing Checklist

Before deploying to production:

1. **Test in Vercel Preview/Staging:**
   - [ ] Deploy to Vercel preview environment
   - [ ] Set environment variables in Vercel dashboard
   - [ ] Test all 4 forms in preview
   - [ ] Verify tickets created in Freshdesk

2. **Security Verification:**
   - [ ] Inspect page source - no API keys visible
   - [ ] Check JavaScript files - no API keys
   - [ ] DevTools Network tab - all API calls to `/api/*`
   - [ ] Try accessing Freshdesk directly from browser - should fail

3. **Load Testing:**
   - [ ] Test rate limiting works in production
   - [ ] Test concurrent form submissions
   - [ ] Monitor Freshdesk for ticket creation

4. **Monitoring Setup:**
   - [ ] Set up error logging (Sentry, LogRocket, etc.)
   - [ ] Monitor API route errors
   - [ ] Set up Freshdesk ticket alerts
   - [ ] Track 429 rate limit hits

---

## Next Steps

After successful testing:

1. ✅ **Clean up test tickets** in Freshdesk
2. ✅ **Document any issues** found
3. ✅ **Update Vercel environment variables** for production
4. ✅ **Deploy to production**
5. ✅ **Monitor** production tickets in Freshdesk
6. ✅ **Test** production forms with real data

---

## Quick Reference: API Endpoints

| Form | Endpoint | Method | Required Fields |
|------|----------|--------|-----------------|
| Training | `/api/training` | POST | email, name, district, recordSeries, trainingSession |
| Contact | `/api/contact` | POST | email, state, inquiryType |
| Demo | `/api/demo` | POST | email, state, district, inquiryType |
| Record Request | `/api/record-request` | POST | email, name, district, phone |

---

## Support

If you encounter issues:
1. Check server logs (`npm run dev` terminal output)
2. Check browser console (DevTools → Console)
3. Check Network tab (DevTools → Network)
4. Review error messages in responses
5. Verify environment variables are set correctly

For Freshdesk API documentation:
- https://developers.freshdesk.com/api/
