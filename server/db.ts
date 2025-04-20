import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';
import * as schema from "@shared/schema";
import { createClient } from '@supabase/supabase-js';
import ws from 'ws';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { Pool } = pg;

// Initialize Supabase client with proper error handling
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_KEY are set in your .env file.');
  console.error(`VITE_SUPABASE_URL is ${supabaseUrl ? 'set' : 'missing'}`);
  console.error(`VITE_SUPABASE_KEY is ${supabaseKey ? 'set' : 'missing'}`);
}

// Initialize Supabase client
export const supabase = createClient(
  supabaseUrl || 'https://oxduspzcojliofwnofeb.supabase.co',
  supabaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94ZHVzcHpjb2psaW9md25vZmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNDA2MDAsImV4cCI6MjA2MDcxNjYwMH0.uOGRPw2Ooqnqj0KYp4r3obhs82Eu_MY_6SNKZSSsjMQ'
);

// Function to create a database connection pool
function createPool() {
  // Log the connection attempt (without exposing credentials)
  console.log('Attempting to connect to database...');
  
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
  }
  
  // Initialize PostgreSQL Pool for connections with SSL options for Supabase
  // In Vercel environment, enable special handling for serverless functions
  const isVercel = process.env.VERCEL === '1';
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // SSL settings for Supabase
    ssl: { rejectUnauthorized: false },
    // Improve connection handling for serverless environments
    max: isVercel ? 1 : 20,
    idleTimeoutMillis: isVercel ? 10000 : 30000,
  });
  
  // Test the connection
  pool.on('connect', () => {
    console.log('Database connection established successfully');
  });
  
  pool.on('error', (err) => {
    console.error('Database connection error:', err);
  });
  
  return pool;
}

// Create the connection pool
const pool = createPool();

// Initialize Drizzle ORM with the PostgreSQL pool
const db = drizzle(pool, { schema });

function getDb() {
  return db;
}

// Export database, pool and supabase client
export { getDb, pool };
