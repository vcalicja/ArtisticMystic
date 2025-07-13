#!/bin/bash

# Build script for deployment
echo "🚀 Starting deployment build..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npx vite build

# Check if build was successful
if [ -d "dist/public" ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in dist/public/"
    ls -la dist/public/
else
    echo "❌ Build failed - no dist/public directory found"
    exit 1
fi

echo "🎉 Ready for deployment!"