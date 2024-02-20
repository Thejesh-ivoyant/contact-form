import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import ContactUs from "~/components/contactUs";
import * as sgMail from '@sendgrid/mail';
import { useState } from "react";
import { errorMessage, success } from "~/utils/notifications";
import twilio from "twilio";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Crafting Customer Driven Digital Experiences" },
    { name: "Contact Us", content: " Ivoyant Contact" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  for (const [name, value] of body.entries()) {
    console.log(`${name}: ${value}`);
  }
  try {

    // setBtnLoading(true);
   
    const response = await fetch(
      "https://forms.hubspot.com/uploads/form/v2/39872873/dad06d1b-0ce0-4089-8b4e-bc4ae742e3ce",
      {
        method: "POST",
        body: body,
      }
    );
    
    if (response.ok) {
  

      success("Thank you for contacting us! We will get back to you soon.", 3);
    } else {
      errorMessage("Error occurred while submitting. Please retry.", 3);
    }
  } catch (error) {
    errorMessage("Error occurred, please retry ", 3);
  }
  // setBtnLoading(false);


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
  return null;
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

// +13852101336
