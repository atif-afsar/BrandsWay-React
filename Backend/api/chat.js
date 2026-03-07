const Groq = require('groq-sdk');
const { getContextForAI } = require('../aiData.js');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// CORS headers helper
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
}

module.exports = async function handler(req, res) {
  // Handle CORS preflight
  setCorsHeaders(res);
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    console.log('Chat API called with method:', req.method);

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

      const { message } = req.body;
      console.log('Received message:', message);

      if (!message) {
        return res.status(400).json({
          success: false,
          error: 'Message is required'
        });
      }

      if (!process.env.GROQ_API_KEY) {
        console.error('GROQ_API_KEY not found');
        return res.status(500).json({
          success: false,
          error: 'API key not configured'
        });
      }

      // Get context based on the user's message
      const context = getContextForAI(message);
      console.log('Generated context length:', context.length);

      // Create the prompt for Groq
      const systemPrompt = `${context}\n\nUser query: ${message}\n\nPlease provide a helpful response based on the company information provided.`;

      console.log('Calling Groq API...');
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
      console.log('Groq response received, length:', aiResponse?.length || 0);

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
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      error: error.message || 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}