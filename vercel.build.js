// This is a custom build step for Vercel
// It handles the build process for both the client and server

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Execute shell commands and print output
function exec(command) {
  console.log(`> ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error);
    process.exit(1);
  }
}

// Main build process
async function build() {
  console.log('🔨 Starting custom build process for Vercel deployment');
  
  // Build the frontend with Vite
  console.log('📦 Building frontend...');
  exec('npm run build');
  
  // Create the dist/public directory if it doesn't exist
  console.log('🗂️ Setting up dist directories...');
  if (!fs.existsSync('./dist/public')) {
    fs.mkdirSync('./dist/public', { recursive: true });
  }
  
  // Copy the client build to dist/public
  console.log('📋 Copying client build to dist/public...');
  exec('cp -r ./client/dist/* ./dist/public/');
  
  // Bundle the server
  console.log('🚀 Building server...');
  exec('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist');
  
  // Ensure the api directory exists
  if (!fs.existsSync('./api')) {
    fs.mkdirSync('./api');
  }
  
  console.log('✅ Build completed successfully!');
}

// Run the build
build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});