import * as sgMail from '@sendgrid/mail';

export const SendGrid = (Email: string) => {

  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
      /* Pure CSS styles */
      .flex {
        display: flex;
      }
  
      .flex-col {
        flex-direction: column;
      }
  
      .items-center {
        align-items: center;
      }
  
      .pt-3_75rem {
        padding-top: 3.75rem;
      }
  
      .text-base {
        font-size: 1rem;
      }
  
      .font-medium {
        font-weight: 500;
      }
  .img-box{
    display:flex;
  height:100%;
  }
  .text-box{
    display:flex;
  }
      .text-center {
        text-align: center;
      }
  
      .text-white {
        color: #ffffff;
      }
  
      .bg-1A4721 {
        background-color: #1A4721;
      }
  
      .left-section {
        width: 100%;
        height:14.375rem; 
        align-items:center;
        justify-items:center;
        /* Add any custom styles for the section here */
      }
  
      .max-w-full {
        max-width: 100%;
      }
  
      .aspect-4_17 {
        width: 376px;
        height: 90px;
      }
  
      .mt-2_5 {
        margin-top: 2.5rem;
      }
  
      .text-3xl {
        font-size: 1.875rem;
      }
  
      .header {
        /* Add any custom styles for the header here */
      }
  
      .leading-7 {
        line-height: 1.75rem;
      }
  
      .w-434px {
        width: 434px;
      }
  
      .text-block {
        /* Add any custom styles for the text block here */
      }
  
      .text-block-link {
        /* Add any custom styles for the text block link here */
      }
  
      .mt-14 {
        margin-top: 3.5rem;
      }
  
      .text-sm {
        font-size: 0.875rem;
      }
  
      .text-yellow-100 {
        color: #FFFF66;
      }
  
      .subtext {
        /* Add any custom styles for the subtext here */
      }
      .container {
        align-self: stretch;
        display: flex;
        max-width: 504px;
        flex-direction: column;
        font-size: 16px;
        color: #333;
        font-weight: 400;
        text-align: center;
        line-height: 28px;
      }
      .message-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        line-height: 26px;
        width: 100%;
      }
      .message-info, .contact-info {
        font-family: 'Poppins', sans-serif;
        margin-top: 7px;
        width: 100%;
      }
      .footer-message {
        font-family: 'Poppins', sans-serif;
        color: #000;
        margin-top: 24px;
        width: 100%;
      }
      @media (max-width: 991px) {
        .message-title, .message-info, .contact-info, .footer-message {
          max-width: 100%;
        }
      }
    </style>
  </head>
  
  <body>
    <section class="flex flex-col items-center pt-3_75rem text-base font-medium text-center text-white bg-1A4721 left-section">
      <div class="image-box>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2381f6ccd12a72a205e53cb22840e56c08bb4f057e490d47b5eab4f338bae324?apiKey=9e16588387084fb2a9a51a1b99489136&" alt="Company logo" class="flex max-w-full aspect-4_17 img-box w-376px">
  </div>
  <div class="text-box">
      <p class="mt-4 leading-7 w-434px text-box">We are an IT services and solutions provider for all your Fintech needs</p>
  </div>
      <div class="image-box >
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0cd2b0fa7ed8b81ab533956f64f347bf9d453ad9e4b96b3e6f16860fac2130?apiKey=9e16588387084fb2a9a51a1b99489136&" alt="Visualization of services offered" class="image-box flex mt-2_5 w-full">
    </div>
  </section>
  <main class="container">
  <header>
    <h1 class="message-title">Thank you for reaching out to ivoyant,</h1>
  </header>
  <section class="message-info">
    We've received your form submission and are currently reviewing it.
  </section>
  <section class="message-info">
    Expect a prompt response from our team shortly.
  </section>
  <section class="contact-info">
    For any urgent inquiries, feel free to reach out to us directly at info@ivoyant.com | Ph: +1 (770) 274 4336
  </section>
  <footer class="footer-message">
    Regards,
    <br />
    Team ivoyant
  </footer>
</main>
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