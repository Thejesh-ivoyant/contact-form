import type { MetaFunction } from "@remix-run/node";
import ContactUs from "~/components/contactUs";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Crafting Customer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <ContactUs/>
    </>
  );
}
