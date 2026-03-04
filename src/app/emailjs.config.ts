// ─── EmailJS Configuration ───────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier: 200 emails/month)
// 2. Create an Email Service (Gmail, Outlook, etc.) → copy Service ID
// 3. Create an Email Template → copy Template ID
// 4. Go to Account → API Keys → copy your Public Key
// Replace the placeholder strings below with your actual values.

export const EMAILJS_CONFIG = {
  serviceId:  'YOUR_SERVICE_ID',   // e.g. 'service_abc123'
  templateId: 'YOUR_TEMPLATE_ID',  // e.g. 'template_xyz789'
  publicKey:  'YOUR_PUBLIC_KEY',   // e.g. 'aBcDeFgHiJkLmNoP'
};

// ─── Template Variables ───────────────────────────────────────────────────────
// In your EmailJS template, use these variables:
//   {{from_name}}    → sender's name
//   {{from_email}}   → sender's email
//   {{inquiry_type}} → selected inquiry type
//   {{message}}      → message body
//   {{to_name}}      → your name (set to "Creative" or your real name)
