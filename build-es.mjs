import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const execPromise = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  try {
    // First, build the frontend
    console.log('Building frontend...');
    await execPromise('vite build');
    console.log('Frontend build complete.');
    
    // Build all the server files to make sure everything is included
    console.log('Building backend...');
    await execPromise('esbuild server/*.ts --platform=node --outdir=dist/server');
    console.log('Backend build complete.');
    
    // Build the vite.config.ts file that's imported in server/vite.ts
    console.log('Building vite config...');
    await execPromise('esbuild vite.config.ts --platform=node --outdir=dist');
    
    // Also build shared code which contains the schema
    console.log('Building shared code...');
    await execPromise('esbuild shared/schema.ts --platform=node --outdir=dist/shared');
    console.log('Shared code build complete. Fixing import statements...');
    
    // Fix imports in server files
    const serverDir = path.join(__dirname, 'dist', 'server');
    await fixImports(serverDir);
    
    // Fix imports in shared files
    const sharedDir = path.join(__dirname, 'dist', 'shared');
    if (fs.existsSync(sharedDir)) {
      await fixImports(sharedDir);
    }
    
    // Fix imports in root dist directory (vite.config.js)
    await fixImports(path.join(__dirname, 'dist'));
    
    // Create an entry point file at dist/index.js as referenced in start script
    console.log('Creating entry point file...');
    const entryContent = `import './server/index.js';\n`;
    fs.writeFileSync(path.join(__dirname, 'dist', 'index.js'), entryContent);
    
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
      let modified = false;
      
      // Fix path aliases
      if (content.includes('@shared/')) {
        content = content.replace(/@shared\//g, '../shared/');
        modified = true;
      }
      
      // Fix relative imports by adding .js extension
      content = content.replace(/from\s+["'](\.[^"']+)["']/g, (match, importPath) => {
        if (!importPath.endsWith('.js') && !importPath.endsWith('.json')) {
          modified = true;
          return `from "${importPath}.js"`;
        }
        return match;
      });
      
      // Fix import assertions if needed
      content = content.replace(/import\s+(.+)\s+from\s+["']([^"']+\.json)["']/g, (match, importStmt, jsonPath) => {
        modified = true;
        return `import ${importStmt} from "${jsonPath}" assert { type: "json" }`;
      });
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed imports in: ${filePath}`);
      }
    }
  }
}

// Run the main function
main().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});