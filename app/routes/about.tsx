import { Link } from "remix";

function ReadmeText() {
  return (
    <div>
      <h1 className="text-center text-6xl tracking-tight text-white sm:text-8xl lg:text-9xl">
        stryke
      </h1>
      <p className="py-2">
        <a className="link link-primary" href="https://strike.me/">
          strike
        </a>{" "}
        is a company focused on connecting the financial world by utilizing
        bitcoin as an international settlement layer.
      </p>
      <p className="py-2">
        <a className="link link-primary" href="https://stryke.vercel.app">
          stryke
        </a>{" "}
        is web app built by{" "}
        <a className="link link-primary" href="https://github.com/lgm3">
          @lgm3
        </a>{" "}
        to demonstrate what a strike frontend might look like.
      </p>
      <p className="py-2">All data is mocked and no data is ever saved.</p>
      <p className="py-2">
        Feedback is appreciated. The best way to leave feedback is to create an
        issue in the github repository.
      </p>
    </div>
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
    <main className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center z-0">
      {/* <div className="z-10 mx-auto">
        <ReadmeText />
        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center gap-4">
          <a
            href="https://github.com/lgm3/stryke"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8"
          >
            Github
          </a>
          <Link
            to="/"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8"
          >
            App
          </Link>
        </div>
      </div>
      <Circles /> */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Circles />
            <ReadmeText />
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center gap-4">
              <a
                href="https://github.com/lgm3/stryke"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8"
              >
                Github
              </a>
              <Link
                to="/"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8"
              >
                App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
