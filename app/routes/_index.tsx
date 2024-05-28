import { Form, MetaFunction, Outlet, useActionData, useFetcher } from "@remix-run/react";
import React, { useState, Suspense } from "react";
import { errorMessage, success } from "~/utils/notifications";
import { SendGrid } from "~/utils/sendGrid";
import { SMS } from "~/utils/SMS";
import countryTelephoneData from 'country-telephone-data';
import { Select } from "antd";
import ContactUs from "~/components/contactUs";
import { ActionFunctionArgs } from "@remix-run/node";
import Success from "~/components/success";
import LeftScreen from "~/components/left-section";
import LeftSection from "~/components/left-section";
import LeftSectionProcure from "~/components/left-section-procure";
import LoadingTest from "~/components/loading-test";

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
  const title = String(body.get("jobtitle"));
  const countryCode = String(body.get("country_code"));
  const companyname = String(body.get("company"));

  const errors: { email?: string; name?: string; phone?: string; companyname?:string;isSuccess?:string;title:string; } = {};

  // Validate email
  if (!email) {
    console.log("email>>>>",errors.email)
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Invalid email format";
    console.log("errors.email",errors.email)
  }

  if (!companyname) {
    errors.companyname = "Company name is required";
  } 

  // Validate name
  if (!name) {
    errors.name = "Name is required";
  } 

  // Validate phone number
  if (!phone) {
    errors.phone = "Phone number is required";
  } else if (!isValidPhoneNumber(phone)) {
    errors.phone = "Invalid phone number format";
  }

  // Check if there are any errors
  if (Object.keys(errors).length > 0) {
    console.log(",,,,,,,,,,,,,,", errors);

    return {
      errors,
    };
  }


  // If no errors, proceed with form submission
  try {
    const response = await fetch(
      "https://forms.hubspot.com/uploads/form/v2/39872873/9728b50d-30f2-4819-a3aa-97762a6153d1",
      {
        method: "POST",
        body: body,
      }
    );

    if (response.ok) {
      debugger
      // If submission is successful, send notifications
      await SendGrid(email,name);
      await SMS(countryCode, phone,name);
      errors.isSuccess = "Success";
    } else {
      console.error("Error occurred while submitting. Please retry.");
      errors.isSuccess = "Failed";
    }
  } catch (error) {
    console.error("Error occurred, please retry ", error);
    errors.isSuccess = "Failed";
  }

  console.log(",,,,,,,,,,,,,,", errors);
  return {
    errors,
  };
}

function isValidEmail(email: any) {
  // Implement email validation logic
  var a= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  console.log("email validating>>>>",a)
  return a;
}

function isValidPhoneNumber(phone: any) {
  // Implement phone number validation logic
  return /^[0-9]+$/.test(phone); // For simplicity, this just checks if the phone number contains only digits
}


export default function Index() {
  return (
    <div className="flex-container main-container">
      <div className="left-container left-section">
        <Suspense fallback={<LoadingTest />}>
          <LeftSectionProcure />
        </Suspense>
      </div>
      <div className="right-container">
        <Suspense fallback={<LoadingTest />}>
          <ContactUs />
        </Suspense>
      </div>
    </div>
  );
}
