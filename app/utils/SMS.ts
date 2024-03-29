import twilio from "twilio";

export const SMS = async (c_code: string, phone_no:string, name:string) => {
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
      const smsBody = `${name}, it was great meeting with you at FinTech meet. We're excited to connect and partner with you. You can reach me directly at:\n\nSonya Beredimas\nsonya@ivoyant.com \n+1 (678) 674 3937\nhttps://www.linkedin.com/in/sonya-b-235372120\nhttps://www.ivoyant.com`;

      await sendSMS(to, from, smsBody);
  };