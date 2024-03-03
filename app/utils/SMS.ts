import twilio from "twilio";

export const SMS = async (c_code: string, phone_no:string) => {
 // If posting to HubSpot is successful, send SMS
      const accountSid = `${process.env.SMS_SID}`;
      const authToken = `${process.env.SMS_TOKEN_KEY}`;
     
      const client = twilio(accountSid, authToken);

      const sendSMS = async (to: string, from: string, body: string) => {

        try {
          const message = await client.messages.create({
            body,
            from,
            to,
          });

          console.log('SMS sent successfully:', message.sid);
          return true;
        } catch (error) {
          console.error('Error sending SMS:', error);
          return false;
        }
      };

      const to = `${c_code}${phone_no}`;
      const from = '+14049946986';
      const smsBody = `Thank you for reaching out to ivoyant, We've received your form submission and are currently reviewing it. 
      For any urgent inquiries, feel free to reach out to us directly at [info@ivoyant.com] [Ph: +1 (770) 274 4336].
      https://contact-us-silk-ten.vercel.app/fintech`;
      await sendSMS(to, from, smsBody);
  };