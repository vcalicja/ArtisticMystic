# The Elements Art Portfolio

A minimalist art portfolio website showcasing abstract artwork with a clean, modern design.

## 🎨 Content Management

### Easy Content Updates

All content is managed through simple JSON configuration files:

- **Main Content**: `content/config.json` - Update artwork, text, and contact info
- **Images**: `public/images/` - Add new artwork images here
- **Video**: `public/videos/` - Replace hero video

### Updating Your Gallery

To add or change artwork:

1. **Add new images** to `public/images/artwork/`
2. **Update `content/config.json`** with new artwork details:
   ```json
   {
     "id": 4,
     "title": "YOUR ARTWORK TITLE",
     "medium": "Mixed technique",
     "year": 2025,
     "description": "Available for sale",
     "imageUrl": "/images/artwork/your-image.jpg",
     "available": true,
     "featured": true
   }
   ```

### Updating Text Content

**Hero Section Text**: Edit `hero.text` in `content/config.json`

**Contact Information**: Update the `contact` section in `content/config.json`

## 🚀 Deployment

### Netlify Deployment

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Auto-deploy**: Enabled by default when you push to main branch

### Vercel Deployment

1. **Connect your repository** to Vercel
2. **Framework**: Detected automatically (Vite + React)
3. **Build settings**: Auto-configured
4. **Auto-deploy**: Enabled by default

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── content/
│   └── config.json          # Content management
├── public/
│   ├── images/
│   │   └── artwork/         # Artwork images
│   └── videos/              # Hero video
├── client/src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   └── lib/                # Utilities
└── server/                 # Backend (development only)
```

## 📝 Quick Updates Guide

### Adding New Artwork
1. Save image to `public/images/artwork/`
2. Add entry to `content/config.json`
3. Deploy (automatic on Netlify/Vercel)

### Changing Hero Video
1. Replace file in `public/videos/`
2. Update `videoUrl` in `content/config.json`
3. Deploy

### Updating Text
1. Edit `content/config.json`
2. Deploy

## 🎯 Key Features

- **Responsive design** - Works on all devices
- **Auto-hiding navigation** - Appears when scrolling
- **Lightbox gallery** - Full-screen artwork viewing
- **Contact form** - Direct email integration
- **SEO optimized** - Better search visibility
- **Fast loading** - Optimized images and code

## 🔒 Environment Variables

For production deployment, set these environment variables:

- `VITE_CONTACT_EMAIL`: Your contact email (optional, defaults to config)
- `VITE_INSTAGRAM_HANDLE`: Your Instagram handle (optional, defaults to config)

## 📞 Support

For technical support or updates, refer to this README or contact your developer.