import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import globalstyle from "~/styles/main.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: globalstyle },
];

// export async function loader() {
//   // const navGraphql = await fetchGraphQL(navQuery)
//   // return defer({
//   //   navGraphql : navGraphql
//   // },
//   // {
//   //   "Cache-Control": "public, s-maxage=300",
//   // })
// }
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}