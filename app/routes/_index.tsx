import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import ContactUs from "~/components/contactUs";
import * as sgMail from '@sendgrid/mail';
import { useState, useEffect } from "react";
import twilio from "twilio";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Crafting Customer Driven Digital Experiences" },
    { name: "Contact Us", content: " Ivoyant Contact" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  let email =String(body.get("email"));
  let name =String(body.get("personname"));

  let errors:{email?:string;name?:string}={};
  if(!email){
    errors.email= "email needed";
  }else if(!email.includes("@")){
    errors.email="please corect forma email";
  }
  if(!name){
    errors.name="required name";
  }

 
  for (const [name, value] of body.entries()) {
    console.log(`${name}: ${value}`);
  }
  try {
    const response = await fetch(
      "https://forms.hubspot.com/uploads/form/v2/39872873/dad06d1b-0ce0-4089-8b4e-bc4ae742e3ce",
      {
        method: "POST",
        body: body,
      }
    );
    
    if (response.ok) {
///
  // const email = body.get('email');

  // sgMail.setApiKey('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');
  // const msg = {
  //   to: email?.toString(),
  //   from: 'thejeshm@ivoyant.com', // sender email address
  //   subject: 'Sending with SendGrid is Fun TypeScript', // email subject
  //   text: 'and easy to do anywhere, even with TypeScript', // email content
  // };
  // sgMail.send(msg)
  //   .then(() => console.warn('Email sent successfully'))
  //   .catch(error => console.error(error));





      // If posting to HubSpot is successful, send SMS
      const accountSid = 'AC66f36f0d0b988dc51e1602bfc79c8aa8';
      const authToken = '56a370fa997e469fa36729ca626c00de';
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

      // Replace these values with the actual phone number and message
      const to = '+919656272804';
      const from = '+13852101336';
      const smsBody = 'Code test mail';

      await sendSMS(to, from, smsBody);
    } else {
      console.error("Error occurred while submitting. Please retry.");
    }
  } catch (error) {
    console.error("Error occurred, please retry ", error);
  }
  
  return {
    errors: Object.keys(errors).length?errors:null,
  };
}

export default function Index() {
  const fetcher = useFetcher()
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  return (
    <>
      <ContactUs />
    </>
  );
}
