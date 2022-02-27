import Chart from "react-apexcharts";
import { useState } from "react";
import styles from '../../styles/general/component.module.scss';


export default function Chart2(){

    const [options,setOptions] = useState({
        chart: {
            id: "Line Chart"
        },
        xaxis: {
        categories: ['May', 'June', 'July']
        },
        colors:['#689C7E','#025928','#024C22C3'],
        dataLabels:{
            enabled:false
        },
        labels:['Label 1','Second Label','Third Label']
    })

    const [series,setSeries] = useState(
        [630, 540, 345]
    )

    return(
        <div className={styles.chart_background}>
            <div className={styles.chart_heading}>
                    <div className="">
                        <div className="">Overview</div>
                        <div className="font-bold">BOOK KEEPING STATISTICS</div>
                    </div>
                </div>
                <Chart
              options={options}
              series={series}
              type="pie"
            />
        </div>
    )
}