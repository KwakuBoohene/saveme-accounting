import Card from "../../components/general/Card";
import Layout from "../../components/general/Layout";
import Chart1 from "../../components/assets/Chart1";
import Table from "../../components/general/Table";
import Link from "next/link";

const assets = [
  {
    id: 1,
    name: "Microsoft Stock",
    type: "Investment",
    amount: 150,
    currency: "USD ",
  },
  {
    id: 2,
    name: "Facebook Stock",
    type: "Cash Equivalent",
    amount: 56,
    currency: "USD ",
  },
  {
    id: 3,
    name: "Macbook Pro 16",
    type: "Inventory",
    amount: 7840,
    currency: "GHS",
  },
  {
    id: 4,
    name: "Ladder Stock",
    type: "Cash",
    amount: 560,
    currency: "GHS ",
  },
];

export default function Savings() {
  return (
    <div className="container">
      <div className="w-full px-24">
        <div className="between px-24">
          <div className="col-span-4">
            <Card
              name="TOTAL AMOUNT IN ASSETS"
              amount="429,000.00"
              upwards={true}
              percentage="30"
              link="/reports/all-assets"
            />

            <div className="my-3">
              <Link href="/assets/add" passHref={true}>
                <button
                  className="w-64
                            bg-green-primary text-white
                            py-3 rounded-lg hover:bg-green-secondary
                            transition-all duration-300"
                >
                  Add Asset
                </button>
              </Link>
            </div>
          </div>

          <div className="col-span-8">
            <Chart1 />
          </div>
        </div>

        <div className="my-5">
          <Table data={assets} />
        </div>
      </div>
    </div>
  );
}

Savings.getLayout = Layout;
