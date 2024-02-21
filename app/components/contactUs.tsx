import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useFetcher } from "@remix-run/react";

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

import { Select } from "antd";
import { action } from "~/routes/_index";

const ContactUs = () => {
  const Countries = countryTelephoneData.allCountries?.map((item:any) => ({
    value: item.dialCode,
    label: `+(${item.dialCode})`,
  }));
  const [countryCode, setCountryCode] = useState('91');
  const [countryName, setCountryName] = useState('');

  
  const [phoneNumber, setPhoneNumber] = useState("");
 
  const handlePhoneNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };

 

  const handleCountryCodeChange = (value:string) => {
    const selectedCountryCode = value;
    setCountryCode(selectedCountryCode);
   
    console.warn("comyry cod4",selectedCountryCode);
  };
  const fetcher = useFetcher();
  const isCreatingNewPost = fetcher.state === "submitting";
  
  const actionData= useActionData<typeof action>();
 

  const emailError= actionData?.errors?.email
  const nameError= actionData?.errors?.name
  const loading = actionData?.errors?.loading 
  useEffect(()=>{
   
    if(loading==false)
    {
      success("Thanks for showing interest in us", 3);
    }

  },[loading])
 
  useEffect(()=>{
    console.log(
    "fetcher state (is submidfat)"+ isCreatingNewPost
  )
  },[isCreatingNewPost])



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
                    {/* <h1 className="flex text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Ivoyant</h1>
       */}
                </div>
        
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
         Prospective Client / Partner Details
        </p>
    
        <fetcher.Form 
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
              <CompanyIcon />
    
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
             <NameIcon/>
    
              </span>
            </div>
          </div>
          {emailError &&(
          <span className="text-brand-red text-[0.6rem]  ">{emailError}</span>
          )}
    
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
              <TitleIcon/>
    
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
              <EmailIcon/>
              </span>
            </div>
          </div>
    
          <div>
            <label className="sr-only">Phone Number</label>
            <div className="relative">
              
            <div className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm items-stretch self-stretch flex xl:gap-2.5 gap-1  xl:px-4 px-2 xl:text-sm text-xs py-1 sm:col-span-1 col-span-2">
                    <div className="items-stretch border-r-[color:var(--Gray-gray-5,#D9D9D9)] flex basis-[0%] flex-col justify-center xl:pr-3 pr-1 border-r border-solid">
                        <div className="country-code items-stretch flex  gap-1 ">
                        {/* <select name="country_code" id="countryCode" value={countryCode} onChange={(e) => {
                handleCountryCodeChange(e.target.value);
              }}>
                      {countryTelephoneData.allCountries.map((country:any) => (
                        <option key={country.iso2} value={country.dialCode}>
                          {`${country.name} (+${country.dialCode})`}
                        </option>
                          ))}
                        </select> */}

                        <Select
                        
                          className="w-full rounded-none text-black w-[6rem]"
                          // suffixIcon={countryCode == null ? <DropDownIcon /> : null}
                          onChange={handleCountryCodeChange}
                        
                          value={countryCode}
                          options={Countries}
                         />

                          <input
                          type="text"
  
                          value={countryCode}         
                          required
                          className="hidden"
                          name="country_code"
                        />
                        
                          {/* <input
                          type="text"
                          placeholder=""
                          value={selectedCode}              className="size-4 text-gray-400"
    
                          required
                          className="hidden"
                          name="country_code"
                        /> */}
    
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
           <PhoneIcon/>
              </span>
            </div>
          </div>
    
          <button
      type="submit"
      name="_action"
      value="contact"
    
      disabled={isCreatingNewPost}
      className="submit-btn block w-full mt-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
    >
      {isCreatingNewPost ? 'Loading...' : 'Submit'}
    </button>
       
        </fetcher.Form>
      </div>
    </div>
        </>
  );
};
export default ContactUs;
