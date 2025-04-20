// This file is required by Vercel to identify the serverless function
import app from '../dist/vercel-deploy.js';

/**
 * Serverless handler for Vercel
 * This forwards all requests to our Express app
 */
export default function handler(req, res) {
  // Set the VERCEL environment variable for connection pooling optimizations
  process.env.VERCEL = '1';
  
  // Set NODE_ENV to production for Vercel
  process.env.NODE_ENV = 'production';
  
  // Set VERCEL_OUTPUT_PATH to help the app find static assets
  process.env.VERCEL_OUTPUT_PATH = '/dist/public';
  
  // Forward to Express app
  return app(req, res);
}