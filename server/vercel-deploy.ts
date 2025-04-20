import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { setupAuth } from './auth.js';
import { registerRoutes } from './routes.js';
import { log } from './vite.ts';
import { pool } from './db.js';
import PgSession from 'connect-pg-simple';
import { Server } from 'http';

// For ESM compatibility in Vercel environment
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create the Express app
const app = express();
app.use(express.json());

// Configure the session middleware with PostgreSQL store
const PgStore = PgSession(session);
const sessionStore = new PgStore({
  pool,
  tableName: 'sessions'
});

// Session configuration
app.use(
  session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET || 'sulong-edukasyon-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
  })
);

// Setup authentication
setupAuth(app);

// Serve static files
const clientDistPath = path.join(path.resolve(), 'client', 'dist');
app.use(express.static(clientDistPath));

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({ error: 'Internal server error' });
});

// Initialize routes - this function is called when the module is loaded
let server: Server | null = null;
function setupServer() {
  // Only set up once
  if (server) return server;
  
  // Register routes synchronously to avoid top-level await
  try {
    registerRoutes(app).then(httpServer => {
      server = httpServer;
    }).catch(err => {
      console.error('Failed to register routes:', err);
    });
  } catch (err) {
    console.error('Error setting up routes:', err);
  }
  
  // Catch-all route for SPA client-side routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
  
  return app;
}

// Initialize the server
setupServer();

// Export the Express app
export default app;