import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = process.env.FRONTEND_URL 
  ? [process.env.FRONTEND_URL, 'http://localhost:5173'] 
  : '*'; // Fallback to allow all if not set

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Health Check Endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'API is running successfully' });
});

// POST API for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation to ensure required fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    // Setup email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // The authenticated sender address
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER, // Where you want to receive the emails
      replyTo: email, // If you hit "Reply", it will reply to the user's email
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log(`--- Email successfully sent from ${name} ---`);
    
    // Return a success response
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Return an error response
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
