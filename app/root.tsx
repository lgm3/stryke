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

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
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
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
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
  return (
    <header>
      <div>
        <Link to="/" title="Remix">
          <StrykeLogo />
        </Link>
        <nav aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://remix.run/docs">Remix Docs</a>
            </li>
            <li>
              <a href="https://github.com/remix-run/remix">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; lgm</p>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      {/* <Header /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
