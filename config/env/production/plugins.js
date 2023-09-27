module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        secure:true
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'zewdu4@home.com',
        defaultReplyTo: 'zewdu4@home.com ',
      },
    },
  },
  // ...
});
