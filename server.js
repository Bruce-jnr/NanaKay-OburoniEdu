const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const frontendDist = path.resolve(__dirname, 'frontend/dist');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer transporter (Gmail + App Password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Contact form submission → email
app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const recipient = process.env.CONTACT_RECIPIENT;
  if (!recipient) {
    console.error('CONTACT_RECIPIENT is not set in .env');
    return res.status(500).json({ error: 'Server misconfiguration: recipient not set.' });
  }

  const mailOptions = {
    from: `"NanaKay Edu Contact" <${process.env.GMAIL_USER}>`,
    to: recipient,
    replyTo: email,
    subject: `New Enquiry from ${name} – ${service || 'General'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Your enquiry has been sent successfully.' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Unknown API routes
app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

// Serve the compiled React files (production only)
app.use(express.static(frontendDist));

// Allow React Router to handle frontend routes
app.get('/{*splat}', (_req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'));
});

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  if (!res.headersSent) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`);
});
