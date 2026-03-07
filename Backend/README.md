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

This backend is configured as **serverless functions** for Vercel deployment.

1. Push this code to GitHub
2. Connect your GitHub repo to Vercel
3. **Important**: Add environment variables in Vercel dashboard (Settings → Environment Variables):
   - `EMAIL_USER` - Your Gmail address
   - `EMAIL_PASS` - Your Gmail app password (not regular password)
   - `GROQ_API_KEY` - Your Groq API key
4. Deploy!

The `vercel.json` configuration automatically routes:
- `/contact` → `/api/contact.js`
- `/chat` → `/api/chat.js`
- `/test` → `/api/test.js`

**Note**: The `server.js` file is only used for local development. Vercel uses the serverless functions in the `/api` folder.