import { exec as execCallback } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const exec = promisify(execCallback);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  try {
    // Build frontend
    console.log('Building frontend...');
    await exec('vite build');
    console.log('Frontend build complete. Building backend...');
    
    // Build backend
    await exec('tsc -p tsconfig.server.json');
    console.log('Backend build complete. Fixing import statements...');
    
    // Fix imports in server files by adding .js extensions
    const serverDir = path.join(__dirname, 'dist', 'server');
    await fixImports(serverDir);
    
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

async function fixImports(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory does not exist: ${dir}`);
    return;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await fixImports(filePath);
    } else if (entry.name.endsWith('.js')) {
      console.log(`Processing file: ${filePath}`);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix relative imports by adding .js extension
      const originalContent = content;
      content = content.replace(/from\s+["'](\.[^"']+)["']/g, (match, importPath) => {
        if (!importPath.endsWith('.js') && !importPath.endsWith('.json')) {
          return `from "${importPath}.js"`;
        }
        return match;
      });
      
      // Fix import assertions if needed
      content = content.replace(/import\s+(.+)\s+from\s+["']([^"']+\.json)["']/g, 
        'import $1 from "$2" assert { type: "json" }');
      
      if (content !== originalContent) {
        console.log(`Updated imports in: ${filePath}`);
        fs.writeFileSync(filePath, content, 'utf8');
      }
    }
  }
}

// Run the main function
main().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});