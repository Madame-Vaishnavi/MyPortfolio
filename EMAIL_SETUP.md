# Email Setup for Contact Form

To enable the contact form to actually send emails to your inbox, you need to configure Gmail authentication.

## Option 1: Gmail App Password (Recommended)

1. **Enable 2-Factor Authentication** on your Google Account
2. **Generate App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Copy the generated 16-character password

3. **Update the configuration**:
   - Open `server/config.js`
   - Replace `'your-app-password-here'` with your actual app password
   - Or set environment variable: `GMAIL_APP_PASSWORD=your16charpassword`

## Option 2: Environment Variable (More Secure)

1. Create a `.env` file in the project root:
   ```
   GMAIL_APP_PASSWORD=your16charpassword
   ```

2. The server will automatically load this

## Option 3: Alternative Email Services

If you prefer not to use Gmail, you can use:
- **SendGrid** (free tier: 100 emails/day)
- **Mailgun** (free tier: 5,000 emails/month)
- **Resend** (free tier: 3,000 emails/month)

Update the `sendEmail` function in `server/simple-server.js` accordingly.

## Testing

After setup:
1. Restart the server
2. Fill out the contact form on your portfolio
3. Check your email inbox
4. You should receive a formatted email with the contact details

## Security Notes

- Never commit your app password to version control
- Use environment variables in production
- Consider rate limiting for the contact form
- Monitor for spam submissions
