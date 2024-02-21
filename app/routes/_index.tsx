import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useFetcher } from "@remix-run/react";
import ContactUs from "~/components/contactUs";
import { useState, useEffect } from "react";


import ivurl from '../../public/assets/ivoyant.png';

import React from "react";
import { errorMessage, success } from "~/utils/notifications";

import countryTelephoneData from 'country-telephone-data';
import { CompanyIcon } from "public/assets";
import NameIcon from "public/assets/name";
import TitleIcon from "public/assets/title";
import EmailIcon from "public/assets/email";
import PhoneIcon from "public/assets/phone";
import { SendGrid } from "~/utils/sendGrid";
import { SMS } from "~/utils/SMS";
import { Select } from "antd";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Crafting Customer Driven Digital Experiences" },
    { name: "Contact Us", content: " Ivoyant Contact" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const email = String(body.get("email"));
  const name = String(body.get("personname"));

  console.log('waiting:');

  // await new Promise<void>((resolve) => {
  //   setTimeout(resolve,3000);

  // })

  let errors: { email?: string; name?: string; loading?: boolean } = {};
  if (!email) {
    errors.email = "email needed";
  } else if (!email.includes("@")) {
    errors.email = "please corect forma email";
  }
  if (!name) {
    errors.name = "required name";
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

      // await SendGrid(email);
      const c_code = String(body.get('country_code'));
      const phone_no = String(body.get('phonenumber'));

      //  await SMS(c_code,phone_no);
    } else {
      console.error("Error occurred while submitting. Please retry.");
    }
  } catch (error) {
    console.error("Error occurred, please retry ", error);
  }

  errors.loading = false;
return null;
  // return {
  //   errors: Object.keys(errors).length ? errors : null,
  // };
}

export default function Index() {

  return (
   <ContactUs />
      );
}
