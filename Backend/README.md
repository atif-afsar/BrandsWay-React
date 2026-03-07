# BrandsWay Backend

This is the backend API for BrandsWay website, built with Node.js, Express, and Groq AI.

## Features

- Contact form handling with email notifications
- AI chat assistant powered by Groq API
- CORS enabled for frontend integration

## API Endpoints

- `POST /contact` - Handle contact form submissions
- `POST /chat` - AI chat functionality

## Environment Variables

Create a `.env` file with:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
GROQ_API_KEY=your-groq-api-key
```

## Local Development

```bash
npm install
npm start
```

## Vercel Deployment

1. Push this code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `GROQ_API_KEY`
4. Deploy!

The `vercel.json` configuration will handle the serverless deployment automatically.