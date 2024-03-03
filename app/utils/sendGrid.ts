import * as sgMail from '@sendgrid/mail';

export const SendGrid = (Email: string) => {



const htmlContent =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">

<table align="center" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: auto;">
<tr>
  <td align="center" style="padding: 24px 60px 0;">
    <table class="image-group" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
      <tr>
        <td align="center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c581acd98ff68f6db95e9cd2ab8424084ab2179257fd6adbd568f8382bd75c?apiKey=9e16588387084fb2a9a51a1b99489136&" class="main-image" alt="Main visual representation" style="display: block; width: 90px; height: auto;">
        </td>
      </tr>
    </table>
  </td>
</tr> 

<tr>
    <td>
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

            <h1 style="font-family: Poppins, sans-serif; font-weight: 500; line-height: 26px; margin-top: 32px;">Hi Gaurav,</h1>
            <p style="font-family: Poppins, sans-serif; font-weight: 400; line-height: 22px;">Thank you for reaching out to ivoyant. We've received your form submission and are currently reviewing it.</p>
            <p style="font-family: Poppins, sans-serif; font-weight: 400; line-height: 22px; margin-top: 6px;">Expect a prompt response from our team shortly.</p>
            <p style="font-family: Poppins, sans-serif; font-weight: 400; line-height: 22px; margin-top: 24px;">For any urgent inquiries, feel free to reach out to us directly at</p>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="display: flex; gap: 7px; color: #552e95; margin-top: 8px;">
                  <img src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709493170/email_dpewc6.png" alt="ivoyant email" style="width: 24px; height: 24px; object-fit: contain; margin: auto 0;">
                  <span>info@ivoyant.com</span>
                </td>
              </tr>
              <tr>
                <td style="display: flex; gap: 7px; color: #552e95; margin-top: 8px;">
                  <img src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709493170/Call_i6nztd.png" alt="ivoyant phone" style="width: 24px; height: 24px; object-fit: contain; margin: auto 0;">
                  <span>+1 (770) 274 4336</span>
                </td>
              </tr>
            </table>
            <p style="font-family: Poppins, sans-serif; color: #000; font-weight: 500; line-height: 26px; margin-top: 24px;">Cheers, ivoyant Team</p>
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
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c581acd98ff68f6db95e9cd2ab8424084ab2179257fd6adbd568f8382bd75c?apiKey=9e16588387084fb2a9a51a1b99489136&" class="main-image" alt="Main visual representation" style="display: block; width: 90px; height: auto;">
        </td>
      </tr>
      <tr>
        <td align="center" style="margin-top: 24px;">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca69c707811c1e58d0d07ca97c8b99f0cec39afe9ac072826bc0daebc6caccef?apiKey=9e16588387084fb2a9a51a1b99489136&" class="icon" alt="Icon 1" style="display: inline-block; width: 20px; height: auto; margin-right: 16px;">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0347eff6024a14111d14dd04d0f1b788fa98a1065932e585be0ed6af5495b3a2?apiKey=9e16588387084fb2a9a51a1b99489136&" class="icon" alt="Icon 2" style="display: inline-block; width: 20px; height: auto; margin-right: 16px;">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b39f832db82f734007de9d9cc9ee597ebabcad8c8210ba31d27d9b28ff765f?apiKey=9e16588387084fb2a9a51a1b99489136&" class="icon" alt="Icon 3" style="display: inline-block; width: 20px; height: auto; margin-right: 16px;">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f54b7eeed290ccc3c304b2e961ab93e60cc46bf7801cee3edce36418588d0395?apiKey=9e16588387084fb2a9a51a1b99489136&" class="icon" alt="Icon 4" style="display: inline-block; width: 20px; height: auto;">
        </td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td align="center" style="padding: 16px 60px;">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58fb8d8a45cba4a2aed1814121ca1c6fc67f801e1f5476cbcf91ff7051fcecfb?apiKey=9e16588387084fb2a9a51a1b99489136&" class="footer-logo" alt="Footer logo" style="display: block; width: 16px; height: auto;">
    <div class="footer-text" style="font-family: Poppins, sans-serif; margin-left: 4px;">www.ivoyant.com</div>
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