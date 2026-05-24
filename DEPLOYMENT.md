# Deployment Guide

This guide covers all steps to deploy your portfolio website.

## 📋 Prerequisites

- GitHub account
- Node.js 16+ installed
- Git installed
- Your repository created on GitHub

## 🚀 Quick Start to Deployment

### Step 1: Install Dependencies

```bash
cd Personal_portfolio
npm install
```

### Step 2: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to preview your portfolio.

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Step 4: Preview Production Build

```bash
npm run preview
```

## 🌐 GitHub Pages Deployment

### Option A: Automatic (Recommended)

The project includes a GitHub Actions workflow that automatically deploys when you push to `master` or `main` branch.

**Steps:**

1. **Push to GitHub:**
   ```bash
   git push origin master
   ```

2. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/root`
   - Save

3. **Wait for Deployment:**
   - Go to Actions tab
   - Watch the "Deploy to GitHub Pages" workflow run
   - Once complete, your site is live!

**Your portfolio will be available at:**
```
https://amritv0306.github.io/Personal_portfolio/
```

### Option B: Manual Deployment

```bash
# Build the project
npm run build

# Deploy using gh-pages package
npm run deploy
```

**Note:** You may need to install the `gh-pages` package first:
```bash
npm install --save-dev gh-pages
```

## 🔗 Alternative Hosting Options

### Vercel (Easiest)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts

**Advantages:**
- Automatic deployments on push
- Free SSL/HTTPS
- Global CDN
- Easy preview URLs

### Netlify

1. Connect your GitHub repository at netlify.com
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy

### AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Create S3 bucket
3. Upload `dist/` contents
4. Set up CloudFront distribution
5. Point domain to CloudFront

## 📝 Configuration Files

### GitHub Pages URL Configuration

If deploying to a subdirectory (e.g., `username.github.io/Personal_portfolio`), update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/Personal_portfolio/',
  // ... rest of config
});
```

Then rebuild: `npm run build`

## ✅ Post-Deployment Checklist

- [ ] Portfolio loads without errors
- [ ] All animations work smoothly
- [ ] GitHub projects display correctly
- [ ] Navigation links work
- [ ] Mobile responsive design works
- [ ] Images and assets load properly
- [ ] Contact links work (email, GitHub, LinkedIn)
- [ ] Page load time is acceptable

## 🐛 Troubleshooting

### Projects not showing from GitHub

**Problem:** GitHub API rate limiting or authentication issues

**Solution:**
- Wait a few minutes and refresh
- Check browser console for errors
- Verify GitHub username in `src/data.ts`

### Styles look broken

**Problem:** CSS not loading properly

**Solution:**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check that `dist/` folder exists and has CSS files

### Animations don't work

**Problem:** Browser doesn't support CSS animations

**Solution:**
- Update browser to latest version
- Check if animations are disabled in browser settings
- Ensure JavaScript is enabled

## 📊 Performance Optimization

### Before Deployment

1. **Minimize JavaScript:**
   ```bash
   npm run build
   ```

2. **Optimize Images:**
   - Compress all images to <100KB each
   - Use WebP format where possible

3. **Test Performance:**
   - Use Google PageSpeed Insights
   - Check Lighthouse score (aim for >90)

### Monitor After Deployment

- Use Vercel/Netlify analytics
- Google Analytics integration (optional)
- Monitor error logs

## 🔄 Continuous Deployment

The GitHub Actions workflow automatically:
1. Installs dependencies
2. Builds the project
3. Deploys to `gh-pages` branch
4. Makes site live

**No manual steps needed after push!**

## 📱 Testing on Mobile

Before deployment, test on mobile devices:

```bash
npm run build
npm run preview
```

Then access from your phone using your machine's IP:
```
http://YOUR_IP_ADDRESS:4173
```

## 🎯 Next Steps

1. **Point Custom Domain**
   - GitHub Pages: Add CNAME file with your domain
   - Vercel/Netlify: DNS settings

2. **Enable HTTPS**
   - Automatic on GitHub Pages
   - Automatic on Vercel/Netlify

3. **Add Analytics**
   - Google Analytics
   - Vercel Analytics

4. **Monitor Performance**
   - Set up alerts
   - Regular performance audits

## 💡 Tips

- Always test locally before pushing
- Keep dependencies updated
- Monitor GitHub Actions for failures
- Regular backups of your content
- Test on multiple browsers and devices

## 📞 Support

If deployment fails:
1. Check GitHub Actions logs for errors
2. Review browser console errors
3. Verify all files are committed
4. Check repository settings

---

**Deployment Status:** Ready for production

Your portfolio is now ready to share with the world! 🚀
