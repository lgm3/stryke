import { Link } from "remix";

export default function ApplicationLayout({
  activeModule,
  children,
}: {
  activeModule?: "bitcoin" | "api" | "automation";
  children: React.ReactNode;
}) {
  return (
    <div className="drawer flex flex-row">
      <div className="drawer-side h-full bg-base-200 p-4 border-x-2 border-primary w-64">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu bg-base-100 p-2 rounded-box gap-2">
          <li>
            <Link to="/" className={activeModule ? "" : "active"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/bitcoin"
              className={activeModule === "bitcoin" ? "active" : ""}
            >
              <svg
                fill="#d7cccc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 7.582 20 4 16.418 4 12 C 4 7.582 7.582 4 12 4 z M 11.392578 5.1269531 L 11.392578 7.0234375 L 9.3007812 7.0234375 L 9.3007812 16.976562 L 11.392578 16.976562 L 11.392578 18.822266 L 12.691406 18.822266 L 12.691406 16.970703 C 13.648406 16.954703 14.390297 16.714281 14.904297 16.238281 C 15.434297 15.746281 15.699219 15.016781 15.699219 14.050781 C 15.699219 13.809781 15.675 13.57275 15.625 13.34375 C 15.574 13.11375 15.493766 12.899125 15.384766 12.703125 C 15.275766 12.507125 15.131125 12.3365 14.953125 12.1875 C 14.775125 12.0405 14.558687 11.928469 14.304688 11.855469 C 14.523687 11.759469 14.711188 11.638234 14.867188 11.490234 C 15.025187 11.343234 15.155766 11.177141 15.259766 10.994141 C 15.361766 10.811141 15.437375 10.61625 15.484375 10.40625 C 15.533375 10.19625 15.556641 9.9789531 15.556641 9.7519531 C 15.556641 9.2869531 15.484797 8.8830156 15.341797 8.5410156 C 15.196797 8.1990156 14.987844 7.9164531 14.714844 7.6894531 C 14.441844 7.4644531 14.108844 7.2965 13.714844 7.1875 C 13.407844 7.1025 13.059406 7.0600156 12.691406 7.0410156 L 12.691406 5.1269531 L 11.392578 5.1269531 z M 11.310547 8.6972656 L 12.376953 8.6972656 C 12.786953 8.6972656 13.082625 8.7961875 13.265625 8.9921875 C 13.448625 9.1881875 13.539063 9.5118906 13.539062 9.9628906 C 13.539062 10.363891 13.441047 10.668 13.248047 10.875 C 13.054047 11.083 12.757469 11.1875 12.355469 11.1875 L 11.310547 11.1875 L 11.310547 8.6972656 z M 11.310547 12.650391 L 12.664062 12.650391 C 13.038063 12.650391 13.304938 12.773531 13.460938 13.019531 C 13.618937 13.265531 13.697266 13.599438 13.697266 14.023438 C 13.696266 14.209438 13.675766 14.380156 13.634766 14.535156 C 13.593766 14.690156 13.529406 14.826359 13.441406 14.943359 C 13.351406 15.058359 13.238609 15.148891 13.099609 15.212891 C 12.959609 15.275891 12.791703 15.308594 12.595703 15.308594 L 11.310547 15.308594 L 11.310547 12.650391 z" />
              </svg>
              Bitcoin
            </Link>
          </li>
          <li>
            <Link to="/api" className={activeModule === "api" ? "active" : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              API
            </Link>
          </li>
          <li>
            <Link
              to="/automation"
              className={activeModule === "automation" ? "active" : ""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Automation
            </Link>
          </li>
        </ul>
      </div>
      <div className="drawer-content flex flex-row w-full p-4">{children}</div>
    </div>
  );
}
