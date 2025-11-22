# 🚀 GoDaddy Subdomain Deployment Guide for portfolio.dillistyle.shop

## 📋 Pre-Deployment Checklist

✅ Production build created for subdomain (`yarn build` completed)  
✅ Homepage set to `https://portfolio.dillistyle.shop`  
✅ `.htaccess` file added for proper routing  
✅ All files ready in `/frontend/build/` directory  

## 🌐 Step 1: Create Subdomain in GoDaddy

### Access GoDaddy cPanel:
1. Log in to your GoDaddy account
2. Go to "My Products" → "Web Hosting"
3. Click "Manage" next to your hosting plan
4. Click "cPanel" to access the control panel

### Create Subdomain:
1. In cPanel, find and click **"Subdomains"**
2. Enter **"portfolio"** in the subdomain field
3. The domain should auto-fill as **"dillistyle.shop"**
4. Document root should be: `/public_html/portfolio`
5. Click **"Create"** button

**Result:** GoDaddy will create a folder `/public_html/portfolio/` for your subdomain

## 🌐 Step 2: Deploy via cPanel File Manager (Recommended)

### Access File Manager:
1. In cPanel, find and click **"File Manager"**
2. Navigate to `public_html/portfolio/` folder (your subdomain folder)
3. **Important**: This folder should be empty or contain only placeholder files

### Upload Your Portfolio:
1. Click **"Upload"** button in File Manager
2. Upload the `portfolio-build.zip` file (created below)
3. Extract the ZIP file in the `portfolio` folder
4. Move all contents from extracted folder directly to `/public_html/portfolio/`

### Final Structure Should Look Like:
```
/public_html/portfolio/
├── index.html
├── .htaccess
├── asset-manifest.json
├── static/
│   ├── css/
│   └── js/
└── (other build files)
```

### Set Correct Permissions:
1. Select all files and folders in `/public_html/portfolio/`
2. Right-click and choose **"Permissions"**
3. Set folders to `755` and files to `644`

## 📦 Step 3: Alternative FTP Deployment

### FTP Connection Details:
- **Server**: ftp.dillistyle.shop (or your server IP)
- **Username**: Your cPanel username
- **Password**: Your cPanel password
- **Port**: 21 (or 22 for SFTP)

### FTP Steps:
1. Connect using FTP client (FileZilla recommended)
2. Navigate to `/public_html/portfolio/` directory
3. Upload all files from `/frontend/build/` to `/public_html/portfolio/`
4. Ensure `.htaccess` file is uploaded and visible

## 🔧 Step 4: DNS and SSL Configuration

### DNS (Usually Automatic):
- GoDaddy automatically creates the DNS record for subdomains
- `portfolio.dillistyle.shop` should point to your hosting server

### SSL Certificate:
1. In cPanel, go to **"SSL/TLS"**
2. Click **"Let's Encrypt SSL"**
3. Add `portfolio.dillistyle.shop` to get free SSL
4. Or contact GoDaddy support for SSL setup

## 📁 Files to Upload to /public_html/portfolio/

Upload ALL files from `/frontend/build/` including:
- `index.html` (main file)
- `static/` folder (CSS, JS, images)
- `.htaccess` (for routing and optimization)
- `asset-manifest.json`
- Any other files in the build directory

## 🔍 Testing Your Deployment

1. Visit `https://portfolio.dillistyle.shop` 
2. Test navigation between sections (About, Skills, Projects, etc.)
3. Check mobile responsiveness on your phone
4. Test contact form (shows mock success for now)
5. Verify all images and animations load correctly
6. Test scroll animations and particle effects

## 🚨 Troubleshooting Common Issues

### **1. Subdomain Not Working:**
- Wait 10-15 minutes after creating subdomain
- Clear browser cache and try incognito mode
- Check if subdomain was created in cPanel → Subdomains

### **2. 404 Error or Blank Page:**
- Ensure `.htaccess` file is in `/public_html/portfolio/` root
- Verify `index.html` is directly in `/public_html/portfolio/`
- Check file permissions (folders: 755, files: 644)

### **3. CSS/JS Not Loading:**
- Clear browser cache completely
- Check if `static/` folder uploaded to correct location
- Verify homepage URL in package.json matches subdomain

### **4. Images Not Displaying:**
- Check browser console for 404 errors
- Verify all assets in `static/` folder uploaded correctly
- Ensure file paths are relative (not absolute)

### **5. SSL Certificate Issues:**
- Contact GoDaddy support for subdomain SSL setup
- May take 24-48 hours for SSL to propagate

## 📞 Support Resources

**GoDaddy Support:**
- Phone: 1-480-505-8877
- Live Chat: Available in your GoDaddy account dashboard
- Knowledge Base: help.godaddy.com

**Common GoDaddy Help Topics:**
- "How to create a subdomain"
- "How to install SSL on subdomain"
- "File Manager upload issues"

## 🎉 Post-Deployment Verification

### ✅ Test Checklist:
1. **Homepage loads**: https://portfolio.dillistyle.shop
2. **Navigation works**: All menu items scroll to sections
3. **Mobile responsive**: Test on phone/tablet
4. **Projects filter**: Mobile App / Website filters work
5. **Contact form**: Shows success message (mocked)
6. **Social links**: LinkedIn, GitHub, Email links work
7. **Animations**: Particle effects and skill bars animate
8. **Performance**: Page loads quickly (under 3 seconds)

### 🔧 Optional Enhancements:
1. **Google Analytics**: Add tracking code to index.html
2. **Google Search Console**: Submit sitemap
3. **Performance monitoring**: Use GTmetrix or PageSpeed Insights
4. **Regular backups**: Download files periodically

## 🌟 Expected Result

**Your portfolio will be live at:** 
# 🌐 https://portfolio.dillistyle.shop

**Features that will work:**
- ✅ Futuristic dark theme with glassmorphism effects
- ✅ Animated particle background on hero section  
- ✅ Interactive skill progress bars
- ✅ Project filtering (Mobile Apps vs Websites)
- ✅ Smooth scrolling navigation
- ✅ Responsive design on all devices
- ✅ Contact form with validation (mock success)
- ✅ Professional timeline and experience showcase

---

**🚀 Ready to showcase your Full-Stack Mobile & Web Development expertise!**