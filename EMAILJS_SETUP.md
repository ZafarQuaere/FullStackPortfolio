# EmailJS Setup & Troubleshooting Guide

## Current Configuration

The project uses the same EmailJS credentials as AndroidPortfolio:

- **Service ID**: `service_ud6t0fe`
- **Template ID**: `template_2atnnhe`
- **Public Key**: `AFq2hXKaI0t37td-P`
- **Receiving Email**: `zafarquaere@gmail.com`

## Common Issue: Emails Not Being Received

### Most Common Problem: Template "To Email" Not Configured

The most common reason emails aren't received is that the EmailJS template doesn't have the "To Email" field configured in the dashboard.

### How to Fix:

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Navigate to Email Templates**: Click on "Email Templates" in the sidebar
3. **Select Your Template**: Find template ID `template_2atnnhe`
4. **Check "To Email" Field**: 
   - The "To Email" field MUST be set to: `zafarquaere@gmail.com`
   - OR use the template variable: `{{to_email}}` (which will use `zafarquaere@gmail.com` from the code)
5. **Save the Template**: Click "Save" after making changes

### Template Variables Required

Your EmailJS template should include these variables:

```
From Name: {{from_name}}
From Email: {{from_email}}
Subject: {{subject}}
Message: {{message}}
To Name: {{to_name}}
To Email: {{to_email}} (or hardcode: zafarquaere@gmail.com)
Reply To: {{reply_to}}
Date: {{current_date}}
Time: {{current_time}}
```

### Template Example

**Subject Line:**
```
New Contact Form Message: {{subject}}
```

**Email Body:**
```
Hello {{to_name}},

You have received a new message from your Full-Stack Portfolio contact form.

From: {{from_name}} ({{from_email}})
Date: {{current_date}} at {{current_time}}
Subject: {{subject}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.
Reply-To: {{reply_to}}
```

## Testing the Configuration

1. Open browser console (F12)
2. Submit the contact form
3. Check console logs for:
   - `EmailJS Config:` - Should show your service ID, template ID, and public key
   - `Sending email with params:` - Should show all template parameters
   - `EmailJS Success:` - Should show success response with status 200
   - `EmailJS Error Details:` - If there's an error, this will show details

## Debugging Steps

### Step 1: Verify EmailJS Service is Active
- Go to EmailJS Dashboard → Email Services
- Check that `service_ud6t0fe` is active and connected

### Step 2: Verify Template Configuration
- Go to EmailJS Dashboard → Email Templates
- Check template `template_2atnnhe`:
  - **To Email** field must be set (either hardcoded `zafarquaere@gmail.com` or `{{to_email}}`)
  - All template variables should match the code parameters

### Step 3: Check EmailJS Quota
- Go to EmailJS Dashboard → Account
- Check if you've exceeded the monthly email quota
- Free tier: 200 emails/month

### Step 4: Check Spam Folder
- Sometimes emails go to spam
- Check spam/junk folder in `zafarquaere@gmail.com`

### Step 5: Verify Public Key
- Go to EmailJS Dashboard → Account → General
- Verify the Public Key matches: `AFq2hXKaI0t37td-P`

## Console Debugging

When you submit the form, check the browser console for:

1. **Success Response** (Status 200):
   ```
   EmailJS Success: {status: 200, text: "OK"}
   ```
   This means EmailJS received and processed the request. If you still don't receive the email, check:
   - EmailJS template "To Email" configuration
   - Spam folder
   - EmailJS service connection

2. **Error Response**:
   ```
   EmailJS Error Details: {status: 400/401/404, message: "..."}
   ```
   - Status 400: Invalid request - check template parameters
   - Status 401: Authentication failed - check public key
   - Status 404: Service/Template not found - check IDs

## Quick Fix Checklist

- [ ] EmailJS template "To Email" is set to `zafarquaere@gmail.com` or `{{to_email}}`
- [ ] EmailJS service `service_ud6t0fe` is active
- [ ] Template `template_2atnnhe` exists and is saved
- [ ] Public key `AFq2hXKaI0t37td-P` is correct
- [ ] EmailJS quota not exceeded
- [ ] Checked spam folder
- [ ] Browser console shows success (status 200)

## Need More Help?

If emails still aren't being received after checking all the above:

1. Check EmailJS Dashboard → Logs for delivery status
2. Verify the email service (Gmail/Outlook) is properly connected in EmailJS
3. Try creating a new template with the same configuration
4. Test with a different email address to rule out email provider issues

