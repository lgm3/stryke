import ApplicationLayout from "~/components/ApplicationLayout";

function DataBar() {
  return (
    <div className="stats shadow stats-vertical lg:stats-horizontal">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 strokeCurrent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Sat Balance</div>
        <div className="stat-value text-primary">25.6M</div>
        <div className="stat-desc">+21% over the last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="stat-title">USD Balance</div>
        <div className="stat-value text-secondary">1.3K</div>
        <div className="stat-desc">-76% over the last month</div>
      </div>

      <div className="stats bg-primary text-primary-content mt-8">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">deposit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <ApplicationLayout>
      <DataBar />
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-primary w-full max-w-xs mt-8"
      ></input>
    </ApplicationLayout>
  );
}
