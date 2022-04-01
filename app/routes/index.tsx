import type { MetaFunction } from "remix";
import { Link } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "stryke",
    description: "A more connected financial world",
  };
};

export default function Index() {
  return (
    <main className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center z-0">
      <div className="z-10 mx-auto">
        <h1 className="text-center text-6xl tracking-tight text-white sm:text-8xl lg:text-9xl">
          stryke
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
          Created By Luke Michals
        </p>
        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
          This is just a demo, all data is mocked
        </p>
        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center gap-4">
          <Link
            to="/about"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8"
          >
            About
          </Link>
          <Link
            to="/app"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50 sm:px-8"
          >
            App
          </Link>
        </div>
      </div>

      <div className="bg-circle absolute top-20 right-20 h-96 w-96 rounded-full opacity-25"></div>
      <div className="bg-circle absolute top-80 right-30 h-80 w-80 rounded-full opacity-25"></div>
    </main>
  );
}
