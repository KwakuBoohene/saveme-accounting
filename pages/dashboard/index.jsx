import Layout from "../../components/general/Layout";
import Image from "next/image";
import Card from "../../components/general/Card";
import Chart1 from "../../components/dashboard/Chart1";
import Chart2 from "../../components/dashboard/Chart2";

export default function Home() {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-5">
        <Card
          name="ASSETS"
          amount="429,000.00"
          upwards={true}
          percentage="30"
          link="/reports/all-assets"
          bar_color="bg-blue-400"
        />
        <Card
          name="EXPENSES"
          amount="400.00"
          upwards={false}
          percentage="20"
          link="/reports/all-expenses"
          bar_color="bg-purple-400"
        />
        <Card
          name="INCOME"
          amount="1,400.00"
          upwards={true}
          percentage="30"
          link="/reports/all-income"
          bar_color="bg-indigo-400"
        />
        <Card
          name="INCOME"
          amount="1,400.00"
          upwards={true}
          percentage="30"
          link="/reports/all-income"
        />
      </div>
      <div className="grid grid-cols-12 gap-4  text-xs my-6 pb-5">
        <div className="md:col-span-7 col-span-12">
          <Chart1 />
        </div>

        <div className="md:col-span-5 col-span-12">
          <Chart2 />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = Layout;
