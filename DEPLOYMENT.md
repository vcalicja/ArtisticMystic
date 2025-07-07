# 🚀 The Elements Art - Deployment Guide

This guide will help you deploy your art portfolio website and manage content easily.

## Quick Start

### Option 1: Deploy to Netlify (Recommended)

1. **Create a GitHub repository**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Upload your project files to the repository

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select your repository
   - Netlify will auto-detect the settings (already configured in `netlify.toml`)

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live in 2-3 minutes!
   - Netlify will give you a URL like: `https://your-site-name.netlify.app`

### Option 2: Deploy to Vercel

1. **Create a GitHub repository** (same as above)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings (already configured in `vercel.json`)

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in 1-2 minutes!

## 📝 Easy Content Management

### Updating Your Gallery

1. **Add new artwork images**:
   - Upload images to `public/images/artwork/` folder
   - Use JPG or PNG format, optimize for web (under 2MB each)

2. **Update artwork information**:
   - Edit `public/content/config.json`
   - Add new artwork entries like this:
   ```json
   {
     "id": 4,
     "title": "NEW ARTWORK TITLE",
     "medium": "Mixed technique",
     "year": 2025,
     "description": "Available for sale",
     "imageUrl": "/images/artwork/your-new-image.jpg",
     "available": true,
     "featured": true
   }
   ```

3. **Deploy changes**:
   - Push changes to GitHub
   - Site automatically updates in 1-2 minutes!

### Updating Text Content

**Change hero quote**: Edit `hero.text` in `public/content/config.json`

**Update contact info**: Edit the `contact` section in `public/content/config.json`

### Updating Video Background

1. **Upload new video** to `public/videos/`
2. **Update config**: Change `hero.videoUrl` in `public/content/config.json`
3. **Deploy**: Push to GitHub

## 🔧 File Structure for Content

```
public/
├── content/
│   └── config.json          # All your content settings
├── images/
│   └── artwork/             # Your artwork images
└── videos/                  # Hero background video
```

## 📱 What Happens When You Deploy

✅ **Automatic builds** - Any changes you push to GitHub trigger a new build
✅ **Fast loading** - Images and videos are optimized automatically
✅ **Mobile responsive** - Works perfectly on phones and tablets
✅ **SEO optimized** - Search engines can find your art
✅ **SSL certificate** - Secure HTTPS connection
✅ **Custom domain** - You can add your own domain name later

## 🎯 Recommended Workflow

1. **Make changes locally** - Edit files on your computer
2. **Test changes** - Run `npm run dev` to preview
3. **Push to GitHub** - Upload changes to your repository
4. **Auto-deploy** - Site updates automatically in 1-2 minutes

## 🔒 Getting a Custom Domain

### For Netlify:
1. Go to your site settings
2. Click "Domain management"
3. Add your custom domain
4. Follow DNS setup instructions

### For Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

## 📞 Support

If you need help:

1. **Check the build logs** in Netlify/Vercel dashboard
2. **Common issues**:
   - Image not showing? Check file path in config.json
   - Video not playing? Ensure video file is in public/videos/
   - Site not updating? Check GitHub for successful push

3. **File a support ticket** with your hosting provider if needed

## 🎨 Tips for Best Results

- **Image sizes**: Keep artwork images under 2MB for fast loading
- **Video length**: Keep hero video under 30 seconds for best performance
- **Backup**: Always keep a backup of your `config.json` file
- **Testing**: Preview changes locally before deploying

Your website is now set up for easy management and automatic deployment! 🎉