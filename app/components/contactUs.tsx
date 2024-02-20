

import { Form } from "@remix-run/react";
import ReactFlagsSelect from "react-flags-select";
import { useEffect, useRef, useState } from "react";
import ivurl from '../../public/assets/ivoyant.svg';
import React from "react";
import { errorMessage, success } from "~/utils/notifications";
const ContactUs = () => {
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [selectedCode, setCountryCodeSelected] = useState("US");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    formType: any
  ) => {
    try {
      event.preventDefault();
      setBtnLoading(true);
      
        const formData = new FormData(event.currentTarget);
        formData.append("action", "Contact");
        formData.forEach((value, key) => {
        });
        const response = await fetch(
          "https://forms.hubspot.com/uploads/form/v2/39872873/dad06d1b-0ce0-4089-8b4e-bc4ae742e3ce",
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          success(
            "Thank you for contacting us! We will get back to you soon.",
            3
          );
        } else {
          errorMessage("Error occured while submitting, Please retry", 3);
        }
      
      }
     catch (error) {
      errorMessage("Error occured, please retry",3);
    }
    setBtnLoading(false);
  };
 
  const handlePhoneNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };
 
  return (
    <>
  

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    
            {" "}
            <div className="flex flex-row justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
                <img
                  src={ivurl}
                  alt="iVoyant Logo"
                  className="flex aspect-video h-16 object-contain"
                />
                <h1 className="flex text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Ivoyant</h1>
  
            </div>
    
    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
     Prospective Client / Partner Details
    </p>

    <Form 
     onSubmit={(event) => handleSubmit(event, "contact")}
 method="post"
    encType="multipart/form-data"
      autoComplete="off"
     className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium"> Contact Us</p>

      <div>
        <label  className="sr-only">Company Name</label>

        <div className="relative">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company*"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
           
          />
        

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label className="sr-only">Name</label>

        <div className="relative">
          <input
            type="text"
            id="personname"
            name="personname"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Full Name*"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label className="sr-only">Job Title</label>

        <div className="relative">
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Job Title"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label className="sr-only">Phone Number</label>
        <div className="relative">
          
        <div className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm items-stretch self-stretch flex xl:gap-2.5 gap-1  xl:px-4 px-2 xl:text-sm text-xs py-1 sm:col-span-1 col-span-2">
                <div className="items-stretch border-r-[color:var(--Gray-gray-5,#D9D9D9)] flex basis-[0%] flex-col justify-center xl:pr-3 pr-1 border-r border-solid">
                    <div className="items-stretch flex  gap-1 ">
                      <ReactFlagsSelect
                        selected={selectedCode}
                        onSelect={(code) => setCountryCodeSelected(code)}
                        searchable
                        searchPlaceholder="Search countries"
                      /> 
                      <input
                      type="text"
                      placeholder=""
                      value={selectedCode}
                      required
                      className="hidden"
                      name="country_code"
                    />
                    </div>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    className="outline-none  cursor-pointer overflow-hidden "
                    name="phonenumber"
                  />
        </div>
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="submit"
        name="_action"
        value="contact"
        disabled={btnLoading}
        className="submit-btn block w-full mt-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
       Submit
      </button>

   
    </Form>
  </div>
</div>
    </>
  );
};
export default ContactUs;
