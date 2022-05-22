import { useState } from "react";
import styles from "../../styles/general/component.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
const config = resolveConfig(tailwindConfig);

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart2() {
  const [data, setData] = useState({
    labels: ["Creditors", "Debtors"],
    datasets: [
      {
        responsive: true,
        label: "# of People",
        data: [12, 19],
        backgroundColor: [
          config.theme.colors.purple["400"],
          config.theme.colors.blue["400"],
        ],
        borderColor: [
          config.theme.colors.purple["400"],
          config.theme.colors.blue["400"],
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className={styles.chart_background}>
      <div className={styles.chart_heading}>
        <div className="">
          <div className="">Overview</div>
          <div className="font-bold">BOOK KEEPING STATISTICS</div>
        </div>
      </div>
      <Doughnut data={data} />
    </div>
  );
}
