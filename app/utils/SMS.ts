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
      const from = '+13852101336';
      const smsBody = 'Thanks for sharing your details,  For any further info please contact: info@ivoyant.com';
      await sendSMS(to, from, smsBody);
  };