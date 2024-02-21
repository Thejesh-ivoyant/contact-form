import * as sgMail from '@sendgrid/mail';

export const SendGrid = (Email: string) => {

  const htmlContent = `
  <html>
    <head>
      <style>
        
      </style>
    </head>
    <body>
    <h1>Test mail html
    </h1>
      <p >Thank you for sharing your details!</p>
      <!-- You can add more HTML content here -->
    </body>
  </html>
`;
    const email = Email;
console.warn("mails sending initialeted")
      sgMail.setApiKey('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');
      const msg = {
        to: email?.toString(),
        from: 'thejeshm@ivoyant.com', // sender email address
        subject: 'Thank You for Sharing Your Details', // email subject
        html: htmlContent,
      };
      sgMail.send(msg)
      .then(([response]) => {
        console.warn('Status code:', response.statusCode);
        console.warn('Email sent successfully');
        // Print the status code
      })
      .catch(error => console.error(error));

  };