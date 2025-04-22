const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build frontend
console.log('Building frontend...');
exec('vite build', (err) => {
  if (err) {
    console.error('Error building frontend:', err);
    process.exit(1);
  }
  
  console.log('Frontend build complete. Building backend...');
  // Build backend
  exec('tsc -p tsconfig.server.json', (err) => {
    if (err) {
      console.error('Error building backend:', err);
      process.exit(1);
    }
    
    console.log('Backend build complete. Fixing import statements...');
    // Fix imports in server files by adding .js extensions
    const serverDir = path.join(__dirname, 'dist', 'server');
    fixImports(serverDir);
    
    console.log('Build completed successfully!');
  });
});

function fixImports(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory does not exist: ${dir}`);
    return;
  }
  
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const filePath = path.join(dir, dirent.name);
    
    if (dirent.isDirectory()) {
      fixImports(filePath);
    } else if (dirent.name.endsWith('.js')) {
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
  });
}