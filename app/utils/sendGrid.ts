import * as sgMail from '@sendgrid/mail';

export const SendGrid = (Email: string) => {

  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanks for sharing your details</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
  
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
      <tr>
        <td bgcolor="#1A4721" style="padding: 40px 0 30px 0; text-align: center;">
          <img src="https://asset.cloudinary.com/dzwihcqk2/5935cee1a8c026dd33f714f64be58a45" alt="Company logo" width="200" style="display: block; margin: auto;">
          <p style="color: #ffffff; font-size: 18px; margin-top: 30px;">We are an IT services and solutions provider for all your Fintech needs</p>
        </td>
      </tr>
      <tr>
        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
          <p style="font-size: 18px;">Thank you for reaching out to ivoyant,</p>
          <p style="font-size: 16px;">We've received your form submission and are currently reviewing it. Expect a prompt response from our team shortly.</p>
          <p style="font-size: 16px;">For any urgent inquiries, feel free to reach out to us directly at <a href="mailto:info@ivoyant.com" style="color: #1A4721; text-decoration: none;">info@ivoyant.com</a> | Ph: <a href="tel:+17702744336" style="color: #1A4721; text-decoration: none;">+1 (770) 274 4336</a></p>
          <p style="font-size: 16px; margin-top: 30px;">Regards,<br>Team ivoyant</p>
        </td>
      </tr>
    </table>
  </body>
  </html>  
`;
  const email = Email;
console.warn("mails sending initialeted")
      sgMail.setApiKey(`${process.env.SENDGRID_KEY}`);
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
        
      })
      .catch(error => console.error(error));
  };