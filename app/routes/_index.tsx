import type { MetaFunction } from "@remix-run/node";
import ContactUs from "~/components/contactUs";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Crafting Customer Driven Digital Experiences" },
    { name: "Contact Us", content: " Ivoyant Contact" },
  ];
};

export default function Index() {
  return (
    <>
    <ContactUs/>
    </>
  );
}
