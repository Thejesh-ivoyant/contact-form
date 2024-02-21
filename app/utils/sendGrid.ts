import * as sgMail from '@sendgrid/mail';

export const SendGrid = (Email: string) => {

  const htmlContent = `
  <html>
  <head>
    <style>
     
    </style>
  </head>
  <body>
  <main style="display: flex; gap: 5px; justify-content: space-between;">
    <section style="display: flex; justify-content: center; align-items: center; padding: 12px 4px; flex-basis: 0; background-color: rgba(255, 255, 255, 0.1);"></section>
    <article style="padding: 1.5rem 0; margin: auto; max-width: 100%; display: flex;">
      <div style="display: flex; gap: 5px; flex-direction: column; width: 55%; margin-left: 0;">
        <div style="font-size: 2.25rem; color: #682d8e; max-width: 100%;">We appriciate your patience, For any furture info please contact us at:info@ivoyant.com
        or Mail us:</div>
        
        <button style="justify-content: center; align-self: flex-start; padding: 0.875rem 1.75rem; margin-top: 2.5rem; background-color: #682d8e; color: #fff; white-space: nowrap; cursor: pointer;" tabindex="0">Let's Talk</button>
      </div>
      <div style="display: flex; flex-direction: column; width: 45%; margin-left: 5%;">
      <a href='https://www.ivoyant.com/' target='_blank'><img src='https://i.postimg.cc/rDHgqSqK/Iconpng.png' border='0' alt='Iconpng'/></a> </div>
    </article>
    <section style="display: flex; justify-content: center; align-items: center; padding: 12px 4px; flex-basis: 0; background-color: rgba(255, 255, 255, 0.1);"></section>
  </main>
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