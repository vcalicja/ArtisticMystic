# Netlify Build Fix

## The Issue
Netlify build failed with "could not resolve entry module client index html" error.

## Solution

### Option 1: Update Build Settings in Netlify Dashboard
1. Go to your Netlify site dashboard
2. Click "Site settings" → "Build & deploy"
3. Update build settings:
   - **Build command**: `vite build`
   - **Publish directory**: `dist/public`
   - **Base directory**: leave empty

### Option 2: Use the Updated netlify.toml
The netlify.toml file has been updated with the correct build configuration.

### Option 3: Manual Build Command
If the above doesn't work, try this build command in Netlify:
```
cd client && npm install && vite build
```

## Why This Happens
The current Vite configuration builds to `dist/public` but Netlify was looking for the wrong entry point. The fix ensures Netlify uses the correct build command and output directory.

## Test Locally
Before deploying, test the build locally:
```bash
npm install
vite build
```
Check that the `dist/public` folder contains your built website files.