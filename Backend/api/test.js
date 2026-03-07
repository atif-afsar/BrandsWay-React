module.exports = async function handler(req, res) {
  res.status(200).json({
    message: "API is working!",
    timestamp: new Date().toISOString(),
    env: {
      hasGroqKey: !!process.env.GROQ_API_KEY,
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS
    }
  });
};