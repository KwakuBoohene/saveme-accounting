
import { useState } from "react";
import styles from '../../styles/general/component.module.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import config from '../../tailwind.config'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart2(){

    const [data, setData] = useState({
        labels: ['Creditors', 'Debtors'],
        datasets: [
          {
            responsive: true,
            label: '# of People',
            data: [12, 19],
            backgroundColor: [
              config.theme.extend.colors.green.primary,
              config.theme.extend.colors.green.secondary
            ],
            borderColor: [
                config.theme.extend.colors.green.primary,
                config.theme.extend.colors.green.secondary
            ],
            borderWidth: 1,
          },
        ],
      }) 


    return(
        <div className={styles.chart_background}>
            <div className={styles.chart_heading}>
                    <div className="">
                        <div className="">Overview</div>
                        <div className="font-bold">BOOK KEEPING STATISTICS</div>
                    </div>
                </div>
                <Doughnut data={data}  />
        </div>
    )
}