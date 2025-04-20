// Import required modules
import express from 'express';
import session from 'express-session';
import { Pool } from 'pg';
import PgSession from 'connect-pg-simple';
import { drizzle } from 'drizzle-orm/node-postgres';
import { createClient } from '@supabase/supabase-js';

// Import our server modules
import { setupAuth } from '../../server/auth.js';
import { registerRoutes } from '../../server/routes.js';
import * as schema from "../../shared/schema.js";

// Initialize the Express application
const app = express();
app.use(express.json());

// Database connection
const isVercel = process.env.VERCEL === '1';
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: isVercel ? 1 : 20,
  idleTimeoutMillis: isVercel ? 10000 : 30000
});

// Supabase client
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.VITE_SUPABASE_KEY || ''
);

// Set up session storage
const PgStore = PgSession(session);
const sessionStore = new PgStore({
  pool,
  tableName: 'sessions'
});

// Configure sessions
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

// Initialize authentication
setupAuth(app);

// Register API routes
let server;
registerRoutes(app).then(httpServer => {
  server = httpServer;
}).catch(err => {
  console.error('Failed to register routes:', err);
});

// Connect drizzle ORM
const db = drizzle(pool, { schema });

// Export a serverless function handler for Vercel
export default async function handler(req, res) {
  // Set necessary environment variables
  process.env.VERCEL = '1';
  process.env.NODE_ENV = 'production';
  
  // Let Express handle the request
  return app(req, res);
}