import twilio from "twilio";

export const SMS = async (c_code: string, phone_no:string) => {
 // If posting to HubSpot is successful, send SMS
      const accountSid = 'AC66f36f0d0b988dc51e1602bfc79c8aa8';
      const authToken = 'bb6df702ab5724ff472799df20ddf2ae';
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

      const to = `+${c_code}${phone_no}`;
      const from = '+13852101336';
      const smsBody = 'Thanks for sharing your details,  For any further info please contact: info@ivoyant.com';

      await sendSMS(to, from, smsBody);
  };