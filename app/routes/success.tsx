import { MetaFunction } from "@remix-run/react";
import LeftSection from "~/components/left-section";
import Success from "~/components/success";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Crafting Customer Driven Digital Experiences" },
    { name: "Contact Us", content: " Ivoyant Contact" },
  ];
};



export default function Index() {

  return (

  
  <div className="flex-container main-container">
     <div className="left-container left-section"><LeftSection/></div>
     <div className="right-container"><Success/></div>
   </div>
  );
}
