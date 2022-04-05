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
   * {
   *    "chart":[
   *     [
   *        1646470500, // epoch time
   *        39110.1002, // price
   *        1,          // not sure
   *        14.7502     // not sure
   *     ],
   *     [...],
   *     [...],
   *     [...],
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
  // {
  //   epochTime: 1649148900,
  //   formattedDate: '4/5/2022',
  //   price: 46616.1844
  //   formattedPrice: '$46,616.18',
  // }

  // const data = [
  //   {
  //     formattedDate: "4/5/2022",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     formattedDate: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  return (
    <div className="w-48 h-48">
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

export default function Index() {
  const { bitcoinEvents, btcPriceHistory } = useLoaderData() as LoaderData;
  console.log({ btcPriceHistory });
  return (
    <ApplicationLayout activeModule="bitcoin">
      <div className="overflow-x-auto w-full">
        <BitcoinChart data={btcPriceHistory} />
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
