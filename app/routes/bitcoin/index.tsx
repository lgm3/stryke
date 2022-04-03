import { json, useLoaderData } from "remix";
import ApplicationLayout from "~/components/ApplicationLayout";

type BitcoinEvent = {
  name: string;
  job: string;
  favoriteColor: string;
};

type LoaderData = {
  bitcoinEvents: Array<BitcoinEvent>;
  // btcPriceHistory: any;
};

export const loader = async () => {
  const btcPriceHistory = await fetch(
    "https://api.coinstats.app/public/v1/charts?period=1m&coinId=ethereum",
    {
      method: "GET",
      redirect: "follow",
    }
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));

  console.log(btcPriceHistory);

  return json<LoaderData>({
    bitcoinEvents: [
      {
        name: "Cy Ganderton",
        job: "Quality Control Specialist",
        favoriteColor: "Blue",
      },
      {
        name: "Hart Hagerty",
        job: "Desktop Support Technician",
        favoriteColor: "Purple",
      },
      {
        name: "Brice Swyre",
        job: "Tax Accountant",
        favoriteColor: "Red",
      },
    ],
    // btcPriceHistory,
  });
};

export default function Index() {
  const {
    bitcoinEvents,
    // btcPriceHistory
  } = useLoaderData() as LoaderData;
  // console.log({ btcPriceHistory });
  return (
    <ApplicationLayout activeModule="bitcoin">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {bitcoinEvents.map((bitcoinEvent, i) => {
              return (
                <tr key={i} className="hover">
                  <th>{i}</th>
                  <td>{bitcoinEvent.name}</td>
                  <td>{bitcoinEvent.job}</td>
                  <td>{bitcoinEvent.favoriteColor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </ApplicationLayout>
  );
}
