// Root API handler for testing
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
}

module.exports = async function handler(req, res) {
  setCorsHeaders(res);
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({
    message: "BrandsWay Backend API",
    status: "running",
    endpoints: {
      contact: "/api/contact (POST)",
      chat: "/api/chat (POST)",
      test: "/api/test (GET/POST)"
    },
    timestamp: new Date().toISOString()
  });
};
