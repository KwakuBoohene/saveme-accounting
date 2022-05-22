import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import styles from "../../styles/general/component.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const config = resolveConfig(tailwindConfig);

export default function Chart1() {
  const { faker } = require("@faker-js/faker");

  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  });

  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]);

  const stroke = {
    curve: "smooth",
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Value of Asset in Cedis",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: config.theme.colors.blue["500"],
        backgroundColor: config.theme.colors.green.primary,
      },
    ],
  };

  return (
    <div className={styles.chart_background}>
      <div className={styles.chart_heading}>
        <div className="">
          <div className="">Overview</div>
          <div className="font-bold">ASSETS GRAPH</div>
        </div>

        <div className="">
          <select name="" id="" className={styles.chart_select}>
            <option value="month">This Month</option>
            <option value="">This Week</option>
            <option value="" className="">
              This Year
            </option>
            <option value="" className="">
              Past 5 Years
            </option>
          </select>
        </div>
      </div>

      <Line options={options} data={data} />
    </div>
  );
}
