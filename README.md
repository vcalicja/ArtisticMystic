# The Elements Art - Artist Portfolio

A minimalist abstract art portfolio website for The Elements Art, Vienna, Austria.

## 🎨 About

This is a modern, minimalist portfolio showcasing abstract artwork with a focus on space, balance, simplicity, and presence. The site features a clean black and white design with video backgrounds and smooth animations.

## 🚀 Quick Deploy

### Deploy to Netlify (Recommended)

1. **Fork this repository** on GitHub
2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub and select this repository
   - Netlify will auto-deploy using the `netlify.toml` configuration

3. **Your site will be live!** Netlify provides a URL like `https://your-site-name.netlify.app`

### Deploy to Vercel

1. **Fork this repository** on GitHub
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-deploy using the `vercel.json` configuration

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Build Test
```bash
# Test the build process
./deploy.sh
```

## 📝 Content Management

All content is managed through the `public/content/config.json` file:

```json
{
  "site": {
    "title": "The Elements Art",
    "description": "Abstract art portfolio...",
    "contact": {
      "email": "theelementsart@gmail.com",
      "instagram": "theelements.art",
      "location": "Vienna, Austria"
    }
  },
  "hero": {
    "text": "Your philosophical quote here...",
    "videoUrl": "/assets/your-video.mp4"
  },
  "artworks": [
    {
      "id": 1,
      "title": "ARTWORK TITLE",
      "medium": "Mixed technique",
      "year": 2025,
      "description": "Available for sale",
      "imageUrl": "/assets/artwork-image.jpg",
      "available": true,
      "featured": true
    }
  ]
}
```

### Adding New Artwork

1. **Upload image** to `public/assets/`
2. **Add artwork entry** to `public/content/config.json`
3. **Push to GitHub** - site updates automatically

### Updating Content

- **Hero quote**: Edit `hero.text` in config.json
- **Contact info**: Edit `site.contact` in config.json
- **Artwork availability**: Change `available: true/false` in config.json

## 🎯 Features

- **Minimalist Design**: Clean black and white aesthetic
- **Video Background**: Immersive hero section
- **Responsive**: Works on all devices
- **Lightbox Gallery**: Click artwork to view details
- **Auto-hiding Navigation**: Gary Komarin-inspired navigation
- **Contact Form**: Integrated contact system
- **SEO Optimized**: Meta tags and structured data

## 🔧 Technical Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build**: Vite
- **Deployment**: Netlify/Vercel
- **Content**: JSON-based CMS

## 📁 Project Structure

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
│   └── index.html
├── public/
│   ├── content/           # Content management
│   └── assets/            # Images, videos
├── server/                # Backend (development only)
├── netlify.toml           # Netlify configuration
├── vercel.json            # Vercel configuration
└── deploy.sh              # Build script
```

## 🌐 Deployment Configuration

### Netlify Settings (netlify.toml)
```toml
[build]
  base = "."
  command = "npm install && npx vite build"
  publish = "dist/public"
```

### Vercel Settings (vercel.json)
```json
{
  "buildCommand": "npx vite build",
  "outputDirectory": "dist/public",
  "installCommand": "npm install"
}
```

## 🔍 Troubleshooting

### Build Issues
1. **"Could not resolve entry module"**
   - Ensure `client/index.html` exists
   - Check `netlify.toml` and `vercel.json` configuration

2. **Missing dependencies**
   - Run `npm install` before building
   - Check `package.json` for missing packages

3. **Build fails locally**
   - Run `./deploy.sh` to test build process
   - Check console for specific errors

### Common Fixes
- Update build command to: `npm install && npx vite build`
- Set publish directory to: `dist/public`
- Ensure all files are committed to GitHub

## 📞 Support

For deployment issues:
1. Check build logs in Netlify/Vercel dashboard
2. Verify all files are in GitHub repository
3. Test build locally with `./deploy.sh`

## 🎨 Artist Information

**The Elements Art**
- Location: Vienna, Austria
- Email: theelementsart@gmail.com
- Instagram: @theelements.art
- Philosophy: "Abstract art comes from what it inspires within you - your feelings, thoughts, and personal response. The space between the artwork and your experience is where the art truly lives."

---

Built with ❤️ for The Elements Art