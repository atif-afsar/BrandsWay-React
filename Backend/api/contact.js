const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

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

      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields'
        });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: "New Website Lead",
        html: `
          <h3>New Contact Form Submission</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      res.status(200).json({
        success: true,
        message: "Email sent successfully",
      });

    } catch (error) {
      console.error('Contact API Error:', error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });
}