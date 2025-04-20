#!/bin/bash
set -e

# Log with timestamp
log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Handle errors
handle_error() {
  log "ERROR: Build failed at step: $1"
  exit 1
}

# Create placeholder server/vercel-deploy.ts if it doesn't exist
if [ ! -f "server/vercel-deploy.ts" ]; then
  log "Creating placeholder vercel-deploy.ts file..."
  mkdir -p server
  cat > server/vercel-deploy.ts << EOL
// This file exists to satisfy the build command that includes server/vercel-deploy.ts
import express from 'express';
export * from './index';
export default async function vercelHandler() {
  const app = express();
  return app;
}
EOL
fi

# Build the frontend with Vite
log "Building frontend..."
npm run build || handle_error "frontend build"

# Create the dist/public directory if it doesn't exist
log "Creating dist directories..."
mkdir -p dist/public || handle_error "creating directories"

# Copy the client build to dist/public
log "Copying client build to dist/public..."
cp -r client/dist/* dist/public/ || handle_error "copying client build"

# Bundle the server
log "Building server..."
esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist || handle_error "server build"

# If we're on Vercel, create server/vercel-deploy.js bundle as well
if [ "$VERCEL" = "1" ]; then
  log "Building vercel-deploy.ts for Vercel..."
  esbuild server/vercel-deploy.ts --platform=node --packages=external --bundle --format=esm --outdir=dist || handle_error "vercel-deploy build"
fi

log "Build completed successfully!"