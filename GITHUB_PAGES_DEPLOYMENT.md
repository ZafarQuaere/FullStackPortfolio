# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your Full-Stack Portfolio to GitHub Pages.

## 📌 Repository URLs

After deployment, your portfolio will be available at:
- **Live URL**: `https://zafarquaere.github.io/FullStackPortfolio/`
- **Repository**: `https://github.com/ZafarQuaere/FullStackPortfolio`

You can have both portfolios running:
- Android Portfolio: `https://zafarquaere.github.io/AndroidPortfolio/`
- Full-Stack Portfolio: `https://zafarquaere.github.io/FullStackPortfolio/`

---

## 🎯 Step-by-Step Deployment Process

### **Step 1: Create GitHub Repository**

1. Go to [GitHub](https://github.com)
2. Click the **"+"** button (top right) → **"New repository"**
3. Fill in the details:
   - **Repository name**: `FullStackPortfolio`
   - **Description**: `Full-Stack Mobile & Web Developer Portfolio`
   - **Visibility**: Public ✅
   - **DON'T** initialize with README (we already have files)
4. Click **"Create repository"**

### **Step 2: Configure Git Locally**

Open your terminal and run these commands:

```bash
# Navigate to your project
cd /Users/zafarimam/Cursor/Emergent/FullStackPortfolio-main

# Configure git user (if not already done)
git config user.name "Zafar Imam"
git config user.email "zafarimam512@gmail.com"

# Rename branch to main (modern convention)
git branch -M main

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Full-Stack Portfolio with GitHub Pages setup"

# Add GitHub remote
git remote add origin https://github.com/ZafarQuaere/FullStackPortfolio.git

# Push to GitHub
git push -u origin main
```

### **Step 3: Configure GitHub Pages**

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
   - (The workflow file we created will handle the rest automatically)
5. Click **"Save"**

### **Step 4: Wait for Deployment**

1. Go to the **"Actions"** tab in your repository
2. You'll see the **"Deploy to GitHub Pages"** workflow running
3. Wait for it to complete (usually 2-5 minutes)
4. Once complete, your site will be live! 🎉

---

## 🔧 What Happens Automatically

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

✅ Install Node.js and dependencies  
✅ Build the React application  
✅ Deploy to GitHub Pages  
✅ Run on every push to `main` branch  

---

## 🔄 Updating Your Portfolio

Whenever you make changes and want to update your live site:

```bash
# Make your changes to the code

# Add and commit changes
git add .
git commit -m "Update: describe your changes here"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and redeploy! 🚀
```

---

## 🌐 Multiple GitHub Pages Sites

Yes! You can host multiple project sites:

| Site Type | Repository | URL |
|-----------|-----------|-----|
| **Android Portfolio** | `AndroidPortfolio` | `https://zafarquaere.github.io/AndroidPortfolio/` |
| **Full-Stack Portfolio** | `FullStackPortfolio` | `https://zafarquaere.github.io/FullStackPortfolio/` |
| **Future Project** | `project-name` | `https://zafarquaere.github.io/project-name/` |

You can have **unlimited project sites** under your GitHub account!

---

## 🎨 Custom Domain (Optional)

If you want to use a custom domain like `portfolio.yourdomain.com`:

1. In GitHub Settings → Pages
2. Add your custom domain
3. Configure DNS settings with your domain provider
4. Add a `CNAME` file to your project

---

## ⚠️ Troubleshooting

### **Build Fails**
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Make sure `yarn.lock` is committed

### **Page Shows 404**
- Wait 5-10 minutes after first deployment
- Check that GitHub Pages is enabled in Settings
- Verify the homepage URL in `package.json` matches your GitHub Pages URL

### **Blank Page**
- Check browser console for errors
- Ensure `homepage` in `package.json` is correct
- Clear browser cache and hard refresh (Cmd+Shift+R)

---

## 📋 Checklist

- [ ] Created GitHub repository named `FullStackPortfolio`
- [ ] Ran `git init` in local project
- [ ] Committed all files with `git add .` and `git commit`
- [ ] Added remote with `git remote add origin`
- [ ] Pushed to GitHub with `git push -u origin main`
- [ ] Enabled GitHub Pages in repository Settings
- [ ] Selected "GitHub Actions" as source
- [ ] Waited for Actions workflow to complete
- [ ] Visited `https://zafarquaere.github.io/FullStackPortfolio/`
- [ ] Portfolio is live! 🎉

---

## 🎯 Quick Commands Reference

```bash
# Check git status
git status

# View remote URL
git remote -v

# View commit history
git log --oneline

# Create a new branch for experiments
git checkout -b feature/new-feature

# Switch back to main
git checkout main

# Pull latest changes
git pull origin main
```

---

## 📞 Need Help?

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [GitHub Actions logs](https://github.com/ZafarQuaere/FullStackPortfolio/actions)
3. Ensure your local build works: `cd frontend && yarn build`

---

**🚀 Your portfolio will be live at: https://zafarquaere.github.io/FullStackPortfolio/**

Happy deploying! 🎊

