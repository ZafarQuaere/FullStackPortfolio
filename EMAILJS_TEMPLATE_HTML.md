# EmailJS Template - Full Stack Portfolio Theme

## Template Configuration

Copy this HTML template into your EmailJS dashboard at: https://dashboard.emailjs.com/admin/template/template_2atnnhe

### Subject Line:
```
New Portfolio Contact: {{subject}}
```

### Email Body (HTML):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Portfolio Contact</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%); padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background: rgba(15, 23, 42, 0.95); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); border: 1px solid rgba(59, 130, 246, 0.2);">
                    
                    <!-- Header with Gradient -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);">
                                New Portfolio Contact
                            </h1>
                            <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                                Someone reached out through your Full-Stack Portfolio website
                            </p>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            
                            <!-- Contact Details Card -->
                            <div style="background: rgba(30, 41, 59, 0.6); border-left: 4px solid #3b82f6; border-radius: 12px; padding: 24px; margin-bottom: 30px; backdrop-filter: blur(10px);">
                                <h2 style="margin: 0 0 20px 0; color: #60a5fa; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                    Contact Details
                                </h2>
                                
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(59, 130, 246, 0.1);">
                                            <span style="color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Name</span>
                                            <span style="color: #ffffff; font-size: 16px; font-weight: 500;">{{from_name}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(59, 130, 246, 0.1);">
                                            <span style="color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Email</span>
                                            <a href="mailto:{{from_email}}" style="color: #60a5fa; font-size: 16px; font-weight: 500; text-decoration: none;">{{from_email}}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(59, 130, 246, 0.1);">
                                            <span style="color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Subject</span>
                                            <span style="color: #ffffff; font-size: 16px; font-weight: 500;">{{subject}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0;">
                                            <span style="color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">Date & Time</span>
                                            <span style="color: #ffffff; font-size: 14px; font-weight: 400;">{{current_date}} at {{current_time}}</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Message Card -->
                            <div style="background: rgba(30, 41, 59, 0.6); border-left: 4px solid #8b5cf6; border-radius: 12px; padding: 24px; margin-bottom: 30px; backdrop-filter: blur(10px);">
                                <h2 style="margin: 0 0 16px 0; color: #a78bfa; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                    Message
                                </h2>
                                <div style="color: #e2e8f0; font-size: 15px; line-height: 1.7; white-space: pre-wrap; font-weight: 400;">
{{message}}
                                </div>
                            </div>

                            <!-- Quick Action -->
                            <div style="text-align: center; margin-top: 30px;">
                                <a href="mailto:{{reply_to}}?subject=Re: {{subject}}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); transition: all 0.3s ease;">
                                    Quick Reply
                                </a>
                            </div>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background: rgba(15, 23, 42, 0.8); border-top: 1px solid rgba(59, 130, 246, 0.1); text-align: center;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.6;">
                                This email was sent from your <strong style="color: #60a5fa;">Full-Stack Portfolio</strong> contact form.<br>
                                You can reply directly to this email to respond to {{from_name}}.
                            </p>
                            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(59, 130, 246, 0.1);">
                                <p style="margin: 0; color: #475569; font-size: 11px;">
                                    Portfolio: Full-Stack Mobile & Web Developer | Zafar Imam
                                </p>
                            </div>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

## How to Update the Template in EmailJS Dashboard

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Navigate to Email Templates**: Click "Email Templates" in the sidebar
3. **Select Your Template**: Find and click on template ID `template_2atnnhe`
4. **Update Subject Line**: 
   - Replace the subject with: `New Portfolio Contact: {{subject}}`
5. **Update Email Body**:
   - Switch to "HTML" mode (not plain text)
   - Copy and paste the HTML template above
   - Make sure "To Email" field is set to: `zafarquaere@gmail.com` or `{{to_email}}`
6. **Save the Template**: Click "Save" button
7. **Test**: Send a test email from your contact form

## Template Features

✅ **Matches Portfolio Theme**:
- Dark slate background (#0f172a, #1e293b)
- Blue to purple gradient header (#3b82f6 to #8b5cf6)
- Glassmorphism effects with backdrop blur
- Modern rounded corners and shadows

✅ **Professional Design**:
- Clean, organized layout
- Clear visual hierarchy
- Responsive design
- Easy-to-read typography

✅ **Interactive Elements**:
- Clickable email address
- Quick Reply button with gradient
- Professional footer

✅ **All Template Variables**:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{subject}} - Email subject
- {{message}} - Message content
- {{current_date}} - Formatted date
- {{current_time}} - Formatted time
- {{reply_to}} - Reply-to email

