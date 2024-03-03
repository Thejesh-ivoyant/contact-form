import * as sgMail from '@sendgrid/mail';

export const SendGrid = (Email: string) => {

const user="Thejesh"

const htmlContent =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ivoyant</title>
</head>
<body style="margin: 0; padding: 0; font-family: Poppins, sans-serif;">

<table align="center" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: auto;">
<tr>
  <td align="center" style="padding: 24px 60px 0;">
    <table class="image-group" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
      <tr>
        <td align="center">
          <img loading="lazy" src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709495731/logo1_mxaqgy.png" class="main-image" alt="Ivoyant Logo" style="display: block; width: 90px; height: auto;">
        </td>
      </tr>
    </table>
  </td>
</tr> 

<tr>
    <td style="padding-top:24px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 0 20px;">
            <img loading="lazy" src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709488750/email1_klaquj.png" alt="Company logo" style="display: block; width: 100%;">
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <table class="message-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding: 0 20px;">
        <tr>
          <td style="font-size: 16px; color: #333; font-weight: 400; line-height: 28px;">

            <h1 style="font-family: Poppins, sans-serif; font-weight: 500; line-height: 26px;font-size:16px; margin-top: 32px;">Hi ${user},</h1>
            <p style="font-family: Poppins, sans-serif; font-weight: 500; line-height: 26px;font-size:16px;">Thank you for reaching out to ivoyant. We've received your form submission and are currently reviewing it.</p>
            <p style="font-family: Poppins, sans-serif; font-weight: 400; line-height: 22px; margin-top: 6px;font-size:16px;">Expect a prompt response from our team shortly.</p>
            <p style="font-family: Poppins, sans-serif; font-weight: 400; line-height: 28px; margin-top: 24px;">For any urgent inquiries, feel free to reach out to us directly at</p>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="display: flex; gap: 7px; color: #552e95; margin-top: 8px;">
                  <img src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709493170/email_dpewc6.png" alt="ivoyant email" style="width: 24px; height: 24px; object-fit: contain; margin: auto 0;">
                  <span style="font-size:16px;">info@ivoyant.com</span>
                </td>
              </tr>
              <tr>
                <td style="display: flex; gap: 7px; color: #552e95; margin-top: 8px;">
                  <img src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709493170/Call_i6nztd.png" alt="ivoyant phone" style="width: 24px; height: 24px; object-fit: contain; margin: auto 0;">
                  <span style="font-size:16px;">+1 (770) 274 4336</span>
                </td>
              </tr>
            </table>
            <p style="font-family: Poppins, sans-serif; color: #000; font-weight: 500; line-height: 28px; margin-top: 24px;">Cheers, ivoyant Team</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
  <td align="center" style="padding: 24px 60px 0;">
    <table class="image-group" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
      <tr>
        <td align="center">
          <img loading="lazy" src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709495731/logo1_mxaqgy.png" class="main-image" alt="Ivoyant logo" style="display: block; width: 90px; height: auto;">
        </td>
      </tr>
      <tr>
        <td align="center" style="margin-top: 24px;padding-top:24px;">
        <img loading="lazy" src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709495328/internet_ksnndt.png" class="footer-logo" alt="Footer logo" style="display: inline-block; width: 16px; height: auto; margin-right: 12px;">
        <div class="footer-text" style="display: inline-block; height: auto; margin-right: 16px;font-family: Poppins, sans-serif;">www.ivoyant.com</div>     
        </td>
      </tr>
    </table>
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