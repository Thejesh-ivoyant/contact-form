import * as sgMail from '@sendgrid/mail';
import axios, { AxiosResponse } from 'axios';
interface EmailTemplate {
  template: string;
  props: Record<string, any>;
}
interface EmailData {
  to: string[];
  subject: string;
  emailTemplate: EmailTemplate;
}
export async function SendGrid(email: string, fullName: string) {
          const emailData: EmailData = {
              to: [email],
              subject: "Great connecting with you at ProcureCon Meetup",
              emailTemplate: {
                  template: "meetup.html",
                  props: {
                      name: fullName
                  }
              }
          };
      
          try {
              const response: AxiosResponse = await axios.post('https://communication-service-ivoyant.azurewebsites.net/ivoyant/products/notifier/email', emailData, {
                  headers: {
                      'Content-Type': 'application/json'
                  }
              });
              console.log('Email sent successfully:', response.data);
          } catch (error) {
              console.error('Error sending email:', error);
          }
    
}



// const user=fullname;

// const htmlContent =`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Ivoyant</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: Poppins, sans-serif;">

// <table align="center" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: auto;">
// <tr>
//   <td align="center" style="padding: 24px 60px 0;">
//     <table class="image-group" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
//       <tr>
//         <td align="center">
//           <img loading="lazy" src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709495731/logo1_mxaqgy.png" class="main-image" alt="Ivoyant Logo" style="display: block; width: 90px; height: auto;">
//         </td>
//       </tr>
//     </table>
//   </td>
// </tr> 

// <tr>
//     <td style="padding-top:24px;">
//       <table cellpadding="0" cellspacing="0" border="0" width="100%">
//         <tr>
//           <td style="padding: 0 20px;">
//             <img loading="lazy" src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709488750/email1_klaquj.png" alt="Company logo" style="display: block; width: 100%;">
//           </td>
//         </tr>
//       </table>
//     </td>
//   </tr>
//   <tr>
//     <td>
//       <table class="message-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding: 0 20px;">
//         <tr>
//           <td style="font-size: 16px; color: #333; font-weight: 400; line-height: 28px;">

//             <h1 style="font-family: Poppins, sans-serif; font-weight: 500; line-height: 26px;font-size:16px; margin-top: 32px;">Hi ${user},</h1>
//             <p style="font-family: Poppins, sans-serif; font-weight: 500; line-height: 26px;font-size:16px;">It was a pleasure to meet you at the FinTech meetup in Las Vegas. At ivoyant, we specialize in integration, digital modernization, security solutions, and application development, specifically designed to address the unique challenges faced by the banking sector.</p>
//             <p style="font-family: Poppins, sans-serif; font-weight: 400; line-height: 22px; margin-top: 6px;font-size:16px;">We believe in the power of collaboration to drive success and are eager to explore how our teams can partner to enhance your digital and IT capabilities.</p>
//             <p style="font-family: Poppins, sans-serif; font-weight: 400; line-height: 28px; margin-top: 24px;">I'll reach out shortly to discuss potential synergies. In the meantime, I invite you to connect with us on LinkedIn and learn more about how we can support your initiatives:</p>
//             <table cellpadding="0" cellspacing="0" border="0" width="100%">
//               <tr>
//                 <td style="display: flex; gap: 7px; color: #552e95; margin-top: 8px;">
//                   <img src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709534677/linkedcolor_zfpyma.webp" alt="ivoyant email" style="width: 24px; height: 24px; object-fit: contain; margin: auto 0;">
//                   <a href="https://www.linkedin.com/in/sonya-b-235372120/"><span style="font-size:16px;color:#184EAE;margin-left:4px;">Sonya.B</span></a>
//                 </td>
//               </tr>
//               <tr>
//                 <td style="display: flex; gap: 7px; color: #552e95; margin-top: 8px;">
//                   <img src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709534677/linkedcolor_zfpyma.webp" alt="ivoyant phone" style="width: 24px; height: 24px; object-fit: contain; margin: auto 0;">
//                   <a href="https://www.linkedin.com/company/27041701/"><span style="font-size:16px;color:#184EAE;margin-left:4px;">ivoyant</span></a>
//                 </td>
//               </tr>
//             </table>
//             <p style="font-family: Poppins, sans-serif; color: #000; font-weight: 500; line-height: 28px; margin-top: 24px;">You can also visit our website for more information: www.ivoyant.com</p>
//             <p style="font-family: Poppins, sans-serif; color: #000; font-weight: 500; line-height: 28px; margin-top: 24px;">Looking forward to the opportunity to collaborate and achieve great results together.</p>
//             <p style="font-family: Poppins, sans-serif; color: #000; font-weight: 500; line-height: 28px; margin-top: 24px;">Warm regards,</p>
            
//             <p style="font-family: Poppins, sans-serif; color: #000; font-weight: 500; line-height: 28px; margin-top: 8px;">Sonya</p>
//             <p style="font-family: Poppins, sans-serif; color: #000; font-weight: 500; line-height: 28px; margin-top: 4px;">Chief Operating Officer, iVoyant</p>
//             <p style="font-family: Poppins, sans-serif; color: #000; font-weight: 500; line-height: 28px; margin-top: 4px;"><a href="tel:+1(678)674-3937">+1 (678) 674-3937</a></p>

//           </td>
//         </tr>
//       </table>
//     </td>
//   </tr>
//   <tr>
//   <td align="center" style="padding: 24px 60px 0;">
//     <table class="image-group" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
//       <tr>
//         <td align="center">
//           <img loading="lazy" src="https://res.cloudinary.com/dzwihcqk2/image/upload/v1709495731/logo1_mxaqgy.png" class="main-image" alt="Ivoyant logo" style="display: block; width: 90px; height: auto;">
//         </td>
//       </tr>
      
//     </table>
//   </td>
// </tr>

// </table>

// </body>
// </html>
// `;
//   const email = Email;
// console.warn("mails sending initialeted")
//       sgMail.setApiKey(`${process.env.SENDGRID_KEY}`);
//       const msg = {
//         to: email?.toString(),
//         from: 'thejeshm@ivoyant.com', // sender email address
//         subject: 'Thank You for Sharing Your Details', // email subject
//         html: htmlContent,
//       };
//       sgMail.send(msg)
//       .then(([response]) => {
//         console.warn('Status code:', response.statusCode);
//         console.warn('Email sent successfully');
        
//       })
//       .catch(error => console.error(error));
//   };