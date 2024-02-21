import { Form, MetaFunction, useActionData, useFetcher } from "@remix-run/react";
import React, { useState } from "react";
import { errorMessage, success } from "~/utils/notifications";
import { SendGrid } from "~/utils/sendGrid";
import { SMS } from "~/utils/SMS";
import countryTelephoneData from 'country-telephone-data';
import { Select } from "antd";
import ContactUs from "~/components/contactUs";
import { ActionFunctionArgs } from "@remix-run/node";

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
  const phone = String(body.get("phonenumber"));
  const countryCode = String(body.get("country_code"));

  const errors: { email?: string; name?: string; phone?: string } = {};

  // Validate email
  if (!email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Invalid email format";
  }

  // Validate name
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 3 || name.length > 20) {
    errors.name = "Name must be between 3 and 20 characters";
  } else if (!/^[a-zA-Z\s]*$/.test(name)) {
    errors.name = "Name must contain only letters and spaces";
  }

  // Validate phone number
  if (!phone) {
    errors.phone = "Phone number is required";
  } else if (!isValidPhoneNumber(phone)) {
    errors.phone = "Invalid phone number format";
  }

  // You can add more validations here...

  // Check if there are any errors
  if (Object.keys(errors).length > 0) {
    console.log(",,,,,,,,,,,,,,",errors);
    
    return {
      errors,
    };
  }

   
  // If no errors, proceed with form submission
  try {
    const response = await fetch(
      "https://forms.hubspot.com/uploads/form/v2/39872873/dad06d1b-0ce0-4089-8b4e-bc4ae742e3ce",
      {
        method: "POST",
        body: body,
      }
    );

    if (response.ok) {
      // If submission is successful, send notifications
      await SendGrid(email);
      await SMS(countryCode, phone);
    } else {
      console.error("Error occurred while submitting. Please retry.");
    }
  } catch (error) {
    console.error("Error occurred, please retry ", error);
  }

  return null; // No errors
}

function isValidEmail(email:any) {
  // Implement email validation logic
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phone:any) {
  // Implement phone number validation logic
  return /^[0-9]+$/.test(phone); // For simplicity, this just checks if the phone number contains only digits
}

export default function Index() {

  return (
   <ContactUs />
      );
}
