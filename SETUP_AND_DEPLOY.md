# 📋 Complete Setup & Deployment Guide

## ⚠️ IMPORTANT: File Location

Your portfolio files are at:
```
/Users/amritverma/Claude/Projects/Personal Portfolio
```

**NOT** at:
```
/Users/amritverma/Documents/Claude/Projects/Personal Portfolio
```

Use the correct path when navigating!

---

## 🚀 Step-by-Step Setup & Deployment

### **STEP 1: Open Terminal**

Open your Mac terminal. You can do this by:
- Pressing `Cmd + Space` and typing `terminal`
- Or going to Applications → Utilities → Terminal

### **STEP 2: Navigate to Your Portfolio Folder**

Copy and paste this command:
```bash
cd /Users/amritverma/Claude/Projects/Personal\ Portfolio
```

Press Enter.

You should see:
```
Personal Portfolio%
```

**Verify you're in the right place:**
```bash
pwd
```

Should output:
```
/Users/amritverma/Claude/Projects/Personal Portfolio
```

### **STEP 3: Check If Node.js and npm Are Installed**

Run:
```bash
node --version
npm --version
```

You should see version numbers like:
```
v22.22.0
10.9.4
```

If you get "command not found", **you need to install Node.js**. Download from: https://nodejs.org/

### **STEP 4: Install Project Dependencies**

Run:
```bash
npm install
```

This will:
- Download all required packages
- Create a `node_modules` folder
- Take 2-3 minutes

You should see output like:
```
added XX packages
```

### **STEP 5: Test Locally (Optional but Recommended)**

Run:
```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
```

Open your browser and go to: `http://localhost:5173/`

You should see your portfolio website!

To stop the dev server, press `Ctrl + C`

### **STEP 6: Build for Production**

Run:
```bash
npm run build
```

This creates an optimized version ready for deployment.

You should see:
```
dist/index.html                  1.18 kB
dist/assets/main-xxx.css        18.45 kB
dist/assets/main-xxx.js         XX.XX kB

✓ built in X.XXs
```

This creates a `dist/` folder with your website ready to deploy.

---

## 📤 Deployment Options

### **Option A: Deploy to GitHub Pages (Recommended)**

#### 1. Create a GitHub Repository

- Go to https://github.com/new
- Repository name: `Personal_portfolio`
- Description: "Premium personal portfolio website"
- Choose: **Public**
- Click "Create repository"

#### 2. Connect Your Local Folder to GitHub

In your terminal, run these commands (one by one):

```bash
git remote add origin https://github.com/amritv0306/Personal_portfolio.git
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

You might be asked to log in to GitHub - follow the prompts.

#### 3. Enable GitHub Pages

- Go to your repository on GitHub
- Click **Settings** (top right)
- In left sidebar, click **Pages**
- Under "Build and deployment":
  - Source: Select **Deploy from a branch**
  - Branch: Select **main** and **/root**
  - Click **Save**

#### 4. Wait for Deployment

- GitHub will automatically build and deploy
- Go to the **Actions** tab to watch progress
- Once complete, your site is live at:

```
https://amritv0306.github.io/Personal_portfolio/
```

---

### **Option B: Deploy to Vercel (Easiest)**

#### 1. Create Vercel Account

Go to: https://vercel.com/signup (connect with GitHub)

#### 2. Import Project

- Click "New Project"
- Select your `Personal_portfolio` repository
- Click "Import"
- Click "Deploy"

That's it! Your site is live at: `https://yourname.vercel.app`

---

### **Option C: Deploy to Netlify**

#### 1. Create Netlify Account

Go to: https://app.netlify.com/signup

#### 2. Connect GitHub

- Click "Connect to Git"
- Select GitHub
- Select your `Personal_portfolio` repository

#### 3. Configure Build Settings

- Build command: `npm run build`
- Publish directory: `dist`
- Click "Deploy site"

Your site is live!

---

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] Website loads without errors
- [ ] All sections are visible (navbar, hero, projects, etc.)
- [ ] Images and styling load properly
- [ ] Navigation links work
- [ ] Hover effects work
- [ ] Responsive on mobile
- [ ] GitHub projects display (if GitHub API is accessible)

---

## 🐛 Troubleshooting

### **Problem: "npm command not found"**

**Solution:**
- Install Node.js: https://nodejs.org/
- Restart terminal after install
- Run `npm --version` to verify

### **Problem: Dependencies not installing**

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### **Problem: Build fails with TypeScript errors**

**Solution:**
```bash
npm run build
```

Check the error message. Common issues:
- Missing file imports
- TypeScript type errors

### **Problem: Site looks broken after deployment**

**Solution:**
- Clear browser cache (Cmd + Shift + R on Mac)
- Check browser console for errors (F12)
- Verify `dist/` folder was created properly

### **Problem: GitHub projects not showing**

**Solution:**
- Check your GitHub username in `src/data.ts`
- Verify your profile is public
- Check browser console (F12) for API errors

---

## 📝 Customization (Optional)

### Update Your Information

Edit `src/data.ts`:
```typescript
personal: {
  name: "Your Name",
  email: "your@email.com",
  // ... etc
}
```

### Change Colors

Edit `src/styles/main.css`, look for color variables:
```css
:root {
  --color-accent: #00d9ff;  /* Change this color */
  /* ... */
}
```

### Add Certificate Images

1. Create folder: `public/certificates/`
2. Add your certificate images there
3. They'll appear in the certificates section

---

## 📚 Quick Reference Commands

```bash
# Navigate to folder
cd /Users/amritverma/Claude/Projects/Personal\ Portfolio

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Push to GitHub
git add .
git commit -m "Update portfolio"
git push
```

---

## 🎯 Summary of Commands by Deployment Option

### GitHub Pages (Automatic Deployment)
```bash
# One time setup
git remote add origin https://github.com/amritv0306/Personal_portfolio.git
git branch -M main
git push -u origin main

# Then in future, just push changes
git add .
git commit -m "Update"
git push
```

### Vercel
```bash
# Just connect on Vercel website, no commands needed
# Automatically deploys when you push to GitHub
```

### Netlify
```bash
# Just connect on Netlify website, no commands needed
# Automatically deploys when you push to GitHub
```

---

## ✨ You're All Set!

Your premium portfolio is ready. Choose one deployment option above and follow the steps.

**Recommended:** Use GitHub Pages (Option A) for automatic deployment.

Good luck! 🚀

---

**Questions?** Each command is explained step-by-step above.
