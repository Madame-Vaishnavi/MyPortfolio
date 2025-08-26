export const emailConfig = {
  gmail: {
    user: 'vaishnavi.singh.260104@gmail.com',
    // Replace 'NEW_APP_PASSWORD_HERE' with your new Gmail app password
    pass: process.env.GMAIL_APP_PASSWORD || 'eglzfdhulhmnclew'
  },
  // Alternative: Use a service like SendGrid, Mailgun, or Resend
  // sendgrid: {
  //   apiKey: process.env.SENDGRID_API_KEY
  // }
};
