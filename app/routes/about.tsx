import { Link } from "remix";
import ApplicationLayout from "~/components/ApplicationLayout";

function ReadmeText() {
  return (
    <article className="prose">
      <h1>stryke</h1>
      <div className="text-left">
        <p>
          <a className="link link-primary" href="https://strike.me/">
            strike
          </a>{" "}
          is a company focused on connecting the financial world by utilizing
          bitcoin as an international settlement layer.
        </p>
        <p>
          <a className="link link-primary" href="https://stryke.vercel.app">
            stryke
          </a>{" "}
          is web app built by{" "}
          <a className="link link-primary" href="https://github.com/lgm3">
            @lgm3
          </a>{" "}
          to demonstrate what a strike frontend might look like.
        </p>
        <p>All data is mocked and no data is ever saved.</p>
        <p>
          Feedback is appreciated. The best way to leave feedback is to create
          an issue in the github repository.
        </p>
      </div>
    </article>
  );
}

function Circles() {
  return (
    <>
      <div className="bg-circle absolute top-20 right-20 h-96 w-96 rounded-full opacity-25"></div>
      <div className="bg-circle absolute top-80 right-30 h-80 w-80 rounded-full opacity-25"></div>
    </>
  );
}

export default function About() {
  return (
    <ApplicationLayout>
      <main className="relative bg-black sm:flex sm:items-center sm:justify-center z-0">
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <Circles />
              <ReadmeText />
              <div className="mx-auto mt-10 max-w-sm flex max-w-none justify-center gap-4">
                <a
                  href="https://github.com/lgm3/stryke"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 px-8 min-w-[40%]"
                >
                  Github
                </a>
                <Link
                  to="/"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 px-8 min-w-[40%]"
                >
                  App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ApplicationLayout>
  );
}
