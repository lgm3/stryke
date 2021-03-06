import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { LinksFunction } from "remix";

import appStylesUrl from "~/styles/app.css";

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: appStylesUrl }];
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <SiteLayout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </SiteLayout>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <SiteLayout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </SiteLayout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function StrykeLogo() {
  return <span>stryke</span>;
}

function Header() {
  return <header>Header</header>;
}

function HamburgerMenu() {
  return (
    <div className="flex-none lg:hidden">
      <label htmlFor="sidebar" className="btn btn-circle swap swap-rotate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 strokeCurrent"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
  );
}

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <div className="drawer">
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-200 border-2 border-primary">
            <div className="flex-1">
              <HamburgerMenu />
              <button className="btn btn-ghost normal-case">
                <Link to="/">stryke</Link>
              </button>
            </div>
            <div className="flex-none block">
              <button className="btn btn-ghost normal-case">
                <Link to="about">About</Link>
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Document>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </Document>
  );
}
