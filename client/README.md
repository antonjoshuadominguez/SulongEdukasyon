# Sulong Edukasyon - Client

This is the client-side code for the Sulong Edukasyon application, a dynamic educational platform designed for Filipino students.

## Deployment on Vercel

To deploy this application on Vercel:

1. Push this repository to GitHub
2. Go to [Vercel](https://vercel.com) and click "New Project"
3. Import the GitHub repository
4. Important settings for Vercel:
   - Root Directory: Select `client` (this directory)
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. In the Environment Variables section, add:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `SESSION_SECRET`: A secure random string for session encryption
   - `VITE_SUPABASE_URL`: Your Supabase URL
   - `VITE_SUPABASE_KEY`: Your Supabase key

6. Click "Deploy"

## Development

To run the application locally:

```bash
npm install
npm run dev
```