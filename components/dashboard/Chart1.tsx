import Chart from "react-apexcharts";
import { useState } from "react";
import styles from '../../styles/general/component.module.scss';


export default function Chart1(){

    const [options,setOptions] = useState({
        chart: {
            id: "Line Chart"
        },
        xaxis: {
        categories: ['May', 'June', 'July', 'August']
        },
       
        colors:['#689C7E'],
        dataLabels:{
            enabled:false
        }
    })

    const stroke = {
        curve:'smooth'
    }

    const [series,setSeries] = useState(
        [
            {
              name: "Amount in Cedis",
              data: [630, 540, 345, 450]
            }
          ]
    )

    return(
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
                        <option value="" className="">This Year</option>
                        <option value="" className="">Past 5 Years</option>
                        </select>
                    </div>
                </div>
                <Chart
                stroke={stroke}
              options={options}
              series={series}
              type="area"
            />
        </div>
    )
}