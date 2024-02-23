import { MetaFunction } from "@remix-run/react";
import LeftScreen from "~/components/left-screen";
import Success from "~/components/success";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Crafting Customer Driven Digital Experiences" },
    { name: "Contact Us", content: " Ivoyant Contact" },
  ];
};



export default function Index() {

  return (
<div className="main-container flex flex-row">
    <LeftScreen/>
    <Success />
    </div>
  );
}
