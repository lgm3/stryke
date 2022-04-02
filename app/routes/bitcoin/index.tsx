import { json, useLoaderData } from "remix";

type BitcoinEvent = {
  name: string;
  job: string;
  favoriteColor: string;
};

type LoaderData = {
  bitcoinEvents: Array<BitcoinEvent>;
};

export const loader = async () => {
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
  });
};

export default function Index() {
  const { bitcoinEvents } = useLoaderData() as LoaderData;
  console.log({ bitcoinEvents });
  return (
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
  );
}
