import { json, useLoaderData } from "remix";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ApplicationLayout from "~/components/ApplicationLayout";

type BitcoinEvent = {
  name: string;
  job: string;
  favoriteColor: string;
};

type BitcoinDataPoints = Array<Number>;
interface ApiResponseJson {
  chart: Array<BitcoinDataPoints>;
}
type MappedApiResponse = Array<{
  formattedDate: String;
  formattedPrice: String;
  epochTime: Number;
  price: Number;
}>;

var currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

currencyFormatter.format(2500);

function reMapApiData({ chart }: ApiResponseJson): MappedApiResponse {
  return chart.map(([epochTime, price]) => ({
    formattedDate: new Date(1000 * Number(epochTime)).toLocaleDateString(
      "en-US"
    ),
    formattedPrice: currencyFormatter.format(Number(price)),
    epochTime,
    price,
  }));
}

type LoaderData = {
  bitcoinEvents: Array<BitcoinEvent>;
  btcPriceHistory: MappedApiResponse;
};

export const loader = async () => {
  const btcPriceHistory = await fetch(
    "https://api.coinstats.app/public/v1/charts?period=1m&coinId=bitcoin",
    {
      method: "GET",
      redirect: "follow",
    }
  )
    .then((response) => response.json())
    .then((result: ApiResponseJson) => reMapApiData(result))
    .catch((error) => {
      console.log("error", error);
      return [];
    });

  /**
   * Here's what the [coinstats API](https://documenter.getpostman.com/view/5734027/RzZ6Hzr3) returns:
   * {
   *    "chart":[
   *     [
   *        1646470500, // epoch time
   *        39110.1002, // price
   *        1,          // not sure
   *        14.7502     // not sure
   *     ],
   *     ...
   * }
   */

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
    btcPriceHistory,
  });
};

type BitcoinChartProps = {
  data: MappedApiResponse;
};

function BitcoinChart({ data }: BitcoinChartProps) {
  return (
    <div className="w-96 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="formattedDate" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

interface BitcoinEventTableProps {
  events: Array<BitcoinEvent>;
}

function BitcoinEventTable({ events }: BitcoinEventTableProps) {
  return (
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
        {events.map((event, i) => {
          return (
            <tr key={i} className="hover">
              <th>{i}</th>
              <td>{event.name}</td>
              <td>{event.job}</td>
              <td>{event.favoriteColor}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function Index() {
  const { bitcoinEvents, btcPriceHistory } = useLoaderData() as LoaderData;

  return (
    <ApplicationLayout activeModule="bitcoin">
      <div className="w-full flex flex-col items-center">
        <BitcoinChart data={btcPriceHistory} />
        <BitcoinEventTable events={bitcoinEvents} />
      </div>
    </ApplicationLayout>
  );
}
