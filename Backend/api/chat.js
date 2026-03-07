const Groq = require('groq-sdk');
const cors = require('cors');
require('dotenv').config();
const { getContextForAI } = require('../aiData.js');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Initialize CORS
const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true
});

module.exports = async function handler(req, res) {
  // Handle CORS
  corsMiddleware(req, res, async () => {
    try {
      if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
      }

      const { message } = req.body;

      if (!message) {
        return res.status(400).json({
          success: false,
          error: 'Message is required'
        });
      }

      // Get context based on the user's message
      const context = getContextForAI(message);

      // Create the prompt for Groq
      const systemPrompt = `${context}\n\nUser query: ${message}\n\nPlease provide a helpful response based on the company information provided.`;

      // Call Groq API
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        model: 'llama-3.1-8b-instant',
        temperature: 0.7,
        max_tokens: 1024,
      });

      const aiResponse = chatCompletion.choices[0]?.message?.content;

      if (!aiResponse) {
        return res.status(500).json({
          success: false,
          error: 'Failed to get AI response'
        });
      }

      res.status(200).json({
        success: true,
        message: aiResponse
      });

    } catch (error) {
      console.error('Chat API Error:', error);
      res.status(500).json({
        success: false,
        error: error.message || 'Internal server error'
      });
    }
  });
}