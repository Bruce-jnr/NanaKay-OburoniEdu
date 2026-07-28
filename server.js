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

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

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

  const poolUser = process.env.GMAIL_USER;
  const poolPass = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_RECIPIENT;

  if (!poolUser || !poolPass || !recipient) {
    console.error('Gmail SMTP configuration is incomplete.');
    return res.status(500).json({ error: 'Server email configuration is incomplete.' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service || 'Not specified');
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    family: 4,
    auth: {
      user: poolUser,
      pass: poolPass,
    },
  });

  const mailOptions = {
    from: `"NanaKay Edu Contact" <${poolUser}>`,
    to: recipient,
    replyTo: email,
    subject: `New Enquiry from ${name} - ${service || 'General'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Service Interested In:</strong> ${safeService}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
    text: `Name: ${name}\nEmail: ${email}\nService: ${service || 'Not specified'}\n\nMessage:\n${message}`,
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
